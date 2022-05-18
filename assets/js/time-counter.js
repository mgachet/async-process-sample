onmessage = function (e) {
    console.log('Worker: Message received from main script');
    console.log('Worker: counting ' + e.data[0] + 'ms.');
    var startTime = new Date().getTime();
    // block stack until time's up
    while (new Date().getTime() < startTime + e.data[0]);
    console.log('Worker: finished counting ' + e.data[0] + 'ms.');
    postMessage("ready");

}