var htmlTimer = document.getElementById("timer");

function createTimer(){
  let alreadyCalled = false;

  var intervalId;
  return () => {
    if(!alreadyCalled){
      let startTime = new Date();

      intervalId = setInterval(function intervalUpdate(){
        let currentTime = new Date();
        let interval = (currentTime-startTime);

        let hundrethSeconds = String(Math.floor(interval/10)%100).padStart(2, "0");
        let seconds = Math.floor(interval/1000)%60;
        let minutes = Math.floor(interval/60000);
        let hours = Math.floor(interval/3600000);

        htmlTimer.innerHTML = `${(hours>0) ? hours : ""}${(hours>0) ? ":" : ""}${(hours>0)&&(minutes>0) ? String(minutes%60).padStart(2, "0") : ((minutes>0) ? minutes%60 : "")}${(minutes>0) ? ":" : ""}${(minutes>0) ? String(seconds%60).padStart(2, "0") : seconds}.${hundrethSeconds}`;
      }, 10);

      alreadyCalled = true;
    }
    return () => {
      clearInterval(intervalId);
      htmlTimer.style.color = "#92e59e";
    }
  }
}

var timer = createTimer();