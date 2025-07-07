// Spanish comprehensive tense exercises
// Always give options in this order: A = Presente, B = Pretérito, C = Imperfecto, D = Futuro, E = Condicional, F = Subjuntivo presente
const exercises = [
    {
        id: 1,
        type: "Pretérito vs Imperfecto",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Ayer _____ a mi abuela por teléfono.",
        infinitive: "llamar",
        options: [
            "llamo",
            "llamé",
            "llamaba",
            "llamaré",
            "llamaría",
            "llame"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'ayer' indica pasado",
            1: "Pretérito: ✓ Correcto - 'ayer' indica acción específica completada",
            2: "Imperfecto: No, 'ayer' requiere acción específica, no habitual",
            3: "Futuro: No, 'ayer' es pasado",
            4: "Condicional: No, 'ayer' es un hecho, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Se usa pretérito para acciones específicas en el pasado."
    },
    {
        id: 2,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Cuando era niño, siempre _____ en el parque.",
        infinitive: "jugar",
        options: [
            "juego",
            "jugué",
            "jugaba",
            "jugaré",
            "jugaría",
            "juegue"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'cuando era niño' indica pasado",
            1: "Pretérito: No, 'siempre' indica repetición, no acción única",
            2: "Imperfecto: ✓ Correcto - describe acciones habituales en el pasado",
            3: "Futuro: No, 'cuando era niño' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Se usa imperfecto para acciones habituales en el pasado."
    },
    {
        id: 3,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Ayer no _____ ir al cine.",
        infinitive: "poder",
        options: [
            "puedo",
            "pude",
            "podía",
            "podré",
            "podría",
            "pueda"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'ayer' indica pasado",
            1: "Pretérito: ✓ Correcto - incapacidad específica de ayer",
            2: "Imperfecto: No, 'ayer' sugiere evento específico, no habitual",
            3: "Futuro: No, 'ayer' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito irregular de 'poder' es 'pude'."
    },
    {
        id: 4,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "No _____ qué hacer en esa situación.",
        infinitive: "saber",
        options: [
            "sé",
            "supe",
            "sabía",
            "sabré",
            "sabría",
            "sepa"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, el contexto sugiere pasado",
            1: "Pretérito: No, describe conocimiento continuo, no momento específico",
            2: "Imperfecto: ✓ Correcto - describe conocimiento continuo en el pasado",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'Saber' en imperfecto describe conocimiento continuo en el pasado."
    },
    {
        id: 5,
        type: "Pretérito vs Imperfecto",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Cada verano _____ a la playa con mi familia.",
        infinitive: "ir",
        options: [
            "voy",
            "fui",
            "iba",
            "iré",
            "iría",
            "vaya"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, el contexto sugiere pasado",
            1: "Pretérito: No, 'cada verano' indica repetición, no evento único",
            2: "Imperfecto: ✓ Correcto - 'cada verano' indica acción habitual repetida",
            3: "Futuro: Posible para planes futuros, pero el contexto sugiere pasado",
            4: "Condicional: No, no es hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'Cada verano' indica una acción habitual repetida."
    },
    {
        id: 6,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Cuando _____ la noticia, no lo podía creer.",
        infinitive: "saber",
        options: [
            "sé",
            "supe",
            "sabía",
            "sabré",
            "sabría",
            "sepa"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto es pasado",
            1: "Pretérito: ✓ Correcto - indica el momento específico de enterarse",
            2: "Imperfecto: No, se refiere al momento específico, no conocimiento continuo",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'Saber' en pretérito indica el momento específico de enterarse."
    },
    {
        id: 7,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Ayer _____ que estudiar toda la noche.",
        infinitive: "tener",
        options: [
            "tengo",
            "tuve",
            "tenía",
            "tendré",
            "tendría",
            "tenga"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'ayer' indica pasado",
            1: "Pretérito: ✓ Correcto - obligación específica de ayer",
            2: "Imperfecto: No, 'ayer' sugiere evento específico, no habitual",
            3: "Futuro: No, 'ayer' es pasado",
            4: "Condicional: No, es hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito para obligaciones específicas en el pasado."
    },
    {
        id: 8,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Mientras _____ la televisión, sonó el teléfono.",
        infinitive: "ver",
        options: [
            "veo",
            "vi",
            "veía",
            "veré",
            "vería",
            "vea"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, el contexto es pasado",
            1: "Pretérito: No, 'mientras' indica acción continua, no completada",
            2: "Imperfecto: ✓ Correcto - acción en progreso que fue interrumpida",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para acción en progreso que fue interrumpida."
    },
    {
        id: 9,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "De repente, _____ una gran explosión.",
        infinitive: "escuchar",
        options: [
            "escucho",
            "escuché",
            "escuchaba",
            "escucharé",
            "escucharía",
            "escuche"     // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto es pasado",
            1: "Pretérito: ✓ Correcto - 'de repente' indica acción súbita y completada",
            2: "Imperfecto: No, 'de repente' sugiere acción específica, no continua",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'De repente' indica una acción súbita y completada."
    },
    {
        id: 10,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "_____ a verte tan pronto como recibí tu mensaje.",
        infinitive: "venir",
        options: [
            "vengo",
            "vine",
            "venía",
            "vendré",
            "vendría",
            "venga"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto es pasado ('recibí')",
            1: "Pretérito: ✓ Correcto - acción específica en respuesta a un evento",
            2: "Imperfecto: No, se refiere a acción específica, no continua",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito para acción específica en respuesta a un evento."
    },
    {
        id: 11,
        type: "Pretérito vs Imperfecto",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "¿_____ mucho para el examen ayer?",
        infinitive: "estudiar",
        options: [
            "estudias",
            "estudiaste",
            "estudiabas",
            "estudiarás",
            "estudiarías",
            "estudies"    // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'ayer' indica pasado",
            1: "Pretérito: ✓ Correcto - pregunta sobre acción específica completada",
            2: "Imperfecto: No, 'ayer' sugiere evento específico, no habitual",
            3: "Futuro: No, 'ayer' es pasado",
            4: "Condicional: No, es una pregunta directa, no hipotética",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito para pregunta sobre acción específica completada."
    },
    {
        id: 12,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "¿_____ tiempo libre el fin de semana pasado?",
        infinitive: "tener",
        options: [
            "tienes",
            "tuviste",
            "tenías",
            "tendrás",
            "tendrías",
            "tengas"      // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'fin de semana pasado' indica pasado",
            1: "Pretérito: ✓ Correcto - pregunta sobre situación específica pasada",
            2: "Imperfecto: No, se refiere a período específico, no habitual",
            3: "Futuro: No, 'fin de semana pasado' es pasado",
            4: "Condicional: No, es una pregunta directa, no hipotética",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito irregular de 'tener' es 'tuviste'."
    },
    {
        id: 13,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Cuando tenías 10 años, ¿_____ en bicicleta todos los días?",
        infinitive: "montar",
        options: [
            "montas",
            "montaste",
            "montabas",
            "montarás",
            "montarías",
            "montes"      // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'cuando tenías 10 años' indica pasado",
            1: "Pretérito: No, 'todos los días' indica repetición, no acción única",
            2: "Imperfecto: ✓ Correcto - actividad habitual en el pasado",
            3: "Futuro: No, 'cuando tenías 10 años' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para actividad habitual en el pasado."
    },
    {
        id: 14,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "¿_____ terminar el proyecto a tiempo?",
        infinitive: "poder",
        options: [
            "puedes",
            "pudiste",
            "podías",
            "podrás",
            "podrías",
            "puedas"      // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto sugiere pasado",
            1: "Pretérito: ✓ Correcto - capacidad exitosa en una situación específica",
            2: "Imperfecto: No, se refiere a capacidad específica, no continua",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es una pregunta directa, no hipotética",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito para capacidad en una situación específica."
    },
    {
        id: 15,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Antes _____ mucho café, pero ahora solo bebes té.",
        infinitive: "beber",
        options: [
            "bebes",
            "bebiste",
            "bebías",
            "beberás",
            "beberías",
            "bebas"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'antes' indica pasado",
            1: "Pretérito: No, 'antes' indica hábito pasado, no acción específica",
            2: "Imperfecto: ✓ Correcto - contrasta hábitos pasados con el presente",
            3: "Futuro: No, 'antes' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'Antes' + imperfecto contrasta hábitos pasados con el presente."
    },
    {
        id: 16,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "¿_____ a la fiesta el sábado pasado?",
        infinitive: "venir",
        options: [
            "vienes",
            "viniste",
            "venías",
            "vendrás",
            "vendrías",
            "vengas"      // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'el sábado pasado' indica pasado",
            1: "Pretérito: ✓ Correcto - acción específica en el pasado",
            2: "Imperfecto: No, se refiere a evento específico, no habitual",
            3: "Futuro: No, 'el sábado pasado' es pasado",
            4: "Condicional: No, es una pregunta directa, no hipotética",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito irregular de 'venir' es 'viniste'."
    },
    {
        id: 17,
        type: "Pretérito vs Imperfecto",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Anoche _____ una película muy interesante.",
        infinitive: "ver",
        options: [
            "veo",
            "viste",
            "veías",
            "verás",
            "verías",
            "veas"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'anoche' indica pasado",
            1: "Pretérito: ✓ Correcto - acción específica completada anoche",
            2: "Imperfecto: No, 'anoche' sugiere evento específico, no habitual",
            3: "Futuro: No, 'anoche' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Anoche + acción específica = pretérito."
    },
    {
        id: 18,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "No sabía que _____ francés tan bien.",
        infinitive: "hablar",
        options: [
            "hablas",
            "hablaste",
            "hablabas",
            "hablarás",
            "hablarías",
            "hables"      // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, el contexto es pasado ('no sabía')",
            1: "Pretérito: No, se refiere a habilidad continua, no acción específica",
            2: "Imperfecto: ✓ Correcto - habilidades continuas en el pasado",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para habilidades continuas en el pasado."
    },
    {
        id: 19,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "María _____ en esa empresa cuando la conocí.",
        infinitive: "trabajar",
        options: [
            "trabaja",
            "trabajó",
            "trabajaba",
            "trabajará",
            "trabajaría",
            "trabaje"     // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, el contexto es pasado ('cuando la conocí')",
            1: "Pretérito: No, describe situación continua, no acción completada",
            2: "Imperfecto: ✓ Correcto - acción en progreso cuando otra acción ocurrió",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para acción en progreso cuando otra acción ocurrió."
    },
    {
        id: 20,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Él _____ a la fiesta muy tarde anoche.",
        infinitive: "venir",
        options: [
            "viene",
            "vino",
            "venía",
            "vendrá",
            "vendría",
            "venga"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'anoche' indica pasado",
            1: "Pretérito: ✓ Correcto - acción específica completada anoche",
            2: "Imperfecto: No, 'anoche' sugiere evento específico, no habitual",
            3: "Futuro: No, 'anoche' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito irregular de 'venir' es 'vino'."
    },
    {
        id: 21,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Mi hermana _____ doctora cuando la conociste.",
        infinitive: "ser",
        options: [
            "es",
            "fue",
            "era",
            "será",
            "sería",
            "sea"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, el contexto es pasado ('cuando la conociste')",
            1: "Pretérito: No, describe característica continua, no cambio específico",
            2: "Imperfecto: ✓ Correcto - profesiones como característica continua en el pasado",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para profesiones como característica continua en el pasado."
    },
    {
        id: 22,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Ella _____ mucha prisa ayer por la mañana.",
        infinitive: "tener",
        options: [
            "tiene",
            "tuvo",
            "tenía",
            "tendrá",
            "tendría",
            "tenga"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'ayer por la mañana' indica pasado",
            1: "Pretérito: ✓ Correcto - estado específico en un momento determinado",
            2: "Imperfecto: No, 'ayer por la mañana' sugiere momento específico",
            3: "Futuro: No, 'ayer por la mañana' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito para estado específico en un momento determinado."
    },
    {
        id: 23,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "El ladrón _____ por la ventana mientras la familia dormía.",
        infinitive: "entrar",
        options: [
            "entra",
            "entró",
            "entraba",
            "entrará",
            "entraría",
            "entre"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto es pasado ('dormía')",
            1: "Pretérito: ✓ Correcto - acción específica completada durante otra acción continua",
            2: "Imperfecto: No, se refiere a acción específica, no continua",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito para acción específica completada, aunque ocurra durante otra acción continua."
    },
    {
        id: 24,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Ella _____ la respuesta desde el principio.",
        infinitive: "saber",
        options: [
            "sabe",
            "supo",
            "sabía",
            "sabrá",
            "sabría",
            "sepa"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto es pasado",
            1: "Pretérito: ✓ Correcto - indica momento de enterarse o descubrir",
            2: "Imperfecto: No, se refiere al momento específico, no conocimiento continuo",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'Saber' en pretérito (supo) indica momento de enterarse."
    },
    {
        id: 25,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "_____ muy cansado cuando llegué a casa.",
        infinitive: "estar",
        options: [
            "estoy",
            "estuve",
            "estaba",
            "estaré",
            "estaría",
            "esté"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, el contexto es pasado ('cuando llegué')",
            1: "Pretérito: No, describe estado continuo, no cambio específico",
            2: "Imperfecto: ✓ Correcto - describe el estado en que se encontraba",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para describir el estado en que se encontraba."
    },
    {
        id: 26,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Juan _____ resolver el problema rápidamente.",
        infinitive: "poder",
        options: [
            "puede",
            "pudo",
            "podía",
            "podrá",
            "podría",
            "pueda"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto sugiere pasado",
            1: "Pretérito: ✓ Correcto - capacidad exitosa en una situación específica",
            2: "Imperfecto: No, se refiere a capacidad específica lograda, no continua",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito para capacidad exitosa en una situación específica."
    },
    {
        id: 27,
        type: "Descripciones",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "La casa _____ muy grande y tenía un jardín hermoso.",
        infinitive: "ser",
        options: [
            "es",
            "fue",
            "era",
            "será",
            "sería",
            "sea"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, el contexto es pasado ('tenía')",
            1: "Pretérito: No, describe características continuas, no cambio específico",
            2: "Imperfecto: ✓ Correcto - describe características físicas en el pasado",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es una descripción factual, no hipotética",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para describir características físicas en el pasado."
    },
    {
        id: 28,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Nosotros _____ en Madrid cuando éramos pequeños.",
        infinitive: "vivir",
        options: [
            "vivimos",
            "vivimos",
            "vivíamos",
            "viviremos",
            "viviríamos",
            "vivamos"     // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'cuando éramos pequeños' indica pasado",
            1: "Pretérito: No, describe situación prolongada, no evento específico",
            2: "Imperfecto: ✓ Correcto - situación prolongada en el pasado",
            3: "Futuro: No, 'cuando éramos pequeños' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para situación prolongada en el pasado."
    },
    {
        id: 29,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Nosotros _____ la tarea juntos ayer.",
        infinitive: "hacer",
        options: [
            "hacemos",
            "hicimos",
            "hacíamos",
            "haremos",
            "haríamos",
            "hagamos"     // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'ayer' indica pasado",
            1: "Pretérito: ✓ Correcto - acción específica completada ayer",
            2: "Imperfecto: No, 'ayer' sugiere evento específico, no habitual",
            3: "Futuro: No, 'ayer' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito irregular de 'hacer' es 'hicimos'."
    },
    {
        id: 30,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Todos los miércoles _____ al gimnasio después del trabajo.",
        infinitive: "ir",
        options: [
            "vamos",
            "fuimos",
            "íbamos",
            "iremos",
            "iríamos",
            "vayamos"     // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, el contexto sugiere pasado",
            1: "Pretérito: No, 'todos los miércoles' indica repetición, no evento único",
            2: "Imperfecto: ✓ Correcto - rutinas semanales o periódicas",
            3: "Futuro: Posible para planes futuros, pero el contexto sugiere pasado",
            4: "Condicional: No, no es hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para rutinas semanales o periódicas."
    },
    {
        id: 31,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Nosotros _____ temprano pero el evento ya había empezado.",
        infinitive: "venir",
        options: [
            "venimos",
            "vinimos",
            "veníamos",
            "vendremos",
            "vendríamos",
            "vengamos"    // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto es pasado ('había empezado')",
            1: "Pretérito: ✓ Correcto - acción específica completada en el pasado",
            2: "Imperfecto: No, se refiere a acción específica, no continua",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito irregular de 'venir' es 'vinimos'."
    },
    {
        id: 32,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Durante mi infancia, _____ muchos cuentos antes de dormir.",
        infinitive: "leer",
        options: [
            "leemos",
            "leímos",
            "leíamos",
            "leeremos",
            "leeríamos",
            "leamos"      // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'durante mi infancia' indica pasado",
            1: "Pretérito: No, 'durante' + período sugiere actividad habitual",
            2: "Imperfecto: ✓ Correcto - actividad habitual durante período de tiempo",
            3: "Futuro: No, 'durante mi infancia' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'Durante' + período de tiempo + actividad habitual = imperfecto."
    },
    {
        id: 33,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Nosotros _____ mucha suerte en ese viaje.",
        infinitive: "tener",
        options: [
            "tenemos",
            "tuvimos",
            "teníamos",
            "tendremos",
            "tendríamos",
            "tengamos"    // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'en ese viaje' indica pasado",
            1: "Pretérito: ✓ Correcto - experiencia específica durante el viaje",
            2: "Imperfecto: No, 'en ese viaje' sugiere experiencia específica",
            3: "Futuro: No, 'en ese viaje' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito para experiencia específica durante el viaje."
    },
    {
        id: 34,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Antes _____ caminar al trabajo, pero ahora manejamos.",
        infinitive: "poder",
        options: [
            "podemos",
            "pudimos",
            "podíamos",
            "podremos",
            "podríamos",
            "podamos"     // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'antes' indica pasado",
            1: "Pretérito: No, 'antes' indica capacidad habitual, no específica",
            2: "Imperfecto: ✓ Correcto - capacidades habituales en el pasado",
            3: "Futuro: No, 'antes' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para capacidades habituales en el pasado."
    },
    {
        id: 35,
        type: "Secuencias",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Primero _____ la tarea, luego salimos a jugar.",
        infinitive: "terminar",
        options: [
            "terminamos",
            "terminamos",
            "terminábamos",
            "terminaremos",
            "terminaríamos",
            "terminemos"  // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'luego salimos' indica pasado",
            1: "Pretérito: ✓ Correcto - secuencia de acciones completadas",
            2: "Imperfecto: No, 'primero' indica secuencia específica, no hábito",
            3: "Futuro: No, 'salimos' es pasado",
            4: "Condicional: No, es hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'Primero' indica una secuencia de acciones completadas."
    },
    {
        id: 36,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Mis padres _____ cuando llegué a casa.",
        infinitive: "cenar",
        options: [
            "cenan",
            "cenaron",
            "cenaban",
            "cenarán",
            "cenarían",
            "cenen"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'cuando llegué' indica pasado",
            1: "Pretérito: No, describe acción en progreso, no completada",
            2: "Imperfecto: ✓ Correcto - acción en progreso interrumpida por otra",
            3: "Futuro: No, 'cuando llegué' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para acción en progreso interrumpida por otra."
    },
    {
        id: 37,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Ellos _____ la respuesta desde el principio.",
        infinitive: "saber",
        options: [
            "saben",
            "supieron",
            "sabían",
            "sabrán",
            "sabrían",
            "sepan"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto es pasado",
            1: "Pretérito: ✓ Correcto - indica momento de enterarse o descubrir",
            2: "Imperfecto: No, se refiere al momento específico, no conocimiento continuo",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'Saber' en pretérito (supieron) indica momento de enterarse."
    },
    {
        id: 38,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Los invitados _____ a las ocho en punto.",
        infinitive: "venir",
        options: [
            "vienen",
            "vinieron",
            "venían",
            "vendrán",
            "vendrían",
            "vengan"      // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto sugiere pasado",
            1: "Pretérito: ✓ Correcto - acción completada en un momento específico",
            2: "Imperfecto: No, 'a las ocho en punto' sugiere evento específico",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito para acción completada en un momento específico."
    },
    {
        id: 39,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Los niños _____ en el jardín cuando empezó a llover.",
        infinitive: "jugar",
        options: [
            "juegan",
            "jugaron",
            "jugaban",
            "jugarán",
            "jugarían",
            "jueguen"     // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'cuando empezó a llover' indica pasado",
            1: "Pretérito: No, describe acción en progreso, no completada",
            2: "Imperfecto: ✓ Correcto - acción en progreso interrumpida por la lluvia",
            3: "Futuro: No, 'cuando empezó a llover' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para acción en progreso interrumpida por la lluvia."
    },
    {
        id: 40,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Ellas _____ resolver todos los ejercicios.",
        infinitive: "poder",
        options: [
            "pueden",
            "pudieron",
            "podían",
            "podrán",
            "podrían",
            "puedan"      // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto sugiere pasado",
            1: "Pretérito: ✓ Correcto - capacidad exitosa demostrada",
            2: "Imperfecto: No, se refiere a capacidad específica lograda",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito para capacidad exitosa demostrada."
    },
    {
        id: 41,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Durante la reunión, todos _____ en silencio hasta que habló el director.",
        infinitive: "estar",
        options: [
            "están",
            "estuvieron",
            "estaban",
            "estarán",
            "estarían",
            "estén"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'durante la reunión' indica pasado",
            1: "Pretérito: No, describe estado continuo, no cambio específico",
            2: "Imperfecto: ✓ Correcto - estado continuo hasta ser interrumpido",
            3: "Futuro: No, 'durante la reunión' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para estado continuo hasta ser interrumpido."
    },
    {
        id: 42,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Mis hermanos _____ que estudiar todo el fin de semana.",
        infinitive: "tener",
        options: [
            "tienen",
            "tuvieron",
            "tenían",
            "tendrán",
            "tendrían",
            "tengan"      // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto sugiere pasado",
            1: "Pretérito: ✓ Correcto - obligación específica durante el fin de semana",
            2: "Imperfecto: No, se refiere a obligación específica, no habitual",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito para obligación específica durante el fin de semana."
    },
    {
        id: 43,
        type: "Descripciones",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "El cielo _____ muy nublado ayer por la mañana.",
        infinitive: "estar",
        options: [
            "está",
            "estuvo",
            "estaba",
            "estará",
            "estaría",
            "esté"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'ayer por la mañana' indica pasado",
            1: "Pretérito: No, describe estado continuo, no cambio específico",
            2: "Imperfecto: ✓ Correcto - describe estados o condiciones en el pasado",
            3: "Futuro: No, 'ayer por la mañana' es pasado",
            4: "Condicional: No, es una descripción factual, no hipotética",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para describir estados o condiciones en el pasado."
    },
    {
        id: 44,
        type: "Tiempo y Frecuencia",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Todos los domingos _____ a casa de mis abuelos.",
        infinitive: "ir",
        options: [
            "voy",
            "fui",
            "iba",
            "iré",
            "iría",
            "vaya"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, el contexto sugiere pasado",
            1: "Pretérito: No, 'todos los domingos' indica repetición, no evento único",
            2: "Imperfecto: ✓ Correcto - acciones habituales repetidas en el pasado",
            3: "Futuro: Posible para planes futuros, pero el contexto sugiere pasado",
            4: "Condicional: No, no es hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para acciones habituales repetidas en el pasado."
    },
    {
        id: 45,
        type: "Secuencias",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Primero _____, luego salí de casa.",
        infinitive: "desayunar",
        options: [
            "desayuno",
            "desayuné",
            "desayunaba",
            "desayunaré",
            "desayunaría",
            "desayune"     // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto es pasado",
            1: "Pretérito: ✓ Correcto - secuencia de acciones completadas",
            2: "Imperfecto: No, 'primero' indica secuencia específica, no hábito",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito para secuencia de acciones completadas."
    },
    {
        id: 46,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Usted _____ las llaves en la mesa anoche.",
        infinitive: "poner",
        options: [
            "pone",
            "puso",
            "ponía",
            "pondrá",
            "pondría",
            "ponga"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'anoche' indica pasado",
            1: "Pretérito: ✓ Correcto - acción específica completada anoche",
            2: "Imperfecto: No, 'anoche' sugiere evento específico, no habitual",
            3: "Futuro: No, 'anoche' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito irregular de 'poner' es 'puso'."
    },
    {
        id: 47,
        type: "Tiempo y Frecuencia",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "A menudo _____ en ese café cuando vivía cerca.",
        infinitive: "desayunar",
        options: [
            "desayuno",
            "desayuné",
            "desayunaba",
            "desayunaré",
            "desayunaría",
            "desayune"     // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'cuando vivía cerca' indica pasado",
            1: "Pretérito: No, 'a menudo' indica repetición, no evento único",
            2: "Imperfecto: ✓ Correcto - 'a menudo' indica acción habitual",
            3: "Futuro: No, 'cuando vivía cerca' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'A menudo' indica una acción habitual."
    },
    {
        id: 48,
        type: "Tiempo y Frecuencia",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Una vez _____ un accidente muy grave en esa esquina.",
        infinitive: "ver",
        options: [
            "veo",
            "vi",
            "veía",
            "veré",
            "vería",
            "vea"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, el contexto es pasado",
            1: "Pretérito: ✓ Correcto - 'una vez' indica acción específica y única",
            2: "Imperfecto: No, 'una vez' sugiere evento específico, no habitual",
            3: "Futuro: No, el contexto es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'Una vez' indica una acción específica y única."
    },
    {
        id: 49,
        type: "Descripciones",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Hacía mucho calor cuando _____ de la oficina.",
        infinitive: "salir",
        options: [
            "salgo",
            "salí",
            "salía",
            "saldré",
            "saldría",
            "salga"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'hacía mucho calor' indica pasado",
            1: "Pretérito: ✓ Correcto - acción específica con contexto de condición climática",
            2: "Imperfecto: No, se refiere a acción específica, no continua",
            3: "Futuro: No, 'hacía mucho calor' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Condiciones climáticas (imperfecto) + acción específica (pretérito)."
    },
    {
        id: 50,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "El teléfono _____ cuando estaba en la ducha.",
        infinitive: "sonar",
        options: [
            "suena",
            "sonó",
            "sonaba",
            "sonará",
            "sonaría",
            "suene"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'cuando estaba en la ducha' indica pasado",
            1: "Pretérito: ✓ Correcto - acción que interrumpe = pretérito",
            2: "Imperfecto: No, el teléfono sonando es la acción que interrumpe",
            3: "Futuro: No, 'cuando estaba en la ducha' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Acción que interrumpe = pretérito, acción interrumpida = imperfecto."
    },
    {
        id: 51,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "_____ las tres de la mañana cuando llegaste.",
        infinitive: "ser",
        options: [
            "son",
            "fueron",
            "eran",
            "serán",
            "serían",
            "sean"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'cuando llegaste' indica pasado",
            1: "Pretérito: No, la hora se usa para dar contexto, no como evento",
            2: "Imperfecto: ✓ Correcto - la hora se expresa en imperfecto cuando da contexto",
            3: "Futuro: No, 'cuando llegaste' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "La hora siempre se expresa en imperfecto cuando da contexto a otra acción."
    },
    {
        id: 52,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "No _____ dormir anoche por el ruido.",
        infinitive: "poder",
        options: [
            "puedo",
            "pude",
            "podía",
            "podré",
            "podría",
            "pueda"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'anoche' indica pasado",
            1: "Pretérito: ✓ Correcto - incapacidad en una situación específica",
            2: "Imperfecto: No, 'anoche' sugiere evento específico, no habitual",
            3: "Futuro: No, 'anoche' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'Poder' en pretérito indica incapacidad en una situación específica."
    },
    {
        id: 53,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "De niño, _____ muy tímido, pero un día decidí cambiar.",
        infinitive: "ser",
        options: [
            "soy",
            "fui",
            "era",
            "seré",
            "sería",
            "sea"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'de niño' indica pasado",
            1: "Pretérito: No, describe característica continua, no cambio específico",
            2: "Imperfecto: ✓ Correcto - características de personalidad en el pasado",
            3: "Futuro: No, 'de niño' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Características de personalidad en el pasado usan imperfecto."
    },
    {
        id: 54,
        type: "Descripciones",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "El restaurante _____ lleno cuando llegamos.",
        infinitive: "estar",
        options: [
            "está",
            "estuvo",
            "estaba",
            "estará",
            "estaría",
            "esté"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'cuando llegamos' indica pasado",
            1: "Pretérito: No, describe estado continuo, no cambio específico",
            2: "Imperfecto: ✓ Correcto - estados como contexto de otras acciones",
            3: "Futuro: No, 'cuando llegamos' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Estados como contexto de otras acciones van en imperfecto."
    },
    {
        id: 55,
        type: "Secuencias",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Como _____ lluvia, decidimos quedarnos en casa.",
        infinitive: "haber",
        options: [
            "hay",
            "hubo",
            "había",
            "habrá",
            "habría",
            "haya"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'decidimos' indica pasado",
            1: "Pretérito: No, describe condición que explica, no evento específico",
            2: "Imperfecto: ✓ Correcto - condiciones que explican decisiones",
            3: "Futuro: No, 'decidimos' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Condiciones que explican decisiones van en imperfecto."
    },
    {
        id: 56,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "No pude salir porque _____ enfermo.",
        infinitive: "estar",
        options: [
            "estoy",
            "estuve",
            "estaba",
            "estaré",
            "estaría",
            "esté"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'no pude salir' indica pasado",
            1: "Pretérito: No, describe estado que explica, no evento específico",
            2: "Imperfecto: ✓ Correcto - estados que explican por qué algo pasó",
            3: "Futuro: No, 'no pude salir' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Estados que explican por qué algo pasó se expresan en imperfecto."
    },
    {
        id: 57,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "En aquella época, no _____ usar computadoras.",
        infinitive: "saber",
        options: [
            "sé",
            "supe",
            "sabía",
            "sabré",
            "sabría",
            "sepa"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'en aquella época' indica pasado",
            1: "Pretérito: No, describe conocimiento continuo, no momento específico",
            2: "Imperfecto: ✓ Correcto - conocimientos continuos en el pasado",
            3: "Futuro: No, 'en aquella época' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Conocimientos continuos en el pasado van en imperfecto."
    },
    {
        id: 58,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "El año pasado _____ español en la universidad.",
        infinitive: "estudiar",
        options: [
            "estudio",
            "estudié",
            "estudiaba",
            "estudiaré",
            "estudiaría",
            "estudie"     // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'el año pasado' indica pasado",
            1: "Pretérito: No, describe actividad prolongada, no evento específico",
            2: "Imperfecto: ✓ Correcto - períodos largos con acciones habituales",
            3: "Futuro: No, 'el año pasado' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Períodos largos de tiempo con acciones habituales usan imperfecto."
    },
    {
        id: 59,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Después de que _____ el examen, me sentí muy aliviado.",
        infinitive: "terminar",
        options: [
            "termino",
            "terminé",
            "terminaba",
            "terminaré",
            "terminaría",
            "termine"     // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'me sentí' indica pasado",
            1: "Pretérito: ✓ Correcto - 'después de que' introduce acciones completadas",
            2: "Imperfecto: No, 'después de que' requiere acción completada",
            3: "Futuro: No, 'me sentí' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'Después de que' introduce acciones completadas que van en pretérito."
    },
    {
        id: 60,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Mis abuelos _____ de visita cada Navidad.",
        infinitive: "venir",
        options: [
            "vienen",
            "vinieron",
            "venían",
            "vendrán",
            "vendrían",
            "vengan"      // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, el contexto sugiere pasado",
            1: "Pretérito: No, 'cada Navidad' indica repetición, no evento único",
            2: "Imperfecto: ✓ Correcto - acciones habituales en el pasado",
            3: "Futuro: Posible para planes futuros, pero el contexto sugiere pasado",
            4: "Condicional: No, no es hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Acciones habituales en el pasado (cada Navidad) usan imperfecto."
    },
    {
        id: 61,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Conocí a María cuando _____ en Madrid.",
        infinitive: "vivir",
        options: [
            "vivo",
            "viví",
            "vivía",
            "viviré",
            "viviría",
            "viva"
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'conocí' indica pasado",
            1: "Pretérito: No, describe situación continua, no evento específico",
            2: "Imperfecto: ✓ Correcto - establece contexto de una acción en pretérito",
            3: "Futuro: No, 'conocí' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Imperfecto para establecer contexto de una acción en pretérito."
    },
    {
        id: 62,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Anoche _____ mucho frío en la montaña.",
        infinitive: "hacer",
        options: [
            "hace",
            "hizo",
            "hacía",
            "hará",
            "haría",
            "haga"
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'anoche' indica pasado",
            1: "Pretérito: ✓ Correcto - condiciones climáticas específicas con expresiones temporales precisas",
            2: "Imperfecto: No, 'anoche' sugiere evento específico, no habitual",
            3: "Futuro: No, 'anoche' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Condiciones climáticas específicas usan pretérito con expresiones temporales precisas."
    },
    {
        id: 63,
        type: "Pretérito vs Imperfecto",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Siempre _____ temprano cuando trabajaba allí.",
        infinitive: "levantarse",
        options: [
            "me levanto",
            "me levanté",
            "me levantaba",
            "me levantaré",
            "me levantaría",
            "me levante"   // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'cuando trabajaba allí' indica pasado",
            1: "Pretérito: No, 'siempre' indica repetición, no evento único",
            2: "Imperfecto: ✓ Correcto - 'siempre' indica rutina habitual en el pasado",
            3: "Futuro: No, 'cuando trabajaba allí' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "'Siempre' indica una rutina habitual en el pasado."
    },
    {
        id: 64,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Ese día _____ todas mis cosas en una maleta.",
        infinitive: "traer",
        options: [
            "traigo",
            "traje",
            "traía",
            "traeré",
            "traería",
            "traiga"      // F: Subjuntivo presente
        ],
        correctAnswers: [1],
        explanations: {
            0: "Presente: No, 'ese día' indica pasado",
            1: "Pretérito: ✓ Correcto - acción específica completada ese día",
            2: "Imperfecto: No, 'ese día' sugiere evento específico, no habitual",
            3: "Futuro: No, 'ese día' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Pretérito irregular de 'traer' es 'traje'."
    },
    {
        id: 65,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Cuando era pequeña, mi abuela me _____ cuentos todas las noches.",
        infinitive: "contar",
        options: [
            "cuenta",
            "contó",
            "contaba",
            "contará",
            "contaría",
            "cuente"      // F: Subjuntivo presente
        ],
        correctAnswers: [2],
        explanations: {
            0: "Presente: No, 'cuando era pequeña' indica pasado",
            1: "Pretérito: No, 'todas las noches' indica repetición, no evento único",
            2: "Imperfecto: ✓ Correcto - acciones habituales en la infancia",
            3: "Futuro: No, 'cuando era pequeña' es pasado",
            4: "Condicional: No, es un hecho pasado, no hipotético",
            5: "Subjuntivo: No, no hay duda ni emoción expresada"
        },
        primaryExplanation: "Acciones habituales en la infancia se expresan en imperfecto."
    }
];