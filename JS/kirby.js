// Kirby Automatic Dance Project - Fully Automatic
// Student Project - Semester 2

// Get elements
const kirbyContainer = document.querySelector('.kirby-container');
const body = document.body;
const musicPlayer = document.getElementById('backgroundMusic');

// Kirby position
let kirbyX = window.innerWidth / 2;
let kirbyY = window.innerHeight / 2;
const moveSpeed = 2; // pixels per frame

// State variables
let isTalking = false;
let currentMessage = 0;
let currentDirection = 'right';
let directionChangeTimer = 0;

// Boundaries - Kirby stays away from Juan Gabriel GIF area
const minX = 400; // Keep Kirby away from left side (Juan Gabriel area)
const maxX = window.innerWidth - 250;
const minY = 250;
const maxY = window.innerHeight - 250;

// Messages Kirby can say - NO EMOJIS
const kirbyMessages = [
    "Poyo! Poyo!",
    "Dame un Besame!",
    "I love this song!",
    "Watch me dance!",
    "This music is amazing!",
    "Poyo poyo!",
    "Let's dance!",
    "Dame amor... dame besame!"
];

// Create speech bubble
function createSpeechBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'speech-bubble';
    bubble.id = 'speechBubble';
    body.appendChild(bubble);
}

createSpeechBubble();
const speechBubble = document.getElementById('speechBubble');

// Set volume
musicPlayer.volume = 0.5;

// Auto-start music and dancing - NO BUTTON
setTimeout(() => {
    musicPlayer.play().catch(err => {
        console.log("Music autoplay blocked by browser - will still dance");
    });
    startDancing();
}, 500);

// Movement function
function moveKirby(direction) {
    kirbyContainer.classList.remove('moving-left', 'moving-right', 'moving-up', 'moving-down');

    switch(direction) {
        case 'left':
            if (kirbyX > minX) {
                kirbyX -= moveSpeed;
                kirbyContainer.classList.add('moving-left');
            } else {
                currentDirection = 'right';
                kirbyContainer.classList.add('bounce');
                setTimeout(() => kirbyContainer.classList.remove('bounce'), 300);
            }
            break;
        case 'right':
            if (kirbyX < maxX) {
                kirbyX += moveSpeed;
                kirbyContainer.classList.add('moving-right');
            } else {
                currentDirection = 'left';
                kirbyContainer.classList.add('bounce');
                setTimeout(() => kirbyContainer.classList.remove('bounce'), 300);
            }
            break;
        case 'up':
            if (kirbyY > minY) {
                kirbyY -= moveSpeed;
                kirbyContainer.classList.add('moving-up');
            } else {
                currentDirection = 'down';
                kirbyContainer.classList.add('bounce');
                setTimeout(() => kirbyContainer.classList.remove('bounce'), 300);
            }
            break;
        case 'down':
            if (kirbyY < maxY) {
                kirbyY += moveSpeed;
                kirbyContainer.classList.add('moving-down');
            } else {
                currentDirection = 'up';
                kirbyContainer.classList.add('bounce');
                setTimeout(() => kirbyContainer.classList.remove('bounce'), 300);
            }
            break;
    }

    kirbyContainer.style.left = kirbyX + 'px';
    kirbyContainer.style.top = kirbyY + 'px';
}

// Start dancing automatically
function startDancing() {
    kirbyContainer.classList.add('dancing');
    kirbyContainer.classList.add('dancing-hands');
    kirbyContainer.classList.add('dancing-feet');
}

// Talk function
function makeKirbyTalk() {
    if (isTalking) return;

    isTalking = true;
    const message = kirbyMessages[currentMessage];
    currentMessage = (currentMessage + 1) % kirbyMessages.length;

    showMessage(message);

    kirbyContainer.classList.add('talking');

    setTimeout(() => {
        kirbyContainer.classList.remove('talking');
        isTalking = false;
    }, 2500);
}

// Show speech bubble
function showMessage(message) {
    speechBubble.textContent = message;
    speechBubble.classList.add('show');

    speechBubble.style.left = (kirbyX + 50) + 'px';
    speechBubble.style.top = (kirbyY - 150) + 'px';

    setTimeout(() => {
        speechBubble.classList.remove('show');
    }, 2500);
}

// Random direction change
function changeDirection() {
    const directions = ['left', 'right', 'up', 'down'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    currentDirection = randomDirection;
}

// Main game loop - AUTOMATIC
function gameLoop() {
    moveKirby(currentDirection);

    directionChangeTimer++;
    if (directionChangeTimer > Math.random() * 150 + 100) {
        changeDirection();
        directionChangeTimer = 0;
    }

    requestAnimationFrame(gameLoop);
}

// Start everything automatically
gameLoop();
startDancing();

// Automatic talking every 6 seconds
setInterval(() => {
    if (!isTalking) {
        makeKirbyTalk();
    }
}, 6000);

// Welcome message
setTimeout(() => {
    showMessage("Watch me dance automatically!");
}, 1000);

// Second message
setTimeout(() => {
    showMessage("Poyo! I love dancing!");
}, 4000);

// Handle window resize
window.addEventListener('resize', () => {
    kirbyX = Math.max(400, Math.min(window.innerWidth - 250, kirbyX));
    kirbyY = Math.max(minY, Math.min(window.innerHeight - 250, kirbyY));
});

// Status panel removed - cleaner design

console.log("Kirby Automatic Dance Project - Music plays automatically!");
