PomodoroTime = document.getElementById("PomodoroTime");
BreakTime = document.getElementById("BreakTime");
CheckerState = document.getElementById("StateCheck");
ContinState = document.getElementById("ContinCheck");
SoundState = document.getElementById("SoundCheck");
TimeFew = document.getElementById("Fewminsnd");
Refreshbtn = document.getElementById("Refreshbtn");
NotificationCheck = document.getElementById("CheckNotification");
TimerVisualCheck = document.getElementById("TimerVisualCheck");

const FinishSfx = document.querySelector("#Finishsfx"); 
//var starttime = PomodoroTime.value; //Süre
var time = PomodoroTime.value * 60;
var timeOn = false;
var conttime = false;
var BreakMode = false;
var duration = 0;
var SoundGap = 0;
var SendNotification = false;
var Playsound = true;

startbtn = document.getElementById("timer-starter");
timernumb = document.getElementById("timernumb");

timernumb.innerHTML = PomodoroTime.value + ':' + "00"; 
SoundState.checked = true;  //Ayar menüsündeki "Süre bittiğinde öt" seçeneğini 'checked' olarak işaretleme


//Ask Notification
//console.log(Notification.permission);

function ShowNotification(){
    const notification = new Notification("Süre Doldu!", {
        body: PomodoroTime.value + " dakikalık zamanlayıcınız bitti!"
        //icon: ""
    });
}

PomodoroTime.addEventListener('input', () => {
    timeOn = false;
    startbtn.innerHTML = "Start";
    time = PomodoroTime.value * 60;
    SoundGap = TimeFew.value * 60;

    if(TimerVisualCheck.checked && PomodoroTime.value >= 60){//Saat mi Dakika mı gösterimi olduğunu ayarlama
        if(Math.floor(PomodoroTime.value % 60) < 10){
            timernumb.innerHTML = Math.floor(PomodoroTime.value/60) + ":" + "0" + Math.floor(PomodoroTime.value % 60) + ':' + "00";
        }else
          timernumb.innerHTML = Math.floor(PomodoroTime.value/60) + ":" +Math.floor(PomodoroTime.value % 60) + ':' + "00";
    }
    else
     timernumb.innerHTML = PomodoroTime.value + ':' + "00";



    if(CheckerState.checked){
        CheckerState.checked = false;
    }
    if(PomodoroTime.value > 999){
        PomodoroTime.value = 120;
        time = PomodoroTime.value * 60;
        timernumb.innerHTML = PomodoroTime.value + ':' + "00";
    }
    if(PomodoroTime.value < 10 && PomodoroTime.value > 0){
        time = PomodoroTime.value * 60;
        timernumb.innerHTML = '0' + PomodoroTime.value + ':' + "00";
    }
    if(PomodoroTime.value == 0){
        time = PomodoroTime.value * 60;
        timernumb.innerHTML = '0' + '0' + ':' + "00";
    }

}); 


function setTimer(){
  if(CheckerState.checked == false)//Eğer zamanlayıcı modundaysa:
  {
    if(time < 0){
        timeOn = false;
        SoundGap = TimeFew.value * 60;
        startbtn.innerHTML = "Start";
        if(duration == PomodoroTime.value * 60 + 1){//!!!!!!!!!!
            if(Playsound){FinishSfx.play();}
            duration = 0;
            if(SendNotification){
                ShowNotification();
            }
        }
        clearInterval(setTimer);
        return false;
    }
    else if(time <= 0 && conttime){
        time = BreakTime.value * 60;
        timernumb.innerHTML = minute + ':' + second;
        if(Playsound){FinishSfx.play();} 
        if(BreakMode){
            time = PomodoroTime.value * 60;
            BreakMode = false;
        }else{
            time = BreakTime.value * 60;
            BreakMode = true;
        }

    }
    if(timeOn == true){
        hour = Math.floor(time / 3600);
        minute = Math.floor(time / 60);
        second = Math.floor(time % 60);

        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;

        time--;
        duration++;
        SoundGap--;

        if(hour > 0 && TimerVisualCheck.checked){//Eğer saat gösterme açıksa
            minute = Math.floor((time % 3600) / 60);    
            minute = minute < 10 ? '0' + minute : minute;
            timernumb.innerHTML = hour + ":" + minute + ":" + second; 
            document.querySelector('title').textContent = "Study Corner | "+ hour + ":" + minute + ':' + second;

        }
        if(hour == 0 || !TimerVisualCheck.checked){ // Eğer dakika gösterme açıksa YA DA saat 0 a eşitse
            timernumb.innerHTML = minute + ':' + second;
            document.querySelector('title').textContent = "Study Corner | "+ minute + ':' + second;
        }
    }
  }
  else if(CheckerState.checked && timeOn){//Eğer kronometre modundaysa:
    hour = Math.floor(time / 3600);
    minute = Math.floor(time / 60);
    second = Math.floor(time % 60);

    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    time++;
    SoundGap--;
    if(hour > 0 && TimerVisualCheck.checked){
        minute = Math.floor((time % 3600) / 60);    
        minute = minute < 10 ? '0' + minute : minute;
        timernumb.innerHTML = hour + ":" + minute + ":" + second; 
        document.querySelector('title').textContent = "Study Corner | "+ hour + ":" + minute + ':' + second;
    }
    if(hour == 0 || !TimerVisualCheck.checked){
        timernumb.innerHTML = minute + ':' + second;
        document.querySelector('title').textContent = "Study Corner | "+ minute + ':' + second;
    }
  }
  if(SoundGap == 0 && timeOn){
    if(Playsound){FinishSfx.play();}
    SoundGap = TimeFew.value * 60;
  }
}
setInterval(setTimer, 1000);

