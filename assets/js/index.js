var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
reverbjs.extend(audioCtx);

var reverbUrl = "http://reverbjs.org/Library/ErrolBrickworksKiln.m4a";
var reverbNode = audioCtx.createReverbFromUrl(reverbUrl, function() {
  reverbNode.connect(audioCtx.destination);
});


const frequencies = [	
	130.81,
	138.59,
	146.83,
	155.56,
	164.81,
	174.61,
	185.00,
	196.00,
	207.65,
	220.00,
	233.08,
	246.94,
	261.63,
	277.18,
	293.66,
	311.13,
	329.63,
	349.23,
	369.99,
	392.00,
	415.30,
	440.00,
	466.16,
	493.88,
	523.25,
	554.37,
	587.33,
	622.25,
	659.25,
	698.46,
	739.99,
	783.99,
	830.61,
	880.00,
	932.33,
	987.77,
	1046.50,
	1108.73,
	1174.66,
	1244.51,
	1318.51,
	1396.91,
	1479.98,
	1567.98,
	1661.22,
	1760.00,
	1864.66,
	1975.53,
];

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
		this.frequency = frequency;
		this.oscillator = audioCtx.createOscillator();
		this.oscillator.type = 'sine';
		this.oscillator.frequency.value = this.frequency; // value in hertz

		this.gainNode = audioCtx.createGain();
		this.gainNode.gain.value = 0.0;

		this.oscillator.connect(this.gainNode);
		this.gainNode.connect(audioCtx.destination);
		this.context = audioCtx;
		this.delay = this.randomInRange(1, 3);
		this.play = this.play.bind(this);

	}

	randomInRange(from, to) {
		var r = Math.floor(Math.random() * ( to - from ) + from);
			r = r/1000;
		return r;
	}

	play() {
		let gainValue = undefined;

		if (this.frequency > 1000) {
			gainValue = 0.7;
		} else {
			gainValue = 0.8;
		}

		this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
		this.gainNode.gain.linearRampToValueAtTime(gainValue, (this.context.currentTime + 0.08 + this.delay));
		        
		this.oscillator.start(this.context.currentTime);
		this.stop();
	}

	stop() {
		let stopTime = this.context.currentTime + 2;
		this.gainNode.gain.exponentialRampToValueAtTime(0.001, stopTime);
        this.oscillator.stop(stopTime + 0.05);
	}

	tweakStartTime() {
		setTimeout(this.play, this.delay);
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
		const o = 13;

		if (this.scaleName == 'major') {
			// R, W, W, H, W, W, W, H

			for (var i = 0; i < this.numberOfOctaves; i++) {

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

				if (i == this.numberOfOctaves - 1) {
					this.scale.push(frequencies[x]);
				}
			}
		}

		if (this.scaleName == 'minor') { 
			// R, W, H, W, W, H, W, W

			for (var i = 0; i < this.numberOfOctaves; i++) {

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

				if (i == this.numberOfOctaves - 1) {
					this.scale.push(frequencies[x]);
				}
			}
		}

		if (this.scaleName == 'minor_harmonic') { 
			// R, W, H, W, W, H, 1 1/2, H

			for (var i = 0; i < this.numberOfOctaves; i++) {
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

				if (i == this.numberOfOctaves - 1) {
					this.scale.push(frequencies[x]);
				}
			}
		}

		if (this.scaleName == 'pentatonic_major') {
			// W W 1-1/2 step W 1-1/2 step
			this.numberOfOctaves = this.numberOfOctaves*1.5;

			for (var i = 0; i < this.numberOfOctaves; i++) {
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

				if (i == this.numberOfOctaves - 1) {
					this.scale.push(frequencies[x]);
				}
			}	
		}

		if (this.scaleName == 'pentatonic_minor') {
			// R, 1 1/2, W, W, 1 1/2, W
			this.numberOfOctaves = this.numberOfOctaves*1.5;

			for (var i = 0; i < this.numberOfOctaves; i++) {

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

				if (i == this.numberOfOctaves - 1) {
					this.scale.push(frequencies[x]);
				}
			}	
		}

		if (this.scaleName == 'fifths') {
			// R, 7
			this.numberOfOctaves = this.numberOfOctaves * 4.5;

			for (var i = 0; i < this.numberOfOctaves; i++) {
				this.scale.push(frequencies[x]);

				x = x + 4;

				if (i == this.numberOfOctaves) {
					this.scale.push(frequencies[x]);
				}

			}
		}

		if (this.scaleName == 'chord_major') {
			// R, 4, 3

			this.numberOfOctaves = this.numberOfOctaves * 3;

			for (var i = 0; i < this.numberOfOctaves; i++) {

				this.scale.push(frequencies[x]);

				x = x + 4;

				this.scale.push(frequencies[x]);

				x = x + 3;

				if (i == this.numberOfOctaves) {
					this.scale.push(frequencies[x]);
				}
			}
		}

		if (this.scaleName == 'chord_minor') {
			// R, 3, 4

			this.numberOfOctaves = this.numberOfOctaves * 3;

			for (var i = 0; i < this.numberOfOctaves; i++) {
				this.scale.push(frequencies[x]);

				x = x + 3;

				this.scale.push(frequencies[x]);

				x = x + 4;

				if (i == this.numberOfOctaves) {
					this.scale.push(frequencies[x]);
				}

			}
		}

		if (this.scaleName == 'chord_sus') {
			// R, 5, 2

			this.numberOfOctaves = this.numberOfOctaves * 3;

			for (var i = 0; i < this.numberOfOctaves; i++) {
				this.scale.push(frequencies[x]);

				x = x + 5;

				this.scale.push(frequencies[x]);

				x = x + 2;

				if (i == this.numberOfOctaves) {
					this.scale.push(frequencies[x]);
				}

			}
		}

		return this.scale;
	}
}

