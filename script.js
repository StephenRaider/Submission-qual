let cursorDot = document.getElementById('cursor-dot');
let cursorCircle = document.getElementById('cursor-circle');
let circleX = 0;
let circleY = 0;

document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursorDot.style.top = `${y}px`;
    cursorDot.style.left = `${x}px`;

    // Smoothly move the circle to the new position
    if (circleX !== x || circleY !== y) {
        let dx = (x - circleX) / 5;
        let dy = (y - circleY) / 5;

        circleX += dx;
        circleY += dy;

        cursorCircle.style.top = `${circleY}px`;
        cursorCircle.style.left = `${circleX}px`;
    }
});