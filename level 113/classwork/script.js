let increaseButton = document.getElementById('increaseButton');
let decreaseButton = document.getElementById('decreaseButton');
let resizableDiv = document.getElementById('resizableDiv');

increaseButton.onclick = function() {
    resizableDiv.classList.add('increase-size');
    resizableDiv.classList.remove('decrease-size');
}

decreaseButton.onclick = function() {
    resizableDiv.classList.add('decrease-size');
    resizableDiv.classList.remove('increase-size');
}
