const first = document.querySelector('#number1');
const second = document.querySelector('#number2');
const result = document.querySelector('.result');

if (window.Worker) {
	// create worker
	// send data to the worker
	// receive data from worker

} else {
	console.log('MAIN: web workers are not supported in your browser');
}