CheckerState.addEventListener('click', () => {
    if(CheckerState.checked){
        timeOn = false;
        SoundGap = TimeFew.value * 60;
        startbtn.innerHTML = "Start";
        time = 0;
        timernumb.innerHTML = "00" + ':' + "00";
        document.querySelector('title').textContent = "Study Corner | "+ "00" + ':' + "00";
    }
    else if (CheckerState.checked == false){
        timeOn = false;
        SoundGap = TimeFew.value * 60;
        startbtn.innerHTML = "Start";
        time = PomodoroTime.value * 60;
        minuteshow = Math.floor(time / 60);
        secondshow = Math.floor(time % 60);
        secondshow = secondshow < 10 ? '0' + secondshow : secondshow;
        minuteshow = minuteshow < 10 ? '0' + minuteshow : minuteshow;
        timernumb.innerHTML = minuteshow + ':' + secondshow;
        document.querySelector('title').textContent = "Study Corner | "+ PomodoroTime.value + ':' + "00";
    }
});
ContinState.addEventListener('click', () => {
    if(ContinState.checked && CheckerState.checked == false){
        conttime = true;
    }
    if(ContinState.checked == false){
        conttime = false;
    }
});
SoundState.addEventListener('click', () => {
    if(SoundState.checked){
        Playsound = true;
    }
    if(SoundState.checked == false){
        Playsound = false;
    }
});
startbtn.addEventListener('click', () => {
   if(timeOn == true){
    timeOn = false;
    startbtn.innerHTML = "Start";
   }
   else if(timeOn == false){
    timeOn = true;
    startbtn.innerHTML = "Stop";
   }
}); 
Refreshbtn.addEventListener('click', () => {
    if(CheckerState.checked){
        timeOn = false;
        time = 0;
        timernumb.innerHTML = "00" + ':' + "00";
        startbtn.innerHTML = "Start";     
        document.querySelector('title').textContent = "Study Corner | "+ "00" + ':' + "00";
    }
    if(CheckerState.checked == false){
        timeOn = false;
        time = PomodoroTime.value * 60;
        startbtn.innerHTML = "Start";        
        if(TimerVisualCheck.checked){
            minute = Math.floor(time / 60);
            second = Math.floor(time % 60);
        
            minute = minute < 10 ? '0' + minute : minute;
            second = second < 10 ? '0' + second : second;
    
            if(hour > 0){
                minute = Math.floor((time % 3600) / 60);    
                minute = minute < 10 ? '0' + minute : minute;
                timernumb.innerHTML = hour + ":" + minute + ":" + second; 
                document.querySelector('title').textContent = "Study Corner | "+ hour + ":" + minute + ':' + second;
            }else{
                timernumb.innerHTML = minute + ':' + second;
                document.querySelector('title').textContent = "Study Corner | "+ minute + ':' + second;
            }
        }
        else if(!TimerVisualCheck.checked){
            timernumb.innerHTML = time / 60 + ':' + "00";
            document.querySelector('title').textContent = "Study Corner | "+ PomodoroTime.value + ':' + "00";
        }
    }                            
});


TimerVisualCheck.addEventListener('click', () => {

    if(TimerVisualCheck.checked){
        hour = Math.floor(time / 3600);
        minute = Math.floor(time / 60);
        second = Math.floor(time % 60);
    
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;

        if(hour > 0){
            minute = Math.floor((time % 3600) / 60);    
            minute = minute < 10 ? '0' + minute : minute;
            timernumb.innerHTML = hour + ":" + minute + ":" + second; 
            document.querySelector('title').textContent = "Study Corner | "+ hour + ":" + minute + ':' + second;
        }else{
            timernumb.innerHTML = minute + ':' + second;
            document.querySelector('title').textContent = "Study Corner | "+ minute + ':' + second;
        }        
    }
    else{
        minute = Math.floor(time / 60);
        minute = minute < 10 ? '0' + minute : minute;
        timernumb.innerHTML = minute + ':' + second;

    }
});



TimeFew.addEventListener('input', () => {
    SoundGap = TimeFew.value * 60;
});

NotificationCheck.addEventListener('click', () => {
    if(NotificationCheck.checked){
        SendNotification = true;
        Notification.requestPermission().then(perm => {});
    }
    else{
        SendNotification = false;
    }
});