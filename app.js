// Spanish Language Learning App - 6 Tense System with Clean Format
// A = Presente, B = Pretérito, C = Imperfecto, D = Futuro, E = Condicional, F = Subjuntivo presente

// App state
let currentExercise = null;
let currentIndex = 0;
let stats = { correct: 0, total: 0 };
let streak = 0;
let answered = false;
let selectedTenses = [0, 1, 2]; // Default: A, B, C (Presente, Pretérito, Imperfecto)
let wrongAnswers = []; // Track exercises that were answered incorrectly

// Tense names for display
const tenseNames = [
    'Presente',      // A
    'Pretérito',     // B
    'Imperfecto',    // C
    'Futuro',        // D
    'Condicional',   // E
    'Subjuntivo'     // F
];

// DOM elements
const correctEl = document.getElementById('correct');
const totalEl = document.getElementById('total');
const accuracyEl = document.getElementById('accuracy');
const streakEl = document.getElementById('streak');
const exerciseContainer = document.getElementById('exercise-container');

// Convert difficulty number to dots
function getDifficultyDots(difficulty) {
    const dots = '●'.repeat(difficulty);
    return dots;
}

// Count exercises per tense
function countExercisesPerTense() {
    const counts = [0, 0, 0, 0, 0, 0]; // A, B, C, D, E, F
    
    exercises.forEach(exercise => {
        exercise.correctAnswers.forEach(answerIndex => {
            counts[answerIndex]++;
        });
    });
    
    return counts;
}

// Initialize app
function init() {
    loadStats();
    loadWrongAnswers();
    loadTensesFromURL();
    initTenseSelector();
    updateTenseCounts();
    shuffleExercises();
    loadExercise();
}

// Update tense counts in the UI
function updateTenseCounts() {
    const counts = countExercisesPerTense();
    const tenseOptions = document.querySelectorAll('.tense-option');
    
    tenseOptions.forEach((option, index) => {
        const label = option.querySelector('.tense-label');
        const currentText = tenseNames[index];
        label.innerHTML = `${currentText}`;
        
        // Add count as separate element
        let countEl = option.querySelector('.tense-count');
        if (!countEl) {
            countEl = document.createElement('span');
            countEl.className = 'tense-count';
            option.appendChild(countEl);
        }
        countEl.textContent = `(${counts[index]})`;
    });
}

// Load tenses from URL parameters
function loadTensesFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const tensesParam = urlParams.get('tenses');
    
    if (tensesParam) {
        // Parse letter codes from URL (A=0, B=1, C=2, D=3, E=4, F=5)
        const tenseIndices = tensesParam.toUpperCase()
            .split('')
            .map(letter => letter.charCodeAt(0) - 65) // Convert A-F to 0-5
            .filter(index => index >= 0 && index <= 5)
            .sort(); // Keep sorted for consistency
        
        if (tenseIndices.length > 0) {
            selectedTenses = tenseIndices;
            // Save to localStorage so it persists
            localStorage.setItem('langlearn_selected_tenses', JSON.stringify(selectedTenses));
            return;
        }
    }
    
    // Fallback to localStorage if no valid URL params
    const saved = localStorage.getItem('langlearn_selected_tenses');
    if (saved) {
        selectedTenses = JSON.parse(saved);
    }
}

// Update URL parameters to reflect current tense selection
function updateURL() {
    // Convert tense indices to letter codes (0=A, 1=B, 2=C, 3=D, 4=E, 5=F)
    const tensesParam = selectedTenses
        .map(index => String.fromCharCode(65 + index)) // Convert 0-5 to A-F
        .join('');
    
    const url = new URL(window.location);
    url.searchParams.set('tenses', tensesParam);
    
    // Update URL without reloading the page
    window.history.pushState({}, '', url.toString());
}

