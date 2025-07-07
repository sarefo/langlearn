// Spanish Language Learning App - Main Application Logic

// App state
let currentExercise = null;
let currentIndex = 0;
let stats = { correct: 0, total: 0 };
let streak = 0;
let answered = false;

// DOM elements
const correctEl = document.getElementById('correct');
const totalEl = document.getElementById('total');
const accuracyEl = document.getElementById('accuracy');
const streakEl = document.getElementById('streak');
const exerciseContainer = document.getElementById('exercise-container');

// Initialize app
function init() {
    loadStats();
    shuffleExercises();
    loadExercise();
}

// Shuffle exercises for variety
function shuffleExercises() {
    for (let i = exercises.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [exercises[i], exercises[j]] = [exercises[j], exercises[i]];
    }
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
    if (currentIndex >= exercises.length) {
        currentIndex = 0; // Loop back to start
        shuffleExercises(); // Reshuffle for variety
    }
    
    currentExercise = exercises[currentIndex];
    answered = false;
    renderExercise();
}

// Process text to style infinitives in brackets
function processInfinitives(text) {
    return text.replace(/\(([^)]+)\)/g, '<span class="infinitive">($1)</span>');
}

// Render exercise HTML
function renderExercise() {
    const exercise = currentExercise;
    
    exerciseContainer.innerHTML = `
        <div class="exercise-header">
            <span class="type-badge">${exercise.type}</span>
            <span class="difficulty">📊 ${exercise.difficulty}</span>
        </div>
        
        <div class="question">
            <div class="question-title">${exercise.question}</div>
            <div class="question-text">${processInfinitives(exercise.text)}</div>
        </div>
        
        <div class="options">
            ${exercise.options.map((option, index) => `
                <div class="option" onclick="selectOption(${index})">
                    <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                    <span>${option}</span>
                </div>
            `).join('')}
        </div>
    `;
    
    // Add keyboard support for A-D and 1-4
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
        
        // Support both A-D and 1-4
        if (key >= 'A' && key <= 'D') {
            index = key.charCodeAt(0) - 65;
        } else if (key >= '1' && key <= '4') {
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
    const isCorrect = selectedIndex === currentExercise.correct;
    
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
    
    // Style options and insert result after correct option
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.add('disabled');
        if (index === currentExercise.correct) {
            option.classList.add('correct');
            
            // Insert result directly after the correct option
            const resultEl = document.createElement('div');
            resultEl.className = `result ${isCorrect ? 'correct' : 'incorrect'}`;
            resultEl.innerHTML = `
                <div>${isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto'}</div>
                <div style="margin-top: 4px; font-size: 13px; color: var(--text-light);">${currentExercise.explanation}</div>
                <button class="next-btn" onclick="nextExercise()">
                    Siguiente ejercicio (Enter)
                </button>
            `;
            option.parentNode.insertBefore(resultEl, option.nextSibling);
            
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