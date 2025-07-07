// Spanish comprehensive tense exercises - 6 major tenses
// A = Presente, B = Pretérito, C = Imperfecto, D = Futuro, E = Condicional, F = Subjuntivo presente
const exercises = [
    // ========== LEVEL 1: Clear single-tense contexts ==========
    {
        id: 1,
        type: "Temporal Específico",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Ayer _____ (llamar) a mi abuela por teléfono.",
        hint: "(llamar)",
        options: [
            "llamo",      // A: Presente
            "llamé",      // B: Pretérito  
            "llamaba",    // C: Imperfecto
            "llamaré",    // D: Futuro
            "llamaría",   // E: Condicional
            "llame"       // F: Subjuntivo presente
        ],
        correctAnswers: [1], // B: Pretérito
        explanations: {
            0: "Presente: No, 'ayer' indica pasado",
            1: "Pretérito: ✓ Correcto - 'ayer' indica una acción específica completada",
            2: "Imperfecto: No, 'ayer' requiere acción específica, no habitual",
            3: "Futuro: No, 'ayer' es pasado",
            4: "Condicional: No, 'ayer' es un hecho, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Se usa pretérito para acciones específicas completadas en el pasado."
    },
    {
        id: 2,
        type: "Temporal Específico",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Mañana _____ (estudiar) para el examen.",
        hint: "(estudiar)",
        options: [
            "estudio",      // A: Presente
            "estudié",      // B: Pretérito  
            "estudiaba",    // C: Imperfecto
            "estudiaré",    // D: Futuro
            "estudiaría",   // E: Condicional
            "estudie"       // F: Subjuntivo presente
        ],
        correctAnswers: [3], // D: Futuro
        explanations: {
            0: "Presente: No, 'mañana' indica futuro",
            1: "Pretérito: No, 'mañana' es futuro, no pasado",
            2: "Imperfecto: No, 'mañana' es futuro",
            3: "Futuro: ✓ Correcto - 'mañana' indica acción futura planeada",
            4: "Condicional: No, es un plan definido, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Se usa futuro para acciones planeadas que ocurrirán mañana."
    },
    {
        id: 3,
        type: "Hábitos Pasados",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Cuando era niño, siempre _____ (jugar) en el parque.",
        hint: "(jugar)",
        options: [
            "juego",      // A: Presente
            "jugué",      // B: Pretérito  
            "jugaba",     // C: Imperfecto
            "jugaré",     // D: Futuro
            "jugaría",    // E: Condicional
            "juegue"      // F: Subjuntivo presente
        ],
        correctAnswers: [2], // C: Imperfecto
        explanations: {
            0: "Presente: No, 'cuando era niño' indica pasado",
            1: "Pretérito: No, 'siempre' indica repetición, no acción única",
            2: "Imperfecto: ✓ Correcto - describe acciones habituales en el pasado",
            3: "Futuro: No, 'cuando era niño' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Se usa imperfecto para acciones habituales repetidas en el pasado."
    },
    {
        id: 4,
        type: "Presente Habitual",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Todos los días _____ (trabajar) desde las 9 hasta las 5.",
        hint: "(trabajar)",
        options: [
            "trabajo",     // A: Presente
            "trabajé",     // B: Pretérito  
            "trabajaba",   // C: Imperfecto
            "trabajaré",   // D: Futuro
            "trabajaría",  // E: Condicional
            "trabaje"      // F: Subjuntivo presente
        ],
        correctAnswers: [0], // A: Presente
        explanations: {
            0: "Presente: ✓ Correcto - 'todos los días' indica rutina actual",
            1: "Pretérito: No, indica rutina presente, no evento pasado único",
            2: "Imperfecto: No, es rutina presente, no pasada",
            3: "Futuro: No, es rutina actual, no futura",
            4: "Condicional: No, es un hecho, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Se usa presente para rutinas y hábitos actuales."
    },
    {
        id: 5,
        type: "Subjuntivo",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Espero que _____ (venir) a mi fiesta.",
        hint: "(venir)",
        options: [
            "viene",      // A: Presente
            "vino",       // B: Pretérito  
            "venía",      // C: Imperfecto
            "vendrá",     // D: Futuro
            "vendría",    // E: Condicional
            "venga"       // F: Subjuntivo presente
        ],
        correctAnswers: [5], // F: Subjuntivo presente
        explanations: {
            0: "Presente: No, después de 'espero que' se usa subjuntivo",
            1: "Pretérito: No, después de 'espero que' se usa subjuntivo",
            2: "Imperfecto: No, después de 'espero que' se usa subjuntivo",
            3: "Futuro: No, después de 'espero que' se usa subjuntivo",
            4: "Condicional: No, después de 'espero que' se usa subjuntivo",
            5: "Subjuntivo: ✓ Correcto - 'esperar que' expresa deseo/emoción"
        },
        primaryExplanation: "Después de expresiones de emoción como 'espero que' se usa subjuntivo."
    },
    {
        id: 6,
        type: "Condicional",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Si tuviera dinero, _____ (viajar) por el mundo.",
        hint: "(viajar)",
        options: [
            "viajo",      // A: Presente
            "viajé",      // B: Pretérito  
            "viajaba",    // C: Imperfecto
            "viajaré",    // D: Futuro
            "viajaría",   // E: Condicional
            "viaje"       // F: Subjuntivo presente
        ],
        correctAnswers: [4], // E: Condicional
        explanations: {
            0: "Presente: No, es una situación hipotética",
            1: "Pretérito: No, es una situación hipotética, no pasada",
            2: "Imperfecto: No, es hipotético, no hábito pasado",
            3: "Futuro: No, es condicional, no certeza futura",
            4: "Condicional: ✓ Correcto - situación hipotética con 'si tuviera'",
            5: "Subjuntivo: No, la cláusula principal usa condicional"
        },
        primaryExplanation: "Se usa condicional en la cláusula principal de oraciones hipotéticas."
    },
    {
        id: 7,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Ayer no _____ (poder) ir al cine.",
        hint: "(poder)",
        options: [
            "puedo",      // A: Presente
            "pude",       // B: Pretérito  
            "podía",      // C: Imperfecto
            "podré",      // D: Futuro
            "podría",     // E: Condicional
            "pueda"       // F: Subjuntivo presente
        ],
        correctAnswers: [1], // B: Pretérito
        explanations: {
            0: "Presente: No, 'ayer' indica pasado",
            1: "Pretérito: ✓ Correcto - incapacidad específica de ayer",
            2: "Imperfecto: Posible, pero 'ayer' sugiere evento específico",
            3: "Futuro: No, 'ayer' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito irregular de 'poder' para incapacidad en momento específico."
    },
    {
        id: 8,
        type: "Múltiples Correctas",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Cuando _____ (tener) tiempo, leo libros.",
        hint: "(tener)",
        options: [
            "tengo",      // A: Presente
            "tuve",       // B: Pretérito  
            "tenía",      // C: Imperfecto
            "tendré",     // D: Futuro
            "tendría",    // E: Condicional
            "tenga"       // F: Subjuntivo presente
        ],
        correctAnswers: [0, 5], // A: Presente, F: Subjuntivo presente
        explanations: {
            0: "Presente: ✓ Correcto - rutina habitual actual",
            1: "Pretérito: No, se refiere a situaciones repetidas, no únicas",
            2: "Imperfecto: No, la rutina es presente, no pasada",
            3: "Futuro: No, se refiere a situaciones habituales, no futuras específicas",
            4: "Condicional: No, no es hipotético",
            5: "Subjuntivo: ✓ Correcto - 'cuando' puede usar subjuntivo para acciones habituales"
        },
        primaryExplanation: "Tanto presente como subjuntivo son correctos para expresar situaciones habituales."
    },
    {
        id: 9,
        type: "Interrupción",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Mientras _____ (ver) televisión, sonó el teléfono.",
        hint: "(ver)",
        options: [
            "veo",        // A: Presente
            "vi",         // B: Pretérito  
            "veía",       // C: Imperfecto
            "veré",       // D: Futuro
            "vería",      // E: Condicional
            "vea"         // F: Subjuntivo presente
        ],
        correctAnswers: [2], // C: Imperfecto
        explanations: {
            0: "Presente: No, el contexto es pasado",
            1: "Pretérito: No, 'mientras' indica acción continua, no completada",
            2: "Imperfecto: ✓ Correcto - acción en progreso interrumpida",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Se usa imperfecto para acciones en progreso que fueron interrumpidas."
    },
    {
        id: 10,
        type: "Futuro Inmediato",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "El próximo año _____ (estudiar) en el extranjero.",
        hint: "(estudiar)",
        options: [
            "estudio",      // A: Presente
            "estudié",      // B: Pretérito  
            "estudiaba",    // C: Imperfecto
            "estudiaré",    // D: Futuro
            "estudiaría",   // E: Condicional
            "estudie"       // F: Subjuntivo presente
        ],
        correctAnswers: [3], // D: Futuro
        explanations: {
            0: "Presente: No, 'el próximo año' indica futuro",
            1: "Pretérito: No, 'el próximo año' es futuro, no pasado",
            2: "Imperfecto: No, 'el próximo año' es futuro",
            3: "Futuro: ✓ Correcto - plan definido para el próximo año",
            4: "Condicional: Posible si fuera un plan incierto, pero el contexto sugiere certeza",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Se usa futuro para planes definidos con marcadores temporales específicos."
    },

    // ========== LEVEL 2: More complex contexts ==========
    {
        id: 11,
        type: "Cortesía",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "¿_____ (poder) ayudarme con esto, por favor?",
        hint: "(poder)",
        options: [
            "Puedes",     // A: Presente
            "Pudiste",    // B: Pretérito  
            "Podías",     // C: Imperfecto
            "Podrás",     // D: Futuro
            "Podrías",    // E: Condicional
            "Puedas"      // F: Subjuntivo presente
        ],
        correctAnswers: [0, 4], // A: Presente, E: Condicional
        explanations: {
            0: "Presente: ✓ Correcto - petición directa",
            1: "Pretérito: No, se refiere al presente/futuro inmediato",
            2: "Imperfecto: No, no es narrativo del pasado",
            3: "Futuro: No, es una petición para ahora",
            4: "Condicional: ✓ Correcto - petición más cortés",
            5: "Subjuntivo: No, sin expresión de duda o emoción en esta estructura"
        },
        primaryExplanation: "Para peticiones, presente es directo y condicional es más cortés."
    },
    {
        id: 12,
        type: "Duda/Emoción",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "No creo que _____ (llover) mañana.",
        hint: "(llover)",
        options: [
            "llueve",     // A: Presente
            "llovió",     // B: Pretérito  
            "llovía",     // C: Imperfecto
            "lloverá",    // D: Futuro
            "llovería",   // E: Condicional
            "llueva"      // F: Subjuntivo presente
        ],
        correctAnswers: [5], // F: Subjuntivo presente
        explanations: {
            0: "Presente: No, después de 'no creo que' se usa subjuntivo",
            1: "Pretérito: No, después de 'no creo que' se usa subjuntivo",
            2: "Imperfecto: No, después de 'no creo que' se usa subjuntivo",
            3: "Futuro: No, después de 'no creo que' se usa subjuntivo",
            4: "Condicional: No, después de 'no creo que' se usa subjuntivo",
            5: "Subjuntivo: ✓ Correcto - 'no creo que' expresa duda"
        },
        primaryExplanation: "Expresiones de duda como 'no creo que' requieren subjuntivo."
    },
    {
        id: 13,
        type: "Descripción Pasada",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "La casa _____ (ser) muy grande y tenía un jardín hermoso.",
        hint: "(ser)",
        options: [
            "es",         // A: Presente
            "fue",        // B: Pretérito  
            "era",        // C: Imperfecto
            "será",       // D: Futuro
            "sería",      // E: Condicional
            "sea"         // F: Subjuntivo presente
        ],
        correctAnswers: [2], // C: Imperfecto
        explanations: {
            0: "Presente: No, el contexto es pasado ('tenía')",
            1: "Pretérito: Posible, pero para descripciones continuas se prefiere imperfecto",
            2: "Imperfecto: ✓ Correcto - describe características continuas en el pasado",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es descripción factual, no hipotética",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Se usa imperfecto para describir características físicas en el pasado."
    },
    {
        id: 14,
        type: "Secuencia",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Primero _____ (desayunar), luego salí de casa.",
        hint: "(desayunar)",
        options: [
            "desayuno",    // A: Presente
            "desayuné",    // B: Pretérito  
            "desayunaba",  // C: Imperfecto
            "desayunaré",  // D: Futuro
            "desayunaría", // E: Condicional
            "desayune"     // F: Subjuntivo presente
        ],
        correctAnswers: [1], // B: Pretérito
        explanations: {
            0: "Presente: No, la secuencia es pasada ('salí')",
            1: "Pretérito: ✓ Correcto - secuencia de acciones completadas",
            2: "Imperfecto: No, 'primero' indica secuencia específica, no hábito",
            3: "Futuro: No, la secuencia es pasada",
            4: "Condicional: No, es hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Se usa pretérito para secuencias de acciones completadas en el pasado."
    },
    {
        id: 15,
        type: "Hipótesis Pasada",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "En tu lugar, yo _____ (decir) la verdad.",
        hint: "(decir)",
        options: [
            "digo",       // A: Presente
            "dije",       // B: Pretérito  
            "decía",      // C: Imperfecto
            "diré",       // D: Futuro
            "diría",      // E: Condicional
            "diga"        // F: Subjuntivo presente
        ],
        correctAnswers: [4], // E: Condicional
        explanations: {
            0: "Presente: No, es una situación hipotética",
            1: "Pretérito: No, es hipotético, no hecho pasado",
            2: "Imperfecto: No, es hipotético, no narrativo pasado",
            3: "Futuro: No, es hipotético, no plan futuro",
            4: "Condicional: ✓ Correcto - situación hipotética/consejo",
            5: "Subjuntivo: No, es consejo hipotético, no duda/emoción"
        },
        primaryExplanation: "Se usa condicional para expresar lo que haríamos en situaciones hipotéticas."
    }
];