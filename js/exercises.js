// Exercise management and filtering
import { appState, setFilteredExercises } from './state.js';
import { DIFFICULTY_RATIOS } from './constants.js';

export function countExercisesPerTense() {
    const counts = [0, 0, 0, 0, 0, 0];
    
    // Access the global exercises variable
    const exercises = window.exercises || [];
    
    exercises.forEach(exercise => {
        exercise.correctAnswers.forEach(answerIndex => {
            counts[answerIndex]++;
        });
    });
    
    return counts;
}

export function getFilteredExercises() {
    const exercises = window.exercises || [];
    return exercises.filter(exercise => {
        return exercise.correctAnswers.some(answer => appState.selectedTenses.includes(answer));
    });
}

export function shuffleExercises() {
    const filteredExercises = getFilteredExercises();
    const wrongExercises = [];
    const hardExercises = [];
    const regularExercises = [];
    
    filteredExercises.forEach(exercise => {
        if (appState.wrongAnswers.some(wrong => wrong.id === exercise.id)) {
            wrongExercises.push(exercise);
        } else if (appState.exerciseDifficulty[exercise.id] === 'hard') {
            hardExercises.push(exercise);
        } else {
            regularExercises.push(exercise);
        }
    });
    
    [wrongExercises, hardExercises, regularExercises].forEach(arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    });
    
    const combinedExercises = [];
    const { WRONG: wrongRatio, HARD: hardRatio } = DIFFICULTY_RATIOS;
    
    let wrongIndex = 0;
    let hardIndex = 0;
    let regularIndex = 0;
    
    for (let i = 0; i < filteredExercises.length; i++) {
        const rand = Math.random();
        
        if (wrongExercises.length > 0 && wrongIndex < wrongExercises.length && 
            (rand < wrongRatio || (hardIndex >= hardExercises.length && regularIndex >= regularExercises.length))) {
            combinedExercises.push(wrongExercises[wrongIndex]);
            wrongIndex++;
            
            if (wrongIndex < wrongExercises.length && Math.random() < 0.3) {
                combinedExercises.push(wrongExercises[wrongIndex - 1]);
            }
        } else if (hardExercises.length > 0 && hardIndex < hardExercises.length && 
                   (rand < wrongRatio + hardRatio || regularIndex >= regularExercises.length)) {
            combinedExercises.push(hardExercises[hardIndex]);
            hardIndex++;
        } else if (regularIndex < regularExercises.length) {
            combinedExercises.push(regularExercises[regularIndex]);
            regularIndex++;
        }
    }
    
    setFilteredExercises(combinedExercises);
}

export function isAnswerCorrect(selectedIndex) {
    if (appState.selectedTenses.length === 1) {
        return true;
    }
    return appState.currentExercise.correctAnswers.includes(selectedIndex) && 
           appState.selectedTenses.includes(selectedIndex);
}

export function getBestCorrectAnswer() {
    const availableCorrect = appState.currentExercise.correctAnswers.filter(answer => 
        appState.selectedTenses.includes(answer)
    );
    return availableCorrect.length > 0 ? availableCorrect[0] : appState.currentExercise.correctAnswers[0];
}
