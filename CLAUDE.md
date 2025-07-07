# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Note: This app now uses vanilla JavaScript instead of React for simplicity and performance.**

- a server is already running at localhost:8000
- No build step required - edit `index.html` directly
- Deploy directly to GitHub Pages - just push `index.html`

## Architecture Overview

### Technology Stack
The app is built with **vanilla HTML/CSS/JavaScript** for:
- **Zero build complexity** - No Node.js, Vite, or React dependencies
- **Lightning fast** - Minimal file size (~8KB vs 200KB+ React bundle)
- **GitHub Pages ready** - Deploy instantly without build steps
- **Maximum compatibility** - Works on all devices and browsers

### Core Learning System
The app implements a sophisticated dual-algorithm approach:

1. **Statistics Tracking** (localStorage):
   - Tracks correct/total answers and accuracy percentage
   - Uses localStorage key: `langlearn_stats`

2. **Daily Streak System** (localStorage):
   - Manages daily streaks for habit formation
   - Updates only on first correct answer each day
   - Uses localStorage keys: `langlearn_streak`, `langlearn_last_streak_date`

### Application Structure
- **index.html** - Single-file application with embedded CSS and JavaScript
- **favicon.svg** - SVG favicon with clock icon representing past tenses
- **Exercises array** - 15 comprehensive exercises covering all Spanish subjects and tenses

### Data Flow
1. Exercises loaded from embedded JavaScript array (15 exercises with metadata)
2. `shuffleExercises()` randomizes order for variety
3. User answers trigger statistics and streak updates
4. Progress persists to localStorage for session continuity
5. Results appear directly below correct option for immediate feedback

### Key Features
- **Spanish-only interface** for immersion learning
- **Dual keyboard navigation** (A-D keys AND 1-4 number keys for answers, Enter/Space to continue)
- **Vanilla JS deployment** - Single HTML file, no build process
- **Exercise shuffling** with auto-reshuffle when all exercises completed
- **Contextual explanations** with grammatical reasoning for each exercise
- **Infinitive styling** - Verbs in parentheses displayed in gray italic
- **Inline result display** - Results appear directly below correct answer
- **Mobile-first responsive design** - Fits perfectly on Pixel 7a and larger screens

### Layout Design
- **Exercise-focused layout** - Main exercise takes ~80% of screen space
- **Progress cards at bottom** - Compact, unobtrusive progress tracking
- **Optimal font sizes** - 16px base, 18px titles, 16px options for excellent readability
- **Screen-filling design** - Uses 100% of available height on all devices
- **Top-aligned content** - Natural reading flow from header to exercise to stats

### Exercise Content
- **Spanish past tenses**: Preterite vs Imperfect distinction
- **All subjects covered**: Yo, Tú, Él/Ella, Nosotros, Ellos/Ellas, Usted
- **Irregular verbs**: poder, tener, venir, hacer, saber, poner
- **Context-based scenarios**: Specific actions vs habitual actions vs descriptions
- **Progressive difficulty**: Fácil → Medio → Difícil
- **15 exercises across 6 categories**: Pretérito vs Imperfecto, Verbos Irregulares, Descripciones, Tiempo y Frecuencia, Secuencias

### Browser Compatibility
- **Modern SVG favicon** - Works in all current browsers
- **Keyboard event handling** - Ignores modifier keys (Ctrl, Alt, etc.) to prevent conflicts
- **Touch-friendly** - Large tap targets (24px option letters, generous padding)
- **Responsive breakpoints** - Optimized for mobile (≤480px) and tablet (≤768px)

### Deployment Workflow
- **Development**: Edit `index.html` directly
- **Current State**: Single `index.html` file with all functionality embedded
- **Deploy**: Simply push `index.html` to GitHub Pages - works immediately
- **Test Local**: Visit `http://localhost:8000/langlearn/` 
- **GitHub Pages**: Accessible instantly at your GitHub Pages URL
- **Performance**: Fast loading (~8KB), excellent mobile performance

### Best Practices for Updates
- **Edit index.html directly** - All code is in one maintainable file
- **Test on multiple screen sizes** - Ensure mobile and desktop compatibility
- **Keep functions small** - JavaScript is organized in clear, focused functions
- **Maintain accessibility** - Keyboard navigation and clear visual feedback
- **Preserve localStorage keys** - Don't break existing user progress
- **Test keyboard shortcuts** - Verify A-D, 1-4, Enter, and Space keys work correctly

### Adding New Exercises
1. Add new exercise objects to the `exercises` array in the JavaScript section
2. Follow the existing structure: `{id, type, difficulty, question, text, options, correct, explanation}`
3. Use `processInfinitives()` for verbs in parentheses - they'll automatically be styled gray/italic
4. Ensure explanations are educational and concise
5. Test with different screen sizes to ensure layout remains optimal
