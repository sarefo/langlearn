// Spanish Language Learning App - 6 Tense System with Clean Format
// A = Presente, B = Pretérito, C = Imperfecto, D = Futuro, E = Condicional, F = Subjuntivo presente

// App state
let currentExercise = null;
let currentIndex = 0;
let stats = { correct: 0, total: 0 };
let streak = 0;
let answered = false;
let selectedTenses = [0, 1, 2]; // Default: A, B, C (Presente, Pretérito, Imperfecto)

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

// Initialize tense selector
function initTenseSelector() {
    // Load saved tense selection from localStorage
    const saved = localStorage.getItem('langlearn_selected_tenses');
    if (saved) {
        selectedTenses = JSON.parse(saved);
    }
    
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
        // Don't allow unchecking if it's the last one selected
        if (selectedTenses.length === 1) {
            return;
        }
        selectedTenses = selectedTenses.filter(t => t !== tenseIndex);
        option.classList.remove('selected');
    } else {
        selectedTenses.push(tenseIndex);
        selectedTenses.sort(); // Keep sorted for consistency
        option.classList.add('selected');
    }
    
    // Save tense selection to localStorage
    localStorage.setItem('langlearn_selected_tenses', JSON.stringify(selectedTenses));
    
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

// Shuffle exercises for variety
function shuffleExercises() {
    const filteredExercises = getFilteredExercises();
    for (let i = filteredExercises.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredExercises[i], filteredExercises[j]] = [filteredExercises[j], filteredExercises[i]];
    }
    // Update the global exercises array with filtered and shuffled exercises
    window.filteredExercises = filteredExercises;
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

// Save stats to localStorage
function saveStats() {
    localStorage.setItem('langlearn_stats', JSON.stringify(stats));
    localStorage.setItem('langlearn_streak', streak.toString());
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
    
    exerciseContainer.innerHTML = `
        <div class="exercise-header">
            <span class="difficulty">${getDifficultyDots(exercise.difficulty)}</span>
        </div>
        
        <div class="question">
            <div class="question-title">Completa la oración:</div>
            <div class="question-text">${exercise.text} <span class="infinitive">(${exercise.infinitive})</span></div>
        </div>
        
        <div class="options">
            ${exercise.options.map((option, index) => {
                const letter = String.fromCharCode(65 + index); // A, B, C, D, E, F
                
                return `
                    <div class="option" onclick="selectOption(${index})">
                        <div class="option-letter">${letter}</div>
                        <span>${option}</span>
                        <span class="tense-indicator">(${tenseNames[index]})</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    // Add keyboard support for A-F and 1-6
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
        let index = -1;
        
        // Support both A-F and 1-6
        if (key >= 'A' && key <= 'F') {
            index = key.charCodeAt(0) - 65;
        } else if (key >= '1' && key <= '6') {
            index = parseInt(key) - 1;
        }
        
        if (index >= 0 && index < currentExercise.options.length) {
            e.preventDefault();
            selectOption(index);
        }
    };
}

// Handle option selection
function selectOption(selectedIndex) {
    if (answered) return;
    
    answered = true;
    const isCorrect = isAnswerCorrect(selectedIndex);
    const bestCorrectAnswer = getBestCorrectAnswer();
    
    // Update stats
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
    }
    
    saveStats();
    updateStatsDisplay();
    
    // Style options and insert result after the best correct option
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.add('disabled');
        
        if (currentExercise.correctAnswers.includes(index)) {
            option.classList.add('correct');
            
            // Insert result after the best correct answer for selected tenses
            if (index === bestCorrectAnswer) {
                const resultEl = document.createElement('div');
                resultEl.className = `result ${isCorrect ? 'correct' : 'incorrect'}`;
                
                let explanationText = '';
                const pattern = currentExercise.explanation;
                
                if (pattern && explanations.patterns[pattern]) {
                    if (isCorrect) {
                        explanationText = explanations.patterns[pattern][selectedIndex];
                    } else {
                        explanationText = explanations.patterns[pattern][selectedIndex] + '<br><br>' +
                                        'Respuesta correcta: ' + explanations.patterns[pattern][bestCorrectAnswer];
                    }
                } else {
                    // Fallback for exercises without explanation patterns
                    explanationText = isCorrect ? 'Selección correcta' : 'Selección incorrecta';
                }
                
                resultEl.innerHTML = `
                    <div>${isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto'}</div>
                    <div style="margin-top: 4px; font-size: 13px; color: var(--text-light);">${explanationText}</div>
                    <button class="next-btn" onclick="nextExercise()">
                        Siguiente ejercicio (Enter)
                    </button>
                `;
                option.parentNode.insertBefore(resultEl, option.nextSibling);
            }
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
}

// Load next exercise
function nextExercise() {
    currentIndex++;
    loadExercise();
    exerciseContainer.classList.remove('fade-in');
    setTimeout(() => exerciseContainer.classList.add('fade-in'), 10);
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);