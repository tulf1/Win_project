var ctx = document.getElementById('circularLoader').getContext('2d');
var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height; 
var diff;
var sim;

function progressSim(){
	diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
	ctx.clearRect(0, 0, cw, ch);
	ctx.lineWidth = 17;
	ctx.fillStyle = '#0d6efd';
	ctx.strokeStyle = "#0d6efd";
	ctx.textAlign = "center";
	ctx.font="28px monospace";
	ctx.fillText(al + '%', cw * .52, ch * .5 + 5, cw + 12);
	ctx.beginPath();
	ctx.arc(100, 100, 75, start, diff / 10 + start, false);
	ctx.stroke();
	if(al >= 100){
		clearTimeout(sim);
	    // Add scripting here that will run when progress completes
        myModal.show();
        loading.style.display = 'none';
	}
	al++;
}


// اختيار الرابح

const winner = document.querySelector("#winner");
const loading = document.querySelector(".loading-con");

var myModal = new bootstrap.Modal(document.getElementById('modal'), {
    KeyboardEvent: false
});

winner.addEventListener('click', function(){
    
    loading.style.display = 'block';
    sim = setInterval(progressSim, 20);
   
});
//run Confetti
var myModal = new bootstrap.Modal(document.getElementById('modal'));

document.getElementById('modal').addEventListener('shown.bs.modal', function (event) {
  startConfetti();  
});

document.getElementById('modal').addEventListener('hidden.bs.modal', function (event) {
  stopConfetti(); 
});