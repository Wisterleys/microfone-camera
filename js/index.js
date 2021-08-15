
let mic;
let video;
document.querySelector("#btn-mic").addEventListener("click",e=>{
    mic = new MicrophoneController();
    mic.on("play",e=>{
        console.log(e)
    })
})
document.querySelector("#btn-mic-stop").addEventListener("click",e=>{
    mic.stop()
})

document.querySelector("#btn-video").addEventListener("click",e=>{
    video = new CameraController();
    video.on("ready",e=>{
        video.startRecorder()
    })
})
document.querySelector("#btn-video-stop").addEventListener("click",e=>{
    video.stopRecorder()
})