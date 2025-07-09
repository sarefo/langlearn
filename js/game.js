// Game logic and flow control
import { appState, resetAnswer, setCurrentExercise, incrementIndex, resetIndex, incrementStats } from './state.js';
import { getFilteredExercises, shuffleExercises, isAnswerCorrect } from './exercises.js';
import { saveStats, saveWrongAnswers, saveExerciseDifficulty, updateStreakOnFirstCorrect } from './storage.js';
import { updateStatsDisplay, removeExistingButton, addFadeEffect } from './dom.js';
import { renderExercise, renderOptionOverlays, renderActionButtons } from './renderer.js';

export function loadExercise(autoFocus = true) {
    const availableExercises = appState.filteredExercises.length > 0 ? appState.filteredExercises : getFilteredExercises();
    
    if (availableExercises.length === 0) {
        document.getElementById('exercise-container').innerHTML = '<div class="loading">No hay ejercicios disponibles para los tiempos seleccionados.</div>';
        return;
    }
    
    if (appState.currentIndex >= availableExercises.length) {
        resetIndex();
        shuffleExercises();
    }
    
    setCurrentExercise(availableExercises[appState.currentIndex]);
    resetAnswer();
    renderExercise(autoFocus);
}

export function selectOption(selectedIndex, inputMethod = 'selection') {
    if (appState.answered) return;
    
    appState.answered = true;
    const isCorrect = isAnswerCorrect(selectedIndex, inputMethod);
    
    if (appState.selectedTenses.length > 1 || inputMethod === 'typed') {
        incrementStats(isCorrect);
        
        if (isCorrect) {
            updateStreakOnFirstCorrect();
            appState.wrongAnswers = appState.wrongAnswers.filter(wrong => wrong.id !== appState.currentExercise.id);
            saveWrongAnswers();
        } else {
            handleWrongAnswer();
        }
        
        saveStats();
        updateStatsDisplay();
    }
    
    renderOptionOverlays(selectedIndex, inputMethod);
    renderActionButtons(isCorrect);
}

function handleWrongAnswer() {
    const wrongEntry = {
        id: appState.currentExercise.id,
        timestamp: Date.now(),
        wrongCount: 1
    };
    
    const existingWrong = appState.wrongAnswers.find(wrong => wrong.id === appState.currentExercise.id);
    if (existingWrong) {
        existingWrong.wrongCount++;
        existingWrong.timestamp = Date.now();
    } else {
        appState.wrongAnswers.push(wrongEntry);
    }
    
    saveWrongAnswers();
}

export function handleDifficultyFeedback(difficulty) {
    appState.exerciseDifficulty[appState.currentExercise.id] = difficulty;
    saveExerciseDifficulty();
    
    removeExistingButton();
    nextExercise();
}

export function handleSiguienteClick() {
    removeExistingButton();
    nextExercise();
}

export function nextExercise() {
    removeExistingButton();
    incrementIndex();
    loadExercise();
    addFadeEffect();
}

// Make functions available globally for onclick handlers
window.selectOption = selectOption;
window.handleDifficultyFeedback = handleDifficultyFeedback;
window.handleSiguienteClick = handleSiguienteClick;
