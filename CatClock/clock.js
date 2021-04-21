let morning = 7;
let noon = 12;
let lunchtime = 12;
let evening = 18;

function showTime() {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var session = "PM";
  
  if (h == 0) {
    h = 12;
  }
  if (h < 12) {
    session = "AM";
    document.getElementById("showGreeting") = "Good Morning!";
  }
  if (h > 12) {
    h = h - 12;
    
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var timeIs = h + ":" + m + ":" + s + ":" + session;
  document.getElementById("clock").innerText = timeIs;
  document.getElementById("clock").textContent = timeIs;
  
  setTimeout(showTime, 1000);
 
}
showTime();

// make the clock increment and change messages
var updateClock = function() {
    var time = new Date().getHours();
    var messageText;
    var greeting = document.getElementById("greeting");

    if (time == morning) {
        messageText = "Good Morning! What's for breakfast?";
        document.body.style.backgroundColor = "yellow";
    }

    else if (time == noon) {
        messageText = "Good Afternoon! What's for lunch?";
        document.body.style.backgroundColor = "orange";
    }

    else if (time == evening) {
        messageText == "Good Evening! What's for dinner?";
        document.body.style.backgroundColor = "dark orange";
    }

    else {
        messageText = "How is your day going?";
        document.body.style.backgroundColor = "#FFF59D";
    }

    console.log(messageText);
    greeting.innerText = messageText;

    showCurrentTime(updateClock, 1000);
};
updateClock();
