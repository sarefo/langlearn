import { useState, useEffect } from 'react'
import './Exercise.css'

const Exercise = ({ exercise, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleAnswerClick = (optionIndex) => {
    if (showResult) return // Prevenir múltiples clicks
    
    const correct = optionIndex === exercise.correctAnswer
    setSelectedAnswer(optionIndex)
    setIsCorrect(correct)
    setShowResult(true)
    
    onAnswer(correct)
  }

  const resetExercise = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    setIsCorrect(false)
  }

  // Resetear cuando cambie el ejercicio
  if (exercise && showResult && selectedAnswer === null) {
    resetExercise()
  }

  // Keyboard event handler
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!exercise) return
      
      if (showResult) {
        // Allow Enter or Space to continue to next exercise
        if (event.code === 'Enter' || event.code === 'Space') {
          event.preventDefault()
          // The next exercise logic is handled by the parent component's timeout
          return
        }
      } else {
        // Only allow A-D keys to select answers
        const key = event.key.toLowerCase()
        if (key === 'a' || key === 'b' || key === 'c' || key === 'd') {
          event.preventDefault()
          const optionIndex = key.charCodeAt(0) - 'a'.charCodeAt(0)
          if (optionIndex < exercise.options.length) {
            handleAnswerClick(optionIndex)
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [exercise, showResult, selectedAnswer])

  return (
    <div className="exercise">
      <div className="exercise-header">
        <div className="exercise-type">
          <span className="type-badge">{exercise.type}</span>
          <span className="difficulty">
            {exercise.difficulty === 'easy' && '🟢 Fácil'}
            {exercise.difficulty === 'medium' && '🟡 Intermedio'}
            {exercise.difficulty === 'hard' && '🔴 Difícil'}
          </span>
        </div>
      </div>

      <div className="exercise-content">
        <div className="question-section">
          <h2 className="question-title">Completa la oración:</h2>
          <p className="question-text" dangerouslySetInnerHTML={{ __html: exercise.question }}></p>
          
          {exercise.context && (
            <div className="context">
              <p className="context-label">Contexto:</p>
              <p className="context-text">{exercise.context}</p>
            </div>
          )}
        </div>

        <div className="options-section">
          {exercise.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                showResult
                  ? index === exercise.correctAnswer
                    ? 'correct'
                    : index === selectedAnswer
                    ? 'incorrect'
                    : ''
                  : selectedAnswer === index
                  ? 'selected'
                  : ''
              }`}
              onClick={() => handleAnswerClick(index)}
              disabled={showResult}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span className="option-text">{option}</span>
            </button>
          ))}
        </div>

        {showResult && (
          <div className={`result-section ${isCorrect ? 'correct' : 'incorrect'}`}>
            <div className="result-icon">
              {isCorrect ? '✅' : '❌'}
            </div>
            <div className="result-content">
              <h3 className="result-title">
                {isCorrect ? '¡Correcto!' : 'Incorrecto'}
              </h3>
              <p className="result-explanation">
                {exercise.explanation}
              </p>
              {exercise.tip && (
                <div className="tip">
                  <p className="tip-label">💡 Consejo:</p>
                  <p className="tip-text">{exercise.tip}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="exercise-footer">
        <div className="exercise-stats">
          <span className="stat">
            📊 Veces vista: {exercise.timesShown || 0}
          </span>
          <span className="stat">
            🎯 Precisión: {exercise.accuracy || 0}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default Exercise