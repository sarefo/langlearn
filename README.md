# LangLearn - Spanish Verb Tense Trainer

A modern web application for mastering Spanish verb tenses with immersive learning and intelligent practice systems.

## Features

- **Six Essential Tenses** - Presente, Pretérito, Imperfecto, Futuro, Condicional, Subjuntivo
- **Spanish-Only Interface** - Complete immersion experience
- **Dual Keyboard Navigation** - A-F keys AND 1-6 number keys for answers
- **Daily Streak System** - Habit formation with streak tracking
- **Statistics Tracking** - Progress analytics with accuracy percentage
- **Exercise Shuffling** - Prevents pattern memorization, forces true comprehension
- **Contextual Explanations** - Immediate grammatical feedback for each exercise
- **Mobile-First Design** - Optimized for all screen sizes

## Quick Start

### Local Development
The app uses vanilla HTML/CSS/JavaScript - no build tools required:

```bash
# Start a local server (server already running at localhost:8000)
# Visit: http://localhost:8000/langlearn/
```

### GitHub Pages Deployment
Deploy instantly without build steps:
1. Push changes to your repository
2. Enable GitHub Pages on the main branch
3. Access via your GitHub Pages URL

## Learning System

The app implements a sophisticated dual-algorithm approach:

- **Statistics Tracking** - Accuracy percentage and total correct answers
- **Daily Streak System** - Updates only on first correct answer each day
- **Exercise Shuffling** - Auto-reshuffle when all exercises completed
- **Contextual Feedback** - Grammatical explanations for each tense choice
- **Progressive Difficulty** - Fácil → Medio → Difícil levels

## Keyboard Shortcuts

### Answer Selection
- **1-6** or **A-F** - Select answer options
- **↑ / ↓** - Select first/second option (single tense mode)

### Tense Selection
- **A-F** - Toggle verb tenses (A=Presente, B=Pretérito, C=Imperfecto, D=Futuro, E=Condicional, F=Subjuntivo)

### Navigation
- **← / →** - Rate difficulty (correct answers)
- **Enter/Space** - Continue to next exercise
- **H** - Show/hide keyboard shortcuts help
- **Esc** - Close help dialog

## Exercise Content

**122 Total Exercises** across six tenses:
- **Presente** - IDs 100-199 (expandable)
- **Pretérito** - IDs 200-299 (33 exercises: 201-233)
- **Imperfecto** - IDs 300-399 (32 exercises: 301-332)
- **Futuro** - IDs 400-499 (expandable)
- **Condicional** - IDs 500-599 (30 exercises: 501-530)
- **Subjuntivo** - IDs 600-699 (27 exercises: 601-627)

### Exercise Categories
- Pretérito vs Imperfecto distinctions
- Irregular verbs (poder, tener, venir, hacer, saber, poner, estar, ser)
- Context-based scenarios (specific vs habitual actions)
- Time expressions and frequency indicators
- Progressive difficulty levels

## Technology Stack

- **Vanilla JavaScript** - Zero build complexity, maximum compatibility
- **LocalStorage** - Progress persistence across sessions
- **Modular Architecture** - Organized exercise files by tense
- **Responsive Design** - Mobile-first with touch-friendly interface
- **GitHub Pages Ready** - Deploy instantly without build steps

## Architecture

### File Structure
- **index.html** - Main application file
- **js/app.js** - Core application logic
- **exercises/** - Exercise data organized by tense
- **explanations.js** - Reusable explanation patterns
- **css/main.css** - Responsive styling

### Data Flow
1. Exercises loaded from separate tense files (122 total)
2. `shuffleExercises()` randomizes order for variety
3. Statistics and streaks update in localStorage
4. Results display directly below correct option

## Contributing

Built with modern best practices using Context7 MCP for latest documentation. See `CLAUDE.md` for development guidelines.

## License

MIT License - Feel free to use and modify for educational purposes.

---

🇪🇸 ¡Domina los tiempos pasados en español! 🎯