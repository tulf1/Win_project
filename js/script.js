//العد التنازلي
var countDownDate = new Date("Dec 31, 2023 12:24:00").getTime();

var x = setInterval(function() {
    
  var counter = document.querySelector("#countdown");
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  counter.innerHTML = days + "يوم " + hours + " ساعة "
  + minutes + " دقيقة " + seconds + " ثانية";

  if (distance < 0) {
    clearInterval(x);
    counter.innerHTML = "لقد وصلت متأخراً";
    winner.style.display = 'block';
    disableForm();
  }
}, 1000);

//form disable 
function disableForm() {
    var form = document.getElementById("myForm");
    var elements = form.elements;
    for (var i = 0; i < elements.length; i++) {
        elements[i].disabled = true;
    }
    // Optionally add 'disabled' class to form for styling
    form.classList.add("disabled");
}

// Check countdown on page load
if (updateCountdown() < 0) {
    disableForm();
}