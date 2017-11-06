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

		this.gainNode = audioCtx.createGain();
		this.gainNode.gain.value = 0.0;

		this.oscillator.connect(this.gainNode);
		this.gainNode.connect(audioCtx.destination);
	}
	on() {
		this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
		this.gainNode.gain.linearRampToValueAtTime(3, this.context.currentTime + 0.01);
		        
		this.oscillator.start(this.context.currentTime);
		this.stop(this.context.currentTime);
	}
	off() {
		this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
        this.oscillator.stop(this.context.currentTime + 1);
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

var App = (function(params) {
	let shared = {};

	var defaultParams = {
		rootNote: c2,
		scaleName: 'major',
		numberOfOctaves: 2,
		bpm: 100,
		duration: 6,
		signature: [4, 4],
		numberOfOctaves: 2,
	};

	if (!params) {
		params = defaultParams;
	} 

	let scale = new Scale(params), 
		bpm = params.bpm,
		duration = params.duration,
		signature = params.signature,
		numberOfOctaves = params.numberOfOctaves,
		beats = signature[0],
		measure = signature[1],
		numberOfBeats = duration*beats;

		scale = scale.generate();


	function generatePlayerArray(params) {
		var playerArray = [];
		console.log(scale.length);
		
		let index = 0;
		let row = 0;
		let column = 0;

		for (var x = 0; x <= numberOfBeats; x++) {

			playerArray.push([]);

			for (var y = 0; y < scale.length; y++) {
				//rows (increase index number by one)

				if (index == scale.length) {
					index = 0;
				}
				
				playerArray[x][y] = new Note(scale[index]);
			}
		}

		// var noises = [];
// for (var x = 0; x <= 15; x++) {
// 	noises.push([]);

// 	for (var y = 0; y <= 15; y++) {
// 		var param = {};
// 		var noiseId;

// 		if ( x < 10 && y < 10 ) {
// 			noiseId = `0${x}_0${y}`;
// 		} else if ( x < 10 && y >= 10 ) {
// 			noiseId = `0${x}_${y}`;
// 		} else if ( x >= 10 && y >= 10 ) { 
// 			noiseId = `${x}_${y}`;
// 		}

// 		param.Noise = new Noise(20 * y);
// 		param.noiseId = noiseId;

// 		var noiseVisualElement = new NoiseVisualElement(param);
// 		noises[x][y] = new NoiseSwitch(noiseVisualElement);

// 	}
// }
		return playerArray;
	}

	function generatePlayer() {
		// let width = this.measures*this.beats;
		// let height = (this.scale.length / this.numberOfOctaves);
		const columns = length*beats;
		const rows = length/numberOfOctaves;
	}

	function makeColumn() {
		const numberOfRows = scale.length/numberOfOctaves;
		let column = document.createElement('div');

	}

	function updatePlayer() {

	}

	shared.generatePlayerArray = generatePlayerArray;
	return shared;
}());

// for (var x = 0; x <= 15; x++) {
// 	noises.push([]);

// 	for (var y = 0; y <= 15; y++) {
// 		var param = {};
// 		var noiseId;

// 		if ( x < 10 && y < 10 ) {
// 			noiseId = `0${x}_0${y}`;
// 		} else if ( x < 10 && y >= 10 ) {
// 			noiseId = `0${x}_${y}`;
// 		} else if ( x >= 10 && y >= 10 ) { 
// 			noiseId = `${x}_${y}`;
// 		}

// 		param.Noise = new Noise(20 * y);
// 		param.noiseId = noiseId;

// 		var noiseVisualElement = new NoiseVisualElement(param);
// 		noises[x][y] = new NoiseSwitch(noiseVisualElement);

// 	}
// }




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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXVkaW9DdHggPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcblxuY29uc3QgZnJlcXVlbmNpZXMgPSBbMTMwLjgxLDEzOC41OSwxNDYuODMsMTU1LjU2LDE2NC44MSwxNzQuNjEsMTg1LjAwLDE5Ni4wMCwyMDcuNjUsMjIwLjAwLDIzMy4wOCwyNDYuOTQsMjYxLjYzLDI3Ny4xOCwyOTMuNjYsIDMxMS4xMywzMjkuNjMsMzQ5LjIzLDM2OS45OSwzOTIuMDAsNDE1LjMwLDQ0MC4wMCwgNDY2LjE2LDQ5My44OCw1MjMuMjUsNTU0LjM3LDU4Ny4zMyw2MjIuMjUsNjU5LjI1LDY5OC40Niw3MzkuOTksNzgzLjk5LDgzMC42MSw4ODAuMDAsOTMyLjMzLDk4Ny43NywxMDQ2LjUwLDExMDguNzMsMTE3NC42NiwxMjQ0LjUxLDEzMTguNTEsMTM5Ni45MSwxNDc5Ljk4LDE1NjcuOTgsMTY2MS4yMiwxNzYwLjAwLDE4NjQuNjYsMTk3NS41MyxdO1xuXG5jb25zdCBcdGMyID0gZnJlcXVlbmNpZXNbMF0sXG5cdFx0Y3MyID0gZnJlcXVlbmNpZXNbMV0sXG5cdFx0ZDIgPSBmcmVxdWVuY2llc1syXSxcblx0XHRkczIgPSBmcmVxdWVuY2llc1szXSxcblx0XHRlMiA9IGZyZXF1ZW5jaWVzWzRdLFxuXHRcdGYyID0gZnJlcXVlbmNpZXNbNV0sXG5cdFx0ZnMyID0gZnJlcXVlbmNpZXNbNl0sXG5cdFx0ZzIgPSBmcmVxdWVuY2llc1s3XSxcblx0XHRnczIgPSBmcmVxdWVuY2llc1s4XSxcblx0XHRhMiA9IGZyZXF1ZW5jaWVzWzldLFxuXHRcdGFzMiA9IGZyZXF1ZW5jaWVzWzEwXSxcblx0XHRiMiA9IGZyZXF1ZW5jaWVzWzExXSxcblx0XHRjMyA9IGZyZXF1ZW5jaWVzWzEyXSxcblx0XHRjczMgPSBmcmVxdWVuY2llc1sxM10sXG5cdFx0ZDMgPSBmcmVxdWVuY2llc1sxNF0sXG5cdFx0ZHMzID0gZnJlcXVlbmNpZXNbMTVdLFxuXHRcdGUzID0gZnJlcXVlbmNpZXNbMTZdLFxuXHRcdGYzID0gZnJlcXVlbmNpZXNbMTddLFxuXHRcdGZzMyA9IGZyZXF1ZW5jaWVzWzE4XSxcblx0XHRnMyA9IGZyZXF1ZW5jaWVzWzE5XSxcblx0XHRnczMgPSBmcmVxdWVuY2llc1syMF0sXG5cdFx0YTMgPSBmcmVxdWVuY2llc1syMV0sXG5cdFx0YXMzID0gZnJlcXVlbmNpZXNbMjJdLFxuXHRcdGIzID0gZnJlcXVlbmNpZXNbMjNdLFxuXHRcdGM0ID0gZnJlcXVlbmNpZXNbMjRdLFxuXHRcdGNzNCA9IGZyZXF1ZW5jaWVzWzI1XSxcblx0XHRkNCA9IGZyZXF1ZW5jaWVzWzI2XSxcblx0XHRkczQgPSBmcmVxdWVuY2llc1syN10sXG5cdFx0ZTQgPSBmcmVxdWVuY2llc1syOF0sXG5cdFx0ZjQgPSBmcmVxdWVuY2llc1syOV0sXG5cdFx0ZnM0ID0gZnJlcXVlbmNpZXNbMzBdLFxuXHRcdGc0ID0gZnJlcXVlbmNpZXNbMzFdLFxuXHRcdGdzNCA9IGZyZXF1ZW5jaWVzWzMyXSxcblx0XHRhNCA9IGZyZXF1ZW5jaWVzWzMzXSxcblx0XHRhczQgPSBmcmVxdWVuY2llc1szNF0sXG5cdFx0YjQgPSBmcmVxdWVuY2llc1szNV0sXG5cdFx0YzUgPSBmcmVxdWVuY2llc1szNl0sXG5cdFx0Y3M1ID0gZnJlcXVlbmNpZXNbMzddLFxuXHRcdGQ1ID0gZnJlcXVlbmNpZXNbMzhdLFxuXHRcdGRzNSA9IGZyZXF1ZW5jaWVzWzM5XSxcblx0XHRlNSA9IGZyZXF1ZW5jaWVzWzQwXSxcblx0XHRmNSA9IGZyZXF1ZW5jaWVzWzQxXSxcblx0XHRmczUgPSBmcmVxdWVuY2llc1s0Ml0sXG5cdFx0ZzUgPSBmcmVxdWVuY2llc1s0M10sXG5cdFx0Z3M1ID0gZnJlcXVlbmNpZXNbNDRdLFxuXHRcdGE1ID0gZnJlcXVlbmNpZXNbNDVdLFxuXHRcdGFzNSA9IGZyZXF1ZW5jaWVzWzQ2XSxcblx0XHRiNSA9IGZyZXF1ZW5jaWVzWzQ3XSxcblx0XHRjNiA9IGZyZXF1ZW5jaWVzWzQ4XSxcblx0XHRjczYgPSBmcmVxdWVuY2llc1s0OV0sXG5cdFx0ZDYgPSBmcmVxdWVuY2llc1s1MF0sXG5cdFx0ZHM2ID0gZnJlcXVlbmNpZXNbNTFdLFxuXHRcdGU2ID0gZnJlcXVlbmNpZXNbNTJdLFxuXHRcdGY2ID0gZnJlcXVlbmNpZXNbNTNdLFxuXHRcdGZzNiA9IGZyZXF1ZW5jaWVzWzU0XSxcblx0XHRnNiA9IGZyZXF1ZW5jaWVzWzU1XSxcblx0XHRnczYgPSBmcmVxdWVuY2llc1s1Nl0sXG5cdFx0YTYgPSBmcmVxdWVuY2llc1s1N10sXG5cdFx0YXM2ID0gZnJlcXVlbmNpZXNbNThdLFxuXHRcdGI2ID0gZnJlcXVlbmNpZXNbNTldO1xuXG5jbGFzcyBOb3RlIHtcblx0Y29uc3RydWN0b3IoZnJlcXVlbmN5KSB7XG5cdFx0dGhpcy5vc2NpbGxhdG9yID0gYXVkaW9DdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuXHRcdHRoaXMub3NjaWxsYXRvci50eXBlID0gJ3NpbmUnO1xuXHRcdHRoaXMub3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgPSBmcmVxdWVuY3k7IC8vIHZhbHVlIGluIGhlcnR6XG5cblx0XHR0aGlzLmdhaW5Ob2RlID0gYXVkaW9DdHguY3JlYXRlR2FpbigpO1xuXHRcdHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuMDtcblxuXHRcdHRoaXMub3NjaWxsYXRvci5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO1xuXHRcdHRoaXMuZ2Fpbk5vZGUuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cdH1cblx0b24oKSB7XG5cdFx0dGhpcy5nYWluTm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKDAsIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XG5cdFx0dGhpcy5nYWluTm9kZS5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKDMsIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSArIDAuMDEpO1xuXHRcdCAgICAgICAgXG5cdFx0dGhpcy5vc2NpbGxhdG9yLnN0YXJ0KHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XG5cdFx0dGhpcy5zdG9wKHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XG5cdH1cblx0b2ZmKCkge1xuXHRcdHRoaXMuZ2Fpbk5vZGUuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDAxLCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUgKyAxKTtcbiAgICAgICAgdGhpcy5vc2NpbGxhdG9yLnN0b3AodGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lICsgMSk7XG5cdH1cbn1cblxuY2xhc3MgU2NhbGUge1xuXHRjb25zdHJ1Y3RvcihwYXJhbXMpIHtcblx0XHR0aGlzLnJvb3ROb3RlID0gcGFyYW1zLnJvb3ROb3RlO1xuXHRcdHRoaXMuc2NhbGVOYW1lID0gcGFyYW1zLnNjYWxlTmFtZTtcblx0XHR0aGlzLm51bWJlck9mT2N0YXZlcyA9IHBhcmFtcy5udW1iZXJPZk9jdGF2ZXM7XG5cblx0XHR0aGlzLnN0YXJ0aW5nSW5kZXggPSBmcmVxdWVuY2llcy5pbmRleE9mKHRoaXMucm9vdE5vdGUpO1xuXHRcdHRoaXMuc2NhbGUgPSBbXTtcblxuXHR9XG5cblx0Z2VuZXJhdGUoKSB7XG5cdFx0bGV0IHggPSB0aGlzLnN0YXJ0aW5nSW5kZXg7XG5cblx0XHRjb25zdCB3ID0gMjtcblx0XHRjb25zdCBoID0gMTtcblx0XHRjb25zdCBvID0gMTI7XG5cblx0XHRpZiAodGhpcy5zY2FsZU5hbWUgPT0gJ21ham9yJykge1xuXHRcdFx0Ly8gUiwgVywgVywgSCwgVywgVywgVywgSFxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblx0XHRcdFx0eCA9IHggKyAobyAqIGkpO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cdFx0XHR9XG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaV0pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDJdKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyA0XSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgNV0pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDddKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyA5XSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgMTFdKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyAxMl0pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDE0XSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgMTZdKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyAxN10pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDE5XSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgMjFdKVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAnbWlub3InKSB7IFxuXHRcdFx0Ly8gUiwgVywgSCwgVywgVywgSCwgVywgV1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblx0XHRcdFx0eCA9IHggKyAobyAqIGkpO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cdFx0XHR9XG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaV0pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDJdKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyAzXSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgNV0pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDddKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyA4XSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgMTBdKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyAxMl0pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDE0XSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgMTVdKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyAxN10pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDE5XSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgMjBdKVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAnbWlub3JfaGFybW9uaWMnKSB7IFxuXHRcdFx0Ly8gUiwgVywgSCwgVywgVywgSCwgMSAxLzIsIEhcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mT2N0YXZlczsgaSsrKSB7XG5cdFx0XHRcdHggPSB4ICsgKG8gKiBpKTtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgaDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgaDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdyArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY2FsZU5hbWUgPT0gJ3BlbnRhdG9uaWNfbWFqb3InKSB7XG5cdFx0XHQvLyBXIFcgMS0xLzIgc3RlcCBXIDEtMS8yIHN0ZXBcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mT2N0YXZlczsgaSsrKSB7XG5cdFx0XHRcdHggPSB4ICsgKG8gKiBpKTtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdyArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHcgKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cdFx0XHR9XHRcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY2FsZU5hbWUgPT0gJ3BlbnRhdG9uaWNfbWlub3InKSB7XG5cdFx0XHQvLyBSLCAxIDEvMiwgVywgVywgMSAxLzIsIFdcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mT2N0YXZlczsgaSsrKSB7XG5cdFx0XHRcdHggPSB4ICsgKG8gKiBpKTtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdyArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHcgKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cdFx0XHR9XHRcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY2FsZU5hbWUgPT0gJ2ZpZnRocycpIHtcblx0XHRcdC8vIFIsIDdcblx0XHRcdHRoaXMubnVtYmVyT2ZPY3RhdmVzID0gdGhpcy5udW1iZXJPZk9jdGF2ZXMgKiAyO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblx0XHRcdFx0eCA9IHggKyAobyAqIGkpO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyA1O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY2FsZU5hbWUgPT0gJ2Nob3JkX21ham9yJykge1xuXHRcdFx0Ly8gUiwgNCwgM1xuXG5cdFx0XHR0aGlzLm51bWJlck9mT2N0YXZlcyA9IHRoaXMubnVtYmVyT2ZPY3RhdmVzICogMjtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mT2N0YXZlczsgaSsrKSB7XG5cdFx0XHRcdHggPSB4ICsgKG8gKiBpKTtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgNDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgMztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2NhbGVOYW1lID09ICdjaG9yZF9taW5vcicpIHtcblx0XHRcdC8vIFIsIDMsIDRcblxuXHRcdFx0dGhpcy5udW1iZXJPZk9jdGF2ZXMgPSB0aGlzLm51bWJlck9mT2N0YXZlcyAqIDI7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZk9jdGF2ZXM7IGkrKykge1xuXHRcdFx0XHR4ID0geCArIChvICogaSk7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIDM7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIDQ7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAnY2hvcmRfc3VzJykge1xuXHRcdFx0Ly8gUiwgNSwgMlxuXG5cdFx0XHR0aGlzLm51bWJlck9mT2N0YXZlcyA9IHRoaXMubnVtYmVyT2ZPY3RhdmVzICogMjtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mT2N0YXZlczsgaSsrKSB7XG5cdFx0XHRcdHggPSB4ICsgKG8gKiBpKTtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgNTtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgMjtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuc2NhbGU7XG5cdH1cbn1cblxudmFyIEFwcCA9IChmdW5jdGlvbihwYXJhbXMpIHtcblx0bGV0IHNoYXJlZCA9IHt9O1xuXG5cdHZhciBkZWZhdWx0UGFyYW1zID0ge1xuXHRcdHJvb3ROb3RlOiBjMixcblx0XHRzY2FsZU5hbWU6ICdtYWpvcicsXG5cdFx0bnVtYmVyT2ZPY3RhdmVzOiAyLFxuXHRcdGJwbTogMTAwLFxuXHRcdGR1cmF0aW9uOiA2LFxuXHRcdHNpZ25hdHVyZTogWzQsIDRdLFxuXHRcdG51bWJlck9mT2N0YXZlczogMixcblx0fTtcblxuXHRpZiAoIXBhcmFtcykge1xuXHRcdHBhcmFtcyA9IGRlZmF1bHRQYXJhbXM7XG5cdH0gXG5cblx0bGV0IHNjYWxlID0gbmV3IFNjYWxlKHBhcmFtcyksIFxuXHRcdGJwbSA9IHBhcmFtcy5icG0sXG5cdFx0ZHVyYXRpb24gPSBwYXJhbXMuZHVyYXRpb24sXG5cdFx0c2lnbmF0dXJlID0gcGFyYW1zLnNpZ25hdHVyZSxcblx0XHRudW1iZXJPZk9jdGF2ZXMgPSBwYXJhbXMubnVtYmVyT2ZPY3RhdmVzLFxuXHRcdGJlYXRzID0gc2lnbmF0dXJlWzBdLFxuXHRcdG1lYXN1cmUgPSBzaWduYXR1cmVbMV0sXG5cdFx0bnVtYmVyT2ZCZWF0cyA9IGR1cmF0aW9uKmJlYXRzO1xuXG5cdFx0c2NhbGUgPSBzY2FsZS5nZW5lcmF0ZSgpO1xuXG5cblx0ZnVuY3Rpb24gZ2VuZXJhdGVQbGF5ZXJBcnJheShwYXJhbXMpIHtcblx0XHR2YXIgcGxheWVyQXJyYXkgPSBbXTtcblx0XHRjb25zb2xlLmxvZyhzY2FsZS5sZW5ndGgpO1xuXHRcdFxuXHRcdGxldCBpbmRleCA9IDA7XG5cdFx0bGV0IHJvdyA9IDA7XG5cdFx0bGV0IGNvbHVtbiA9IDA7XG5cblx0XHRmb3IgKHZhciB4ID0gMDsgeCA8PSBudW1iZXJPZkJlYXRzOyB4KyspIHtcblxuXHRcdFx0cGxheWVyQXJyYXkucHVzaChbXSk7XG5cblx0XHRcdGZvciAodmFyIHkgPSAwOyB5IDwgc2NhbGUubGVuZ3RoOyB5KyspIHtcblx0XHRcdFx0Ly9yb3dzIChpbmNyZWFzZSBpbmRleCBudW1iZXIgYnkgb25lKVxuXG5cdFx0XHRcdGlmIChpbmRleCA9PSBzY2FsZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRpbmRleCA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHBsYXllckFycmF5W3hdW3ldID0gbmV3IE5vdGUoc2NhbGVbaW5kZXhdKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyB2YXIgbm9pc2VzID0gW107XG4vLyBmb3IgKHZhciB4ID0gMDsgeCA8PSAxNTsgeCsrKSB7XG4vLyBcdG5vaXNlcy5wdXNoKFtdKTtcblxuLy8gXHRmb3IgKHZhciB5ID0gMDsgeSA8PSAxNTsgeSsrKSB7XG4vLyBcdFx0dmFyIHBhcmFtID0ge307XG4vLyBcdFx0dmFyIG5vaXNlSWQ7XG5cbi8vIFx0XHRpZiAoIHggPCAxMCAmJiB5IDwgMTAgKSB7XG4vLyBcdFx0XHRub2lzZUlkID0gYDAke3h9XzAke3l9YDtcbi8vIFx0XHR9IGVsc2UgaWYgKCB4IDwgMTAgJiYgeSA+PSAxMCApIHtcbi8vIFx0XHRcdG5vaXNlSWQgPSBgMCR7eH1fJHt5fWA7XG4vLyBcdFx0fSBlbHNlIGlmICggeCA+PSAxMCAmJiB5ID49IDEwICkgeyBcbi8vIFx0XHRcdG5vaXNlSWQgPSBgJHt4fV8ke3l9YDtcbi8vIFx0XHR9XG5cbi8vIFx0XHRwYXJhbS5Ob2lzZSA9IG5ldyBOb2lzZSgyMCAqIHkpO1xuLy8gXHRcdHBhcmFtLm5vaXNlSWQgPSBub2lzZUlkO1xuXG4vLyBcdFx0dmFyIG5vaXNlVmlzdWFsRWxlbWVudCA9IG5ldyBOb2lzZVZpc3VhbEVsZW1lbnQocGFyYW0pO1xuLy8gXHRcdG5vaXNlc1t4XVt5XSA9IG5ldyBOb2lzZVN3aXRjaChub2lzZVZpc3VhbEVsZW1lbnQpO1xuXG4vLyBcdH1cbi8vIH1cblx0XHRyZXR1cm4gcGxheWVyQXJyYXk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZW5lcmF0ZVBsYXllcigpIHtcblx0XHQvLyBsZXQgd2lkdGggPSB0aGlzLm1lYXN1cmVzKnRoaXMuYmVhdHM7XG5cdFx0Ly8gbGV0IGhlaWdodCA9ICh0aGlzLnNjYWxlLmxlbmd0aCAvIHRoaXMubnVtYmVyT2ZPY3RhdmVzKTtcblx0XHRjb25zdCBjb2x1bW5zID0gbGVuZ3RoKmJlYXRzO1xuXHRcdGNvbnN0IHJvd3MgPSBsZW5ndGgvbnVtYmVyT2ZPY3RhdmVzO1xuXHR9XG5cblx0ZnVuY3Rpb24gbWFrZUNvbHVtbigpIHtcblx0XHRjb25zdCBudW1iZXJPZlJvd3MgPSBzY2FsZS5sZW5ndGgvbnVtYmVyT2ZPY3RhdmVzO1xuXHRcdGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlUGxheWVyKCkge1xuXG5cdH1cblxuXHRzaGFyZWQuZ2VuZXJhdGVQbGF5ZXJBcnJheSA9IGdlbmVyYXRlUGxheWVyQXJyYXk7XG5cdHJldHVybiBzaGFyZWQ7XG59KCkpO1xuXG4vLyBmb3IgKHZhciB4ID0gMDsgeCA8PSAxNTsgeCsrKSB7XG4vLyBcdG5vaXNlcy5wdXNoKFtdKTtcblxuLy8gXHRmb3IgKHZhciB5ID0gMDsgeSA8PSAxNTsgeSsrKSB7XG4vLyBcdFx0dmFyIHBhcmFtID0ge307XG4vLyBcdFx0dmFyIG5vaXNlSWQ7XG5cbi8vIFx0XHRpZiAoIHggPCAxMCAmJiB5IDwgMTAgKSB7XG4vLyBcdFx0XHRub2lzZUlkID0gYDAke3h9XzAke3l9YDtcbi8vIFx0XHR9IGVsc2UgaWYgKCB4IDwgMTAgJiYgeSA+PSAxMCApIHtcbi8vIFx0XHRcdG5vaXNlSWQgPSBgMCR7eH1fJHt5fWA7XG4vLyBcdFx0fSBlbHNlIGlmICggeCA+PSAxMCAmJiB5ID49IDEwICkgeyBcbi8vIFx0XHRcdG5vaXNlSWQgPSBgJHt4fV8ke3l9YDtcbi8vIFx0XHR9XG5cbi8vIFx0XHRwYXJhbS5Ob2lzZSA9IG5ldyBOb2lzZSgyMCAqIHkpO1xuLy8gXHRcdHBhcmFtLm5vaXNlSWQgPSBub2lzZUlkO1xuXG4vLyBcdFx0dmFyIG5vaXNlVmlzdWFsRWxlbWVudCA9IG5ldyBOb2lzZVZpc3VhbEVsZW1lbnQocGFyYW0pO1xuLy8gXHRcdG5vaXNlc1t4XVt5XSA9IG5ldyBOb2lzZVN3aXRjaChub2lzZVZpc3VhbEVsZW1lbnQpO1xuXG4vLyBcdH1cbi8vIH1cblxuXG5cblxuLy8gY2xhc3MgTm9pc2VWaXN1YWxFbGVtZW50IHtcbi8vIFx0Y29uc3RydWN0b3IocGFyYW0pIHtcbi8vIFx0XHQvLyBjb25zb2xlLmRpcihwYXJhbSk7XG4vLyBcdFx0dGhpcy5ub2lzZU5vZGUgPSBwYXJhbS5Ob2lzZTtcbi8vIFx0XHR0aGlzLm5vaXNlSWQgPSBwYXJhbS5ub2lzZUlkO1xuLy8gXHRcdHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gXHRcdHRoaXMuZG9tRWxlbWVudC5pZCA9IHRoaXMubm9pc2VJZDtcbi8vIFx0XHR0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm9pc2VFbGVtZW50Jyk7XG4vLyBcdFx0dGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vaXNlJyArIHRoaXMubm9pc2VJZCk7XG4vLyBcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGNsYXNzIE5vaXNlU3dpdGNoIHtcbi8vIFx0Y29uc3RydWN0b3IocGFyYW0pIHtcbi8vIFx0XHR0aGlzLm5vaXNlTm9kZSA9IHBhcmFtLm5vaXNlTm9kZTtcbi8vIFx0XHR0aGlzLmRvbUVsZW1lbnQgPSBwYXJhbS5kb21FbGVtZW50O1xuLy8gXHRcdHRoaXMuc3dpdGNoT25PZmYgPSB0aGlzLnN3aXRjaE9uT2ZmLmJpbmQodGhpcyk7XG4vLyBcdFx0dGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zd2l0Y2hPbk9mZik7XG4vLyBcdH1cblxuLy8gXHRzd2l0Y2hPbk9mZigpIHtcbi8vIFx0XHRjb25zb2xlLmRpcih0aGlzKTtcblxuLy8gXHRcdGlmICh0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuLy8gXHRcdFx0dGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuLy8gXHRcdFx0dGhpcy5ub2lzZU5vZGUub2ZmKCk7XHRcbi8vIFx0XHR9IGVsc2UgaWYgKCF0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuLy8gXHRcdFx0dGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuLy8gXHRcdFx0dGhpcy5ub2lzZU5vZGUub24oKTtcbi8vIFx0XHR9XG4vLyBcdH1cbi8vIH1cblxuXG4vLyAvLyBjb25zb2xlLmxvZyhub2lzZXMpO1xuXG4vLyAvLyBXSEFUIE5FRURTIFRPIEhBUFBFTiBJTiBQTEFJTiBFTkdMSVNIOlxuLy8gLy8gMS4gYWxsIHNvdW5kcyBnZW5lcmF0ZVxuLy8gXHQvLyBldmVyeSByb3cgaGFzIHNhbWUgZnJlcXVlbmN5XG4vLyBcdC8vIGV2ZXJ5IGNvbHVtbiBwbGF5cyBhdCB0aGUgc2FtZSB0aW1lXG5cbi8vIC8vIDIuIGxvb3AgdGhyb3VnaCBlYWNoIGNvbHVtblxuLy8gLy8gMy4gY2hlY2sgZWFjaCBpdGVtIGluIGVhY2ggY29sdW1uIGZvciB0cnVlL2ZhbHNlXG4vLyAvLyA0LiB0dXJuIHNvdW5kIG9uIGZvciBlYWNoIGl0ZW0gdGhhdCByZXR1cm5zIHRydWVcbi8vIC8vIDUuIFxuXG5mdW5jdGlvbiB0ZXN0VG9uZXMoKSB7XG5cdGxldCBwYXJhbXMgPSB7fTtcblx0XHRwYXJhbXMucm9vdE5vdGUgPSBjMjtcblx0XHRwYXJhbXMuc2NhbGVOYW1lID0gJ21ham9yJztcblx0XHRwYXJhbXMubnVtYmVyT2ZPY3RhdmVzID0gMTtcblxuXHRsZXQgc2NhbGUgPSBuZXcgU2NhbGUocGFyYW1zKTtcblx0XHRzY2FsZSA9IHNjYWxlLmdlbmVyYXRlKCk7XG5cdFxuXHRjeWNsZVRvbmVzKHNjYWxlKTtcbn1cblxuZnVuY3Rpb24gY3ljbGVUb25lcyhzY2FsZSkge1xuXHRjb25zb2xlLmxvZyhzY2FsZSk7XG5cblx0bGV0IHRvbmVzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2FsZS5sZW5ndGggKyAxOyBpKyspIHtcblx0XHRsZXQgdG9uZSA9IG5ldyBOb2lzZShzY2FsZVtpXSk7XG5cdFx0dG9uZXMucHVzaCh0b25lKTtcblx0fVxuXG5cdGxldCB0ID0gMDtcblxuXHR2YXIgdG9uZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cblx0XHRpZiAodCA8PSB0b25lcy5sZW5ndGgpIHtcblx0XHRcdHRvbmVzW3RdLm9uKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHQgPiAwKSB7XG5cdFx0XHR0b25lc1t0IC0gMV0ub2ZmKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHQgPT0gdG9uZXMubGVuZ3RoKSB7XG5cdFx0XHR0b25lc1t0XS5vZmYoKTtcblx0XHRcdGNsZWFySW50ZXJ2YWwodG9uZUludGVydmFsKTtcblx0XHR9XG5cblx0XHR0Kys7XG5cblx0fSwgNTAwKTtcbn1cblxuXG4iXX0=
