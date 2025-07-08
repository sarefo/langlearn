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
