onmessage = function(e) {
    console.log('Worker: Message received from main script');

    if (isNaN(e.data[0]) || isNaN(e.data[1])) {
        postMessage('Please write two numbers');
    } else {
        let result = e.data[0] * e.data[1];
        let workerResult = 'Result: ' + result;
        postMessage(workerResult);
    }
  }