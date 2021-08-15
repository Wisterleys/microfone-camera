class MicrophoneController extends ClassEvent{
    constructor(){
        super()
        this._stream;
        navigator.mediaDevices.getUserMedia({
            audio:true
        }).then(stream=>{
            this._stream = stream;
            let audio = new Audio();
            audio.srcObject = stream;
            audio.play()
        })
    }
    stop(){
        this._stream.getTracks().forEach(track=>{
            track.stop();
        })
    }
}