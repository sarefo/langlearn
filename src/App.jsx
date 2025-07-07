import { useState, useEffect } from 'react'
import './styles/App.css'
import Exercise from './components/exercises/Exercise'
import Progress from './components/progress/Progress'
import HabitTracker from './components/progress/HabitTracker'
import { getNextExercise, updateProgress } from './utils/spacedRepetition'
import { getStreak, updateStreak } from './utils/habitTracker'
import { exercises } from './data/exercises'

function App() {
  const [currentExercise, setCurrentExercise] = useState(null)
  const [streak, setStreak] = useState(0)
  const [todayCompleted, setTodayCompleted] = useState(false)
  const [progress, setProgress] = useState({ correct: 0, total: 0 })

  useEffect(() => {
    // Guardar ejercicios base en localStorage para acceso global
    localStorage.setItem('langlearn_base_exercises', JSON.stringify(exercises))
    
    // Cargar datos iniciales
    const exercise = getNextExercise(exercises)
    setCurrentExercise(exercise)
    setStreak(getStreak())
    
    // Verificar si ya completó ejercicios hoy
    const today = new Date().toDateString()
    const lastCompleted = localStorage.getItem('lastCompletedDate')
    setTodayCompleted(lastCompleted === today)
    
    // Cargar progreso
    const savedProgress = JSON.parse(localStorage.getItem('progress') || '{"correct": 0, "total": 0}')
    setProgress(savedProgress)
  }, [])

  const handleAnswer = (isCorrect) => {
    if (!currentExercise) return

    // Actualizar progreso
    const newProgress = {
      correct: progress.correct + (isCorrect ? 1 : 0),
      total: progress.total + 1
    }
    setProgress(newProgress)
    localStorage.setItem('progress', JSON.stringify(newProgress))

    // Actualizar algoritmo de repetición espaciada
    updateProgress(currentExercise.id, isCorrect)

    // Actualizar racha si es la primera respuesta correcta del día
    if (isCorrect && !todayCompleted) {
      const newStreak = updateStreak()
      setStreak(newStreak)
      setTodayCompleted(true)
    }

    // Obtener siguiente ejercicio
    setTimeout(() => {
      const nextExercise = getNextExercise(exercises)
      setCurrentExercise(nextExercise)
    }, 1500) // Dar tiempo para ver el resultado
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Entrenador de Tiempos Pasados</h1>
        <p className="subtitle">Domina el pretérito e imperfecto en español</p>
      </header>

      <main className="app-main">
        <div className="dashboard">
          <HabitTracker streak={streak} todayCompleted={todayCompleted} />
          <Progress correct={progress.correct} total={progress.total} />
        </div>

        <div className="exercise-container">
          {currentExercise ? (
            <Exercise
              exercise={currentExercise}
              onAnswer={handleAnswer}
            />
          ) : (
            <div className="loading">
              <p>Cargando ejercicio...</p>
            </div>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>💡 Practica 5-10 minutos diarios para mejores resultados</p>
      </footer>
    </div>
  )
}

export default App