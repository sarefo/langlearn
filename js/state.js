// Application state management
export const appState = {
    currentExercise: null,
    currentIndex: 0,
    stats: { correct: 0, total: 0 },
    streak: 0,
    answered: false,
    selectedTenses: [0, 1, 2], // Default: A, B, C (Presente, Pretérito, Imperfecto)
    wrongAnswers: [],
    exerciseDifficulty: {},
    filteredExercises: []
};

export function resetAnswer() {
    appState.answered = false;
}

export function setCurrentExercise(exercise) {
    appState.currentExercise = exercise;
}

export function incrementIndex() {
    appState.currentIndex++;
}

export function resetIndex() {
    appState.currentIndex = 0;
}

export function setFilteredExercises(exercises) {
    appState.filteredExercises = exercises;
}

export function updateStats(correct, total) {
    appState.stats.correct = correct;
    appState.stats.total = total;
}

export function incrementStats(isCorrect) {
    appState.stats.total++;
    if (isCorrect) {
        appState.stats.correct++;
    }
}

export function updateStreak(newStreak) {
    appState.streak = newStreak;
}

export function setSelectedTenses(tenses) {
    appState.selectedTenses = tenses;
}

export function setWrongAnswers(wrongAnswers) {
    appState.wrongAnswers = wrongAnswers;
}

export function setExerciseDifficulty(difficulty) {
    appState.exerciseDifficulty = difficulty;
}
