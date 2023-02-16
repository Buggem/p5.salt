class SoundFile {
	constructor(url) {
  	this.ourAudio = document.createElement('audio'); // Create a audio element using the DOM
    this.ourAudio.style.display = "none"; // Hide the audio element
    this.ourAudio.src = url; // Set resource to our URL
    //ourAudio.autoplay = true; // Automatically play sound
    this.ourAudio.onended = function() {
			if(!loop) { this.remove(); } // Remove when played.
    };
		document.body.appendChild(this.ourAudio);
    
	}
	play() {
		this.ourAudio.play();
	}
	loop() {
		this.ourAudio.loop = true;
		this.ourAudio.play();
	}
	pause() {
		this.ourAudio.pause();
	}
}
function loadSound(url) {
	return new SoundFile(url);
}