class Player {
	constructor(params) {
		this.numberOfBeats = params.numberOfBeats;
		this.scale = params.scale;
		this.notesArray = [];
		this.idArray = [];
	}

	generatePlayerArray() {
		let index = 0;
		let column = 0;

		for (var x = 0; x <= this.numberOfBeats; x++) {
			//columns (all the same index number)
			this.notesArray.push([]);
			this.idArray.push([]);

			for (var y = 0; y < this.scale.length; y++) {
				//rows (increase index number by one)

				var columnString;
				var indexString;

				if (index == this.scale.length) {
					index = 0;
				}

				if (column < 10) {
					columnString = `0${column}`;
				} else {
					columnString = column;
				}

				if (index < 10) {
					indexString = `0${index}`;
				} else {
					indexString = index;
				}


				let arrayObject = {};
				arrayObject.id = columnString+'_'+indexString;
				arrayObject.frequency = this.scale[index];
				arrayObject.switchOnOff = this.switchOnOff.bind(arrayObject);

				let noteButton = document.createElement('button');
					noteButton.id = arrayObject.id;
					noteButton.innerHTML = arrayObject.frequency;
					noteButton.classList.add('player__button');

				arrayObject.noteButton = noteButton;

				this.notesArray[x][y] = arrayObject;
				this.idArray[x][y] = arrayObject.id;


				
				index++;
			}

			column++;
		}
		
		return {idArray: this.idArray, notesArray: this.notesArray};
	}

	switchOnOff(e) {
		e.preventDefault();
		let noteButton = this.noteButton;
		if (noteButton.classList.contains('active')) {
			noteButton.classList.remove('active');
		} else {
			noteButton.classList.add('active');
		}
		console.dir(this);
	}
}

var App = (function(params) {
	let shared = {};

	const defaultParams = {
		rootNote: a2,
		scaleName: 'pentatonic_minor',
		numberOfOctaves: 2,
		bpm: 100,
		duration: 6,
		signature: [4, 4],
		numberOfOctaves: 2,
	};

	if (!params) {
		params = defaultParams;
	} 

	params.beats = params.signature[0];
	params.measure = params.signature[1];
	params.numberOfBeats = params.duration*params.beats;

	const scale = new Scale(params);

	params.scale = scale.generate();

	let 	player = new Player(params);
			playerArrays = player.generatePlayerArray();
	const 	noteArray = playerArrays.notesArray,
			idArray = playerArrays.idArray;

	function generatePlayer() {
		var appPlayer = document.getElementById('appPlayer');

		for (var x = 0; x < noteArray.length; x++) {
			var column = noteArray[x];
			console.log(column.length);
			var playerColumn = document.createElement('div');
				playerColumn.classList.add('player__column');

			appPlayer.appendChild(playerColumn);

			for (var y = 0; y < column.length; y++) {
				let noteButton = column[y].noteButton;
					noteButton.addEventListener('click', column[y].switchOnOff);

				playerColumn.appendChild(noteButton);
			}

			
			//console.log('append');
		}
	}

	function playNotes() {
		let time = 500;

		let x = 0;

		var playerInterval = window.setInterval(playColumn, time);

		function playColumn() {
			let columns = noteArray[x];

			
			for (var y = 0; y < columns.length; y++) {
				let noteButton = columns[y].noteButton,
					frequency = columns[y].frequency;

				if (noteButton.classList.contains('active')) {
					console.log(columns[y]);
					noteButton.classList.add('playing');
					var note = new Note(frequency);
					note.tweakStartTime();

					setTimeout(function() {
						noteButton.classList.remove('playing');
					}, 500);
				} 
			}

			x++;

			if (x == params.numberOfBeats) {
				x = 0;
			}
		}
	}

	function init() {
		generatePlayer();
		playNotes();
	}

	function updatePlayer() {

	}

	shared.init = init;
	return shared;
}());

