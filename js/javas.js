
function changeColor() {
    const colors = ['#46FF12', '#33FF57', '#3357FF', '#FFFF33', '#FF33FF'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}