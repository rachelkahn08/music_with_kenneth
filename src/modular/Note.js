export default class Note {
	constructor(frequency) {
		this.oscillator = audioCtx.createOscillator();
		this.oscillator.type = 'sine';
		this.oscillator.frequency.value = frequency; // value in hertz
		this.oscillator.start();

		this.gainNode = audioCtx.createGain();
		this.gainNode.gain.value = 0.0;

		this.oscillator.connect(this.gainNode);
		this.gainNode.connect(audioCtx.destination);
	}
	on() {
		this.gainNode.gain.value = 0.2;
	}
	off() {
		this.gainNode.gain.value = 0;
	}
}