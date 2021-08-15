
let mic;
document.querySelector("#btn-mic").addEventListener("click",e=>{
    mic = new MicrophoneController();
})
document.querySelector("#btn-mic-stop").addEventListener("click",e=>{
    mic.stop()
})