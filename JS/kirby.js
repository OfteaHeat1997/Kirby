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

// Auto-start music after page loads
setTimeout(() => {
    musicPlayer.play().catch(err => {
        console.log("Autoplay blocked. User interaction needed.");
        // Create click-to-start overlay
        createStartOverlay();
    });
}, 500);

// Create start overlay if autoplay is blocked
function createStartOverlay() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `;

    const message = document.createElement('div');
    message.style.cssText = `
        background: linear-gradient(135deg, #ff2d75 0%, #ff6b9d 100%);
        padding: 60px;
        border-radius: 30px;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        position: relative;
        box-shadow: 0 20px 60px rgba(255, 45, 117, 0.5);
    `;
    message.innerHTML = `
        <h1 style="color: white; margin: 0 0 20px 0; font-size: 3em;">START</h1>
        <p style="color: white; margin: 0; font-size: 1.3em; font-weight: 300;">Click to play music and watch Kirby dance!</p>
    `;

    overlay.appendChild(message);
    body.appendChild(overlay);

    overlay.addEventListener('click', () => {
        musicPlayer.play().then(() => {
            console.log("Music started successfully!");
        }).catch(err => {
            console.error("Music failed to play:", err);
            alert("Music file not found. Make sure besame.mp3 is in the music folder!");
        });
        overlay.remove();
        startDancing();
    });
}

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

// Create status panel
function createStatusPanel() {
    const status = document.createElement('div');
    status.className = 'status-panel';
    status.innerHTML = `
        <p>Kirby is dancing automatically to the music!</p>
    `;
    body.appendChild(status);
}

createStatusPanel();

console.log("Kirby Automatic Dance Project - Music plays automatically!");
