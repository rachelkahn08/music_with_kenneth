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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhdWRpb0N0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xuXG5jbGFzcyBOb2lzZSB7XG5cdGNvbnN0cnVjdG9yKGZyZXF1ZW5jeSA9IDIwMCkge1xuXHRcdHRoaXMub3NjaWxsYXRvciA9IGF1ZGlvQ3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcblx0XHR0aGlzLm9zY2lsbGF0b3IudHlwZSA9ICdzaW5lJztcblx0XHR0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gZnJlcXVlbmN5OyAvLyB2YWx1ZSBpbiBoZXJ0elxuXHRcdHRoaXMub3NjaWxsYXRvci5zdGFydCgpO1xuXG5cdFx0dGhpcy5nYWluTm9kZSA9IGF1ZGlvQ3R4LmNyZWF0ZUdhaW4oKTtcblx0XHR0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjA7XG5cblx0XHR0aGlzLm9zY2lsbGF0b3IuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcblx0XHR0aGlzLmdhaW5Ob2RlLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXHR9XG5cdG9uKCkge1xuXHRcdHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuMjtcblx0fVxuXHRvZmYoKSB7XG5cdFx0dGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMDtcblx0fVxufVxuXG5jbGFzcyBOb2lzZVZpc3VhbEVsZW1lbnQge1xuXHRjb25zdHJ1Y3RvcihwYXJhbSkge1xuXHRcdC8vIGNvbnNvbGUuZGlyKHBhcmFtKTtcblx0XHR0aGlzLm5vaXNlTm9kZSA9IHBhcmFtLk5vaXNlO1xuXHRcdHRoaXMubm9pc2VJZCA9IHBhcmFtLm5vaXNlSWQ7XG5cdFx0dGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5kb21FbGVtZW50LmlkID0gdGhpcy5ub2lzZUlkO1xuXHRcdHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub2lzZUVsZW1lbnQnKTtcblx0XHR0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm9pc2UnICsgdGhpcy5ub2lzZUlkKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cdH1cbn1cblxuY2xhc3MgTm9pc2VTd2l0Y2gge1xuXHRjb25zdHJ1Y3RvcihwYXJhbSkge1xuXHRcdHRoaXMubm9pc2VOb2RlID0gcGFyYW0ubm9pc2VOb2RlO1xuXHRcdHRoaXMuZG9tRWxlbWVudCA9IHBhcmFtLmRvbUVsZW1lbnQ7XG5cdFx0dGhpcy5zd2l0Y2hPbk9mZiA9IHRoaXMuc3dpdGNoT25PZmYuYmluZCh0aGlzKTtcblx0XHR0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnN3aXRjaE9uT2ZmKTtcblx0fVxuXG5cdHN3aXRjaE9uT2ZmKCkge1xuXHRcdGNvbnNvbGUuZGlyKHRoaXMpO1xuXG5cdFx0aWYgKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHR0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0XHR0aGlzLm5vaXNlTm9kZS5vZmYoKTtcdFxuXHRcdH0gZWxzZSBpZiAoIXRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHR0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHR0aGlzLm5vaXNlTm9kZS5vbigpO1xuXHRcdH1cblx0fVxufVxuXHRcblxudmFyIG5vaXNlcyA9IFtdO1xuZm9yICh2YXIgeCA9IDA7IHggPD0gMTU7IHgrKykge1xuXHRub2lzZXMucHVzaChbXSk7XG5cblx0Zm9yICh2YXIgeSA9IDA7IHkgPD0gMTU7IHkrKykge1xuXHRcdHZhciBwYXJhbSA9IHt9O1xuXHRcdHZhciBub2lzZUlkO1xuXG5cdFx0aWYgKCB4IDwgMTAgJiYgeSA8IDEwICkge1xuXHRcdFx0bm9pc2VJZCA9IGAwJHt4fV8wJHt5fWA7XG5cdFx0fSBlbHNlIGlmICggeCA8IDEwICYmIHkgPj0gMTAgKSB7XG5cdFx0XHRub2lzZUlkID0gYDAke3h9XyR7eX1gO1xuXHRcdH0gZWxzZSBpZiAoIHggPj0gMTAgJiYgeSA+PSAxMCApIHsgXG5cdFx0XHRub2lzZUlkID0gYCR7eH1fJHt5fWA7XG5cdFx0fVxuXG5cdFx0cGFyYW0uTm9pc2UgPSBuZXcgTm9pc2UoMjAgKiB5KTtcblx0XHRwYXJhbS5ub2lzZUlkID0gbm9pc2VJZDtcblxuXHRcdHZhciBub2lzZVZpc3VhbEVsZW1lbnQgPSBuZXcgTm9pc2VWaXN1YWxFbGVtZW50KHBhcmFtKTtcblx0XHRub2lzZXNbeF1beV0gPSBuZXcgTm9pc2VTd2l0Y2gobm9pc2VWaXN1YWxFbGVtZW50KTtcblxuXHR9XG59XG5cbi8vIGNvbnNvbGUubG9nKG5vaXNlcyk7XG5cbi8vIFdIQVQgTkVFRFMgVE8gSEFQUEVOIElOIFBMQUlOIEVOR0xJU0g6XG4vLyAxLiBhbGwgc291bmRzIGdlbmVyYXRlXG5cdC8vIGV2ZXJ5IHJvdyBoYXMgc2FtZSBmcmVxdWVuY3lcblx0Ly8gXG5cbi8vIDIuIGxvb3AgdGhyb3VnaCBlYWNoIGNvbHVtblxuLy8gMy4gY2hlY2sgZWFjaCBpdGVtIGluIGVhY2ggY29sdW1uIGZvciB0cnVlL2ZhbHNlXG4vLyA0LiB0dXJuIHNvdW5kIG9uIGZvciBlYWNoIGl0ZW0gdGhhdCByZXR1cm5zIHRydWVcbi8vIDUuIFxuXG4iXX0=
