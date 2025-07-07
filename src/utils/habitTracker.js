// Sistema de seguimiento de hábitos basado en ciencia del comportamiento

const STORAGE_KEYS = {
  STREAK_DATA: 'langlearn_streak_data',
  DAILY_GOALS: 'langlearn_daily_goals'
}

// Obtener datos de racha actual
export const getStreakData = () => {
  const data = localStorage.getItem(STORAGE_KEYS.STREAK_DATA)
  if (!data) {
    return {
      currentStreak: 0,
      longestStreak: 0,
      lastCompletedDate: null,
      totalDays: 0,
      streakHistory: []
    }
  }
  return JSON.parse(data)
}

// Guardar datos de racha
export const saveStreakData = (data) => {
  localStorage.setItem(STORAGE_KEYS.STREAK_DATA, JSON.stringify(data))
}

// Obtener racha actual
export const getStreak = () => {
  const data = getStreakData()
  return data.currentStreak
}

// Verificar si completó el objetivo de hoy
export const hasCompletedToday = () => {
  const data = getStreakData()
  const today = new Date().toDateString()
  return data.lastCompletedDate === today
}

// Actualizar racha cuando el usuario completa un ejercicio correctamente
export const updateStreak = () => {
  const data = getStreakData()
  const today = new Date()
  const todayString = today.toDateString()
  
  // Si ya completó hoy, no hacer nada
  if (data.lastCompletedDate === todayString) {
    return data.currentStreak
  }
  
  const lastCompleted = data.lastCompletedDate ? new Date(data.lastCompletedDate) : null
  
  if (!lastCompleted) {
    // Primera vez
    data.currentStreak = 1
    data.totalDays = 1
  } else {
    const daysDiff = Math.floor((today - lastCompleted) / (1000 * 60 * 60 * 24))
    
    if (daysDiff === 1) {
      // Día consecutivo
      data.currentStreak += 1
      data.totalDays += 1
    } else if (daysDiff > 1) {
      // Se rompió la racha
      data.currentStreak = 1
      data.totalDays += 1
      
      // Registrar la racha anterior en el historial
      if (data.currentStreak > 1) {
        data.streakHistory.push({
          length: data.currentStreak - 1,
          endDate: lastCompleted.toISOString(),
          startDate: new Date(lastCompleted.getTime() - (data.currentStreak - 2) * 24 * 60 * 60 * 1000).toISOString()
        })
      }
    }
    // Si daysDiff === 0, es el mismo día, no hacer nada
  }
  
  // Actualizar récord personal
  if (data.currentStreak > data.longestStreak) {
    data.longestStreak = data.currentStreak
  }
  
  data.lastCompletedDate = todayString
  
  saveStreakData(data)
  return data.currentStreak
}

// Obtener estadísticas de hábitos
export const getHabitStats = () => {
  const data = getStreakData()
  const today = new Date()
  const todayString = today.toDateString()
  
  // Calcular días desde que empezó
  const firstDay = data.streakHistory.length > 0 
    ? new Date(data.streakHistory[0].startDate)
    : data.lastCompletedDate 
    ? new Date(data.lastCompletedDate)
    : today
  
  const totalPossibleDays = Math.floor((today - firstDay) / (1000 * 60 * 60 * 24)) + 1
  const consistencyRate = totalPossibleDays > 0 ? Math.round((data.totalDays / totalPossibleDays) * 100) : 0
  
  return {
    currentStreak: data.currentStreak,
    longestStreak: data.longestStreak,
    totalDays: data.totalDays,
    consistencyRate,
    hasCompletedToday: data.lastCompletedDate === todayString,
    streakHistory: data.streakHistory
  }
}

// Obtener objetivos diarios
export const getDailyGoals = () => {
  const data = localStorage.getItem(STORAGE_KEYS.DAILY_GOALS)
  if (!data) {
    return {
      targetExercises: 5,
      targetAccuracy: 80,
      targetTime: 10 // minutos
    }
  }
  return JSON.parse(data)
}

