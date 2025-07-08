// Tense selection and URL management
import { tenseNames } from './constants.js';
import { appState, setSelectedTenses } from './state.js';
import { saveTenseSelection } from './storage.js';
import { countExercisesPerTense, shuffleExercises } from './exercises.js';
import { loadExercise } from './game.js';

export function updateTenseCounts() {
    const counts = countExercisesPerTense();
    const tenseOptions = document.querySelectorAll('.tense-option');
    
    tenseOptions.forEach((option, index) => {
        const label = option.querySelector('.tense-label');
        const currentText = tenseNames[index];
        label.innerHTML = `${currentText}`;
        
        let countEl = option.querySelector('.tense-count');
        if (!countEl) {
            countEl = document.createElement('span');
            countEl.className = 'tense-count';
            option.appendChild(countEl);
        }
        countEl.textContent = `(${counts[index]})`;
    });
}

export function updateURL() {
    const tensesParam = appState.selectedTenses
        .map(index => String.fromCharCode(65 + index))
        .join('');
    
    const url = new URL(window.location);
    url.searchParams.set('tenses', tensesParam);
    window.history.pushState({}, '', url.toString());
}

export function initTenseSelector() {
    const tenseOptions = document.querySelectorAll('.tense-option');
    tenseOptions.forEach((option, index) => {
        option.addEventListener('click', () => toggleTense(index));
        
        if (appState.selectedTenses.includes(index)) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

export function toggleTense(tenseIndex) {
    const option = document.querySelector(`[data-tense="${tenseIndex}"]`);
    
    if (appState.selectedTenses.includes(tenseIndex)) {
        const newTenses = appState.selectedTenses.filter(t => t !== tenseIndex);
        setSelectedTenses(newTenses);
        option.classList.remove('selected');
    } else {
        const newTenses = [...appState.selectedTenses, tenseIndex].sort();
        setSelectedTenses(newTenses);
        option.classList.add('selected');
    }
    
    saveTenseSelection();
    updateURL();
    shuffleExercises();
    loadExercise();
}
