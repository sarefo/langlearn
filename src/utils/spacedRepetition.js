// Algoritmo de Repetición Espaciada basado en la investigación moderna
// Intervalos: 1 día → 3 días → 1 semana → 2 semanas → 1 mes

const INTERVALS = [
  1,    // 1 día
  3,    // 3 días
  7,    // 1 semana
  14,   // 2 semanas
  30,   // 1 mes
  60    // 2 meses (mantenimiento)
]

const STORAGE_KEYS = {
  EXERCISE_DATA: 'langlearn_exercise_data',
  LAST_REVIEW: 'langlearn_last_review'
}

// Obtener datos de ejercicio desde localStorage
export const getExerciseData = (exerciseId) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEYS.EXERCISE_DATA) || '{}')
  return data[exerciseId] || {
    id: exerciseId,
    intervalIndex: 0,
    lastReviewed: null,
    nextReview: new Date(),
    timesShown: 0,
    timesCorrect: 0,
    accuracy: 0,
    difficulty: 'medium'
  }
}

// Guardar datos de ejercicio en localStorage
export const saveExerciseData = (exerciseId, data) => {
  const allData = JSON.parse(localStorage.getItem(STORAGE_KEYS.EXERCISE_DATA) || '{}')
  allData[exerciseId] = data
  localStorage.setItem(STORAGE_KEYS.EXERCISE_DATA, JSON.stringify(allData))
}

// Actualizar progreso después de una respuesta
export const updateProgress = (exerciseId, isCorrect) => {
  const data = getExerciseData(exerciseId)
  const now = new Date()
  
  // Actualizar estadísticas
  data.timesShown += 1
  if (isCorrect) {
    data.timesCorrect += 1
  }
  data.accuracy = Math.round((data.timesCorrect / data.timesShown) * 100)
  data.lastReviewed = now.toISOString()
  
  // Calcular siguiente intervalo basado en la respuesta
  if (isCorrect) {
    // Respuesta correcta: avanzar al siguiente intervalo
    if (data.intervalIndex < INTERVALS.length - 1) {
      data.intervalIndex += 1
    }
  } else {
    // Respuesta incorreta: retroceder el intervalo (pero no menos de 0)
    data.intervalIndex = Math.max(0, data.intervalIndex - 1)
  }
  
  // Calcular fecha de próxima revisión
  const daysToAdd = INTERVALS[data.intervalIndex]
  const nextReview = new Date(now)
  nextReview.setDate(nextReview.getDate() + daysToAdd)
  data.nextReview = nextReview.toISOString()
  
  // Ajustar dificultad basada en la precisión
  if (data.accuracy >= 90) {
    data.difficulty = 'easy'
  } else if (data.accuracy >= 70) {
    data.difficulty = 'medium'
  } else {
    data.difficulty = 'hard'
  }
  
  saveExerciseData(exerciseId, data)
  
  // Actualizar última fecha de revisión global
  localStorage.setItem(STORAGE_KEYS.LAST_REVIEW, now.toISOString())
  
  return data
}

// Obtener ejercicios que necesitan revisión
export const getExercisesDueForReview = () => {
  const allData = JSON.parse(localStorage.getItem(STORAGE_KEYS.EXERCISE_DATA) || '{}')
  const now = new Date()
  
  return Object.values(allData).filter(exercise => {
    if (!exercise.nextReview) return true
    return new Date(exercise.nextReview) <= now
  })
}

// Obtener todos los ejercicios ordenados por prioridad
export const getAllExercisesSorted = (exercises = []) => {
  // Get exercises from parameter or localStorage
  const exercisesData = exercises.length > 0 ? exercises : JSON.parse(localStorage.getItem('langlearn_base_exercises') || '[]')
  const now = new Date()
  
  return exercisesData.map(exercise => {
    const data = getExerciseData(exercise.id)
    return {
      ...exercise,
      ...data,
      isDue: !data.nextReview || new Date(data.nextReview) <= now,
      daysSinceLastReview: data.lastReviewed 
        ? Math.floor((now - new Date(data.lastReviewed)) / (1000 * 60 * 60 * 24))
        : 999
    }
  }).sort((a, b) => {
    // Prioridad 1: Ejercicios que necesitan revisión
    if (a.isDue && !b.isDue) return -1
    if (!a.isDue && b.isDue) return 1
    
    // Prioridad 2: Ejercicios con menor precisión
    if (a.isDue && b.isDue) {
      if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy
    }
    
    // Prioridad 3: Ejercicios no vistos
    if (a.timesShown === 0 && b.timesShown > 0) return -1
    if (a.timesShown > 0 && b.timesShown === 0) return 1
    
    // Prioridad 4: Tiempo desde última revisión
    return b.daysSinceLastReview - a.daysSinceLastReview
  })
}

// Obtener siguiente ejercicio para mostrar
export const getNextExercise = (exercises = []) => {
  const sortedExercises = getAllExercisesSorted(exercises)
  return sortedExercises[0] || null
}

// Obtener estadísticas generales
export const getStats = () => {
  const allData = JSON.parse(localStorage.getItem(STORAGE_KEYS.EXERCISE_DATA) || '{}')
  const exercises = Object.values(allData)
  
  const totalExercises = exercises.length
  const exercisesDue = getExercisesDueForReview().length
  const totalAnswers = exercises.reduce((sum, ex) => sum + ex.timesShown, 0)
  const correctAnswers = exercises.reduce((sum, ex) => sum + ex.timesCorrect, 0)
  const overallAccuracy = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0
  
  const lastReview = localStorage.getItem(STORAGE_KEYS.LAST_REVIEW)
  const daysSinceLastReview = lastReview 
    ? Math.floor((new Date() - new Date(lastReview)) / (1000 * 60 * 60 * 24))
    : null
  
  return {
    totalExercises,
    exercisesDue,
    totalAnswers,
    correctAnswers,
    overallAccuracy,
    lastReview,
    daysSinceLastReview
  }
}

// Resetear progreso (para desarrollo/testing)
export const resetProgress = () => {
  localStorage.removeItem(STORAGE_KEYS.EXERCISE_DATA)
  localStorage.removeItem(STORAGE_KEYS.LAST_REVIEW)
}

// Exportar datos (para backup)
export const exportData = () => {
  return {
    exerciseData: JSON.parse(localStorage.getItem(STORAGE_KEYS.EXERCISE_DATA) || '{}'),
    lastReview: localStorage.getItem(STORAGE_KEYS.LAST_REVIEW),
    exportDate: new Date().toISOString()
  }
}

// Importar datos (para restore)
export const importData = (data) => {
  if (data.exerciseData) {
    localStorage.setItem(STORAGE_KEYS.EXERCISE_DATA, JSON.stringify(data.exerciseData))
  }
  if (data.lastReview) {
    localStorage.setItem(STORAGE_KEYS.LAST_REVIEW, data.lastReview)
  }
}