# LangLearn - Spanish Past Tense Trainer

A modern web application for learning Spanish past tenses (pretérito vs imperfecto) using scientifically-backed spaced repetition and habit formation techniques.

## Features

- **Spaced Repetition Learning** - Intelligent scheduling based on performance
- **Spanish-Only Interface** - Complete immersion experience
- **Habit Tracking** - Daily streak counter with motivational rewards
- **Keyboard Navigation** - Full keyboard support (A-D for answers, Enter/Space to continue)
- **Progress Analytics** - Track accuracy and improvement over time
- **Mobile Responsive** - Optimized for both desktop and mobile devices
- **Answer Shuffling** - Prevents pattern memorization, forces true comprehension

## Quick Start

### Standalone Version (Recommended)
Open `standalone.html` in any web browser or serve it via a static HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Then visit: http://localhost:8000/standalone.html
```

### React Development Version
For development with hot reload:

```bash
npm install
npm run dev
```

## Learning Science

The app implements modern learning research:

- **Active Retrieval** - Multiple choice questions force recall
- **Spaced Intervals** - 1 day → 3 days → 1 week → 2 weeks → 1 month
- **Difficulty Calibration** - Adjusts based on performance
- **Habit Formation** - Daily practice goals with streak tracking
- **Immediate Feedback** - Explanations and tips after each answer

## Keyboard Shortcuts

- **A, B, C, D** - Select answer options
- **Enter/Space** - Continue to next exercise
- **↵** - Visual indicator for continue action

## Content Focus

Initial content covers the most challenging aspect of Spanish past tenses:

- **Preterite vs Imperfect** distinction
- **Common irregular verbs** (tener, saber, poder, venir)
- **Contextual usage** patterns
- **Progressive difficulty** from basic to advanced

## Technology Stack

- **Frontend**: React + Vite (development) / Vanilla JS (standalone)
- **Storage**: LocalStorage for progress persistence
- **Styling**: Modern CSS with custom properties
- **Architecture**: Modular, expandable design

## Future Enhancements

- Additional tenses (subjunctive, conditional)
- Speech recognition for pronunciation practice
- More content (100+ exercises)
- Gamification features
- Analytics dashboard
- Multi-language support

## Contributing

Built with modern best practices using Context7 MCP for latest documentation. See `CLAUDE.md` for development guidelines.

## License

MIT License - Feel free to use and modify for educational purposes.

---

🇪🇸 ¡Domina los tiempos pasados en español! 🎯