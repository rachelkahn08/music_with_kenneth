var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

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
		this.oscillator = audioCtx.createOscillator();
		this.oscillator.type = 'sine';
		this.oscillator.frequency.value = frequency; // value in hertz

		this.gainNode = audioCtx.createGain();
		this.gainNode.gain.value = 0.0;

		this.oscillator.connect(this.gainNode);
		this.gainNode.connect(audioCtx.destination);
		this.context = audioCtx;
	}

	play() {
		this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
		this.gainNode.gain.linearRampToValueAtTime(3, this.context.currentTime + 0.35);
		        
		this.oscillator.start(this.context.currentTime);
		this.stop();
	}

	stop() {
		let stopTime = this.context.currentTime + 3;
		this.gainNode.gain.exponentialRampToValueAtTime(0.001, stopTime);
        this.oscillator.stop(stopTime + 0.05);
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
		rootNote: c3,
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
			var playerColumn = document.createElement('div');
				playerColumn.classList.add('player__column');

			for (var y = 0; y < column.length; y++) {
				let noteButton = column[y].noteButton;
					noteButton.addEventListener('click', column[y].switchOnOff);

				playerColumn.appendChild(noteButton);
			}

			appPlayer.appendChild(playerColumn);
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
					note.play();

					setTimeout(function() {
						noteButton.classList.remove('playing');
					}, 500);
				} 
			}

			x++;

			if (x == columns.length) {
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGF1ZGlvQ3R4ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKCk7XG5cbmNvbnN0IGZyZXF1ZW5jaWVzID0gW1x0XG5cdDEzMC44MSxcblx0MTM4LjU5LFxuXHQxNDYuODMsXG5cdDE1NS41Nixcblx0MTY0LjgxLFxuXHQxNzQuNjEsXG5cdDE4NS4wMCxcblx0MTk2LjAwLFxuXHQyMDcuNjUsXG5cdDIyMC4wMCxcblx0MjMzLjA4LFxuXHQyNDYuOTQsXG5cdDI2MS42Myxcblx0Mjc3LjE4LFxuXHQyOTMuNjYsXG5cdDMxMS4xMyxcblx0MzI5LjYzLFxuXHQzNDkuMjMsXG5cdDM2OS45OSxcblx0MzkyLjAwLFxuXHQ0MTUuMzAsXG5cdDQ0MC4wMCxcblx0NDY2LjE2LFxuXHQ0OTMuODgsXG5cdDUyMy4yNSxcblx0NTU0LjM3LFxuXHQ1ODcuMzMsXG5cdDYyMi4yNSxcblx0NjU5LjI1LFxuXHQ2OTguNDYsXG5cdDczOS45OSxcblx0NzgzLjk5LFxuXHQ4MzAuNjEsXG5cdDg4MC4wMCxcblx0OTMyLjMzLFxuXHQ5ODcuNzcsXG5cdDEwNDYuNTAsXG5cdDExMDguNzMsXG5cdDExNzQuNjYsXG5cdDEyNDQuNTEsXG5cdDEzMTguNTEsXG5cdDEzOTYuOTEsXG5cdDE0NzkuOTgsXG5cdDE1NjcuOTgsXG5cdDE2NjEuMjIsXG5cdDE3NjAuMDAsXG5cdDE4NjQuNjYsXG5cdDE5NzUuNTMsXG5dO1xuXG5jb25zdCBcdGMyID0gZnJlcXVlbmNpZXNbMF0sXG5cdFx0Y3MyID0gZnJlcXVlbmNpZXNbMV0sXG5cdFx0ZDIgPSBmcmVxdWVuY2llc1syXSxcblx0XHRkczIgPSBmcmVxdWVuY2llc1szXSxcblx0XHRcblx0XHRlMiA9IGZyZXF1ZW5jaWVzWzRdLFxuXHRcdGYyID0gZnJlcXVlbmNpZXNbNV0sXG5cdFx0ZnMyID0gZnJlcXVlbmNpZXNbNl0sXG5cdFx0ZzIgPSBmcmVxdWVuY2llc1s3XSxcblx0XHRnczIgPSBmcmVxdWVuY2llc1s4XSxcblx0XHRhMiA9IGZyZXF1ZW5jaWVzWzldLFxuXHRcdGFzMiA9IGZyZXF1ZW5jaWVzWzEwXSxcblx0XHRcblx0XHRiMiA9IGZyZXF1ZW5jaWVzWzExXSxcblx0XHRjMyA9IGZyZXF1ZW5jaWVzWzEyXSxcblx0XHRjczMgPSBmcmVxdWVuY2llc1sxM10sXG5cdFx0ZDMgPSBmcmVxdWVuY2llc1sxNF0sXG5cdFx0ZHMzID0gZnJlcXVlbmNpZXNbMTVdLFxuXHRcdFxuXHRcdGUzID0gZnJlcXVlbmNpZXNbMTZdLFxuXHRcdGYzID0gZnJlcXVlbmNpZXNbMTddLFxuXHRcdGZzMyA9IGZyZXF1ZW5jaWVzWzE4XSxcblx0XHRnMyA9IGZyZXF1ZW5jaWVzWzE5XSxcblx0XHRnczMgPSBmcmVxdWVuY2llc1syMF0sXG5cdFx0YTMgPSBmcmVxdWVuY2llc1syMV0sXG5cdFx0YXMzID0gZnJlcXVlbmNpZXNbMjJdLFxuXHRcdFxuXHRcdGIzID0gZnJlcXVlbmNpZXNbMjNdLFxuXHRcdGM0ID0gZnJlcXVlbmNpZXNbMjRdLFxuXHRcdGNzNCA9IGZyZXF1ZW5jaWVzWzI1XSxcblx0XHRkNCA9IGZyZXF1ZW5jaWVzWzI2XSxcblx0XHRkczQgPSBmcmVxdWVuY2llc1syN10sXG5cdFx0XG5cdFx0ZTQgPSBmcmVxdWVuY2llc1syOF0sXG5cdFx0ZjQgPSBmcmVxdWVuY2llc1syOV0sXG5cdFx0ZnM0ID0gZnJlcXVlbmNpZXNbMzBdLFxuXHRcdGc0ID0gZnJlcXVlbmNpZXNbMzFdLFxuXHRcdGdzNCA9IGZyZXF1ZW5jaWVzWzMyXSxcblx0XHRhNCA9IGZyZXF1ZW5jaWVzWzMzXSxcblx0XHRhczQgPSBmcmVxdWVuY2llc1szNF0sXG5cdFx0XG5cdFx0YjQgPSBmcmVxdWVuY2llc1szNV0sXG5cdFx0YzUgPSBmcmVxdWVuY2llc1szNl0sXG5cdFx0Y3M1ID0gZnJlcXVlbmNpZXNbMzddLFxuXHRcdGQ1ID0gZnJlcXVlbmNpZXNbMzhdLFxuXHRcdGRzNSA9IGZyZXF1ZW5jaWVzWzM5XSxcblx0XHRcblx0XHRlNSA9IGZyZXF1ZW5jaWVzWzQwXSxcblx0XHRmNSA9IGZyZXF1ZW5jaWVzWzQxXSxcblx0XHRmczUgPSBmcmVxdWVuY2llc1s0Ml0sXG5cdFx0ZzUgPSBmcmVxdWVuY2llc1s0M10sXG5cdFx0Z3M1ID0gZnJlcXVlbmNpZXNbNDRdLFxuXHRcdGE1ID0gZnJlcXVlbmNpZXNbNDVdLFxuXHRcdGFzNSA9IGZyZXF1ZW5jaWVzWzQ2XSxcblx0XHRcblx0XHRiNSA9IGZyZXF1ZW5jaWVzWzQ3XSxcblx0XHRjNiA9IGZyZXF1ZW5jaWVzWzQ4XSxcblx0XHRjczYgPSBmcmVxdWVuY2llc1s0OV0sXG5cdFx0ZDYgPSBmcmVxdWVuY2llc1s1MF0sXG5cdFx0ZHM2ID0gZnJlcXVlbmNpZXNbNTFdLFxuXHRcdFxuXHRcdGU2ID0gZnJlcXVlbmNpZXNbNTJdLFxuXHRcdGY2ID0gZnJlcXVlbmNpZXNbNTNdLFxuXHRcdGZzNiA9IGZyZXF1ZW5jaWVzWzU0XSxcblx0XHRnNiA9IGZyZXF1ZW5jaWVzWzU1XSxcblx0XHRnczYgPSBmcmVxdWVuY2llc1s1Nl0sXG5cdFx0YTYgPSBmcmVxdWVuY2llc1s1N10sXG5cdFx0YXM2ID0gZnJlcXVlbmNpZXNbNThdLFxuXHRcdFxuXHRcdGI2ID0gZnJlcXVlbmNpZXNbNTldO1xuXG5jbGFzcyBOb3RlIHtcblx0Y29uc3RydWN0b3IoZnJlcXVlbmN5KSB7XG5cdFx0dGhpcy5vc2NpbGxhdG9yID0gYXVkaW9DdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuXHRcdHRoaXMub3NjaWxsYXRvci50eXBlID0gJ3NpbmUnO1xuXHRcdHRoaXMub3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgPSBmcmVxdWVuY3k7IC8vIHZhbHVlIGluIGhlcnR6XG5cblx0XHR0aGlzLmdhaW5Ob2RlID0gYXVkaW9DdHguY3JlYXRlR2FpbigpO1xuXHRcdHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuMDtcblxuXHRcdHRoaXMub3NjaWxsYXRvci5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO1xuXHRcdHRoaXMuZ2Fpbk5vZGUuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cdFx0dGhpcy5jb250ZXh0ID0gYXVkaW9DdHg7XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdHRoaXMuZ2Fpbk5vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUpO1xuXHRcdHRoaXMuZ2Fpbk5vZGUuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgzLCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUgKyAwLjM1KTtcblx0XHQgICAgICAgIFxuXHRcdHRoaXMub3NjaWxsYXRvci5zdGFydCh0aGlzLmNvbnRleHQuY3VycmVudFRpbWUpO1xuXHRcdHRoaXMuc3RvcCgpO1xuXHR9XG5cblx0c3RvcCgpIHtcblx0XHRsZXQgc3RvcFRpbWUgPSB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUgKyAzO1xuXHRcdHRoaXMuZ2Fpbk5vZGUuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDAxLCBzdG9wVGltZSk7XG4gICAgICAgIHRoaXMub3NjaWxsYXRvci5zdG9wKHN0b3BUaW1lICsgMC4wNSk7XG5cdH1cbn1cblxuY2xhc3MgU2NhbGUge1xuXHRjb25zdHJ1Y3RvcihwYXJhbXMpIHtcblx0XHR0aGlzLnJvb3ROb3RlID0gcGFyYW1zLnJvb3ROb3RlO1xuXHRcdHRoaXMuc2NhbGVOYW1lID0gcGFyYW1zLnNjYWxlTmFtZTtcblx0XHR0aGlzLm51bWJlck9mT2N0YXZlcyA9IHBhcmFtcy5udW1iZXJPZk9jdGF2ZXM7XG5cblx0XHR0aGlzLnN0YXJ0aW5nSW5kZXggPSBmcmVxdWVuY2llcy5pbmRleE9mKHRoaXMucm9vdE5vdGUpO1xuXHRcdHRoaXMuc2NhbGUgPSBbXTtcblxuXHR9XG5cblx0Z2VuZXJhdGUoKSB7XG5cdFx0bGV0IHggPSB0aGlzLnN0YXJ0aW5nSW5kZXg7XG5cblx0XHRjb25zdCB3ID0gMjtcblx0XHRjb25zdCBoID0gMTtcblx0XHRjb25zdCBvID0gMTM7XG5cblx0XHRpZiAodGhpcy5zY2FsZU5hbWUgPT0gJ21ham9yJykge1xuXHRcdFx0Ly8gUiwgVywgVywgSCwgVywgVywgVywgSFxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgaDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgaDtcblxuXHRcdFx0XHRpZiAoaSA9PSB0aGlzLm51bWJlck9mT2N0YXZlcyAtIDEpIHtcblx0XHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2NhbGVOYW1lID09ICdtaW5vcicpIHsgXG5cdFx0XHQvLyBSLCBXLCBILCBXLCBXLCBILCBXLCBXXG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZk9jdGF2ZXM7IGkrKykge1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyBoO1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3O1xuXG5cdFx0XHRcdGlmIChpID09IHRoaXMubnVtYmVyT2ZPY3RhdmVzIC0gMSkge1xuXHRcdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY2FsZU5hbWUgPT0gJ21pbm9yX2hhcm1vbmljJykgeyBcblx0XHRcdC8vIFIsIFcsIEgsIFcsIFcsIEgsIDEgMS8yLCBIXG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZk9jdGF2ZXM7IGkrKykge1xuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgaDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgaDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdyArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIGg7XG5cblx0XHRcdFx0aWYgKGkgPT0gdGhpcy5udW1iZXJPZk9jdGF2ZXMgLSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAncGVudGF0b25pY19tYWpvcicpIHtcblx0XHRcdC8vIFcgVyAxLTEvMiBzdGVwIFcgMS0xLzIgc3RlcFxuXHRcdFx0dGhpcy5udW1iZXJPZk9jdGF2ZXMgPSB0aGlzLm51bWJlck9mT2N0YXZlcyoxLjU7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZk9jdGF2ZXM7IGkrKykge1xuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdyArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHcgKyBoO1xuXG5cdFx0XHRcdGlmIChpID09IHRoaXMubnVtYmVyT2ZPY3RhdmVzIC0gMSkge1xuXHRcdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cdFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAncGVudGF0b25pY19taW5vcicpIHtcblx0XHRcdC8vIFIsIDEgMS8yLCBXLCBXLCAxIDEvMiwgV1xuXHRcdFx0dGhpcy5udW1iZXJPZk9jdGF2ZXMgPSB0aGlzLm51bWJlck9mT2N0YXZlcyoxLjU7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZk9jdGF2ZXM7IGkrKykge1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyB3ICsgaDtcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgdyArIGg7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIHc7XG5cblx0XHRcdFx0aWYgKGkgPT0gdGhpcy5udW1iZXJPZk9jdGF2ZXMgLSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVx0XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2NhbGVOYW1lID09ICdmaWZ0aHMnKSB7XG5cdFx0XHQvLyBSLCA3XG5cdFx0XHR0aGlzLm51bWJlck9mT2N0YXZlcyA9IHRoaXMubnVtYmVyT2ZPY3RhdmVzICogNC41O1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZPY3RhdmVzOyBpKyspIHtcblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIDQ7XG5cblx0XHRcdFx0aWYgKGkgPT0gdGhpcy5udW1iZXJPZk9jdGF2ZXMpIHtcblx0XHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY2FsZU5hbWUgPT0gJ2Nob3JkX21ham9yJykge1xuXHRcdFx0Ly8gUiwgNCwgM1xuXG5cdFx0XHR0aGlzLm51bWJlck9mT2N0YXZlcyA9IHRoaXMubnVtYmVyT2ZPY3RhdmVzICogMztcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mT2N0YXZlczsgaSsrKSB7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIDQ7XG5cblx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblxuXHRcdFx0XHR4ID0geCArIDM7XG5cblx0XHRcdFx0aWYgKGkgPT0gdGhpcy5udW1iZXJPZk9jdGF2ZXMpIHtcblx0XHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2NhbGVOYW1lID09ICdjaG9yZF9taW5vcicpIHtcblx0XHRcdC8vIFIsIDMsIDRcblxuXHRcdFx0dGhpcy5udW1iZXJPZk9jdGF2ZXMgPSB0aGlzLm51bWJlck9mT2N0YXZlcyAqIDM7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZk9jdGF2ZXM7IGkrKykge1xuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgMztcblxuXHRcdFx0XHR0aGlzLnNjYWxlLnB1c2goZnJlcXVlbmNpZXNbeF0pO1xuXG5cdFx0XHRcdHggPSB4ICsgNDtcblxuXHRcdFx0XHRpZiAoaSA9PSB0aGlzLm51bWJlck9mT2N0YXZlcykge1xuXHRcdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjYWxlTmFtZSA9PSAnY2hvcmRfc3VzJykge1xuXHRcdFx0Ly8gUiwgNSwgMlxuXG5cdFx0XHR0aGlzLm51bWJlck9mT2N0YXZlcyA9IHRoaXMubnVtYmVyT2ZPY3RhdmVzICogMztcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mT2N0YXZlczsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyA1O1xuXG5cdFx0XHRcdHRoaXMuc2NhbGUucHVzaChmcmVxdWVuY2llc1t4XSk7XG5cblx0XHRcdFx0eCA9IHggKyAyO1xuXG5cdFx0XHRcdGlmIChpID09IHRoaXMubnVtYmVyT2ZPY3RhdmVzKSB7XG5cdFx0XHRcdFx0dGhpcy5zY2FsZS5wdXNoKGZyZXF1ZW5jaWVzW3hdKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuc2NhbGU7XG5cdH1cbn1cblxuY2xhc3MgUGxheWVyIHtcblx0Y29uc3RydWN0b3IocGFyYW1zKSB7XG5cdFx0dGhpcy5udW1iZXJPZkJlYXRzID0gcGFyYW1zLm51bWJlck9mQmVhdHM7XG5cdFx0dGhpcy5zY2FsZSA9IHBhcmFtcy5zY2FsZTtcblx0XHR0aGlzLm5vdGVzQXJyYXkgPSBbXTtcblx0XHR0aGlzLmlkQXJyYXkgPSBbXTtcblx0fVxuXG5cdGdlbmVyYXRlUGxheWVyQXJyYXkoKSB7XG5cdFx0bGV0IGluZGV4ID0gMDtcblx0XHRsZXQgY29sdW1uID0gMDtcblxuXHRcdGZvciAodmFyIHggPSAwOyB4IDw9IHRoaXMubnVtYmVyT2ZCZWF0czsgeCsrKSB7XG5cdFx0XHQvL2NvbHVtbnMgKGFsbCB0aGUgc2FtZSBpbmRleCBudW1iZXIpXG5cdFx0XHR0aGlzLm5vdGVzQXJyYXkucHVzaChbXSk7XG5cdFx0XHR0aGlzLmlkQXJyYXkucHVzaChbXSk7XG5cblx0XHRcdGZvciAodmFyIHkgPSAwOyB5IDwgdGhpcy5zY2FsZS5sZW5ndGg7IHkrKykge1xuXHRcdFx0XHQvL3Jvd3MgKGluY3JlYXNlIGluZGV4IG51bWJlciBieSBvbmUpXG5cblx0XHRcdFx0dmFyIGNvbHVtblN0cmluZztcblx0XHRcdFx0dmFyIGluZGV4U3RyaW5nO1xuXG5cdFx0XHRcdGlmIChpbmRleCA9PSB0aGlzLnNjYWxlLmxlbmd0aCkge1xuXHRcdFx0XHRcdGluZGV4ID0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjb2x1bW4gPCAxMCkge1xuXHRcdFx0XHRcdGNvbHVtblN0cmluZyA9IGAwJHtjb2x1bW59YDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb2x1bW5TdHJpbmcgPSBjb2x1bW47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaW5kZXggPCAxMCkge1xuXHRcdFx0XHRcdGluZGV4U3RyaW5nID0gYDAke2luZGV4fWA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5kZXhTdHJpbmcgPSBpbmRleDtcblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0bGV0IGFycmF5T2JqZWN0ID0ge307XG5cdFx0XHRcdGFycmF5T2JqZWN0LmlkID0gY29sdW1uU3RyaW5nKydfJytpbmRleFN0cmluZztcblx0XHRcdFx0YXJyYXlPYmplY3QuZnJlcXVlbmN5ID0gdGhpcy5zY2FsZVtpbmRleF07XG5cdFx0XHRcdGFycmF5T2JqZWN0LnN3aXRjaE9uT2ZmID0gdGhpcy5zd2l0Y2hPbk9mZi5iaW5kKGFycmF5T2JqZWN0KTtcblxuXHRcdFx0XHRsZXQgbm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0XHRcdG5vdGVCdXR0b24uaW5uZXJIVE1MID0gYXJyYXlPYmplY3QuZnJlcXVlbmN5O1xuXHRcdFx0XHRcdG5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncGxheWVyX19idXR0b24nKTtcblxuXHRcdFx0XHRhcnJheU9iamVjdC5ub3RlQnV0dG9uID0gbm90ZUJ1dHRvbjtcblxuXHRcdFx0XHR0aGlzLm5vdGVzQXJyYXlbeF1beV0gPSBhcnJheU9iamVjdDtcblx0XHRcdFx0dGhpcy5pZEFycmF5W3hdW3ldID0gYXJyYXlPYmplY3QuaWQ7XG5cblxuXHRcdFx0XHRcblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdH1cblxuXHRcdFx0Y29sdW1uKys7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB7aWRBcnJheTogdGhpcy5pZEFycmF5LCBub3Rlc0FycmF5OiB0aGlzLm5vdGVzQXJyYXl9O1xuXHR9XG5cblx0c3dpdGNoT25PZmYoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgbm90ZUJ1dHRvbiA9IHRoaXMubm90ZUJ1dHRvbjtcblx0XHRpZiAobm90ZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHRub3RlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdH1cblx0XHRjb25zb2xlLmRpcih0aGlzKTtcblx0fVxufVxuXG52YXIgQXBwID0gKGZ1bmN0aW9uKHBhcmFtcykge1xuXHRsZXQgc2hhcmVkID0ge307XG5cblx0Y29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcblx0XHRyb290Tm90ZTogYzMsXG5cdFx0c2NhbGVOYW1lOiAnbWFqb3InLFxuXHRcdG51bWJlck9mT2N0YXZlczogMixcblx0XHRicG06IDEwMCxcblx0XHRkdXJhdGlvbjogNixcblx0XHRzaWduYXR1cmU6IFs0LCA0XSxcblx0XHRudW1iZXJPZk9jdGF2ZXM6IDIsXG5cdH07XG5cblx0aWYgKCFwYXJhbXMpIHtcblx0XHRwYXJhbXMgPSBkZWZhdWx0UGFyYW1zO1xuXHR9IFxuXG5cdHBhcmFtcy5iZWF0cyA9IHBhcmFtcy5zaWduYXR1cmVbMF07XG5cdHBhcmFtcy5tZWFzdXJlID0gcGFyYW1zLnNpZ25hdHVyZVsxXTtcblx0cGFyYW1zLm51bWJlck9mQmVhdHMgPSBwYXJhbXMuZHVyYXRpb24qcGFyYW1zLmJlYXRzO1xuXG5cdGNvbnN0IHNjYWxlID0gbmV3IFNjYWxlKHBhcmFtcyk7XG5cblx0cGFyYW1zLnNjYWxlID0gc2NhbGUuZ2VuZXJhdGUoKTtcblxuXHRsZXQgXHRwbGF5ZXIgPSBuZXcgUGxheWVyKHBhcmFtcyk7XG5cdFx0XHRwbGF5ZXJBcnJheXMgPSBwbGF5ZXIuZ2VuZXJhdGVQbGF5ZXJBcnJheSgpO1xuXHRjb25zdCBcdG5vdGVBcnJheSA9IHBsYXllckFycmF5cy5ub3Rlc0FycmF5LFxuXHRcdFx0aWRBcnJheSA9IHBsYXllckFycmF5cy5pZEFycmF5O1xuXG5cdGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyKCkge1xuXHRcdHZhciBhcHBQbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwUGxheWVyJyk7XG5cblx0XHRmb3IgKHZhciB4ID0gMDsgeCA8IG5vdGVBcnJheS5sZW5ndGg7IHgrKykge1xuXHRcdFx0dmFyIGNvbHVtbiA9IG5vdGVBcnJheVt4XTtcblx0XHRcdHZhciBwbGF5ZXJDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0cGxheWVyQ29sdW1uLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fY29sdW1uJyk7XG5cblx0XHRcdGZvciAodmFyIHkgPSAwOyB5IDwgY29sdW1uLmxlbmd0aDsgeSsrKSB7XG5cdFx0XHRcdGxldCBub3RlQnV0dG9uID0gY29sdW1uW3ldLm5vdGVCdXR0b247XG5cdFx0XHRcdFx0bm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbHVtblt5XS5zd2l0Y2hPbk9mZik7XG5cblx0XHRcdFx0cGxheWVyQ29sdW1uLmFwcGVuZENoaWxkKG5vdGVCdXR0b24pO1xuXHRcdFx0fVxuXG5cdFx0XHRhcHBQbGF5ZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29sdW1uKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBwbGF5Tm90ZXMoKSB7XG5cdFx0bGV0IHRpbWUgPSA1MDA7XG5cblx0XHRsZXQgeCA9IDA7XG5cblx0XHR2YXIgcGxheWVySW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwocGxheUNvbHVtbiwgdGltZSk7XG5cblx0XHRmdW5jdGlvbiBwbGF5Q29sdW1uKCkge1xuXHRcdFx0bGV0IGNvbHVtbnMgPSBub3RlQXJyYXlbeF07XG5cdFx0XHRcblx0XHRcdGZvciAodmFyIHkgPSAwOyB5IDwgY29sdW1ucy5sZW5ndGg7IHkrKykge1xuXHRcdFx0XHRsZXQgbm90ZUJ1dHRvbiA9IGNvbHVtbnNbeV0ubm90ZUJ1dHRvbixcblx0XHRcdFx0XHRmcmVxdWVuY3kgPSBjb2x1bW5zW3ldLmZyZXF1ZW5jeTtcblxuXHRcdFx0XHRpZiAobm90ZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coY29sdW1uc1t5XSk7XG5cdFx0XHRcdFx0bm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7XG5cdFx0XHRcdFx0dmFyIG5vdGUgPSBuZXcgTm90ZShmcmVxdWVuY3kpO1xuXHRcdFx0XHRcdG5vdGUucGxheSgpO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdG5vdGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuXHRcdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHRcdH0gXG5cdFx0XHR9XG5cblx0XHRcdHgrKztcblxuXHRcdFx0aWYgKHggPT0gY29sdW1ucy5sZW5ndGgpIHtcblx0XHRcdFx0eCA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdCgpIHtcblx0XHRnZW5lcmF0ZVBsYXllcigpO1xuXHRcdHBsYXlOb3RlcygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlUGxheWVyKCkge1xuXG5cdH1cblxuXHRzaGFyZWQuaW5pdCA9IGluaXQ7XG5cdHJldHVybiBzaGFyZWQ7XG59KCkpO1xuXG5BcHAuaW5pdCgpO1xuXG5cbiJdfQ==
