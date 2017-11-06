var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const frequencies = [130.81,138.59,146.83,155.56,164.81,174.61,185.00,196.00,207.65,220.00,233.08,246.94,261.63,277.18,293.66, 311.13,329.63,349.23,369.99,392.00,415.30,440.00, 466.16,493.88,523.25,554.37,587.33,622.25,659.25,698.46,739.99,783.99,830.61,880.00,932.33,987.77,1046.50,1108.73,1174.66,1244.51,1318.51,1396.91,1479.98,1567.98,1661.22,1760.00,1864.66,1975.53,];

const 	c2 = frequencies[0],
		cs2 = frequencies[1],
		d2 = frequencies[2],
		ds2 = frequencies[3],
		e2 = frequencies[4],
		f2 = frequencies[5],
		fs2 = frequencies[6],
		g2 = frequencies[7],
		gs2 = frequencies[8],
		a2 = frequencies[9],
		as2 = frequencies[10],
		b2 = frequencies[11],
		c3 = frequencies[12],
		cs3 = frequencies[13],
		d3 = frequencies[14],
		ds3 = frequencies[15],
		e3 = frequencies[16],
		f3 = frequencies[17],
		fs3 = frequencies[18],
		g3 = frequencies[19],
		gs3 = frequencies[20],
		a3 = frequencies[21],
		as3 = frequencies[22],
		b3 = frequencies[23],
		c4 = frequencies[24],
		cs4 = frequencies[25],
		d4 = frequencies[26],
		ds4 = frequencies[27],
		e4 = frequencies[28],
		f4 = frequencies[29],
		fs4 = frequencies[30],
		g4 = frequencies[31],
		gs4 = frequencies[32],
		a4 = frequencies[33],
		as4 = frequencies[34],
		b4 = frequencies[35],
		c5 = frequencies[36],
		cs5 = frequencies[37],
		d5 = frequencies[38],
		ds5 = frequencies[39],
		e5 = frequencies[40],
		f5 = frequencies[41],
		fs5 = frequencies[42],
		g5 = frequencies[43],
		gs5 = frequencies[44],
		a5 = frequencies[45],
		as5 = frequencies[46],
		b5 = frequencies[47],
		c6 = frequencies[48],
		cs6 = frequencies[49],
		d6 = frequencies[50],
		ds6 = frequencies[51],
		e6 = frequencies[52],
		f6 = frequencies[53],
		fs6 = frequencies[54],
		g6 = frequencies[55],
		gs6 = frequencies[56],
		a6 = frequencies[57],
		as6 = frequencies[58],
		b6 = frequencies[59];

class Note {
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

class Scale {
	constructor(params) {
		this.rootNote = params.rootNote;
		this.scaleName = params.scaleName;
		this.numberOfOctaves = params.numberOfOctaves;

		this.startingIndex = frequencies.indexOf(this.rootNote);
		this.scale = [];

	}

	generate() {
		let x = this.startingIndex;

		const w = 2;
		const h = 1;
		const o = 12;

		if (this.scaleName == 'major') {
			// R, W, W, H, W, W, W, H

			for (var i = 0; i < this.numberOfOctaves; i++) {
				x = x + (o * i);

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + h;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + h;

				this.scale.push(frequencies[x]);
			}
			// this.scale.push(frequencies[i])
			// this.scale.push(frequencies[i + 2])
			// this.scale.push(frequencies[i + 4])
			// this.scale.push(frequencies[i + 5])
			// this.scale.push(frequencies[i + 7])
			// this.scale.push(frequencies[i + 9])
			// this.scale.push(frequencies[i + 11])
			// this.scale.push(frequencies[i + 12])
			// this.scale.push(frequencies[i + 14])
			// this.scale.push(frequencies[i + 16])
			// this.scale.push(frequencies[i + 17])
			// this.scale.push(frequencies[i + 19])
			// this.scale.push(frequencies[i + 21])
		}

		if (this.scaleName == 'minor') { 
			// R, W, H, W, W, H, W, W

			for (var i = 0; i < this.numberOfOctaves; i++) {
				x = x + (o * i);

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + h;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + h;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);
			}
			// this.scale.push(frequencies[i])
			// this.scale.push(frequencies[i + 2])
			// this.scale.push(frequencies[i + 3])
			// this.scale.push(frequencies[i + 5])
			// this.scale.push(frequencies[i + 7])
			// this.scale.push(frequencies[i + 8])
			// this.scale.push(frequencies[i + 10])
			// this.scale.push(frequencies[i + 12])
			// this.scale.push(frequencies[i + 14])
			// this.scale.push(frequencies[i + 15])
			// this.scale.push(frequencies[i + 17])
			// this.scale.push(frequencies[i + 19])
			// this.scale.push(frequencies[i + 20])
		}

		if (this.scaleName == 'minor_harmonic') { 
			// R, W, H, W, W, H, 1 1/2, H

			for (var i = 0; i < this.numberOfOctaves; i++) {
				x = x + (o * i);

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + h;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + h;

				this.scale.push(frequencies[x]);

				x = x + w + h;

				this.scale.push(frequencies[x]);

				x = x + h;

				this.scale.push(frequencies[x]);
			}
		}

