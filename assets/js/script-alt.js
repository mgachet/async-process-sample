if (window.Worker) {
    const myWorker = new Worker("assets/js/time-counter.js");
    myWorker.postMessage([5000]);
    console.log("Message posted to Worker ");
    myWorker.onmessage = function (e) {
        console.log(e.data);
        document.querySelector('button')
            .classList.remove('display-none');
    }
}
