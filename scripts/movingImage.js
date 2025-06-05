const image = document.getElementById('sigma');
let topP = 50;
let leftP = 50;

window.addEventListener('keydown', function(event){
    const step = 100;
    switch(event.key) {
        case 'ArrowUp':
            topP = topP - step;
            break;
        case 'ArrowDown':
            topP = topP + step;
            break;
        case 'ArrowLeft':
            leftP = leftP - step;
            break;
        case 'ArrowRight':
            leftP = leftP + step;
            break;
    }
    image.style.top = `${topP}px`;
    image.style.left = `${leftP}px`;
});