		if (this.scaleName == 'pentatonic_major') {
			// W W 1-1/2 step W 1-1/2 step

			for (var i = 0; i < this.numberOfOctaves; i++) {
				x = x + (o * i);

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + w + h;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + w + h;

				this.scale.push(frequencies[x]);
			}	
		}

		if (this.scaleName == 'pentatonic_minor') {
			// R, 1 1/2, W, W, 1 1/2, W

			for (var i = 0; i < this.numberOfOctaves; i++) {
				x = x + (o * i);

				this.scale.push(frequencies[x]);

				x = x + w + h;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);

				x = x + w + h;

				this.scale.push(frequencies[x]);

				x = x + w;

				this.scale.push(frequencies[x]);
			}	
		}

		if (this.scaleName == 'fifths') {
			// R, 7
			this.numberOfOctaves = this.numberOfOctaves * 2;

			for (var i = 0; i < this.numberOfOctaves; i++) {
				x = x + (o * i);

				this.scale.push(frequencies[x]);

				x = x + 5;

				this.scale.push(frequencies[x]);

			}
		}

		if (this.scaleName == 'chord_major') {
			// R, 4, 3

			this.numberOfOctaves = this.numberOfOctaves * 2;

			for (var i = 0; i < this.numberOfOctaves; i++) {
				x = x + (o * i);

				this.scale.push(frequencies[x]);

				x = x + 4;

				this.scale.push(frequencies[x]);

				x = x + 3;

				this.scale.push(frequencies[x]);

			}
		}

		if (this.scaleName == 'chord_minor') {
			// R, 3, 4

			this.numberOfOctaves = this.numberOfOctaves * 2;

			for (var i = 0; i < this.numberOfOctaves; i++) {
				x = x + (o * i);

				this.scale.push(frequencies[x]);

				x = x + 3;

				this.scale.push(frequencies[x]);

				x = x + 4;

				this.scale.push(frequencies[x]);

			}
		}

		if (this.scaleName == 'chord_sus') {
			// R, 5, 2

			this.numberOfOctaves = this.numberOfOctaves * 2;

			for (var i = 0; i < this.numberOfOctaves; i++) {
				x = x + (o * i);

				this.scale.push(frequencies[x]);

				x = x + 5;

				this.scale.push(frequencies[x]);

				x = x + 2;

				this.scale.push(frequencies[x]);

			}
		}

		return this.scale;
	}
}

let defaultScale = new Scale({
	rootNote: c2,
	scaleName: 'major',
	numberOfOctaves: 2
});

	defaultScale = defaultScale.generate();	


class App {
	constructor(params) {
		if (params) {
			this.scale = params.scale;
			this.bpm = params.bpm;
			this.measures = params.measures;
			this.signature = params.signature;
		} else {
			this.scale = [130.81, 146.83, 164.81, 174.61, 196, 220, 246.94, 261.63, 523.25, 587.33, 659.25, 698.46, 783.99, 880, 987.77, 1046.5];
			this.bpm = 100;
			this.measures = 6;
			this.signature = '4_4';
		}	
	}
}




// class NoiseVisualElement {
// 	constructor(param) {
// 		// console.dir(param);
// 		this.noiseNode = param.Noise;
// 		this.noiseId = param.noiseId;
// 		this.domElement = document.createElement('div');
// 		this.domElement.id = this.noiseId;
// 		this.domElement.classList.add('noiseElement');
// 		this.domElement.classList.add('noise' + this.noiseId);
// 		document.body.appendChild(this.domElement);
// 	}
// }

// class NoiseSwitch {
// 	constructor(param) {
// 		this.noiseNode = param.noiseNode;
// 		this.domElement = param.domElement;
// 		this.switchOnOff = this.switchOnOff.bind(this);
// 		this.domElement.addEventListener('click', this.switchOnOff);
// 	}

// 	switchOnOff() {
// 		console.dir(this);

// 		if (this.domElement.classList.contains('active')) {
// 			this.domElement.classList.remove('active');
// 			this.noiseNode.off();	
// 		} else if (!this.domElement.classList.contains('active')) {
// 			this.domElement.classList.add('active');
// 			this.noiseNode.on();
// 		}
// 	}
// }


// // console.log(noises);

// // WHAT NEEDS TO HAPPEN IN PLAIN ENGLISH:
// // 1. all sounds generate
// 	// every row has same frequency
// 	// every column plays at the same time

// // 2. loop through each column
// // 3. check each item in each column for true/false
// // 4. turn sound on for each item that returns true
// // 5. 

function testTones() {
	let params = {};
		params.rootNote = c2;
		params.scaleName = 'major';
		params.numberOfOctaves = 1;

	let scale = new Scale(params);
		scale = scale.generate();
	
	cycleTones(scale);
}

function cycleTones(scale) {
	console.log(scale);

	let tones = [];

	for (var i = 0; i < scale.length + 1; i++) {
		let tone = new Noise(scale[i]);
		tones.push(tone);
	}

	let t = 0;

	var toneInterval = setInterval(function() {

		if (t <= tones.length) {
			tones[t].on();
		}

		if (t > 0) {
			tones[t - 1].off();
		}

		if (t == tones.length) {
			tones[t].off();
			clearInterval(toneInterval);
		}

		t++;

	}, 500);
}


