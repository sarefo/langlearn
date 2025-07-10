// Exercise rendering and overlay management
import { tenseNames } from './constants.js';
import { appState } from './state.js';
import { isAnswerCorrect, getBestCorrectAnswer } from './exercises.js';
import { handleKeyboardInput } from './keyboard.js';

export function renderExercise(autoFocus = true) {
    const exercise = appState.currentExercise;
    const exerciseContainer = document.getElementById('exercise-container');

    const existingResult = document.querySelector('.tense-selector .result');
    if (existingResult) {
        existingResult.remove();
    }

    exerciseContainer.innerHTML = `
        <div class="question">
            <div class="question-text">
                <div class="question-sentence">${exercise.text.replace(/◯/g, '•••')}</div>
                <div class="question-infinitive"><span class="infinitive">(${exercise.person} + ${exercise.infinitive})</span></div>
            </div>
        </div>
        
        <div class="options-container">
            <div class="options-overlay">
                <button class="show-options-btn" onclick="showOptions()">
                    <span class="btn-text">Mostrar opciones</span>
                    <span class="btn-hint">o presiona Enter</span>
                </button>
                <div class="type-answer">
                    <input type="text" class="answer-input" placeholder="Escribe tu respuesta..." autocomplete="off" autocorrect="off" spellcheck="false" oninput="checkTypedAnswer()" onkeydown="handleInputKeydown(event)">
                </div>
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

    // Focus on the input field only if autoFocus is true
    if (autoFocus) {
        setTimeout(() => {
            const input = document.querySelector('.answer-input');
            if (input) {
                input.focus();
            }
        }, 100);
    }

    document.onkeydown = handleKeyboardInput;
}

export function renderOptionOverlays(selectedIndex, inputMethod = 'selection') {
    const isCorrect = isAnswerCorrect(selectedIndex, inputMethod);
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

export function markMultipleOptionsIncorrect(selectedIndices) {
    // Use the same logic as selectOption but for multiple indices
    // Just call selectOption with the first matching index to handle stats
    if (selectedIndices.length > 0) {
        window.selectOption(selectedIndices[0]);

        // Then add incorrect styling to all other matching indices
        const options = document.querySelectorAll('.option');
        selectedIndices.slice(1).forEach(index => {
            const option = options[index];
            if (option && !option.classList.contains('incorrect')) {
                option.classList.add('incorrect');
                addIncorrectOverlay(option, index);
            }
        });
    }
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

    correctOverlay.addEventListener('click', function (e) {
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

    incorrectOverlay.addEventListener('click', function (e) {
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
            <button class="siguiente-btn incorrect" onclick="handleSiguienteClick()">
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
    if (!typedAnswer) {
        // Clear any error styling when input is empty
        input.style.borderColor = '';
        return;
    }

    // Normalize the typed answer for comparison
    const normalizedTyped = normalizeText(typedAnswer);

    const exercise = appState.currentExercise;

    // First check if typed answer exactly matches any option
    const exactMatchIndex = exercise.options.findIndex(option =>
        normalizeText(option) === normalizedTyped
    );

    if (exactMatchIndex !== -1) {
        // Clear any error styling
        input.style.borderColor = '';
        // Show options and select the matching option
        showOptions();
        window.selectOption(exactMatchIndex, 'typed');
        return;
    }

    // Check if typed answer matches the beginning of any option
    const anyOptionMatch = exercise.options.some(option =>
        normalizeText(option).startsWith(normalizedTyped)
    );

    if (anyOptionMatch) {
        // Clear any error styling if it matches any option
        input.style.borderColor = '';
        input.style.borderWidth = '';
        // Let user continue typing regardless of whether it matches correct or wrong options
    } else {
        // No option matches - show visual feedback but don't select anything
        input.style.borderColor = '#ff4444';
        input.style.borderWidth = '2px';
    }
}

export function handleInputKeydown(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        // First check if typed answer is valid
        checkTypedAnswer();
        // If no valid typed answer, show options
        if (!appState.answered) {
            const input = document.querySelector('.answer-input');
            
            // If input has red border (error state), clear it and show options
            if (input && input.style.borderColor === 'rgb(255, 68, 68)') {
                input.value = '';
                input.style.borderColor = '';
                input.style.borderWidth = '';
            }
            
            // Always show options when pressing Enter
            showOptions();
        }
    }
}

// Make functions available globally
window.showOptions = showOptions;
window.checkTypedAnswer = checkTypedAnswer;
window.handleInputKeydown = handleInputKeydown;
