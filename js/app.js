// Main application controller
import { loadStats, loadWrongAnswers, loadExerciseDifficulty, loadTensesFromURL } from './storage.js';
import { updateStatsDisplay } from './dom.js';
import { initTenseSelector, updateTenseCounts } from './tenses.js';
import { shuffleExercises } from './exercises.js';
import { loadExercise } from './game.js';
import { initGlobalKeyboardHandler } from './keyboard.js';
import { loadDialogs } from './dialogs.js';

export async function init() {
    await loadDialogs();
    loadStats();
    loadWrongAnswers();
    loadExerciseDifficulty();
    loadTensesFromURL();
    initTenseSelector();
    updateTenseCounts();
    shuffleExercises();
    loadExercise();
    initGlobalKeyboardHandler();
    updateStatsDisplay();
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
