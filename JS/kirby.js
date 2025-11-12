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

// Boundaries
const minX = 200;
const maxX = window.innerWidth - 200;
const minY = 250;
const maxY = window.innerHeight - 350;

// Messages Kirby can say - NO EMOJIS
const kirbyMessages = [
    "I want to dance!",
    "Dame un Besame!",
    "I love this song!",
    "Watch me dance!",
    "This music is amazing!",
    "Let's dance!",
    "Dame amor... o dame un solo beso!"
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

// Auto-start music and dancing
setTimeout(() => {
    startDancing();

    // Try to play music
    const playPromise = musicPlayer.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Music is playing!");
        }).catch(err => {
            console.log("Music autoplay blocked by browser - Click anywhere to start music");
            // Allow click anywhere to start music
            document.addEventListener('click', () => {
                musicPlayer.play();
            }, { once: true });
        });
    }
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
    kirbyX = Math.max(minX, Math.min(window.innerWidth - 200, kirbyX));
    kirbyY = Math.max(minY, Math.min(window.innerHeight - 350, kirbyY));
});

// Create status panel with info
function createStatusPanel() {
    const status = document.createElement('div');
    status.className = 'status-panel';
    status.innerHTML = `
        <p>Kirby is dancing automatically to Juan Gabriel's "Dame un Besame"! Watch him move, talk, and dance!</p>
    `;
    body.appendChild(status);
}

createStatusPanel();

console.log("Kirby Automatic Dance Project - Music plays automatically!");
