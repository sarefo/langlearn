// Spanish past tense exercises - Expanded collection with different subjects and scenarios
const exercises = [
    // Yo (I) - First person singular
    {
        id: 1,
        type: "Pretérito vs Imperfecto",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Ayer _____ (llamar) a mi abuela por teléfono.",
        hint: "(llamar)",
        options: ["llamaré", "llamaba", "llamo", "llamé"],
        correct: 3,
        explanation: "Se usa pretérito para acciones específicas en el pasado."
    },
    {
        id: 2,
        type: "Pretérito vs Imperfecto", 
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Cuando era niño, siempre _____ (jugar) en el parque.",
        hint: "(jugar)",
        options: ["jugué", "jugaré", "jugaba", "juego"],
        correct: 2,
        explanation: "Se usa imperfecto para acciones habituales en el pasado."
    },
    {
        id: 3,
        type: "Verbos Irregulares",
        difficulty: "Medio", 
        question: "Completa la oración:",
        text: "Ayer no _____ (poder) ir al cine.",
        hint: "(poder)",
        options: ["podía", "pude", "podré", "puedo"],
        correct: 1,
        explanation: "Pretérito irregular de 'poder' es 'pude'."
    },
    
    // Tú (You) - Second person singular
    {
        id: 4,
        type: "Pretérito vs Imperfecto",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "¿_____ (estudiar) mucho para el examen ayer?",
        hint: "(estudiar)",
        options: ["Estudiabas", "Estudias", "Estudiarás", "Estudiaste"],
        correct: 3,
        explanation: "Pretérito para pregunta sobre acción específica completada."
    },
    {
        id: 5,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "¿_____ (tener) tiempo libre el fin de semana pasado?",
        hint: "(tener)",
        options: ["Tenías", "Tuviste", "Tienes", "Tendrás"],
        correct: 1,
        explanation: "Pretérito irregular de 'tener' es 'tuviste'."
    },
    
    // Él/Ella (He/She) - Third person singular
    {
        id: 6,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "María _____ (trabajar) en esa empresa cuando la conocí.",
        hint: "(trabajar)",
        options: ["trabajó", "trabajaba", "trabaja", "trabajará"],
        correct: 1,
        explanation: "Imperfecto para acción en progreso cuando otra acción ocurrió."
    },
    {
        id: 7,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Él _____ (venir) a la fiesta muy tarde anoche.",
        hint: "(venir)",
        options: ["venía", "viene", "vino", "vendrá"],
        correct: 2,
        explanation: "Pretérito irregular de 'venir' es 'vino'."
    },
    
    // Nosotros (We) - First person plural
    {
        id: 8,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Nosotros _____ (vivir) en Madrid cuando éramos pequeños.",
        hint: "(vivir)",
        options: ["vivimos", "vivíamos", "viviremos", "vivimos"],
        correct: 1,
        explanation: "Imperfecto para situación prolongada en el pasado."
    },
    {
        id: 9,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Nosotros _____ (hacer) la tarea juntos ayer.",
        hint: "(hacer)",
        options: ["hacíamos", "hicimos", "hacemos", "haremos"],
        correct: 1,
        explanation: "Pretérito irregular de 'hacer' es 'hicimos'."
    },
    
    // Ellos/Ellas (They) - Third person plural
    {
        id: 10,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Mis padres _____ (cenar) cuando llegué a casa.",
        hint: "(cenar)",
        options: ["cenaron", "cenaban", "cenan", "cenarán"],
        correct: 1,
        explanation: "Imperfecto para acción en progreso interrumpida por otra."
    },
    {
        id: 11,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Ellos _____ (saber) la respuesta desde el principio.",
        hint: "(saber)",
        options: ["sabían", "supieron", "saben", "sabrán"],
        correct: 1,
        explanation: "Pretérito de 'saber' (supieron) indica momento de enterarse."
    },
    
    // More complex scenarios
    {
        id: 12,
        type: "Descripciones",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "El cielo _____ (estar) muy nublado ayer por la mañana.",
        hint: "(estar)",
        options: ["estuvo", "estaba", "está", "estará"],
        correct: 1,
        explanation: "Imperfecto para describir estados o condiciones en el pasado."
    },
    {
        id: 13,
        type: "Tiempo y Frecuencia",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Todos los domingos _____ (ir) a casa de mis abuelos.",
        hint: "(ir)",
        options: ["fui", "iba", "voy", "iré"],
        correct: 1,
        explanation: "Imperfecto para acciones habituales repetidas en el pasado."
    },
    {
        id: 14,
        type: "Secuencias",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Primero _____ (desayunar), luego _____ (salir) de casa.",
        hint: "(desayunar) / (salir)",
        options: ["desayuné / salí", "desayunaba / salía", "desayuno / salgo", "desayunaré / saldré"],
        correct: 0,
        explanation: "Pretérito para secuencia de acciones completadas."
    },
    {
        id: 15,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Usted _____ (poner) las llaves en la mesa anoche.",
        hint: "(poner)",
        options: ["ponía", "puso", "pone", "pondrá"],
        correct: 1,
        explanation: "Pretérito irregular de 'poner' es 'puso'."
    }
];