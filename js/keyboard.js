// Keyboard input handling
import { appState } from './state.js';
import { toggleTense } from './tenses.js';
import { showHelpDialog, hideHelpDialog } from './dom.js';
import { showOptions, checkTypedAnswer } from './renderer.js';

export function handleKeyboardInput(e) {
    if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
        return;
    }
    
    if (appState.answered) {
        handleAnsweredState(e);
        return;
    }
    
    const key = e.key.toUpperCase();
    
    if (e.key === 'Escape') {
        e.preventDefault();
        return;
    }
    
    if (key === 'H' || key === '?') {
        e.preventDefault();
        showHelpDialog();
        return;
    }
    
    // Check if we're in the input field
    const isInputFocused = document.activeElement && document.activeElement.classList.contains('answer-input');
    
    if (isInputFocused) {
        if (e.key === 'Enter') {
            e.preventDefault();
            // First check if typed answer is valid
            checkTypedAnswer();
            // If no valid typed answer, show options
            if (!appState.answered) {
                showOptions();
            }
        }
        return; // Let normal typing happen in input field
    }
    
    // If Enter is pressed and options are hidden, show them
    if (e.key === 'Enter') {
        const overlay = document.querySelector('.options-overlay');
        if (overlay && overlay.style.display !== 'none') {
            e.preventDefault();
            showOptions();
            return;
        }
    }
    
    if (appState.selectedTenses.length === 2 && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        handleTwoTenseArrows(e);
        return;
    }
    
    if (e.key.startsWith('Arrow')) {
        e.preventDefault();
        return;
    }
    
    if (key >= 'A' && key <= 'F') {
        const tenseIndex = key.charCodeAt(0) - 65;
        e.preventDefault();
        toggleTense(tenseIndex);
        return;
    }
    
    if (key >= '1' && key <= '6') {
        const index = parseInt(key) - 1;
        if (index >= 0 && index < appState.currentExercise.options.length) {
            e.preventDefault();
            window.selectOption(index);
        }
    }
}

function handleAnsweredState(e) {
    const easyBtn = document.querySelector('.easy-btn');
    const hardBtn = document.querySelector('.hard-btn');
    const siguienteBtn = document.querySelector('.siguiente-btn');
    
    if (easyBtn && hardBtn) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            window.handleDifficultyFeedback('hard');
            return;
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            window.handleDifficultyFeedback('easy');
            return;
        }
    }
    
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (siguienteBtn) {
            window.handleSiguienteClick();
        }
    }
}

function handleTwoTenseArrows(e) {
    e.preventDefault();
    const allowedOptions = appState.currentExercise.options
        .map((option, index) => ({ index, allowed: appState.selectedTenses.includes(index) }))
        .filter(opt => opt.allowed)
        .map(opt => opt.index);
    
    if (allowedOptions.length >= 2) {
        const selectedIndex = e.key === 'ArrowUp' ? allowedOptions[0] : allowedOptions[1];
        window.selectOption(selectedIndex);
    }
}

export function initGlobalKeyboardHandler() {
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
            return;
        }
        
        const key = e.key.toUpperCase();
        const helpDialogVisible = document.getElementById('help-dialog-overlay').style.display === 'flex';
        
        if (e.key === 'Escape' && helpDialogVisible) {
            e.preventDefault();
            hideHelpDialog();
            return;
        }
        
        if ((key === 'H' || key === '?') && !helpDialogVisible && 
            !e.target.matches('input, textarea, select')) {
            e.preventDefault();
            showHelpDialog();
            return;
        }
    });
}
