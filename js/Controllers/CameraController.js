class CameraController{
    constructor(){
        this._video = document.querySelector("video")
        this._stream;
        navigator.mediaDevices.getUserMedia({
            video:true
        }).then(stream=>{
            this._stream = stream;
            this._video.srcObject = stream;
            this._video.play()
        })
    }
    stop(){
        this._stream.getTracks().forEach(track=>{
            track.stop();
        })
    }
}