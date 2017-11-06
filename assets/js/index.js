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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGF1ZGlvQ3R4ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKCk7XG5cbmNvbnN0IGZyZXF1ZW5jaWVzID0gWzEzMC44MSwxMzguNTksMTQ2LjgzLDE1NS41NiwxNjQuODEsMTc0LjYxLDE4NS4wMCwxOTYuMDAsMjA3LjY1LDIyMC4wMCwyMzMuMDgsMjQ2Ljk0LDI2MS42MywyNzcuMTgsMjkzLjY2LCAzMTEuMTMsMzI5LjYzLDM0OS4yMywzNjkuOTksMzkyLjAwLDQxNS4zMCw0NDAuMDAsIDQ2Ni4xNiw0OTMuODgsNTIzLjI1LDU1NC4zNyw1ODcuMzMsNjIyLjI1LDY1OS4yNSw2OTguNDYsNzM5Ljk5LDc4My45OSw4MzAuNjEsODgwLjAwLDkzMi4zMyw5ODcuNzcsMTA0Ni41MCwxMTA4LjczLDExNzQuNjYsMTI0NC41MSwxMzE4LjUxLDEzOTYuOTEsMTQ3OS45OCwxNTY3Ljk4LDE2NjEuMjIsMTc2MC4wMCwxODY0LjY2LDE5NzUuNTMsXTtcblxuY29uc3QgXHRjMiA9IGZyZXF1ZW5jaWVzWzBdLFxuXHRcdGNzMiA9IGZyZXF1ZW5jaWVzWzFdLFxuXHRcdGQyID0gZnJlcXVlbmNpZXNbMl0sXG5cdFx0ZHMyID0gZnJlcXVlbmNpZXNbM10sXG5cdFx0ZTIgPSBmcmVxdWVuY2llc1s0XSxcblx0XHRmMiA9IGZyZXF1ZW5jaWVzWzVdLFxuXHRcdGZzMiA9IGZyZXF1ZW5jaWVzWzZdLFxuXHRcdGcyID0gZnJlcXVlbmNpZXNbN10sXG5cdFx0Z3MyID0gZnJlcXVlbmNpZXNbOF0sXG5cdFx0YTIgPSBmcmVxdWVuY2llc1s5XSxcblx0XHRhczIgPSBmcmVxdWVuY2llc1sxMF0sXG5cdFx0YjIgPSBmcmVxdWVuY2llc1sxMV0sXG5cdFx0YzMgPSBmcmVxdWVuY2llc1sxMl0sXG5cdFx0Y3MzID0gZnJlcXVlbmNpZXNbMTNdLFxuXHRcdGQzID0gZnJlcXVlbmNpZXNbMTRdLFxuXHRcdGRzMyA9IGZyZXF1ZW5jaWVzWzE1XSxcblx0XHRlMyA9IGZyZXF1ZW5jaWVzWzE2XSxcblx0XHRmMyA9IGZyZXF1ZW5jaWVzWzE3XSxcblx0XHRmczMgPSBmcmVxdWVuY2llc1sxOF0sXG5cdFx0ZzMgPSBmcmVxdWVuY2llc1sxOV0sXG5cdFx0Z3MzID0gZnJlcXVlbmNpZXNbMjBdLFxuXHRcdGEzID0gZnJlcXVlbmNpZXNbMjFdLFxuXHRcdGFzMyA9IGZyZXF1ZW5jaWVzWzIyXSxcblx0XHRiMyA9IGZyZXF1ZW5jaWVzWzIzXSxcblx0XHRjNCA9IGZyZXF1ZW5jaWVzWzI0XSxcblx0XHRjczQgPSBmcmVxdWVuY2llc1syNV0sXG5cdFx0ZDQgPSBmcmVxdWVuY2llc1syNl0sXG5cdFx0ZHM0ID0gZnJlcXVlbmNpZXNbMjddLFxuXHRcdGU0ID0gZnJlcXVlbmNpZXNbMjhdLFxuXHRcdGY0ID0gZnJlcXVlbmNpZXNbMjldLFxuXHRcdGZzNCA9IGZyZXF1ZW5jaWVzWzMwXSxcblx0XHRnNCA9IGZyZXF1ZW5jaWVzWzMxXSxcblx0XHRnczQgPSBmcmVxdWVuY2llc1szMl0sXG5cdFx0YTQgPSBmcmVxdWVuY2llc1szM10sXG5cdFx0YXM0ID0gZnJlcXVlbmNpZXNbMzRdLFxuXHRcdGI0ID0gZnJlcXVlbmNpZXNbMzVdLFxuXHRcdGM1ID0gZnJlcXVlbmNpZXNbMzZdLFxuXHRcdGNzNSA9IGZyZXF1ZW5jaWVzWzM3XSxcblx0XHRkNSA9IGZyZXF1ZW5jaWVzWzM4XSxcblx0XHRkczUgPSBmcmVxdWVuY2llc1szOV0sXG5cdFx0ZTUgPSBmcmVxdWVuY2llc1s0MF0sXG5cdFx0ZjUgPSBmcmVxdWVuY2llc1s0MV0sXG5cdFx0ZnM1ID0gZnJlcXVlbmNpZXNbNDJdLFxuXHRcdGc1ID0gZnJlcXVlbmNpZXNbNDNdLFxuXHRcdGdzNSA9IGZyZXF1ZW5jaWVzWzQ0XSxcblx0XHRhNSA9IGZyZXF1ZW5jaWVzWzQ1XSxcblx0XHRhczUgPSBmcmVxdWVuY2llc1s0Nl0sXG5cdFx0YjUgPSBmcmVxdWVuY2llc1s0N10sXG5cdFx0YzYgPSBmcmVxdWVuY2llc1s0OF0sXG5cdFx0Y3M2ID0gZnJlcXVlbmNpZXNbNDldLFxuXHRcdGQ2ID0gZnJlcXVlbmNpZXNbNTBdLFxuXHRcdGRzNiA9IGZyZXF1ZW5jaWVzWzUxXSxcblx0XHRlNiA9IGZyZXF1ZW5jaWVzWzUyXSxcblx0XHRmNiA9IGZyZXF1ZW5jaWVzWzUzXSxcblx0XHRmczYgPSBmcmVxdWVuY2llc1s1NF0sXG5cdFx0ZzYgPSBmcmVxdWVuY2llc1s1NV0sXG5cdFx0Z3M2ID0gZnJlcXVlbmNpZXNbNTZdLFxuXHRcdGE2ID0gZnJlcXVlbmNpZXNbNTddLFxuXHRcdGFzNiA9IGZyZXF1ZW5jaWVzWzU4XSxcblx0XHRiNiA9IGZyZXF1ZW5jaWVzWzU5XTtcblxuY2xhc3MgTm90ZSB7XG5cdGNvbnN0cnVjdG9yKGZyZXF1ZW5jeSkge1xuXHRcdHRoaXMub3NjaWxsYXRvciA9IGF1ZGlvQ3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcblx0XHR0aGlzLm9zY2lsbGF0b3IudHlwZSA9ICdzaW5lJztcblx0XHR0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gZnJlcXVlbmN5OyAvLyB2YWx1ZSBpbiBoZXJ0elxuXHRcdHRoaXMub3NjaWxsYXRvci5zdGFydCgpO1xuXG5cdFx0dGhpcy5nYWluTm9kZSA9IGF1ZGlvQ3R4LmNyZWF0ZUdhaW4oKTtcblx0XHR0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjA7XG5cblx0XHR0aGlzLm9zY2lsbGF0b3IuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcblx0XHR0aGlzLmdhaW5Ob2RlLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXHR9XG5cdG9uKCkge1xuXHRcdHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuMjtcblx0fVxuXHRvZmYoKSB7XG5cdFx0dGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMDtcblx0fVxufVxuXG5jbGFzcyBTY2FsZSB7XG5cdGNvbnN0cnVjdG9yKHBhcmFtcykge1xuXHRcdHRoaXMucm9vdE5vdGUgPSBwYXJhbXMucm9vdE5vdGU7XG5cdFx0dGhpcy5zY2FsZU5hbWUgPSBwYXJhbXMuc2NhbGVOYW1lO1xuXHRcdHRoaXMubnVtYmVyT2ZPY3RhdmVzID0gcGFyYW1zLm51bWJlck9mT2N0YXZlcztcblxuXHRcdHRoaXMuc3RhcnRpbmdJbmRleCA9IGZyZXF1ZW5jaWVzLmluZGV4T2YodGhpcy5yb290Tm90ZSk7XG5cdFx0dGhpcy5zY2FsZSA9IFtdO1xuXG5cdH1cblxuXHRnZW5lcmF0ZSgpIHtcblx0XHRsZXQgeCA9IHRoaXMuc3RhcnRpbmdJbmRleDtcblxuXHRcdGNvbnN0IHcgPSAyO1xuXHRcdGNvbnN0IGggPSAxO1xuXHRcdGNvbnN0IG8gPSAxMjtcblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAnbWFqb3InKSB7XG5cdFx0XHQvLyBSLCBXLCBXLCBILCBXLCBXLCBXLCBIXG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZk9jdGF2ZXM7IGkrKykge1xuXHRcdFx0XHR4ID0geCArIChvICogaSk7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblx0XHRcdH1cblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpXSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgMl0pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDRdKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyA1XSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgN10pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDldKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyAxMV0pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDEyXSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgMTRdKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyAxNl0pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDE3XSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgMTldKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyAyMV0pXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2NhbGVOYW1lID09ICdtaW5vcicpIHsgXG5cdFx0XHQvLyBSLCBXLCBILCBXLCBXLCBILCBXLCBXXG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZk9jdGF2ZXM7IGkrKykge1xuXHRcdFx0XHR4ID0geCArIChvICogaSk7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblx0XHRcdH1cblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpXSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgMl0pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDNdKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyA1XSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgN10pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDhdKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyAxMF0pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDEyXSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgMTRdKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyAxNV0pXG5cdFx0XHQvLyB0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbaSArIDE3XSlcblx0XHRcdC8vIHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1tpICsgMTldKVxuXHRcdFx0Ly8gdGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW2kgKyAyMF0pXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2NhbGVOYW1lID09ICdtaW5vcl9oYXJtb25pYycpIHsgXG5cdFx0XHQvLyBSLCBXLCBILCBXLCBXLCBILCAxIDEvMiwgSFxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblx0XHRcdFx0eCA9IHggKyAobyAqIGkpO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3ICsgaDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgaDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAncGVudGF0b25pY19tYWpvcicpIHtcblx0XHRcdC8vIFcgVyAxLTEvMiBzdGVwIFcgMS0xLzIgc3RlcFxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblx0XHRcdFx0eCA9IHggKyAobyAqIGkpO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3ICsgaDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdyArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblx0XHRcdH1cdFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAncGVudGF0b25pY19taW5vcicpIHtcblx0XHRcdC8vIFIsIDEgMS8yLCBXLCBXLCAxIDEvMiwgV1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblx0XHRcdFx0eCA9IHggKyAobyAqIGkpO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3ICsgaDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdyArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblx0XHRcdH1cdFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAnZmlmdGhzJykge1xuXHRcdFx0Ly8gUiwgN1xuXHRcdFx0dGhpcy5udW1iZXJPZk9jdGF2ZXMgPSB0aGlzLm51bWJlck9mT2N0YXZlcyAqIDI7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZk9jdGF2ZXM7IGkrKykge1xuXHRcdFx0XHR4ID0geCArIChvICogaSk7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIDU7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAnY2hvcmRfbWFqb3InKSB7XG5cdFx0XHQvLyBSLCA0LCAzXG5cblx0XHRcdHRoaXMubnVtYmVyT2ZPY3RhdmVzID0gdGhpcy5udW1iZXJPZk9jdGF2ZXMgKiAyO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblx0XHRcdFx0eCA9IHggKyAobyAqIGkpO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyA0O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyAzO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY2FsZU5hbWUgPT0gJ2Nob3JkX21pbm9yJykge1xuXHRcdFx0Ly8gUiwgMywgNFxuXG5cdFx0XHR0aGlzLm51bWJlck9mT2N0YXZlcyA9IHRoaXMubnVtYmVyT2ZPY3RhdmVzICogMjtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mT2N0YXZlczsgaSsrKSB7XG5cdFx0XHRcdHggPSB4ICsgKG8gKiBpKTtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgMztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgNDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2NhbGVOYW1lID09ICdjaG9yZF9zdXMnKSB7XG5cdFx0XHQvLyBSLCA1LCAyXG5cblx0XHRcdHRoaXMubnVtYmVyT2ZPY3RhdmVzID0gdGhpcy5udW1iZXJPZk9jdGF2ZXMgKiAyO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblx0XHRcdFx0eCA9IHggKyAobyAqIGkpO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyA1O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyAyO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5zY2FsZTtcblx0fVxufVxuXG5sZXQgZGVmYXVsdFNjYWxlID0gbmV3IFNjYWxlKHtcblx0cm9vdE5vdGU6IGMyLFxuXHRzY2FsZU5hbWU6ICdtYWpvcicsXG5cdG51bWJlck9mT2N0YXZlczogMlxufSk7XG5cblx0ZGVmYXVsdFNjYWxlID0gZGVmYXVsdFNjYWxlLmdlbmVyYXRlKCk7XHRcblxuXG5jbGFzcyBBcHAge1xuXHRjb25zdHJ1Y3RvcihwYXJhbXMpIHtcblx0XHRpZiAocGFyYW1zKSB7XG5cdFx0XHR0aGlzLnNjYWxlID0gcGFyYW1zLnNjYWxlO1xuXHRcdFx0dGhpcy5icG0gPSBwYXJhbXMuYnBtO1xuXHRcdFx0dGhpcy5tZWFzdXJlcyA9IHBhcmFtcy5tZWFzdXJlcztcblx0XHRcdHRoaXMuc2lnbmF0dXJlID0gcGFyYW1zLnNpZ25hdHVyZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zY2FsZSA9IFsxMzAuODEsIDE0Ni44MywgMTY0LjgxLCAxNzQuNjEsIDE5NiwgMjIwLCAyNDYuOTQsIDI2MS42MywgNTIzLjI1LCA1ODcuMzMsIDY1OS4yNSwgNjk4LjQ2LCA3ODMuOTksIDg4MCwgOTg3Ljc3LCAxMDQ2LjVdO1xuXHRcdFx0dGhpcy5icG0gPSAxMDA7XG5cdFx0XHR0aGlzLm1lYXN1cmVzID0gNjtcblx0XHRcdHRoaXMuc2lnbmF0dXJlID0gJzRfNCc7XG5cdFx0fVx0XG5cdH1cbn1cblxuLy8gZm9yICh2YXIgeCA9IDA7IHggPD0gMTU7IHgrKykge1xuLy8gXHRub2lzZXMucHVzaChbXSk7XG5cbi8vIFx0Zm9yICh2YXIgeSA9IDA7IHkgPD0gMTU7IHkrKykge1xuLy8gXHRcdHZhciBwYXJhbSA9IHt9O1xuLy8gXHRcdHZhciBub2lzZUlkO1xuXG4vLyBcdFx0aWYgKCB4IDwgMTAgJiYgeSA8IDEwICkge1xuLy8gXHRcdFx0bm9pc2VJZCA9IGAwJHt4fV8wJHt5fWA7XG4vLyBcdFx0fSBlbHNlIGlmICggeCA8IDEwICYmIHkgPj0gMTAgKSB7XG4vLyBcdFx0XHRub2lzZUlkID0gYDAke3h9XyR7eX1gO1xuLy8gXHRcdH0gZWxzZSBpZiAoIHggPj0gMTAgJiYgeSA+PSAxMCApIHsgXG4vLyBcdFx0XHRub2lzZUlkID0gYCR7eH1fJHt5fWA7XG4vLyBcdFx0fVxuXG4vLyBcdFx0cGFyYW0uTm9pc2UgPSBuZXcgTm9pc2UoMjAgKiB5KTtcbi8vIFx0XHRwYXJhbS5ub2lzZUlkID0gbm9pc2VJZDtcblxuLy8gXHRcdHZhciBub2lzZVZpc3VhbEVsZW1lbnQgPSBuZXcgTm9pc2VWaXN1YWxFbGVtZW50KHBhcmFtKTtcbi8vIFx0XHRub2lzZXNbeF1beV0gPSBuZXcgTm9pc2VTd2l0Y2gobm9pc2VWaXN1YWxFbGVtZW50KTtcblxuLy8gXHR9XG4vLyB9XG5cblxuXG5cbi8vIGNsYXNzIE5vaXNlVmlzdWFsRWxlbWVudCB7XG4vLyBcdGNvbnN0cnVjdG9yKHBhcmFtKSB7XG4vLyBcdFx0Ly8gY29uc29sZS5kaXIocGFyYW0pO1xuLy8gXHRcdHRoaXMubm9pc2VOb2RlID0gcGFyYW0uTm9pc2U7XG4vLyBcdFx0dGhpcy5ub2lzZUlkID0gcGFyYW0ubm9pc2VJZDtcbi8vIFx0XHR0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIFx0XHR0aGlzLmRvbUVsZW1lbnQuaWQgPSB0aGlzLm5vaXNlSWQ7XG4vLyBcdFx0dGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vaXNlRWxlbWVudCcpO1xuLy8gXHRcdHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub2lzZScgKyB0aGlzLm5vaXNlSWQpO1xuLy8gXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbi8vIFx0fVxuLy8gfVxuXG4vLyBjbGFzcyBOb2lzZVN3aXRjaCB7XG4vLyBcdGNvbnN0cnVjdG9yKHBhcmFtKSB7XG4vLyBcdFx0dGhpcy5ub2lzZU5vZGUgPSBwYXJhbS5ub2lzZU5vZGU7XG4vLyBcdFx0dGhpcy5kb21FbGVtZW50ID0gcGFyYW0uZG9tRWxlbWVudDtcbi8vIFx0XHR0aGlzLnN3aXRjaE9uT2ZmID0gdGhpcy5zd2l0Y2hPbk9mZi5iaW5kKHRoaXMpO1xuLy8gXHRcdHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3dpdGNoT25PZmYpO1xuLy8gXHR9XG5cbi8vIFx0c3dpdGNoT25PZmYoKSB7XG4vLyBcdFx0Y29uc29sZS5kaXIodGhpcyk7XG5cbi8vIFx0XHRpZiAodGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbi8vIFx0XHRcdHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbi8vIFx0XHRcdHRoaXMubm9pc2VOb2RlLm9mZigpO1x0XG4vLyBcdFx0fSBlbHNlIGlmICghdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbi8vIFx0XHRcdHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbi8vIFx0XHRcdHRoaXMubm9pc2VOb2RlLm9uKCk7XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyB9XG5cblxuLy8gLy8gY29uc29sZS5sb2cobm9pc2VzKTtcblxuLy8gLy8gV0hBVCBORUVEUyBUTyBIQVBQRU4gSU4gUExBSU4gRU5HTElTSDpcbi8vIC8vIDEuIGFsbCBzb3VuZHMgZ2VuZXJhdGVcbi8vIFx0Ly8gZXZlcnkgcm93IGhhcyBzYW1lIGZyZXF1ZW5jeVxuLy8gXHQvLyBldmVyeSBjb2x1bW4gcGxheXMgYXQgdGhlIHNhbWUgdGltZVxuXG4vLyAvLyAyLiBsb29wIHRocm91Z2ggZWFjaCBjb2x1bW5cbi8vIC8vIDMuIGNoZWNrIGVhY2ggaXRlbSBpbiBlYWNoIGNvbHVtbiBmb3IgdHJ1ZS9mYWxzZVxuLy8gLy8gNC4gdHVybiBzb3VuZCBvbiBmb3IgZWFjaCBpdGVtIHRoYXQgcmV0dXJucyB0cnVlXG4vLyAvLyA1LiBcblxuZnVuY3Rpb24gdGVzdFRvbmVzKCkge1xuXHRsZXQgcGFyYW1zID0ge307XG5cdFx0cGFyYW1zLnJvb3ROb3RlID0gYzI7XG5cdFx0cGFyYW1zLnNjYWxlTmFtZSA9ICdtYWpvcic7XG5cdFx0cGFyYW1zLm51bWJlck9mT2N0YXZlcyA9IDE7XG5cblx0bGV0IHNjYWxlID0gbmV3IFNjYWxlKHBhcmFtcyk7XG5cdFx0c2NhbGUgPSBzY2FsZS5nZW5lcmF0ZSgpO1xuXHRcblx0Y3ljbGVUb25lcyhzY2FsZSk7XG59XG5cbmZ1bmN0aW9uIGN5Y2xlVG9uZXMoc2NhbGUpIHtcblx0Y29uc29sZS5sb2coc2NhbGUpO1xuXG5cdGxldCB0b25lcyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2NhbGUubGVuZ3RoICsgMTsgaSsrKSB7XG5cdFx0bGV0IHRvbmUgPSBuZXcgTm9pc2Uoc2NhbGVbaV0pO1xuXHRcdHRvbmVzLnB1c2godG9uZSk7XG5cdH1cblxuXHRsZXQgdCA9IDA7XG5cblx0dmFyIHRvbmVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYgKHQgPD0gdG9uZXMubGVuZ3RoKSB7XG5cdFx0XHR0b25lc1t0XS5vbigpO1xuXHRcdH1cblxuXHRcdGlmICh0ID4gMCkge1xuXHRcdFx0dG9uZXNbdCAtIDFdLm9mZigpO1xuXHRcdH1cblxuXHRcdGlmICh0ID09IHRvbmVzLmxlbmd0aCkge1xuXHRcdFx0dG9uZXNbdF0ub2ZmKCk7XG5cdFx0XHRjbGVhckludGVydmFsKHRvbmVJbnRlcnZhbCk7XG5cdFx0fVxuXG5cdFx0dCsrO1xuXG5cdH0sIDUwMCk7XG59XG5cblxuIl19
