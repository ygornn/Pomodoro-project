const playBtn = document.querySelector("#play");
const timer_display = document.querySelector("#timer");

//console.log(time);
function play(){
    const time = document.querySelector('input[name = "time_val"]').value.split(":");
    let seconds = 60 * parseInt(time[0]) + parseInt(time[1]);
    const timer = setInterval(() =>{
        let minutes = Math.floor(seconds / 60);
       // timer_display.classList.add('text-[15vh]');
        timer_display.innerText = minutes + ":" + seconds%60;
        if(seconds%60 < 10){
            timer_display.innerText = minutes + ":0" + seconds%60;
        }
        seconds--;
    }, 1000)
    playBtn.disabled = true;
}

playBtn.addEventListener("click", play);