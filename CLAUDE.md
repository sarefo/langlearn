# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check for code issues

## Architecture Overview

### Core Learning System
The app implements a sophisticated dual-algorithm approach:

1. **Spaced Repetition System** (`src/utils/spacedRepetition.js`):
   - Manages exercise intervals: 1 day → 3 days → 1 week → 2 weeks → 1 month
   - Tracks per-exercise accuracy, difficulty, and scheduling
   - Uses localStorage keys: `langlearn_exercise_data`, `langlearn_last_review`

2. **Habit Tracking System** (`src/utils/habitTracker.js`):
   - Manages daily streaks and consistency metrics
   - Provides motivational messaging and milestone rewards
   - Uses localStorage keys: `langlearn_streak_data`, `langlearn_daily_goals`

### Component Architecture
- **App.jsx** - Main orchestrator, manages state and data flow between learning systems
- **Exercise.jsx** - Core exercise component with answer feedback and statistics
- **Progress.jsx** - Displays accuracy and overall progress metrics
- **HabitTracker.jsx** - Shows streak counter and daily goals

### Data Flow
1. Exercises loaded from `src/data/exercises.js` (20+ exercises with metadata)
2. `getNextExercise()` uses spaced repetition algorithm to prioritize exercises
3. User answers trigger `updateProgress()` which adjusts intervals and difficulty
4. Correct answers update streaks via `updateStreak()`
5. All progress persists to localStorage for session continuity

### Key Features
- **Spanish-only interface** for immersion learning
- **Keyboard navigation** (A-D keys for answers)
- **Dual deployment** - React dev version + standalone HTML version
- **Answer shuffling** to prevent pattern memorization
- **Contextual explanations** with learning tips for each exercise

### MCP Context7 Integration
- Always use Context7 MCP to get the latest versions and best practices for all libraries and frameworks
- Before implementing any new dependency, check Context7 for the most up-to-date documentation
- Use Context7 to verify React, Vite, and other tooling best practices

### Content Focus
- Spanish past tenses: Preterite vs Imperfect distinction
- Common irregular verbs (tener, saber, poder, venir)
- Context-based sentence completion exercises
- Progressive difficulty from basic to advanced scenarios