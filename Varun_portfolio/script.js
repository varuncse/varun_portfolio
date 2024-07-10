// Accessibility features to increase/decrease font size or change colours

document.getElementById('increase-font').addEventListener('click', function() {
    increaseFontSize();
});

document.getElementById('decrease-font').addEventListener('click', function() {
    decreaseFontSize();
});

document.getElementById('change-colors').addEventListener('click', function() {
    changeColors();
});

function increaseFontSize() {
    document.body.style.fontSize = '18px'; 
}

function decreaseFontSize() {
    document.body.style.fontSize = '14px'; 
}

function changeColors() {
    document.body.style.backgroundColor = '#FFFDD0'; 
    document.body.style.color = '#333'; 
}