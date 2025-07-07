import { useState, useEffect } from 'react'
import './HabitTracker.css'

const HabitTracker = ({ streak, todayCompleted }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [previousStreak, setPreviousStreak] = useState(streak)

  useEffect(() => {
    if (streak > previousStreak) {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }
    setPreviousStreak(streak)
  }, [streak, previousStreak])

  const getStreakLevel = () => {
    if (streak >= 30) return { level: 'maestro', color: '#7c3aed', emoji: '🏆', message: '¡Eres un maestro!' }
    if (streak >= 21) return { level: 'experto', color: '#dc2626', emoji: '🔥', message: '¡Racha ardiente!' }
    if (streak >= 14) return { level: 'avanzado', color: '#ea580c', emoji: '⚡', message: '¡Imparable!' }
    if (streak >= 7) return { level: 'intermedio', color: '#d97706', emoji: '🌟', message: '¡Una semana completa!' }
    if (streak >= 3) return { level: 'principiante', color: '#0ea5e9', emoji: '🌱', message: '¡Buen comienzo!' }
    return { level: 'nuevo', color: '#6b7280', emoji: '🎯', message: '¡Comienza tu racha!' }
  }

  const streakInfo = getStreakLevel()

  const getMotivationalMessage = () => {
    if (todayCompleted) {
      return "¡Completaste tu práctica de hoy!"
    }
    if (streak === 0) {
      return "¡Comienza tu racha respondiendo correctamente!"
    }
    return `¡Continúa tu racha de ${streak} días!`
  }

  const getDaysUntilNextLevel = () => {
    const levels = [3, 7, 14, 21, 30]
    const nextLevel = levels.find(level => level > streak)
    return nextLevel ? nextLevel - streak : 0
  }

  return (
    <div className="habit-tracker">
      <div className="tracker-header">
        <h3 className="tracker-title">Racha Diaria</h3>
        <div className="streak-status">
          {todayCompleted ? (
            <span className="status-completed">✅ Completado</span>
          ) : (
            <span className="status-pending">⏳ Pendiente</span>
          )}
        </div>
      </div>

      <div className="streak-display">
        <div className={`streak-circle ${isAnimating ? 'animating' : ''}`}>
          <div 
            className="streak-ring"
            style={{ 
              borderColor: streakInfo.color,
              borderWidth: '4px'
            }}
          >
            <div className="streak-content">
              <div className="streak-emoji">{streakInfo.emoji}</div>
              <div className="streak-number">{streak}</div>
              <div className="streak-unit">días</div>
            </div>
          </div>
        </div>

        <div className="streak-info">
          <div 
            className="streak-level"
            style={{ color: streakInfo.color }}
          >
            {streakInfo.level}
          </div>
          <div className="streak-message">
            {streakInfo.message}
          </div>
        </div>
      </div>

      <div className="motivation-section">
        <p className="motivation-text">
          {getMotivationalMessage()}
        </p>
        
        {!todayCompleted && getDaysUntilNextLevel() > 0 && (
          <div className="next-level">
            <div className="next-level-progress">
              <div className="progress-text">
                Faltan {getDaysUntilNextLevel()} días para el siguiente nivel
              </div>
              <div className="mini-progress-bar">
                <div 
                  className="mini-progress-fill"
                  style={{ 
                    width: `${((streak % 30) / 30) * 100}%`,
                    backgroundColor: streakInfo.color
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="habit-tips">
        <div className="tip-header">💡 Consejo del día</div>
        <div className="tip-content">
          {streak === 0 && "La consistencia es más importante que la perfección. ¡Empieza hoy!"}
          {streak >= 1 && streak < 7 && "Los primeros días son los más difíciles. ¡Sigue así!"}
          {streak >= 7 && streak < 21 && "¡Excelente! Los hábitos se forman en 21 días."}
          {streak >= 21 && "¡Increíble! Ya tienes un hábito sólido. Mantén el momentum."}
        </div>
      </div>
    </div>
  )
}

export default HabitTracker