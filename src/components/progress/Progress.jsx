import './Progress.css'

const Progress = ({ correct, total }) => {
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
  
  const getPerformanceLevel = () => {
    if (percentage >= 90) return { level: 'excelente', color: '#10b981', emoji: '🌟' }
    if (percentage >= 80) return { level: 'muy bueno', color: '#059669', emoji: '🎯' }
    if (percentage >= 70) return { level: 'bueno', color: '#3b82f6', emoji: '👍' }
    if (percentage >= 60) return { level: 'regular', color: '#f59e0b', emoji: '📈' }
    return { level: 'necesita práctica', color: '#ef4444', emoji: '💪' }
  }

  const performance = getPerformanceLevel()

  return (
    <div className="progress-card">
      <div className="progress-header">
        <h3 className="progress-title">Tu Progreso</h3>
        <span className="progress-emoji">{performance.emoji}</span>
      </div>
      
      <div className="progress-stats">
        <div className="stat-item">
          <div className="stat-number">{correct}</div>
          <div className="stat-label">Correctas</div>
        </div>
        <div className="stat-divider">de</div>
        <div className="stat-item">
          <div className="stat-number">{total}</div>
          <div className="stat-label">Total</div>
        </div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ 
              width: `${percentage}%`,
              backgroundColor: performance.color
            }}
          />
        </div>
        <div className="progress-percentage">{percentage}%</div>
      </div>

      <div className="progress-status">
        <span 
          className="status-badge"
          style={{ 
            backgroundColor: performance.color,
            color: 'white'
          }}
        >
          {performance.level}
        </span>
      </div>

      {total > 0 && (
        <div className="progress-insights">
          {percentage >= 80 && (
            <p className="insight success">
              ¡Excelente trabajo! Dominas bien estos conceptos.
            </p>
          )}
          {percentage >= 60 && percentage < 80 && (
            <p className="insight moderate">
              Buen progreso. Sigue practicando para mejorar.
            </p>
          )}
          {percentage < 60 && (
            <p className="insight needs-work">
              Continúa practicando. La repetición es clave para el aprendizaje.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default Progress