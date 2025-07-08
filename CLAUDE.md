# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- a server is already running at localhost:8000 - no need to build anything

## Architecture Overview

### Technology Stack
The app is built with **vanilla HTML/CSS/JavaScript** for:
- **Zero build complexity** - No Node.js, Vite, or React dependencies
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
- **index.html** - Main application file
- **js/app.js** - Core application logic and exercise handling
- **data/exercises/** - Exercise data organized by tense (see ID System below)
- **data/explanations.js** - Reusable explanation patterns for contextual feedback

### Exercise ID System
Exercises are organized by tense with unique ID prefixes to prevent conflicts:

- **presente.js** - IDs: 100-199 (Next ID: 101)
- **preterito.js** - IDs: 200-299 (33 exercises: 201-233)
- **imperfecto.js** - IDs: 300-399 (32 exercises: 301-332)
- **futuro.js** - IDs: 400-499 (Next ID: 401)
- **condicional.js** - IDs: 500-599 (30 exercises: 501-530)
- **subjuntivo.js** - IDs: 600-699 (27 exercises: 601-627)

**Benefits:**
- Zero overhead - no build tools needed
- Visual clarity - ID tells you which tense
- Future-proof - 100 IDs per tense
- No conflicts - impossible to have duplicate IDs

### Data Flow
1. Exercises loaded from separate tense files and combined (122 total exercises)
2. `shuffleExercises()` randomizes order for variety
3. User answers trigger statistics and streak updates
4. Progress persists to localStorage for session continuity
5. Results appear directly below correct option for immediate feedback

### Key Features
- **Spanish-only interface** for immersion learning
- **Dual keyboard navigation** (A-F keys AND 1-6 number keys for answers, Enter/Space to continue)
- **Vanilla JS deployment** - Single HTML file, no build process
- **Exercise shuffling** with auto-reshuffle when all exercises completed
- **Contextual explanations** with grammatical reasoning for each exercise
- **Infinitive styling** - Verbs in parentheses displayed in gray italic
- **Inline result display** - Results appear directly below correct answer
- **Mobile-first responsive design** - Fits perfectly on Pixel 7a and larger screens

### Layout Design
- **Exercise-focused layout** - Main exercise takes ~80% of screen space
- **Screen-filling design** - Uses 100% of available height on all devices

### Exercise Content
- **Spanish tenses**: Select six most important tenses
- **All subjects covered**: Yo, Tú, Él/Ella, Nosotros, Ellos/Ellas, Usted
- **Irregular verbs**: poder, tener, venir, hacer, saber, poner, estar, ser, …
- **Context-based scenarios**: Specific actions vs habitual actions vs descriptions
- **Progressive difficulty**: Fácil → Medio → Difícil
- **Exercises across various categories**: Pretérito vs Imperfecto, Verbos Irregulares, Descripciones, Tiempo y Frecuencia, Secuencias

### Browser Compatibility
- **Keyboard event handling** - Ignores modifier keys (Ctrl, Alt, etc.) to prevent conflicts
- **Touch-friendly** - Large tap targets (24px option letters, generous padding)
- **Responsive breakpoints** - Optimized for mobile (≤480px) and tablet (≤768px)

### Deployment Workflow
- **Test Local**: Visit `http://localhost:8000/langlearn/` - use puppeteer MCP
- **GitHub Pages**: Accessible instantly at GitHub Pages URL

### Best Practices for Updates
- **Test on multiple screen sizes** - Ensure mobile and desktop compatibility
- **Keep functions small** - JavaScript is organized in clear, focused functions
- **Maintain accessibility** - Keyboard navigation and clear visual feedback
- **Preserve localStorage keys** - Don't break existing user progress

### Adding New Exercises

**IMPORTANT: Follow this structure to maintain low redundancy and high-quality explanations.**

#### Exercise Structure
Add new exercises to the appropriate `data/exercises/` file following this exact structure:
```javascript
{
    id: 66,                          // Unique incremental ID
    type: "Pretérito vs Imperfecto", // Category (see existing types)
    difficulty: 2,                   // 1=Fácil, 2=Medio, 3=Difícil
    text: "Ayer _____ al médico.",   // Sentence with blank (use _____)
    infinitive: "ir",                // Verb in infinitive form
    options: [                       // Always 6 options in this order:
        "voy",                       // A = Presente
        "fui",                       // B = Pretérito  
        "iba",                       // C = Imperfecto
        "iré",                       // D = Futuro
        "iría",                      // E = Condicional
        "vaya"                       // F = Subjuntivo
    ],
    correctAnswers: [1],             // Array of correct option indices (0-5)
    explanation: "ayer_past"         // Reference to explanations.js pattern
}
```

#### Explanation System
**DO NOT create unique explanations for each exercise.** Instead:

1. **Check existing patterns** in `data/explanations.js` first
2. **Reuse patterns** when the grammatical context is similar
3. **Add new patterns** only when existing ones don't fit

#### Available Explanation Patterns
Current patterns in `data/explanations.js`:
- **`ayer_past`** - For "ayer" and other specific past time indicators
- **`siempre_habitual`** - For "siempre" and habitual actions
- **`cada_habitual`** - For "cada X" (cada día, cada verano, etc.)
- **`poder_specific`** - For "poder" in specific situations
- **`saber_continuous`** - For "saber" as continuous knowledge
- **`saber_moment`** - For "saber" as moment of learning
- **`mientras_interrupted`** - For "mientras" with interrupted actions
- **`repente_sudden`** - For "de repente" and sudden actions
- **`question_specific`** - For questions about specific past events
- **`description_past`** - For descriptions and states in past
- **`sequence_completed`** - For "primero", "luego" sequences
- **`context_main`** - For context-setting vs main actions

#### When to Add New Patterns
Add a new pattern to `data/explanations.js` only when:
1. **No existing pattern fits** the grammatical context
2. **Multiple exercises** would benefit from the same pattern
3. **The pattern is grammatically distinct** from existing ones

#### Pattern Structure
When adding new patterns, follow this structure:
```javascript
"pattern_name": {
    0: "Why Presente doesn't work",
    1: "Why Pretérito works/doesn't work", 
    2: "Why Imperfecto works/doesn't work",
    3: "Why Futuro doesn't work",
    4: "Why Condicional doesn't work", 
    5: "Why Subjuntivo doesn't work"
}
```

#### Best Practices
- **Be specific** - "Ayer indica acción específica" not "El contexto es pasado"
- **Be concise** - One clear reason per option
- **Be educational** - Explain the grammatical rule, not just right/wrong
- **Avoid redundancy** - Don't repeat tense names or "correcto/incorrecto"
- **Test thoroughly** - Verify explanations make sense for wrong answers too

#### Example Process
1. **New exercise**: "Todos los sábados _____ fútbol" 
2. **Check existing**: Does `cada_habitual` pattern fit? YES
3. **Use existing**: `explanation: "cada_habitual"`
4. **Result**: Reuses explanations, maintains consistency

#### Quality Checklist
- ✅ Uses existing explanation pattern when appropriate
- ✅ Difficulty matches grammatical complexity (1=simple rules, 3=nuanced)
- ✅ All 6 options follow A-F tense order
- ✅ Infinitive matches the conjugated options
- ✅ Text is clear and natural Spanish
- ✅ Exercise tests a specific grammatical concept
