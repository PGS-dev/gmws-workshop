const first = document.querySelector('#number1');
const second = document.querySelector('#number2');
const result = document.querySelector('.result');

if (window.Worker) {
	console.log('MAIN: Web worker available.')
	const myWorker = new Worker("worker.js");

	first.onchange = function() {
	  myWorker.postMessage([first.value, second.value]);
	  console.log('MAIN: Message posted to worker - first input value has changed.');
	}

	second.onchange = function() {
	  myWorker.postMessage([first.value, second.value]);
	  console.log('MAIN: Message posted to worker - second input value has changed.');
	}

	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('MAIN: Message with a result received from worker.');
	}
} else {
	console.log('MAIN: Web workers are not supported by your browser.');
}