// Initialize tense selector
function initTenseSelector() {
    const tenseOptions = document.querySelectorAll('.tense-option');
    tenseOptions.forEach((option, index) => {
        option.addEventListener('click', () => toggleTense(index));
        
        // Set visual state based on loaded selection
        if (selectedTenses.includes(index)) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

// Toggle tense selection
function toggleTense(tenseIndex) {
    const option = document.querySelector(`[data-tense="${tenseIndex}"]`);
    
    if (selectedTenses.includes(tenseIndex)) {
        selectedTenses = selectedTenses.filter(t => t !== tenseIndex);
        option.classList.remove('selected');
    } else {
        selectedTenses.push(tenseIndex);
        selectedTenses.sort(); // Keep sorted for consistency
        option.classList.add('selected');
    }
    
    // Save tense selection to localStorage
    localStorage.setItem('langlearn_selected_tenses', JSON.stringify(selectedTenses));
    
    // Update URL parameters
    updateURL();
    
    // Reshuffle and reload exercise with new tense selection
    shuffleExercises();
    loadExercise();
}

// Filter exercises that have at least one correct answer in selected tenses
function getFilteredExercises() {
    return exercises.filter(exercise => {
        return exercise.correctAnswers.some(answer => selectedTenses.includes(answer));
    });
}

// Shuffle exercises for variety with wrong answer prioritization
function shuffleExercises() {
    const filteredExercises = getFilteredExercises();
    const wrongExercises = [];
    const regularExercises = [];
    
    // Separate wrong and regular exercises
    filteredExercises.forEach(exercise => {
        if (wrongAnswers.some(wrong => wrong.id === exercise.id)) {
            wrongExercises.push(exercise);
        } else {
            regularExercises.push(exercise);
        }
    });
    
    // Shuffle both arrays
    for (let i = wrongExercises.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wrongExercises[i], wrongExercises[j]] = [wrongExercises[j], wrongExercises[i]];
    }
    
    for (let i = regularExercises.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [regularExercises[i], regularExercises[j]] = [regularExercises[j], regularExercises[i]];
    }
    
    // Combine with wrong answers prioritized (appear more frequently)
    const combinedExercises = [];
    const wrongRatio = 0.4; // 40% of exercises should be wrong answers when available
    
    let wrongIndex = 0;
    let regularIndex = 0;
    
    for (let i = 0; i < filteredExercises.length; i++) {
        if (wrongExercises.length > 0 && wrongIndex < wrongExercises.length && 
            (regularExercises.length === 0 || Math.random() < wrongRatio || regularIndex >= regularExercises.length)) {
            combinedExercises.push(wrongExercises[wrongIndex]);
            wrongIndex++;
            
            // Add multiple copies of wrong exercises for extra practice
            if (wrongIndex < wrongExercises.length && Math.random() < 0.3) {
                combinedExercises.push(wrongExercises[wrongIndex - 1]);
            }
        } else if (regularIndex < regularExercises.length) {
            combinedExercises.push(regularExercises[regularIndex]);
            regularIndex++;
        }
    }
    
    // Update the global exercises array with prioritized exercises
    window.filteredExercises = combinedExercises;
}

// Load stats from localStorage
function loadStats() {
    const saved = localStorage.getItem('langlearn_stats');
    if (saved) {
        stats = JSON.parse(saved);
    }
    
    const savedStreak = localStorage.getItem('langlearn_streak');
    if (savedStreak) {
        streak = parseInt(savedStreak);
    }
    
    updateStatsDisplay();
}

// Load wrong answers from localStorage
function loadWrongAnswers() {
    const saved = localStorage.getItem('langlearn_wrong_answers');
    if (saved) {
        wrongAnswers = JSON.parse(saved);
    }
}

// Save stats to localStorage
function saveStats() {
    localStorage.setItem('langlearn_stats', JSON.stringify(stats));
    localStorage.setItem('langlearn_streak', streak.toString());
}

// Save wrong answers to localStorage
function saveWrongAnswers() {
    localStorage.setItem('langlearn_wrong_answers', JSON.stringify(wrongAnswers));
}

// Update stats display
function updateStatsDisplay() {
    correctEl.textContent = stats.correct;
    totalEl.textContent = stats.total;
    const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    accuracyEl.textContent = accuracy + '%';
    streakEl.textContent = streak;
}

// Load current exercise
function loadExercise() {
    const availableExercises = window.filteredExercises || getFilteredExercises();
    
    if (availableExercises.length === 0) {
        exerciseContainer.innerHTML = '<div class="loading">No hay ejercicios disponibles para los tiempos seleccionados.</div>';
        return;
    }
    
    if (currentIndex >= availableExercises.length) {
        currentIndex = 0; // Loop back to start
        shuffleExercises(); // Reshuffle for variety
    }
    
    currentExercise = availableExercises[currentIndex];
    answered = false;
    renderExercise();
}

// Check if an answer is correct for current tense selection
function isAnswerCorrect(selectedIndex) {
    // In single tense mode, don't score answers
    if (selectedTenses.length === 1) {
        return true; // All answers are "correct" in learning mode
    }
    return currentExercise.correctAnswers.includes(selectedIndex) && 
           selectedTenses.includes(selectedIndex);
}

// Get the best correct answer from selected tenses
function getBestCorrectAnswer() {
    const availableCorrect = currentExercise.correctAnswers.filter(answer => 
        selectedTenses.includes(answer)
    );
    return availableCorrect.length > 0 ? availableCorrect[0] : currentExercise.correctAnswers[0];
}

// Render exercise HTML
function renderExercise() {
    const exercise = currentExercise;
    
    // Remove any existing result overlay
    const existingResult = document.querySelector('.tense-selector .result');
    if (existingResult) {
        existingResult.remove();
    }
    
    exerciseContainer.innerHTML = `
        <div class="question">
            <div class="question-text">${exercise.text} <span class="infinitive">(${exercise.infinitive})</span></div>
        </div>
        
        <div class="options">
            ${exercise.options.map((option, index) => {
                const number = index + 1; // 1, 2, 3, 4, 5, 6
                const isAllowed = selectedTenses.includes(index);
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
    `;
    
    // Add keyboard support for 1-6 (options) and A-F (tense selection)
    document.onkeydown = function(e) {
        // Ignore if modifier keys are pressed
        if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
            return;
        }
        
        if (answered) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                nextExercise();
            }
            return;
        }
        
        const key = e.key.toUpperCase();
        
        // A-F keys toggle tense selection
        if (key >= 'A' && key <= 'F') {
            const tenseIndex = key.charCodeAt(0) - 65;
            e.preventDefault();
            toggleTense(tenseIndex);
            return;
        }
        
        // 1-6 keys select options
        if (key >= '1' && key <= '6') {
            const index = parseInt(key) - 1;
            if (index >= 0 && index < currentExercise.options.length) {
                e.preventDefault();
                selectOption(index);
            }
        }
    };
}