App.init();



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhdWRpb0N0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xucmV2ZXJianMuZXh0ZW5kKGF1ZGlvQ3R4KTtcblxudmFyIHJldmVyYlVybCA9IFwiaHR0cDovL3JldmVyYmpzLm9yZy9MaWJyYXJ5L0Vycm9sQnJpY2t3b3Jrc0tpbG4ubTRhXCI7XG52YXIgcmV2ZXJiTm9kZSA9IGF1ZGlvQ3R4LmNyZWF0ZVJldmVyYkZyb21VcmwocmV2ZXJiVXJsLCBmdW5jdGlvbigpIHtcbiAgcmV2ZXJiTm9kZS5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcbn0pO1xuXG5cbmNvbnN0IGZyZXF1ZW5jaWVzID0gW1x0XG5cdDEzMC44MSxcblx0MTM4LjU5LFxuXHQxNDYuODMsXG5cdDE1NS41Nixcblx0MTY0LjgxLFxuXHQxNzQuNjEsXG5cdDE4NS4wMCxcblx0MTk2LjAwLFxuXHQyMDcuNjUsXG5cdDIyMC4wMCxcblx0MjMzLjA4LFxuXHQyNDYuOTQsXG5cdDI2MS42Myxcblx0Mjc3LjE4LFxuXHQyOTMuNjYsXG5cdDMxMS4xMyxcblx0MzI5LjYzLFxuXHQzNDkuMjMsXG5cdDM2OS45OSxcblx0MzkyLjAwLFxuXHQ0MTUuMzAsXG5cdDQ0MC4wMCxcblx0NDY2LjE2LFxuXHQ0OTMuODgsXG5cdDUyMy4yNSxcblx0NTU0LjM3LFxuXHQ1ODcuMzMsXG5cdDYyMi4yNSxcblx0NjU5LjI1LFxuXHQ2OTguNDYsXG5cdDczOS45OSxcblx0NzgzLjk5LFxuXHQ4MzAuNjEsXG5cdDg4MC4wMCxcblx0OTMyLjMzLFxuXHQ5ODcuNzcsXG5cdDEwNDYuNTAsXG5cdDExMDguNzMsXG5cdDExNzQuNjYsXG5cdDEyNDQuNTEsXG5cdDEzMTguNTEsXG5cdDEzOTYuOTEsXG5cdDE0NzkuOTgsXG5cdDE1NjcuOTgsXG5cdDE2NjEuMjIsXG5cdDE3NjAuMDAsXG5cdDE4NjQuNjYsXG5cdDE5NzUuNTMsXG5dO1xuXG5jb25zdCBcdGMyID0gZnJlcXVlbmNpZXNbMF0sXG5cdFx0Y3MyID0gZnJlcXVlbmNpZXNbMV0sXG5cdFx0ZDIgPSBmcmVxdWVuY2llc1syXSxcblx0XHRkczIgPSBmcmVxdWVuY2llc1szXSxcblx0XHRcblx0XHRlMiA9IGZyZXF1ZW5jaWVzWzRdLFxuXHRcdGYyID0gZnJlcXVlbmNpZXNbNV0sXG5cdFx0ZnMyID0gZnJlcXVlbmNpZXNbNl0sXG5cdFx0ZzIgPSBmcmVxdWVuY2llc1s3XSxcblx0XHRnczIgPSBmcmVxdWVuY2llc1s4XSxcblx0XHRhMiA9IGZyZXF1ZW5jaWVzWzldLFxuXHRcdGFzMiA9IGZyZXF1ZW5jaWVzWzEwXSxcblx0XHRcblx0XHRiMiA9IGZyZXF1ZW5jaWVzWzExXSxcblx0XHRjMyA9IGZyZXF1ZW5jaWVzWzEyXSxcblx0XHRjczMgPSBmcmVxdWVuY2llc1sxM10sXG5cdFx0ZDMgPSBmcmVxdWVuY2llc1sxNF0sXG5cdFx0ZHMzID0gZnJlcXVlbmNpZXNbMTVdLFxuXHRcdFxuXHRcdGUzID0gZnJlcXVlbmNpZXNbMTZdLFxuXHRcdGYzID0gZnJlcXVlbmNpZXNbMTddLFxuXHRcdGZzMyA9IGZyZXF1ZW5jaWVzWzE4XSxcblx0XHRnMyA9IGZyZXF1ZW5jaWVzWzE5XSxcblx0XHRnczMgPSBmcmVxdWVuY2llc1syMF0sXG5cdFx0YTMgPSBmcmVxdWVuY2llc1syMV0sXG5cdFx0YXMzID0gZnJlcXVlbmNpZXNbMjJdLFxuXHRcdFxuXHRcdGIzID0gZnJlcXVlbmNpZXNbMjNdLFxuXHRcdGM0ID0gZnJlcXVlbmNpZXNbMjRdLFxuXHRcdGNzNCA9IGZyZXF1ZW5jaWVzWzI1XSxcblx0XHRkNCA9IGZyZXF1ZW5jaWVzWzI2XSxcblx0XHRkczQgPSBmcmVxdWVuY2llc1syN10sXG5cdFx0XG5cdFx0ZTQgPSBmcmVxdWVuY2llc1syOF0sXG5cdFx0ZjQgPSBmcmVxdWVuY2llc1syOV0sXG5cdFx0ZnM0ID0gZnJlcXVlbmNpZXNbMzBdLFxuXHRcdGc0ID0gZnJlcXVlbmNpZXNbMzFdLFxuXHRcdGdzNCA9IGZyZXF1ZW5jaWVzWzMyXSxcblx0XHRhNCA9IGZyZXF1ZW5jaWVzWzMzXSxcblx0XHRhczQgPSBmcmVxdWVuY2llc1szNF0sXG5cdFx0XG5cdFx0YjQgPSBmcmVxdWVuY2llc1szNV0sXG5cdFx0YzUgPSBmcmVxdWVuY2llc1szNl0sXG5cdFx0Y3M1ID0gZnJlcXVlbmNpZXNbMzddLFxuXHRcdGQ1ID0gZnJlcXVlbmNpZXNbMzhdLFxuXHRcdGRzNSA9IGZyZXF1ZW5jaWVzWzM5XSxcblx0XHRcblx0XHRlNSA9IGZyZXF1ZW5jaWVzWzQwXSxcblx0XHRmNSA9IGZyZXF1ZW5jaWVzWzQxXSxcblx0XHRmczUgPSBmcmVxdWVuY2llc1s0Ml0sXG5cdFx0ZzUgPSBmcmVxdWVuY2llc1s0M10sXG5cdFx0Z3M1ID0gZnJlcXVlbmNpZXNbNDRdLFxuXHRcdGE1ID0gZnJlcXVlbmNpZXNbNDVdLFxuXHRcdGFzNSA9IGZyZXF1ZW5jaWVzWzQ2XSxcblx0XHRcblx0XHRiNSA9IGZyZXF1ZW5jaWVzWzQ3XSxcblx0XHRjNiA9IGZyZXF1ZW5jaWVzWzQ4XSxcblx0XHRjczYgPSBmcmVxdWVuY2llc1s0OV0sXG5cdFx0ZDYgPSBmcmVxdWVuY2llc1s1MF0sXG5cdFx0ZHM2ID0gZnJlcXVlbmNpZXNbNTFdLFxuXHRcdFxuXHRcdGU2ID0gZnJlcXVlbmNpZXNbNTJdLFxuXHRcdGY2ID0gZnJlcXVlbmNpZXNbNTNdLFxuXHRcdGZzNiA9IGZyZXF1ZW5jaWVzWzU0XSxcblx0XHRnNiA9IGZyZXF1ZW5jaWVzWzU1XSxcblx0XHRnczYgPSBmcmVxdWVuY2llc1s1Nl0sXG5cdFx0YTYgPSBmcmVxdWVuY2llc1s1N10sXG5cdFx0YXM2ID0gZnJlcXVlbmNpZXNbNThdLFxuXHRcdFxuXHRcdGI2ID0gZnJlcXVlbmNpZXNbNTldO1xuXG5jbGFzcyBOb3RlIHtcblx0Y29uc3RydWN0b3IoZnJlcXVlbmN5KSB7XG5cdFx0dGhpcy5mcmVxdWVuY3kgPSBmcmVxdWVuY3k7XG5cdFx0dGhpcy5vc2NpbGxhdG9yID0gYXVkaW9DdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuXHRcdHRoaXMub3NjaWxsYXRvci50eXBlID0gJ3NpbmUnO1xuXHRcdHRoaXMub3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgPSB0aGlzLmZyZXF1ZW5jeTsgLy8gdmFsdWUgaW4gaGVydHpcblxuXHRcdHRoaXMuZ2Fpbk5vZGUgPSBhdWRpb0N0eC5jcmVhdGVHYWluKCk7XG5cdFx0dGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMC4wO1xuXG5cdFx0dGhpcy5vc2NpbGxhdG9yLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XG5cdFx0dGhpcy5nYWluTm9kZS5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblx0XHR0aGlzLmNvbnRleHQgPSBhdWRpb0N0eDtcblx0XHR0aGlzLmRlbGF5ID0gdGhpcy5yYW5kb21JblJhbmdlKDEsIDMpO1xuXHRcdHRoaXMucGxheSA9IHRoaXMucGxheS5iaW5kKHRoaXMpO1xuXG5cdH1cblxuXHRyYW5kb21JblJhbmdlKGZyb20sIHRvKSB7XG5cdFx0dmFyIHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoIHRvIC0gZnJvbSApICsgZnJvbSk7XG5cdFx0XHRyID0gci8xMDAwO1xuXHRcdHJldHVybiByO1xuXHR9XG5cblx0cGxheSgpIHtcblx0XHRsZXQgZ2FpblZhbHVlID0gdW5kZWZpbmVkO1xuXG5cdFx0aWYgKHRoaXMuZnJlcXVlbmN5ID4gMTAwMCkge1xuXHRcdFx0Z2FpblZhbHVlID0gMC43O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnYWluVmFsdWUgPSAwLjg7XG5cdFx0fVxuXG5cdFx0dGhpcy5nYWluTm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKDAsIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XG5cdFx0dGhpcy5nYWluTm9kZS5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKGdhaW5WYWx1ZSwgKHRoaXMuY29udGV4dC5jdXJyZW50VGltZSArIDAuMDggKyB0aGlzLmRlbGF5KSk7XG5cdFx0ICAgICAgICBcblx0XHR0aGlzLm9zY2lsbGF0b3Iuc3RhcnQodGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lKTtcblx0XHR0aGlzLnN0b3AoKTtcblx0fVxuXG5cdHN0b3AoKSB7XG5cdFx0bGV0IHN0b3BUaW1lID0gdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lICsgMjtcblx0XHR0aGlzLmdhaW5Ob2RlLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSwgc3RvcFRpbWUpO1xuICAgICAgICB0aGlzLm9zY2lsbGF0b3Iuc3RvcChzdG9wVGltZSArIDAuMDUpO1xuXHR9XG5cblx0dHdlYWtTdGFydFRpbWUoKSB7XG5cdFx0c2V0VGltZW91dCh0aGlzLnBsYXksIHRoaXMuZGVsYXkpO1xuXHR9XG59XG5cbmNsYXNzIFNjYWxlIHtcblx0Y29uc3RydWN0b3IocGFyYW1zKSB7XG5cdFx0dGhpcy5yb290Tm90ZSA9IHBhcmFtcy5yb290Tm90ZTtcblx0XHR0aGlzLnNjYWxlTmFtZSA9IHBhcmFtcy5zY2FsZU5hbWU7XG5cdFx0dGhpcy5udW1iZXJPZk9jdGF2ZXMgPSBwYXJhbXMubnVtYmVyT2ZPY3RhdmVzO1xuXG5cdFx0dGhpcy5zdGFydGluZ0luZGV4ID0gZnJlcXVlbmNpZXMuaW5kZXhPZih0aGlzLnJvb3ROb3RlKTtcblx0XHR0aGlzLnNjYWxlID0gW107XG5cblx0fVxuXG5cdGdlbmVyYXRlKCkge1xuXHRcdGxldCB4ID0gdGhpcy5zdGFydGluZ0luZGV4O1xuXG5cdFx0Y29uc3QgdyA9IDI7XG5cdFx0Y29uc3QgaCA9IDE7XG5cdFx0Y29uc3QgbyA9IDEzO1xuXG5cdFx0aWYgKHRoaXMuc2NhbGVOYW1lID09ICdtYWpvcicpIHtcblx0XHRcdC8vIFIsIFcsIFcsIEgsIFcsIFcsIFcsIEhcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mT2N0YXZlczsgaSsrKSB7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIGg7XG5cblx0XHRcdFx0aWYgKGkgPT0gdGhpcy5udW1iZXJPZk9jdGF2ZXMgLSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAnbWlub3InKSB7IFxuXHRcdFx0Ly8gUiwgVywgSCwgVywgVywgSCwgVywgV1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgaDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgaDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHRpZiAoaSA9PSB0aGlzLm51bWJlck9mT2N0YXZlcyAtIDEpIHtcblx0XHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2NhbGVOYW1lID09ICdtaW5vcl9oYXJtb25pYycpIHsgXG5cdFx0XHQvLyBSLCBXLCBILCBXLCBXLCBILCAxIDEvMiwgSFxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHcgKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyBoO1xuXG5cdFx0XHRcdGlmIChpID09IHRoaXMubnVtYmVyT2ZPY3RhdmVzIC0gMSkge1xuXHRcdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY2FsZU5hbWUgPT0gJ3BlbnRhdG9uaWNfbWFqb3InKSB7XG5cdFx0XHQvLyBXIFcgMS0xLzIgc3RlcCBXIDEtMS8yIHN0ZXBcblx0XHRcdHRoaXMubnVtYmVyT2ZPY3RhdmVzID0gdGhpcy5udW1iZXJPZk9jdGF2ZXMqMS41O1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHcgKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3ICsgaDtcblxuXHRcdFx0XHRpZiAoaSA9PSB0aGlzLm51bWJlck9mT2N0YXZlcyAtIDEpIHtcblx0XHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XHRcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY2FsZU5hbWUgPT0gJ3BlbnRhdG9uaWNfbWlub3InKSB7XG5cdFx0XHQvLyBSLCAxIDEvMiwgVywgVywgMSAxLzIsIFdcblx0XHRcdHRoaXMubnVtYmVyT2ZPY3RhdmVzID0gdGhpcy5udW1iZXJPZk9jdGF2ZXMqMS41O1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdyArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHcgKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdGlmIChpID09IHRoaXMubnVtYmVyT2ZPY3RhdmVzIC0gMSkge1xuXHRcdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cdFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAnZmlmdGhzJykge1xuXHRcdFx0Ly8gUiwgN1xuXHRcdFx0dGhpcy5udW1iZXJPZk9jdGF2ZXMgPSB0aGlzLm51bWJlck9mT2N0YXZlcyAqIDQuNTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mT2N0YXZlczsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyA0O1xuXG5cdFx0XHRcdGlmIChpID09IHRoaXMubnVtYmVyT2ZPY3RhdmVzKSB7XG5cdFx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2NhbGVOYW1lID09ICdjaG9yZF9tYWpvcicpIHtcblx0XHRcdC8vIFIsIDQsIDNcblxuXHRcdFx0dGhpcy5udW1iZXJPZk9jdGF2ZXMgPSB0aGlzLm51bWJlck9mT2N0YXZlcyAqIDM7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZk9jdGF2ZXM7IGkrKykge1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyA0O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyAzO1xuXG5cdFx0XHRcdGlmIChpID09IHRoaXMubnVtYmVyT2ZPY3RhdmVzKSB7XG5cdFx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAnY2hvcmRfbWlub3InKSB7XG5cdFx0XHQvLyBSLCAzLCA0XG5cblx0XHRcdHRoaXMubnVtYmVyT2ZPY3RhdmVzID0gdGhpcy5udW1iZXJPZk9jdGF2ZXMgKiAzO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIDM7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIDQ7XG5cblx0XHRcdFx0aWYgKGkgPT0gdGhpcy5udW1iZXJPZk9jdGF2ZXMpIHtcblx0XHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY2FsZU5hbWUgPT0gJ2Nob3JkX3N1cycpIHtcblx0XHRcdC8vIFIsIDUsIDJcblxuXHRcdFx0dGhpcy5udW1iZXJPZk9jdGF2ZXMgPSB0aGlzLm51bWJlck9mT2N0YXZlcyAqIDM7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZk9jdGF2ZXM7IGkrKykge1xuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgNTtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgMjtcblxuXHRcdFx0XHRpZiAoaSA9PSB0aGlzLm51bWJlck9mT2N0YXZlcykge1xuXHRcdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnNjYWxlO1xuXHR9XG59XG5cbmNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKHBhcmFtcykge1xuXHRcdHRoaXMubnVtYmVyT2ZCZWF0cyA9IHBhcmFtcy5udW1iZXJPZkJlYXRzO1xuXHRcdHRoaXMuc2NhbGUgPSBwYXJhbXMuc2NhbGU7XG5cdFx0dGhpcy5ub3Rlc0FycmF5ID0gW107XG5cdFx0dGhpcy5pZEFycmF5ID0gW107XG5cdH1cblxuXHRnZW5lcmF0ZVBsYXllckFycmF5KCkge1xuXHRcdGxldCBpbmRleCA9IDA7XG5cdFx0bGV0IGNvbHVtbiA9IDA7XG5cblx0XHRmb3IgKHZhciB4ID0gMDsgeCA8PSB0aGlzLm51bWJlck9mQmVhdHM7IHgrKykge1xuXHRcdFx0Ly9jb2x1bW5zIChhbGwgdGhlIHNhbWUgaW5kZXggbnVtYmVyKVxuXHRcdFx0dGhpcy5ub3Rlc0FycmF5LnB1c2goW10pO1xuXHRcdFx0dGhpcy5pZEFycmF5LnB1c2goW10pO1xuXG5cdFx0XHRmb3IgKHZhciB5ID0gMDsgeSA8IHRoaXMuc2NhbGUubGVuZ3RoOyB5KyspIHtcblx0XHRcdFx0Ly9yb3dzIChpbmNyZWFzZSBpbmRleCBudW1iZXIgYnkgb25lKVxuXG5cdFx0XHRcdHZhciBjb2x1bW5TdHJpbmc7XG5cdFx0XHRcdHZhciBpbmRleFN0cmluZztcblxuXHRcdFx0XHRpZiAoaW5kZXggPT0gdGhpcy5zY2FsZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRpbmRleCA9IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY29sdW1uIDwgMTApIHtcblx0XHRcdFx0XHRjb2x1bW5TdHJpbmcgPSBgMCR7Y29sdW1ufWA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29sdW1uU3RyaW5nID0gY29sdW1uO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGluZGV4IDwgMTApIHtcblx0XHRcdFx0XHRpbmRleFN0cmluZyA9IGAwJHtpbmRleH1gO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluZGV4U3RyaW5nID0gaW5kZXg7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdGxldCBhcnJheU9iamVjdCA9IHt9O1xuXHRcdFx0XHRhcnJheU9iamVjdC5pZCA9IGNvbHVtblN0cmluZysnXycraW5kZXhTdHJpbmc7XG5cdFx0XHRcdGFycmF5T2JqZWN0LmZyZXF1ZW5jeSA9IHRoaXMuc2NhbGVbaW5kZXhdO1xuXHRcdFx0XHRhcnJheU9iamVjdC5zd2l0Y2hPbk9mZiA9IHRoaXMuc3dpdGNoT25PZmYuYmluZChhcnJheU9iamVjdCk7XG5cblx0XHRcdFx0bGV0IG5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdFx0XHRub3RlQnV0dG9uLmlkID0gYXJyYXlPYmplY3QuaWQ7XG5cdFx0XHRcdFx0bm90ZUJ1dHRvbi5pbm5lckhUTUwgPSBhcnJheU9iamVjdC5mcmVxdWVuY3k7XG5cdFx0XHRcdFx0bm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfX2J1dHRvbicpO1xuXG5cdFx0XHRcdGFycmF5T2JqZWN0Lm5vdGVCdXR0b24gPSBub3RlQnV0dG9uO1xuXG5cdFx0XHRcdHRoaXMubm90ZXNBcnJheVt4XVt5XSA9IGFycmF5T2JqZWN0O1xuXHRcdFx0XHR0aGlzLmlkQXJyYXlbeF1beV0gPSBhcnJheU9iamVjdC5pZDtcblxuXG5cdFx0XHRcdFxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRjb2x1bW4rKztcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHtpZEFycmF5OiB0aGlzLmlkQXJyYXksIG5vdGVzQXJyYXk6IHRoaXMubm90ZXNBcnJheX07XG5cdH1cblxuXHRzd2l0Y2hPbk9mZihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCBub3RlQnV0dG9uID0gdGhpcy5ub3RlQnV0dG9uO1xuXHRcdGlmIChub3RlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblx0XHRcdG5vdGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0fVxuXHRcdGNvbnNvbGUuZGlyKHRoaXMpO1xuXHR9XG59XG5cbnZhciBBcHAgPSAoZnVuY3Rpb24ocGFyYW1zKSB7XG5cdGxldCBzaGFyZWQgPSB7fTtcblxuXHRjb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuXHRcdHJvb3ROb3RlOiBhMixcblx0XHRzY2FsZU5hbWU6ICdwZW50YXRvbmljX21pbm9yJyxcblx0XHRudW1iZXJPZk9jdGF2ZXM6IDIsXG5cdFx0YnBtOiAxMDAsXG5cdFx0ZHVyYXRpb246IDYsXG5cdFx0c2lnbmF0dXJlOiBbNCwgNF0sXG5cdFx0bnVtYmVyT2ZPY3RhdmVzOiAyLFxuXHR9O1xuXG5cdGlmICghcGFyYW1zKSB7XG5cdFx0cGFyYW1zID0gZGVmYXVsdFBhcmFtcztcblx0fSBcblxuXHRwYXJhbXMuYmVhdHMgPSBwYXJhbXMuc2lnbmF0dXJlWzBdO1xuXHRwYXJhbXMubWVhc3VyZSA9IHBhcmFtcy5zaWduYXR1cmVbMV07XG5cdHBhcmFtcy5udW1iZXJPZkJlYXRzID0gcGFyYW1zLmR1cmF0aW9uKnBhcmFtcy5iZWF0cztcblxuXHRjb25zdCBzY2FsZSA9IG5ldyBTY2FsZShwYXJhbXMpO1xuXG5cdHBhcmFtcy5zY2FsZSA9IHNjYWxlLmdlbmVyYXRlKCk7XG5cblx0bGV0IFx0cGxheWVyID0gbmV3IFBsYXllcihwYXJhbXMpO1xuXHRcdFx0cGxheWVyQXJyYXlzID0gcGxheWVyLmdlbmVyYXRlUGxheWVyQXJyYXkoKTtcblx0Y29uc3QgXHRub3RlQXJyYXkgPSBwbGF5ZXJBcnJheXMubm90ZXNBcnJheSxcblx0XHRcdGlkQXJyYXkgPSBwbGF5ZXJBcnJheXMuaWRBcnJheTtcblxuXHRmdW5jdGlvbiBnZW5lcmF0ZVBsYXllcigpIHtcblx0XHR2YXIgYXBwUGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcFBsYXllcicpO1xuXG5cdFx0Zm9yICh2YXIgeCA9IDA7IHggPCBub3RlQXJyYXkubGVuZ3RoOyB4KyspIHtcblx0XHRcdHZhciBjb2x1bW4gPSBub3RlQXJyYXlbeF07XG5cdFx0XHRjb25zb2xlLmxvZyhjb2x1bW4ubGVuZ3RoKTtcblx0XHRcdHZhciBwbGF5ZXJDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0cGxheWVyQ29sdW1uLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fY29sdW1uJyk7XG5cblx0XHRcdGFwcFBsYXllci5hcHBlbmRDaGlsZChwbGF5ZXJDb2x1bW4pO1xuXG5cdFx0XHRmb3IgKHZhciB5ID0gMDsgeSA8IGNvbHVtbi5sZW5ndGg7IHkrKykge1xuXHRcdFx0XHRsZXQgbm90ZUJ1dHRvbiA9IGNvbHVtblt5XS5ub3RlQnV0dG9uO1xuXHRcdFx0XHRcdG5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb2x1bW5beV0uc3dpdGNoT25PZmYpO1xuXG5cdFx0XHRcdHBsYXllckNvbHVtbi5hcHBlbmRDaGlsZChub3RlQnV0dG9uKTtcblx0XHRcdH1cblxuXHRcdFx0XG5cdFx0XHQvL2NvbnNvbGUubG9nKCdhcHBlbmQnKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBwbGF5Tm90ZXMoKSB7XG5cdFx0bGV0IHRpbWUgPSA1MDA7XG5cblx0XHRsZXQgeCA9IDA7XG5cblx0XHR2YXIgcGxheWVySW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwocGxheUNvbHVtbiwgdGltZSk7XG5cblx0XHRmdW5jdGlvbiBwbGF5Q29sdW1uKCkge1xuXHRcdFx0bGV0IGNvbHVtbnMgPSBub3RlQXJyYXlbeF07XG5cblx0XHRcdFxuXHRcdFx0Zm9yICh2YXIgeSA9IDA7IHkgPCBjb2x1bW5zLmxlbmd0aDsgeSsrKSB7XG5cdFx0XHRcdGxldCBub3RlQnV0dG9uID0gY29sdW1uc1t5XS5ub3RlQnV0dG9uLFxuXHRcdFx0XHRcdGZyZXF1ZW5jeSA9IGNvbHVtbnNbeV0uZnJlcXVlbmN5O1xuXG5cdFx0XHRcdGlmIChub3RlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhjb2x1bW5zW3ldKTtcblx0XHRcdFx0XHRub3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmcnKTtcblx0XHRcdFx0XHR2YXIgbm90ZSA9IG5ldyBOb3RlKGZyZXF1ZW5jeSk7XG5cdFx0XHRcdFx0bm90ZS50d2Vha1N0YXJ0VGltZSgpO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdG5vdGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuXHRcdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHRcdH0gXG5cdFx0XHR9XG5cblx0XHRcdHgrKztcblxuXHRcdFx0aWYgKHggPT0gcGFyYW1zLm51bWJlck9mQmVhdHMpIHtcblx0XHRcdFx0eCA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdCgpIHtcblx0XHRnZW5lcmF0ZVBsYXllcigpO1xuXHRcdHBsYXlOb3RlcygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlUGxheWVyKCkge1xuXG5cdH1cblxuXHRzaGFyZWQuaW5pdCA9IGluaXQ7XG5cdHJldHVybiBzaGFyZWQ7XG59KCkpO1xuXG5BcHAuaW5pdCgpO1xuXG5cbiJdfQ==
