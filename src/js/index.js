var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

class Noise {
	constructor(frequency = 200) {
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

class NoiseVisualElement {
	constructor(param) {
		// console.dir(param);
		this.noiseNode = param.Noise;
		this.noiseId = param.noiseId;
		this.domElement = document.createElement('div');
		this.domElement.id = this.noiseId;
		this.domElement.classList.add('noiseElement');
		this.domElement.classList.add('noise' + this.noiseId);
		document.body.appendChild(this.domElement);
	}
}

class NoiseSwitch {
	constructor(param) {
		this.noiseNode = param.noiseNode;
		this.domElement = param.domElement;
		this.switchOnOff = this.switchOnOff.bind(this);
		this.domElement.addEventListener('click', this.switchOnOff);
	}

	switchOnOff() {
		console.dir(this);

		if (this.domElement.classList.contains('active')) {
			this.domElement.classList.remove('active');
			this.noiseNode.off();	
		} else if (!this.domElement.classList.contains('active')) {
			this.domElement.classList.add('active');
			this.noiseNode.on();
		}
	}
}
	

var noises = [];
for (var x = 0; x <= 15; x++) {
	noises.push([]);

	for (var y = 0; y <= 15; y++) {
		var param = {};
		var noiseId;

		if ( x < 10 && y < 10 ) {
			noiseId = `0${x}_0${y}`;
		} else if ( x < 10 && y >= 10 ) {
			noiseId = `0${x}_${y}`;
		} else if ( x >= 10 && y >= 10 ) { 
			noiseId = `${x}_${y}`;
		}

		param.Noise = new Noise(20 * y);
		param.noiseId = noiseId;

		var noiseVisualElement = new NoiseVisualElement(param);
		noises[x][y] = new NoiseSwitch(noiseVisualElement);

	}
}

// console.log(noises);

// WHAT NEEDS TO HAPPEN IN PLAIN ENGLISH:
// 1. all sounds generate
	// every row has same frequency
	// 

// 2. loop through each column
// 3. check each item in each column for true/false
// 4. turn sound on for each item that returns true
// 5. 

