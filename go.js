var require('raspicam');

var camera = new RaspiCam({
	mode: 'photo',
	output: 'photos/' + new Date().getTime() + '.jpg'
});

camera.on("start", onStart);
camera.on("started", onStart);
camera.on("read", onRead);
camera.on("exit", onExit);
camera.on("exited", onExit);

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
};