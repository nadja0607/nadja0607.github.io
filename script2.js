/*initialize animate on scroll library*/
AOS.init(); 

/*SOUND EFFECTS START*/
/*code pattern repeats for each audio input*/


/*Panel 1 Text Box: Audio Tutorial*/
/*variables to store the audio and clickable object*/
var morning = new Audio("morning.mp3");
let textbox=document.getElementById("text_panel1");
/*counter to keep track of play pause and end for audio*/
var morningcounter=0;

textbox.onclick = function() {
	/*if condition:if counter 0 then starts playing*/
	if (morningcounter==0){
		morning.play();
		/*++ sets up condition for pause on next click*/
		morningcounter++;
		/*checks if audio has ended 
		so next click doesn't pause but returns to play condition i.e counter=0*/
		morning.addEventListener("ended", function() {
			this.currentTime = 0;
			morningcounter=0;
		});
	}
	/*if condition: if counter 1 then pauses audio*/
	else if(morningcounter==1){
		morning.pause();
		morningcounter=0;
	}
}


/*Panel 2: Alarm Clock*/
var alarm = new Audio("alarm.mp3");
let clock=document.getElementById("clock");
var alarmcounter=0;

clock.onclick = function() {
	if (alarmcounter==0){
		alarm.play();
		alarmcounter++;
		alarm.addEventListener("ended", function() {
			this.currentTime = 0;
			alarmcounter=0;
		});
	}
	else if(alarmcounter==1){
		alarm.pause();
		alarmcounter=0;
	}
}


/*Panel 3: Toothbrush Sound*/
var brush = new Audio("brushingTeeth.mp3");
let toothbrush=document.getElementById("toothbrush");
var brushcounter=0;

toothbrush.onclick = function() {
	if (brushcounter==0){
		brush.play();
		brushcounter++;
		brush.addEventListener("ended", function() {
			this.currentTime = 0;
			brushcounter=0;
		});
	}
	else if(brushcounter==1){
		brush.pause();
		brushcounter=0;
	}
}


/*Panel 5: Zoom Meeting Is Being Recorded Message*/
var zoomrecord = new Audio("zoomSound.mp3");
let record=document.getElementById("record");
var recordcounter=0;

record.onclick = function() {
	if (recordcounter==0){
		zoomrecord.play();
		recordcounter++;
		zoomrecord.addEventListener("ended", function() {
			this.currentTime = 0;
			recordcounter=0;
		});
	}
	else if(recordcounter==1){
		zoomrecord.pause();
		recordcounter=0;
	}
}


/*Panel 6: Music Playing in Headphones*/
var fireworks = new Audio("Fireworks.mp3");
/*public domain music by Alexander Nakarada, 
downloaded from https://freepd.com/electronic.php*/
let music=document.getElementById("music");
var musiccounter=0;

music.onclick = function() {
	if (musiccounter==0){
		fireworks.play();
		musiccounter++;
		fireworks.addEventListener("ended", function() {
			this.currentTime = 0;
			musiccounter=0;
		});
	}
	else if(musiccounter==1){
		fireworks.pause();
		musiccounter=0;
	}
}


/*Panel 7: Zoom Meeting Is Being Recorded Message*/
var zoomrecord1 = new Audio("zoomSound.mp3");
let record1=document.getElementById("record1");
var record1counter=0;

record1.onclick = function() {
	if (record1counter==0){
		zoomrecord1.play();
		record1counter++;
		zoomrecord1.addEventListener("ended", function() {
			this.currentTime = 0;
			record1counter=0;
		});
	}
	else if(record1counter==1){
		zoomrecord1.pause();
		record1counter=0;
	}
}


/*Panel 9: Background Noise in D2 at Dinner*/
var d2 = new Audio("d2.mp3");
let noise=document.getElementById("noise");
var noisecounter=0;

noise.onclick = function() {
	if (noisecounter==0){
		d2.play();
		noisecounter++;
		d2.addEventListener("ended", function() {
			this.currentTime = 0;
			noisecounter=0;
		});
	}

	else if(noisecounter==1){
		d2.pause();
		noisecounter=0;
	}
}


/*Panel 10: Shower Water Running*/
var shower = new Audio("shower.mp3");
let showersound=document.getElementById("showersound");
var showercounter=0;

showersound.onclick = function() {
	if (showercounter==0){
		shower.play();
		showercounter++;
		shower.addEventListener("ended", function() {
			this.currentTime = 0;
			showercounter=0;
		});
	}
	else if(showercounter==1){
		shower.pause();
		showercounter=0;
	}
}

/*SOUND EFFECTS END*/