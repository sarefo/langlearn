// DOM manipulation utilities
import { appState } from './state.js';

export const domElements = {
    correctEl: document.getElementById('correct'),
    totalEl: document.getElementById('total'),
    accuracyEl: document.getElementById('accuracy'),
    streakEl: document.getElementById('streak'),
    exerciseContainer: document.getElementById('exercise-container')
};

export function updateStatsDisplay() {
    domElements.correctEl.textContent = appState.stats.correct;
    domElements.totalEl.textContent = appState.stats.total;
    const accuracy = appState.stats.total > 0 ? Math.round((appState.stats.correct / appState.stats.total) * 100) : 0;
    domElements.accuracyEl.textContent = accuracy + '%';
    domElements.streakEl.textContent = appState.streak;
}

export function showHelpDialog() {
    const overlay = document.getElementById('help-dialog-overlay');
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

export function hideHelpDialog() {
    const overlay = document.getElementById('help-dialog-overlay');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

export function showStatsDialog() {
    updateStatsDialogContent();
    const overlay = document.getElementById('stats-dialog-overlay');
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

export function hideStatsDialog() {
    const overlay = document.getElementById('stats-dialog-overlay');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateStatsDialogContent() {
    const wrongAnswersList = document.getElementById('wrong-answers-list');
    const hardExercisesList = document.getElementById('hard-exercises-list');
    const wrongCountEl = document.getElementById('wrong-count');
    const hardCountEl = document.getElementById('hard-count');
    const totalErrorsEl = document.getElementById('total-errors');
    
    // Update wrong answers list
    if (appState.wrongAnswers.length === 0) {
        wrongAnswersList.innerHTML = '<div class="stats-empty">No hay respuestas incorrectas registradas</div>';
    } else {
        wrongAnswersList.innerHTML = appState.wrongAnswers.map(wrong => {
            const exercise = window.exercises.find(ex => ex.id === wrong.id);
            if (!exercise) return '';
            
            const date = new Date(wrong.timestamp).toLocaleDateString();
            const plural = wrong.wrongCount > 1 ? 'errores' : 'error';
            
            return `
                <div class="stats-item">
                    <div class="exercise-text">${exercise.text.replace('_____', exercise.options[exercise.correctAnswers[0]])}</div>
                    <div class="exercise-info">${wrong.wrongCount} ${plural}<br>${date}</div>
                </div>
            `;
        }).join('');
    }
    
    // Update hard exercises list
    const hardExercises = Object.entries(appState.exerciseDifficulty)
        .filter(([id, difficulty]) => difficulty === 'hard')
        .map(([id, difficulty]) => {
            const exercise = window.exercises.find(ex => ex.id === parseInt(id));
            return exercise ? { id: parseInt(id), exercise } : null;
        })
        .filter(Boolean);
    
    if (hardExercises.length === 0) {
        hardExercisesList.innerHTML = '<div class="stats-empty">No hay ejercicios marcados como difíciles</div>';
    } else {
        hardExercisesList.innerHTML = hardExercises.map(({ exercise }) => `
            <div class="stats-item">
                <div class="exercise-text">${exercise.text.replace('_____', exercise.options[exercise.correctAnswers[0]])}</div>
                <div class="exercise-info">Marcado como difícil</div>
            </div>
        `).join('');
    }
    
    // Update summary counts
    const totalErrors = appState.wrongAnswers.reduce((sum, wrong) => sum + wrong.wrongCount, 0);
    wrongCountEl.textContent = appState.wrongAnswers.length;
    hardCountEl.textContent = hardExercises.length;
    totalErrorsEl.textContent = totalErrors;
}

export function removeExistingButton() {
    const existingButton = document.querySelector('.big-next-button');
    if (existingButton) {
        existingButton.remove();
    }
}

export function removeTenseResult() {
    const existingResult = document.querySelector('.tense-selector .result');
    if (existingResult) {
        existingResult.remove();
    }
}

export function addFadeEffect() {
    domElements.exerciseContainer.classList.remove('fade-in');
    setTimeout(() => domElements.exerciseContainer.classList.add('fade-in'), 10);
}

// Make functions available globally
window.showHelpDialog = showHelpDialog;
window.hideHelpDialog = hideHelpDialog;
window.showStatsDialog = showStatsDialog;
window.hideStatsDialog = hideStatsDialog;
