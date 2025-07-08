// Exercise rendering and overlay management
import { tenseNames } from './constants.js';
import { appState } from './state.js';
import { isAnswerCorrect, getBestCorrectAnswer } from './exercises.js';
import { handleKeyboardInput } from './keyboard.js';

export function renderExercise() {
    const exercise = appState.currentExercise;
    const exerciseContainer = document.getElementById('exercise-container');
    
    const existingResult = document.querySelector('.tense-selector .result');
    if (existingResult) {
        existingResult.remove();
    }
    
    exerciseContainer.innerHTML = `
        <div class="question">
            <div class="question-text">
                <div class="question-sentence">${exercise.text}</div>
                <div class="question-infinitive"><span class="infinitive">(${exercise.infinitive})</span></div>
            </div>
        </div>
        
        <div class="options-container">
            <div class="options-overlay">
                <div class="type-answer">
                    <input type="text" class="answer-input" placeholder="Escribe tu respuesta..." autocomplete="off" autocorrect="off" spellcheck="false" oninput="checkTypedAnswer()" onkeydown="handleInputKeydown(event)">
                </div>
                <button class="show-options-btn" onclick="showOptions()">
                    <span class="btn-text">Mostrar opciones</span>
                    <span class="btn-hint">o presiona Enter</span>
                </button>
            </div>
            <div class="options">
                ${exercise.options.map((option, index) => {
                    const number = index + 1;
                    const isAllowed = appState.selectedTenses.includes(index);
                    const allowedClass = isAllowed ? 'allowed' : '';
                    
                    return `
                        <div class="option ${allowedClass}" onclick="selectOption(${index})">
                            <div class="option-letter">${number}</div>
                            <span>${option}</span>
                            <span class="tense-indicator">(${tenseNames[index]})</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    
    // Focus on the input field
    setTimeout(() => {
        const input = document.querySelector('.answer-input');
        if (input) {
            input.focus();
        }
    }, 100);
    
    document.onkeydown = handleKeyboardInput;
}

export function renderOptionOverlays(selectedIndex) {
    const isCorrect = isAnswerCorrect(selectedIndex);
    const bestCorrectAnswer = getBestCorrectAnswer();
    
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.add('disabled');
        option.style.position = 'relative';
        
        if (appState.currentExercise.correctAnswers.includes(index)) {
            option.classList.add('correct');
            
            if (index === bestCorrectAnswer) {
                addCorrectOverlay(option, index);
            }
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
            addIncorrectOverlay(option, index);
        }
    });
}

function addCorrectOverlay(option, index) {
    const correctOverlay = document.createElement('div');
    correctOverlay.className = 'option-overlay correct-overlay';
    
    const pattern = appState.currentExercise.explanation;
    let correctExplanation = '';
    if (pattern && explanations.patterns[pattern]) {
        correctExplanation = explanations.patterns[pattern][index];
    } else {
        correctExplanation = 'Respuesta correcta';
    }
    
    correctOverlay.innerHTML = `
        <div class="overlay-content three-column-layout">
            <div class="overlay-left">
                <div class="overlay-verb">${appState.currentExercise.options[index]}</div>
                <div class="overlay-tense">(${tenseNames[index]})</div>
            </div>
            <div class="overlay-center">
                <span class="check-icon">✓</span>
            </div>
            <div class="overlay-right">
                <div class="overlay-explanation">${correctExplanation}</div>
            </div>
        </div>
    `;
    
    correctOverlay.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.handleSiguienteClick();
    });
    correctOverlay.style.cursor = 'pointer';
    
    option.appendChild(correctOverlay);
}

function addIncorrectOverlay(option, index) {
    const incorrectOverlay = document.createElement('div');
    incorrectOverlay.className = 'option-overlay incorrect-overlay';
    
    const pattern = appState.currentExercise.explanation;
    let incorrectExplanation = '';
    if (pattern && explanations.patterns[pattern]) {
        incorrectExplanation = explanations.patterns[pattern][index];
    } else {
        incorrectExplanation = 'Respuesta incorrecta';
    }
    
    incorrectOverlay.innerHTML = `
        <div class="overlay-content three-column-layout">
            <div class="overlay-left">
                <div class="overlay-verb">${appState.currentExercise.options[index]}</div>
                <div class="overlay-tense">(${tenseNames[index]})</div>
            </div>
            <div class="overlay-center">
                <span class="x-icon">✗</span>
            </div>
            <div class="overlay-right">
                <div class="overlay-explanation">${incorrectExplanation}</div>
            </div>
        </div>
    `;
    
    incorrectOverlay.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.handleSiguienteClick();
    });
    incorrectOverlay.style.cursor = 'pointer';
    
    option.appendChild(incorrectOverlay);
}

export function renderActionButtons(isCorrect) {
    const tenseSelector = document.querySelector('.tense-selector');
    
    const existingButton = document.querySelector('.big-next-button');
    if (existingButton) {
        existingButton.remove();
    }
    
    const bigNextButton = document.createElement('div');
    bigNextButton.className = 'big-next-button';
    
    if (isCorrect) {
        bigNextButton.innerHTML = `
            <button class="difficulty-btn hard-btn" onclick="handleDifficultyFeedback('hard')">
                Difícil
            </button>
            <button class="difficulty-btn easy-btn" onclick="handleDifficultyFeedback('easy')">
                Fácil
            </button>
        `;
    } else {
        bigNextButton.innerHTML = `
            <button class="siguiente-btn" onclick="handleSiguienteClick()">
                Siguiente
            </button>
        `;
    }
    
    tenseSelector.appendChild(bigNextButton);
}

export function showOptions() {
    const overlay = document.querySelector('.options-overlay');
    const optionsContainer = document.querySelector('.options');
    
    if (overlay && optionsContainer) {
        overlay.style.display = 'none';
        optionsContainer.style.display = 'grid';
    }
}

// Utility function to normalize text by removing accents
function normalizeText(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export function checkTypedAnswer() {
    const input = document.querySelector('.answer-input');
    if (!input || appState.answered) return;
    
    const typedAnswer = input.value.trim();
    if (!typedAnswer) return;
    
    // Normalize the typed answer for comparison
    const normalizedTyped = normalizeText(typedAnswer);
    
    // Check if the typed answer matches any of the exercise options (accent-insensitive)
    const exercise = appState.currentExercise;
    const matchingOptionIndex = exercise.options.findIndex(option => 
        normalizeText(option) === normalizedTyped
    );
    
    if (matchingOptionIndex !== -1) {
        // Show options
        showOptions();
        
        // Select the matching option
        window.selectOption(matchingOptionIndex);
    }
}

export function handleInputKeydown(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        // First check if typed answer is valid
        checkTypedAnswer();
        // If no valid typed answer, show options
        if (!appState.answered) {
            showOptions();
        }
    }
}

// Make functions available globally
window.showOptions = showOptions;
window.checkTypedAnswer = checkTypedAnswer;
window.handleInputKeydown = handleInputKeydown;
