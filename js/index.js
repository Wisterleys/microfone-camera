
let mic;
let video;
document.querySelector("#btn-mic").addEventListener("click",e=>{
    mic = new MicrophoneController();
})
document.querySelector("#btn-mic-stop").addEventListener("click",e=>{
    mic.stop()
})

document.querySelector("#btn-video").addEventListener("click",e=>{
    video = new CameraController();
})
document.querySelector("#btn-video-stop").addEventListener("click",e=>{
    video.stop()
})