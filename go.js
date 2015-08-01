var RaspiCam = require('raspicam');

var today = new Date(),
	camera = new RaspiCam({
		mode: 'photo',
		output: 'photos/' + today.getFullYear() + '-' +
			pad(today.getMonth() + 1) + '-' +
			pad(today.getDate()) + '.jpg',
		nopreview: true,
		width: 2592,
		height: 1944,
		quality: 100
	});

camera.on("start", onStart);
camera.on("read", onRead);
camera.on("exit", onExit);

if (!camera.start())
	console.log('Error!');

function onStart(err, timestamp) {
	console.log('started');
	if (err) {
		console.log('Startup Error:');
		console.log(err);
	}
}
function onRead(err, timestamp, filename) {
	console.log('read');
	if (err) {
		console.log('Read Error:');
		console.log(err);
	}
}
function onExit(timestamp) {
	console.log('exited');
	camera.stop();
};

function pad(n) {
	return n > 9 ? n.toString() : ('0' + n);
}