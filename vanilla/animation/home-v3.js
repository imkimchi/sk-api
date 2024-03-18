function disableScrollWhileAnimation() {
    document.body.style.overflow = 'hidden';
}

function enableScrollAfterAnimation() {
    document.body.style.overflow = 'auto';
}

const customtriggerElements = ['#custom-main-trigger1', '#custom-main-trigger2', '#custom-main-trigger3', '#custom-main-trigger4'];

const functionsQueue = [
    { duration: 2000, run: function() { $(customtriggerElements[0]).click() } },
    { duration: 1000, run: function() { $(customtriggerElements[1]).click() } },
    { duration: 500, run: function() { $(customtriggerElements[2]).click() } },
    { duration: 500, run: function() { $(customtriggerElements[3]).click() } },
];

let isRunning = false;


function runNext() {
    if (functionsQueue.length > 0) {
        const nextFunction = functionsQueue.shift();
        isRunning = true;
        disableScrollWhileAnimation()
        nextFunction.run();
        setTimeout(() => {
            enableScrollAfterAnimation()
            isRunning = false;
            runNext();
        }, nextFunction.duration);
    } 
}

window.addEventListener('scroll', function() {
    if (!isRunning) {
        runNext();
    }
});
