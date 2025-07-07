// Ejercicios de tiempos pasados en español
// Enfoque: Pretérito vs Imperfecto con verbos comunes

export const exercises = [
  // NIVEL FÁCIL - Acciones puntuales vs habituales
  {
    id: "preterite_vs_imperfect_01",
    type: "Pretérito vs Imperfecto",
    difficulty: "easy",
    question: "Cuando era niño, siempre _____ <span style='color: gray'>(ir)</span> al parque los domingos.",
    options: ["fui", "iba", "iré", "voy"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'iba' porque describe una acción habitual en el pasado (siempre los domingos).",
    tip: "El imperfecto describe acciones repetidas o habituales en el pasado. Palabras clave: siempre, todos los días, cada vez."
  },
  {
    id: "preterite_vs_imperfect_02",
    type: "Pretérito vs Imperfecto",
    difficulty: "easy",
    question: "Ayer _____ <span style='color: gray'>(llamar)</span> a mi abuela por teléfono.",
    options: ["llamaba", "llamé", "llamo", "llamaré"],
    correctAnswer: 1,
    explanation: "Se usa el pretérito 'llamé' porque es una acción específica que ocurrió ayer.",
    tip: "El pretérito se usa para acciones completadas en un momento específico. Palabras clave: ayer, anoche, el lunes pasado."
  },
  {
    id: "preterite_vs_imperfect_03",
    type: "Pretérito vs Imperfecto",
    difficulty: "easy",
    question: "Mientras _____ <span style='color: gray'>(ver)</span> la televisión, sonó el teléfono.",
    options: ["vi", "veía", "veo", "veré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'veía' porque describe una acción en progreso que fue interrumpida.",
    tip: "Mientras + imperfecto describe una acción en progreso. El pretérito interrumpe esa acción."
  },
  {
    id: "preterite_vs_imperfect_04",
    type: "Pretérito vs Imperfecto",
    difficulty: "easy",
    question: "El año pasado _____ <span style='color: gray'>(estudiar)</span> español en la universidad.",
    options: ["estudiaba", "estudié", "estudio", "estudiaré"],
    correctAnswer: 0,
    explanation: "Se usa el imperfecto 'estudiaba' porque describe una acción habitual durante todo el año pasado.",
    tip: "Cuando hablamos de períodos largos de tiempo, solemos usar el imperfecto."
  },
  {
    id: "preterite_vs_imperfect_05",
    type: "Pretérito vs Imperfecto",
    difficulty: "easy",
    question: "De repente, _____ <span style='color: gray'>(escuchar)</span> una gran explosión.",
    options: ["escuchaba", "escuché", "escucho", "escucharé"],
    correctAnswer: 1,
    explanation: "Se usa el pretérito 'escuché' porque 'de repente' indica una acción súbita y completada.",
    tip: "'De repente' siempre indica pretérito porque marca un momento específico."
  },

  // NIVEL INTERMEDIO - Situaciones más complejas
  {
    id: "preterite_vs_imperfect_06",
    type: "Pretérito vs Imperfecto",
    difficulty: "medium",
    question: "Los niños _____ <span style='color: gray'>(jugar)</span> en el jardín cuando empezó a llover.",
    options: ["jugaron", "jugaban", "juegan", "jugarán"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'jugaban' porque describe una acción en progreso que fue interrumpida por la lluvia.",
    tip: "Acción en progreso (imperfecto) + interrupción (pretérito) es un patrón muy común."
  },
  {
    id: "preterite_vs_imperfect_07",
    type: "Pretérito vs Imperfecto",
    difficulty: "medium",
    question: "Conocí a María cuando _____ <span style='color: gray'>(vivir)</span> en Madrid.",
    options: ["viví", "vivía", "vivo", "viviré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'vivía' porque describe las circunstancias (dónde vivía) cuando ocurrió el evento (conocer a María).",
    tip: "El imperfecto establece el contexto o las circunstancias de una acción en pretérito."
  },
  {
    id: "preterite_vs_imperfect_08",
    type: "Pretérito vs Imperfecto",
    difficulty: "medium",
    question: "Antes _____ <span style='color: gray'>(beber)</span> mucho café, pero ahora solo bebo té.",
    options: ["bebí", "bebía", "bebo", "beberé"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'bebía' porque contrasta un hábito pasado con la situación actual.",
    tip: "'Antes' + imperfecto contrasta hábitos pasados con el presente."
  },
  {
    id: "preterite_vs_imperfect_09",
    type: "Pretérito vs Imperfecto",
    difficulty: "medium",
    question: "_____ <span style='color: gray'>(ser)</span> las tres de la mañana cuando llegaste.",
    options: ["Fueron", "Eran", "Son", "Serán"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'eran' porque expresa la hora como contexto de otra acción.",
    tip: "La hora siempre se expresa en imperfecto cuando da contexto a otra acción."
  },
  {
    id: "preterite_vs_imperfect_10",
    type: "Pretérito vs Imperfecto",
    difficulty: "medium",
    question: "No pude salir porque _____ <span style='color: gray'>(estar)</span> enfermo.",
    options: ["estuve", "estaba", "estoy", "estaré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'estaba' porque describe el estado (estar enfermo) que causó la imposibilidad de salir.",
    tip: "Estados o condiciones que explican por qué algo pasó se expresan en imperfecto."
  },

  // NIVEL DIFÍCIL - Distinciones sutiles
  {
    id: "preterite_vs_imperfect_11",
    type: "Pretérito vs Imperfecto",
    difficulty: "hard",
    question: "Durante la reunión, todos _____ <span style='color: gray'>(estar)</span> en silencio hasta que habló el director.",
    options: ["estuvieron", "estaban", "están", "estarán"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'estaban' porque describe un estado continuo durante la reunión hasta que ocurrió la interrupción.",
    tip: "Estados o situaciones continuas que duran hasta ser interrumpidas usan imperfecto."
  },
  {
    id: "preterite_vs_imperfect_12",
    type: "Pretérito vs Imperfecto",
    difficulty: "hard",
    question: "Cuando era joven, _____ <span style='color: gray'>(correr)</span> todas las mañanas en el parque.",
    options: ["corrí", "corría", "corro", "correré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'corría' porque describe una rutina habitual en el pasado (todas las mañanas).",
    tip: "Rutinas y hábitos pasados se expresan con imperfecto, incluso si se mencionan múltiples veces."
  },
  {
    id: "preterite_vs_imperfect_13",
    type: "Pretérito vs Imperfecto",
    difficulty: "hard",
    question: "El ladrón _____ <span style='color: gray'>(entrar)</span> por la ventana mientras la familia dormía.",
    options: ["entró", "entraba", "entra", "entrará"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'entró' porque es una acción específica y completada, aunque ocurrió durante otra acción continua.",
    tip: "Acciones específicas y completadas van en pretérito, incluso si ocurren durante situaciones descritas en imperfecto."
  },
  {
    id: "preterite_vs_imperfect_14",
    type: "Pretérito vs Imperfecto",
    difficulty: "hard",
    question: "No sabía que tú _____ <span style='color: gray'>(hablar)</span> francés tan bien.",
    options: ["hablaste", "hablabas", "hablas", "hablarás"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'hablabas' porque describe una habilidad o característica continua en el pasado.",
    tip: "Habilidades, características o conocimientos en el pasado se expresan en imperfecto."
  },
  {
    id: "preterite_vs_imperfect_15",
    type: "Pretérito vs Imperfecto",
    difficulty: "hard",
    question: "Después de que _____ <span style='color: gray'>(terminar)</span> el examen, me sentí muy aliviado.",
    options: ["terminé", "terminaba", "termino", "terminaré"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'terminé' porque 'después de que' indica una secuencia de acciones completadas.",
    tip: "'Después de que' introduce acciones completadas que van en pretérito."
  },

  // EJERCICIOS CON VERBOS IRREGULARES COMUNES
  {
    id: "irregular_verbs_01",
    type: "Verbos Irregulares",
    difficulty: "medium",
    question: "Ayer no _____ <span style='color: gray'>(tener)</span> tiempo para estudiar.",
    options: ["tuve", "tenía", "tengo", "tendré"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'tuve' porque se refiere a una situación específica de ayer.",
    tip: "El verbo 'tener' es irregular en pretérito: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron."
  },
  {
    id: "irregular_verbs_02",
    type: "Verbos Irregulares",
    difficulty: "medium",
    question: "No _____ <span style='color: gray'>(saber)</span> qué hacer en esa situación.",
    options: ["supe", "sabía", "sé", "sabré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'sabía' porque describe un estado mental continuo en el pasado.",
    tip: "'Saber' en imperfecto describe conocimiento continuo. En pretérito ('supe') indica el momento de enterarse."
  },
  {
    id: "irregular_verbs_03",
    type: "Verbos Irregulares",
    difficulty: "hard",
    question: "Cuando _____ <span style='color: gray'>(saber)</span> la noticia, no lo podía creer.",
    options: ["supe", "sabía", "sé", "sabré"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'supe' porque indica el momento específico en que se enteró de la noticia.",
    tip: "'Saber' en pretérito significa 'enterarse' o 'descubrir' en un momento específico."
  },
  {
    id: "irregular_verbs_04",
    type: "Verbos Irregulares",
    difficulty: "medium",
    question: "Los invitados _____ <span style='color: gray'>(venir)</span> a las ocho en punto.",
    options: ["vinieron", "venían", "vienen", "vendrán"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'vinieron' porque indica una acción completada en un momento específico.",
    tip: "'Venir' es irregular en pretérito: vine, viniste, vino, vinimos, vinisteis, vinieron."
  },
  {
    id: "irregular_verbs_05",
    type: "Verbos Irregulares",
    difficulty: "hard",
    question: "No _____ <span style='color: gray'>(poder)</span> dormir anoche por el ruido.",
    options: ["pude", "podía", "puedo", "podré"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'pude' porque se refiere a una situación específica de anoche.",
    tip: "'Poder' en pretérito indica capacidad/incapacidad en una situación específica."
  },

  // EJERCICIOS ADICIONALES - ACCIONES HABITUALES VS PUNTUALES
  {
    id: "preterite_vs_imperfect_16",
    type: "Pretérito vs Imperfecto",
    difficulty: "easy",
    question: "Cada verano _____ <span style='color: gray'>(ir)</span> a la playa con mi familia.",
    options: ["fui", "iba", "voy", "iré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'iba' porque 'cada verano' indica una acción habitual repetida.",
    tip: "'Cada' + período de tiempo siempre indica imperfecto para acciones habituales."
  },
  {
    id: "preterite_vs_imperfect_17",
    type: "Pretérito vs Imperfecto",
    difficulty: "easy",
    question: "Anoche _____ <span style='color: gray'>(ver)</span> una película muy interesante.",
    options: ["veía", "vi", "veo", "veré"],
    correctAnswer: 1,
    explanation: "Se usa el pretérito 'vi' porque se refiere a una acción específica completada anoche.",
    tip: "Anoche + acción específica = pretérito."
  },
  {
    id: "preterite_vs_imperfect_18",
    type: "Pretérito vs Imperfecto",
    difficulty: "easy",
    question: "Cuando tenía 10 años, _____ <span style='color: gray'>(montar)</span> en bicicleta todos los días.",
    options: ["monté", "montaba", "monto", "montaré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'montaba' porque describe una actividad habitual en el pasado (todos los días).",
    tip: "Edad + actividad habitual = imperfecto."
  },
  {
    id: "preterite_vs_imperfect_19",
    type: "Pretérito vs Imperfecto",
    difficulty: "medium",
    question: "_____ <span style='color: gray'>(estar)</span> muy cansado cuando llegué a casa.",
    options: ["Estuve", "Estaba", "Estoy", "Estaré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'estaba' porque describe el estado en que se encontraba al llegar.",
    tip: "Estados o condiciones que describen circunstancias van en imperfecto."
  },
  {
    id: "preterite_vs_imperfect_20",
    type: "Pretérito vs Imperfecto",
    difficulty: "medium",
    question: "El teléfono _____ <span style='color: gray'>(sonar)</span> cuando estaba en la ducha.",
    options: ["sonó", "sonaba", "suena", "sonará"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'sonó' porque es una acción específica que interrumpió otra acción en progreso.",
    tip: "Acción que interrumpe = pretérito, acción interrumpida = imperfecto."
  },
  {
    id: "preterite_vs_imperfect_21",
    type: "Pretérito vs Imperfecto",
    difficulty: "medium",
    question: "Todos los miércoles _____ <span style='color: gray'>(ir)</span> al gimnasio después del trabajo.",
    options: ["fui", "iba", "voy", "iré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'iba' porque describe una rutina habitual (todos los miércoles).",
    tip: "Rutinas semanales o periódicas se expresan en imperfecto."
  },
  {
    id: "preterite_vs_imperfect_22",
    type: "Pretérito vs Imperfecto",
    difficulty: "hard",
    question: "Mi hermana _____ <span style='color: gray'>(ser)</span> doctora cuando la conociste.",
    options: ["fue", "era", "es", "será"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'era' porque describe su profesión como característica continua en el pasado.",
    tip: "Profesiones y características permanentes en el pasado van en imperfecto."
  },
  {
    id: "preterite_vs_imperfect_23",
    type: "Pretérito vs Imperfecto",
    difficulty: "hard",
    question: "De niño, _____ <span style='color: gray'>(ser)</span> muy tímido, pero un día decidí cambiar.",
    options: ["fui", "era", "soy", "seré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'era' porque describe una característica continua de la personalidad en el pasado.",
    tip: "Características de personalidad o físicas en el pasado usan imperfecto."
  },

  // VERBOS IRREGULARES ADICIONALES
  {
    id: "irregular_verbs_06",
    type: "Verbos Irregulares",
    difficulty: "medium",
    question: "Ayer _____ <span style='color: gray'>(tener)</span> que estudiar toda la noche.",
    options: ["tuve", "tenía", "tengo", "tendré"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'tuve' porque se refiere a una obligación específica de ayer.",
    tip: "Obligaciones específicas en el pasado van en pretérito."
  },
  {
    id: "irregular_verbs_07",
    type: "Verbos Irregulares",
    difficulty: "medium",
    question: "En aquella época, no _____ <span style='color: gray'>(saber)</span> usar computadoras.",
    options: ["supe", "sabía", "sé", "sabré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'sabía' porque describe una falta de conocimiento continua en el pasado.",
    tip: "Conocimientos o habilidades continuas en el pasado van en imperfecto."
  },
  {
    id: "irregular_verbs_08",
    type: "Verbos Irregulares",
    difficulty: "hard",
    question: "_____ <span style='color: gray'>(venir)</span> a verte tan pronto como recibí tu mensaje.",
    options: ["Vine", "Venía", "Vengo", "Vendré"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'vine' porque es una acción específica en respuesta al mensaje.",
    tip: "Acciones específicas en respuesta a eventos van en pretérito."
  },
  {
    id: "irregular_verbs_09",
    type: "Verbos Irregulares",
    difficulty: "medium",
    question: "Antes _____ <span style='color: gray'>(poder)</span> caminar al trabajo, pero ahora manejo.",
    options: ["pude", "podía", "puedo", "podré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'podía' porque describe una capacidad habitual en el pasado.",
    tip: "Capacidades o habilidades habituales en el pasado van en imperfecto."
  },
  {
    id: "irregular_verbs_10",
    type: "Verbos Irregulares",
    difficulty: "hard",
    question: "Cuando _____ <span style='color: gray'>(saber)</span> la verdad, me sentí muy triste.",
    options: ["supe", "sabía", "sé", "sabré"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'supe' porque indica el momento específico de enterarse de la verdad.",
    tip: "'Saber' en pretérito = enterarse/descubrir en un momento específico."
  },

  // EJERCICIOS CON DESCRIPCIONES Y NARRACIONES
  {
    id: "descriptions_01",
    type: "Descripciones",
    difficulty: "medium",
    question: "La casa _____ <span style='color: gray'>(ser)</span> muy grande y tenía un jardín hermoso.",
    options: ["fue", "era", "es", "será"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'era' porque describe las características de la casa en el pasado.",
    tip: "Descripciones físicas y características van en imperfecto."
  },
  {
    id: "descriptions_02",
    type: "Descripciones",
    difficulty: "medium",
    question: "Hacía mucho calor cuando _____ <span style='color: gray'>(salir)</span> de la oficina.",
    options: ["salí", "salía", "salgo", "saldré"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'salí' porque es una acción específica, mientras que 'hacía calor' describe las condiciones.",
    tip: "Condiciones climáticas (imperfecto) + acción específica (pretérito)."
  },
  {
    id: "descriptions_03",
    type: "Descripciones",
    difficulty: "hard",
    question: "El restaurante _____ <span style='color: gray'>(estar)</span> lleno cuando llegamos.",
    options: ["estuvo", "estaba", "está", "estará"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'estaba' porque describe el estado del restaurante en el momento de llegar.",
    tip: "Estados y condiciones como contexto de otras acciones van en imperfecto."
  },

  // EJERCICIOS DE TIEMPO Y FRECUENCIA
  {
    id: "time_frequency_01",
    type: "Tiempo y Frecuencia",
    difficulty: "easy",
    question: "A menudo _____ <span style='color: gray'>(desayunar)</span> en ese café cuando vivía cerca.",
    options: ["desayuné", "desayunaba", "desayuno", "desayunaré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'desayunaba' porque 'a menudo' indica una acción habitual.",
    tip: "'A menudo', 'frecuentemente', 'normalmente' indican imperfecto."
  },
  {
    id: "time_frequency_02",
    type: "Tiempo y Frecuencia",
    difficulty: "medium",
    question: "Una vez _____ <span style='color: gray'>(ver)</span> un accidente muy grave en esa esquina.",
    options: ["vi", "veía", "veo", "veré"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'vi' porque 'una vez' indica una acción específica y única.",
    tip: "'Una vez' siempre indica pretérito para acciones específicas."
  },
  {
    id: "time_frequency_03",
    type: "Tiempo y Frecuencia",
    difficulty: "hard",
    question: "Durante mi infancia, _____ <span style='color: gray'>(leer)</span> muchos cuentos antes de dormir.",
    options: ["leí", "leía", "leo", "leeré"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'leía' porque describe una actividad habitual durante un período largo.",
    tip: "'Durante' + período de tiempo + actividad habitual = imperfecto."
  },

  // EJERCICIOS DE SECUENCIAS Y CAUSAS
  {
    id: "sequences_01",
    type: "Secuencias",
    difficulty: "medium",
    question: "Primero _____ <span style='color: gray'>(terminar)</span> la tarea, luego salí a jugar.",
    options: ["terminé", "terminaba", "termino", "terminaré"],
    correctAnswer: 0,
    explanation: "Se usa el pretérito 'terminé' porque 'primero' indica una secuencia de acciones completadas.",
    tip: "Secuencias de acciones (primero, luego, después) van en pretérito."
  },
  {
    id: "sequences_02",
    type: "Secuencias",
    difficulty: "hard",
    question: "Como _____ <span style='color: gray'>(haber)</span> lluvia, decidimos quedarnos en casa.",
    options: ["hubo", "había", "hay", "habrá"],
    correctAnswer: 1,
    explanation: "Se usa el imperfecto 'había' porque describe la condición (lluvia) que causó la decisión.",
    tip: "Condiciones que explican decisiones o acciones van en imperfecto."
  }
]

// Metadatos adicionales para el sistema de aprendizaje
export const exerciseMetadata = {
  totalExercises: exercises.length,
  difficulties: {
    easy: exercises.filter(ex => ex.difficulty === 'easy').length,
    medium: exercises.filter(ex => ex.difficulty === 'medium').length,
    hard: exercises.filter(ex => ex.difficulty === 'hard').length
  },
  types: {
    "Pretérito vs Imperfecto": exercises.filter(ex => ex.type === "Pretérito vs Imperfecto").length,
    "Verbos Irregulares": exercises.filter(ex => ex.type === "Verbos Irregulares").length
  }
}