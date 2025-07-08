// LocalStorage management
import { STORAGE_KEYS } from './constants.js';
import { appState, updateStats, updateStreak, setSelectedTenses, setWrongAnswers, setExerciseDifficulty } from './state.js';

export function loadStats() {
    const saved = localStorage.getItem(STORAGE_KEYS.STATS);
    if (saved) {
        const stats = JSON.parse(saved);
        updateStats(stats.correct, stats.total);
    }
    
    const savedStreak = localStorage.getItem(STORAGE_KEYS.STREAK);
    if (savedStreak) {
        updateStreak(parseInt(savedStreak));
    }
}

export function saveStats() {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(appState.stats));
    localStorage.setItem(STORAGE_KEYS.STREAK, appState.streak.toString());
}

export function loadWrongAnswers() {
    const saved = localStorage.getItem(STORAGE_KEYS.WRONG_ANSWERS);
    if (saved) {
        setWrongAnswers(JSON.parse(saved));
    }
}

export function saveWrongAnswers() {
    localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(appState.wrongAnswers));
}

export function loadExerciseDifficulty() {
    const saved = localStorage.getItem(STORAGE_KEYS.EXERCISE_DIFFICULTY);
    if (saved) {
        setExerciseDifficulty(JSON.parse(saved));
    }
}

export function saveExerciseDifficulty() {
    localStorage.setItem(STORAGE_KEYS.EXERCISE_DIFFICULTY, JSON.stringify(appState.exerciseDifficulty));
}

export function loadTensesFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const tensesParam = urlParams.get('tenses');
    
    if (tensesParam) {
        const tenseIndices = tensesParam.toUpperCase()
            .split('')
            .map(letter => letter.charCodeAt(0) - 65)
            .filter(index => index >= 0 && index <= 5)
            .sort();
        
        if (tenseIndices.length > 0) {
            setSelectedTenses(tenseIndices);
            localStorage.setItem(STORAGE_KEYS.SELECTED_TENSES, JSON.stringify(tenseIndices));
            return;
        }
    }
    
    const saved = localStorage.getItem(STORAGE_KEYS.SELECTED_TENSES);
    if (saved) {
        setSelectedTenses(JSON.parse(saved));
    }
}

export function saveTenseSelection() {
    localStorage.setItem(STORAGE_KEYS.SELECTED_TENSES, JSON.stringify(appState.selectedTenses));
}

export function updateStreakOnFirstCorrect() {
    const today = new Date().toDateString();
    const lastStreakDate = localStorage.getItem(STORAGE_KEYS.LAST_STREAK_DATE);
    if (lastStreakDate !== today) {
        appState.streak++;
        localStorage.setItem(STORAGE_KEYS.LAST_STREAK_DATE, today);
    }
}
