class CameraController extends ClassEvent{
    constructor(){
        super()
        this._mimeType="video/webm"
        this._available=false;
        this._video = document.querySelector("video")
        this._stream;
        navigator.mediaDevices.getUserMedia({
            video:true,
            audio: true
        }).then(stream=>{
            this._available=true;
            this._stream = stream;
            this._video.srcObject = stream;
            this._video.play()
            this.trigger("ready",this._stream)
        }).catch(err=>{
            console.log(err)
        })
    }
    isAvailable(){return this._available}
    stop(){
        this._stream.getTracks().forEach(track=>{
            track.stop();
        })
    }
    startRecorder(){
        if(this.isAvailable()){
            this._media_recorder = new MediaRecorder(this._stream,{type:this._mimeType})
            this._recoder_chunks =[]
            this._media_recorder.addEventListener("dataavailable",chunk=>{
                if(chunk.data.size>0){
                    this._recoder_chunks.push(chunk.data)
                }
            })
            this._media_recorder.addEventListener("stop",chunk=>{
                const blob = new Blob(this._recoder_chunks,{type:this._mimeType})
                const filename=`rec${Date.now()}.${this._mimeType.split("/")[1]}`;
                const file = new File([blob],filename,{type:this._mimeType,lastModified: Date.now})
                const read = new FileReader()
                read.onload =e =>{
                    let video = document.createElement("video")
                    video.src=read.result
                    video.controls=true
                    video.style =`
                    position: absolute;
                    width:100%;
                    z-index: 1000;
                    top:0px;
                    left:0px;
                    `
                    document.body.appendChild(video)
                }
                read.readAsDataURL(file)
            })
            this._media_recorder.start()
        }
    }
    stopRecorder(){
        if(this.isAvailable()){
            this._media_recorder.stop()
            this.stop()
        }
    }
}