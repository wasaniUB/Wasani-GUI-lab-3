const buttons = document.querySelectorAll('.color-btn');
// 1. Define a function called changeColor
// Inside it, use 'this' to change the background to 'yellow'
function changeColor() {
    this.style.backgroundColor = 'yellow'
}
// 2. Loop through buttons with forEach
// Attach changeColor as the click handle
buttons.forEach(function(btn) {
    btn.addEventListener('click', changeColor)
})