// Guardar objetivos diarios
export const saveDailyGoals = (goals) => {
  localStorage.setItem(STORAGE_KEYS.DAILY_GOALS, JSON.stringify(goals))
}

// Verificar si se cumplieron los objetivos del día
export const checkDailyGoals = () => {
  const goals = getDailyGoals()
  const today = new Date().toDateString()
  
  // Obtener progreso del día desde la repetición espaciada
  const exerciseData = JSON.parse(localStorage.getItem('langlearn_exercise_data') || '{}')
  const todayExercises = Object.values(exerciseData).filter(exercise => {
    if (!exercise.lastReviewed) return false
    return new Date(exercise.lastReviewed).toDateString() === today
  })
  
  const todayTotal = todayExercises.reduce((sum, ex) => sum + ex.timesShown, 0)
  const todayCorrect = todayExercises.reduce((sum, ex) => sum + ex.timesCorrect, 0)
  const todayAccuracy = todayTotal > 0 ? Math.round((todayCorrect / todayTotal) * 100) : 0
  
  return {
    exerciseGoalMet: todayTotal >= goals.targetExercises,
    accuracyGoalMet: todayAccuracy >= goals.targetAccuracy,
    totalExercises: todayTotal,
    accuracy: todayAccuracy,
    goals
  }
}

// Obtener mensaje motivacional basado en la racha
export const getMotivationalMessage = () => {
  const stats = getHabitStats()
  const streak = stats.currentStreak
  
  if (stats.hasCompletedToday) {
    const messages = [
      "¡Excelente! Completaste tu práctica de hoy.",
      "¡Bien hecho! Mantuviste tu racha viva.",
      "¡Fantástico! Un día más hacia la maestría.",
      "¡Increíble! La consistencia es la clave del éxito."
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }
  
  if (streak === 0) {
    return "¡Comienza tu racha! Responde correctamente para empezar."
  }
  
  if (streak < 3) {
    return `¡Sigue así! Llevas ${streak} día${streak > 1 ? 's' : ''} consecutivo${streak > 1 ? 's' : ''}.`
  }
  
  if (streak < 7) {
    return `¡Excelente progreso! ${streak} días de práctica constante.`
  }
  
  if (streak < 21) {
    return `¡Impresionante! ${streak} días seguidos. Los hábitos se forman en 21 días.`
  }
  
  if (streak < 30) {
    return `¡Increíble! ${streak} días de disciplina. ¡Ya tienes un hábito sólido!`
  }
  
  return `¡Eres un maestro! ${streak} días de práctica constante. ¡Imparable!`
}

// Resetear datos de hábitos (para desarrollo/testing)
export const resetHabitData = () => {
  localStorage.removeItem(STORAGE_KEYS.STREAK_DATA)
  localStorage.removeItem(STORAGE_KEYS.DAILY_GOALS)
}

// Calcular recompensas por milestones
export const getMilestoneRewards = () => {
  const streak = getStreak()
  const milestones = [
    { days: 3, reward: "🌱 Primer Brote", message: "¡Comenzaste bien!" },
    { days: 7, reward: "🌟 Una Semana", message: "¡Primera semana completa!" },
    { days: 14, reward: "⚡ Dos Semanas", message: "¡Momentum imparable!" },
    { days: 21, reward: "🔥 Hábito Formado", message: "¡Ya tienes el hábito!" },
    { days: 30, reward: "🏆 Un Mes", message: "¡Maestría en progreso!" },
    { days: 60, reward: "💎 Dos Meses", message: "¡Dedicación excepcional!" },
    { days: 100, reward: "👑 Cien Días", message: "¡Eres una leyenda!" }
  ]
  
  const earned = milestones.filter(m => streak >= m.days)
  const next = milestones.find(m => streak < m.days)
  
  return { earned, next }
}