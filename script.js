// Wiggle and Glow Pins Randomly
document.querySelectorAll('.pin').forEach(pin => {
    setInterval(() => {
        pin.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        setTimeout(() => {
            pin.style.transform = 'rotate(0)';
        }, 300);
    }, Math.random() * 3000 + 2000); // Random interval between 2-5 seconds
});

// Add hover descriptions
document.querySelectorAll('.pin').forEach(pin => {
    pin.addEventListener('mouseover', () => {
        const desc = document.createElement('div');
        desc.className = 'tooltip';
        desc.innerText = pin.dataset.description;
        pin.appendChild(desc);
    });

    pin.addEventListener('mouseout', () => {
        const tooltip = pin.querySelector('.tooltip');
        if (tooltip) pin.removeChild(tooltip);
    });
});

// Play Music for Music Pin
const musicPin = document.getElementById('pin-music');
const audio = new Audio('doodoodoo.wav');

musicPin.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicPin.style.filter = 'brightness(1.8)'; // Visual indicator
    } else {
        audio.pause();
        musicPin.style.filter = 'none';
    }
});