// Handle option selection
function selectOption(selectedIndex) {
    if (answered) return;
    
    answered = true;
    const isCorrect = isAnswerCorrect(selectedIndex);
    const bestCorrectAnswer = getBestCorrectAnswer();
    
    // Update stats only if not in single tense mode
    if (selectedTenses.length > 1) {
        stats.total++;
        if (isCorrect) {
            stats.correct++;
            // Update streak for first correct answer of the day
            const today = new Date().toDateString();
            const lastStreakDate = localStorage.getItem('langlearn_last_streak_date');
            if (lastStreakDate !== today) {
                streak++;
                localStorage.setItem('langlearn_last_streak_date', today);
            }
            
            // Remove from wrong answers if answered correctly
            wrongAnswers = wrongAnswers.filter(wrong => wrong.id !== currentExercise.id);
            saveWrongAnswers();
        } else {
            // Add to wrong answers for future practice
            const wrongEntry = {
                id: currentExercise.id,
                timestamp: Date.now(),
                wrongCount: 1
            };
            
            const existingWrong = wrongAnswers.find(wrong => wrong.id === currentExercise.id);
            if (existingWrong) {
                existingWrong.wrongCount++;
                existingWrong.timestamp = Date.now();
            } else {
                wrongAnswers.push(wrongEntry);
            }
            
            saveWrongAnswers();
        }
        
        saveStats();
        updateStatsDisplay();
    }
    
    // Style options and add overlays
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.add('disabled');
        option.style.position = 'relative'; // Ensure options can have overlays
        
        if (currentExercise.correctAnswers.includes(index)) {
            option.classList.add('correct');
            
            // Add overlay on correct option
            if (index === bestCorrectAnswer) {
                const correctOverlay = document.createElement('div');
                correctOverlay.className = 'option-overlay correct-overlay';
                
                const pattern = currentExercise.explanation;
                let correctExplanation = '';
                if (pattern && explanations.patterns[pattern]) {
                    correctExplanation = explanations.patterns[pattern][bestCorrectAnswer];
                } else {
                    correctExplanation = 'Respuesta correcta';
                }
                
                correctOverlay.innerHTML = `
                    <div class="overlay-content grid-layout">
                        <div class="overlay-verb">${currentExercise.options[bestCorrectAnswer]}</div>
                        <div class="overlay-title">✓ Correcto</div>
                        <div class="overlay-tense">(${tenseNames[bestCorrectAnswer]})</div>
                        <div class="overlay-explanation">${correctExplanation}</div>
                    </div>
                `;
                
                // Make overlay clickable
                correctOverlay.addEventListener('click', nextExercise);
                correctOverlay.style.cursor = 'pointer';
                
                option.appendChild(correctOverlay);
            }
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
            
            // Add overlay on incorrect option
            const incorrectOverlay = document.createElement('div');
            incorrectOverlay.className = 'option-overlay incorrect-overlay';
            
            const pattern = currentExercise.explanation;
            let incorrectExplanation = '';
            if (pattern && explanations.patterns[pattern]) {
                incorrectExplanation = explanations.patterns[pattern][selectedIndex];
            } else {
                incorrectExplanation = 'Respuesta incorrecta';
            }
            
            incorrectOverlay.innerHTML = `
                <div class="overlay-content grid-layout">
                    <div class="overlay-verb">${currentExercise.options[selectedIndex]}</div>
                    <div class="overlay-title">✗ Incorrecto</div>
                    <div class="overlay-tense">(${tenseNames[selectedIndex]})</div>
                    <div class="overlay-explanation">${incorrectExplanation}</div>
                </div>
            `;
            
            // Make overlay clickable
            incorrectOverlay.addEventListener('click', nextExercise);
            incorrectOverlay.style.cursor = 'pointer';
            
            option.appendChild(incorrectOverlay);
        }
    });
    
    // Replace tense-selector with big Siguiente button
    const tenseSelector = document.querySelector('.tense-selector');
    tenseSelector.style.display = 'none'; // Hide tense selector
    
    // Remove any existing big next button first
    const existingButton = document.querySelector('.big-next-button');
    if (existingButton) {
        existingButton.remove();
    }
    
    const bigNextButton = document.createElement('div');
    bigNextButton.className = 'big-next-button';
    bigNextButton.innerHTML = `
        <button class="siguiente-btn" onclick="handleSiguienteClick()">
            Siguiente
        </button>
    `;
    
    // Insert the big button after tense selector
    tenseSelector.parentNode.insertBefore(bigNextButton, tenseSelector.nextSibling);
}

// Handle Siguiente button click
function handleSiguienteClick() {
    // Remove the big next button
    const bigNextButton = document.querySelector('.big-next-button');
    if (bigNextButton) {
        bigNextButton.remove();
    }
    
    // Show tense selector again
    const tenseSelector = document.querySelector('.tense-selector');
    tenseSelector.style.display = 'block';
    
    // Proceed to next exercise
    nextExercise();
}

// Load next exercise
function nextExercise() {
    // Clean up any existing big next button
    const bigNextButton = document.querySelector('.big-next-button');
    if (bigNextButton) {
        bigNextButton.remove();
    }
    
    // Show tense selector again
    const tenseSelector = document.querySelector('.tense-selector');
    if (tenseSelector) {
        tenseSelector.style.display = 'block';
    }
    
    currentIndex++;
    loadExercise();
    exerciseContainer.classList.remove('fade-in');
    setTimeout(() => exerciseContainer.classList.add('fade-in'), 10);
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);