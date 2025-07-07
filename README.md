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

### Development
For local development with hot reload:

```bash
npm install
npm run dev
# Visit: http://localhost:5173
```

### Production Build & Deployment

```bash
# Build for production
npm run build

# Deploy dist/ folder to GitHub Pages or any static host
# The built files will be in the dist/ directory
```

### GitHub Pages Deployment
1. Build the app: `npm run build`
2. Commit the `dist/` folder contents to your gh-pages branch
3. Or use GitHub Actions for automatic deployment

### Local Testing of Built Version
```bash
# After building, test the production version
python -m http.server 8000 -d dist
# Visit: http://localhost:8000
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

- **Frontend**: React + Vite
- **Build**: Vite (fast bundling and dev server)
- **Storage**: LocalStorage for progress persistence
- **Styling**: Modern CSS with custom properties
- **Architecture**: Modular, expandable component design
- **Deployment**: Static files (works on GitHub Pages, Netlify, etc.)

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