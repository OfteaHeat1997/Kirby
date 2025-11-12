# Kirby Interactive Dance Show

> An interactive web animation featuring Kirby dancing to Juan Gabriel's "Besame" with automatic movements, dynamic animations, and music synchronization.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Live Demo

Watch Kirby dance automatically with Juan Gabriel!

## Features

- **Automatic Movement** - Kirby moves around the screen automatically with intelligent boundary detection
- **Dynamic Dance Animations** - Dramatic hand waving, foot kicking, and mouth movements synced to music
- **Music Integration** - Background music playback with automatic start
- **Interactive Elements** - Speech bubbles with playful messages
- **Eye Animations** - Left eye winks while right eye blinks for personality
- **Juan Gabriel GIF** - Side-by-side dance performance with the legend himself
- **Responsive Design** - Clean, modern UI with smooth animations
- **Layered Components** - Proper z-index management for visual hierarchy

## Technologies

- **HTML5** - Semantic structure
- **CSS3** - Advanced animations, gradients, and transforms
- **Vanilla JavaScript** - No frameworks, pure DOM manipulation
- **Google Fonts** - Poppins font family
- **CSS Keyframe Animations** - Smooth, performance-optimized movements

## Project Structure

```
Kirby/
├── bodykirby.html          # Main HTML file
├── CSS/
│   └── style.css           # All styling and animations (800+ lines)
├── JS/
│   └── kirby.js            # JavaScript functionality and logic
├── music/
│   └── besame.mp3         # Juan Gabriel's music file
├── images/
│   └── juan-gabriel-dancing.gif  # GIF of Juan Gabriel
├── HOW_TO_ADD_MUSIC.txt   # Instructions for adding music
└── README.md              # This file
```

## Installation & Setup

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/OfteaHeat1997/Kirby.git
cd Kirby
```

2. Add music file:
   - Download "Besame" by Juan Gabriel
   - Rename to `besame.mp3`
   - Place in `music/` folder

3. Open in browser:
```bash
# Simply open bodykirby.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000/bodykirby.html
```

## Key Features Explained

### CSS Animations

**Dance Animations:**
- Hand movements: 3D transforms with rotation, translation, and scaling
- Foot kicks: Dynamic kicking with multi-axis movement
- Mouth dance: Opens and closes with the beat
- Eye winking: Left eye double-wink, right eye blinks

**Visual Effects:**
- Gradient backgrounds (navy blue theme)
- Smooth transitions and hover effects
- Pulsing cheeks
- Gentle floating motion
- Speech bubble animations

### JavaScript Features

**Automatic Systems:**
- Intelligent movement with boundary detection
- Random direction changes every 2-4 seconds
- Speech bubbles appear automatically every 6 seconds
- Music autoplay with fallback click-to-start

**Boundary Management:**
- Keeps Kirby in designated dance area
- Prevents overlap with Juan Gabriel GIF
- Bounces off edges with animation
- Responsive to window resizing

## Customization

### Change Colors

Edit `CSS/style.css` - Color palette:
```css
/* Navy Blue Theme */
--primary: #0f3460;
--secondary: #16213e;
--accent: #e94560;
--kirby-pink: #ff7d92;
```

### Adjust Movement Speed

Edit `JS/kirby.js`:
```javascript
const moveSpeed = 2; // Change this value (1-5 recommended)
```

### Add More Messages

Edit `JS/kirby.js`:
```javascript
const kirbyMessages = [
    "Your custom message here!",
    // Add more messages...
];
```

### Change Music

Replace `music/besame.mp3` or edit `bodykirby.html` line 25 to use a different source.

## Technical Highlights

### Advanced CSS Techniques
- Multiple CSS animations running simultaneously
- Transform chaining (rotate + translate + scale)
- Keyframe animations with easing functions
- Pseudo-elements for speech bubble tail
- Z-index layering for depth

### JavaScript Patterns
- RequestAnimationFrame for smooth animations
- Event-driven architecture
- State management without frameworks
- Fallback patterns for autoplay restrictions
- Efficient DOM manipulation

### Performance Optimizations
- CSS transitions instead of JavaScript animations where possible
- Transform-based animations (GPU accelerated)
- Efficient event listeners
- Minimal repaints and reflows

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (may require click to start music)
- Mobile browsers: Supported (tap to start)

## Learning Outcomes

This project demonstrates:
- Advanced CSS animations and transforms
- JavaScript DOM manipulation
- Audio API integration
- Responsive design principles
- Clean code organization
- Git version control

## Credits

- **Character:** Kirby - Nintendo
- **Music:** "Besame" - Juan Gabriel
- **Developer:** [Maria Paula Salzar Agudelo]
- **Project Type:** Front-End Development Portfolio semester 2
- **Year:** 2022

## License

Educational project for portfolio purposes.
- Kirby character © Nintendo
- Music © Juan Gabriel Estate
- Code: MIT License (see below)

MIT License - You are free to use this code for learning and portfolio purposes.

## Connect

- GitHub: [@OfteaHeat1997](https://github.com/OfteaHeat1997)
- Portfolio: [Your Portfolio Link]

---

Made with HTML, CSS, and JavaScript | Kirby dancing since 2025
