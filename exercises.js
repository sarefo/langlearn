// Spanish comprehensive tense exercises
// Always give options in this order: A = Presente, B = Pretérito, C = Imperfecto, D = Futuro, E = Condicional, F = Subjuntivo presente
// Difficulty: 1 = Fácil, 2 = Medio, 3 = Difícil
const exercises = [
    {
        id: 1,
        type: "Pretérito vs Imperfecto",
        difficulty: 1,
        text: "Ayer _____ a mi abuela por teléfono.",
        infinitive: "llamar",
        options: ["llamo", "llamé", "llamaba", "llamaré", "llamaría", "llame"],
        correctAnswers: [1],
        explanation: "ayer_past"
    },
    {
        id: 2,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "Cuando era niño, siempre _____ en el parque.",
        infinitive: "jugar",
        options: ["juego", "jugué", "jugaba", "jugaré", "jugaría", "juegue"],
        correctAnswers: [2],
        explanation: "siempre_habitual"
    },
    {
        id: 3,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "Ayer no _____ ir al cine.",
        infinitive: "poder",
        options: ["puedo", "pude", "podía", "podré", "podría", "pueda"],
        correctAnswers: [1],
        explanation: "poder_specific"
    },
    {
        id: 4,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "No _____ qué hacer en esa situación.",
        infinitive: "saber",
        options: ["sé", "supe", "sabía", "sabré", "sabría", "sepa"],
        correctAnswers: [2],
        explanation: "saber_continuous"
    },
    {
        id: 5,
        type: "Pretérito vs Imperfecto",
        difficulty: 1,
        text: "Cada verano _____ a la playa con mi familia.",
        infinitive: "ir",
        options: ["voy", "fui", "iba", "iré", "iría", "vaya"],
        correctAnswers: [2],
        explanation: "cada_habitual"
    },
    {
        id: 6,
        type: "Verbos Irregulares",
        difficulty: 3,
        text: "Cuando _____ la noticia, no lo podía creer.",
        infinitive: "saber",
        options: ["sé", "supe", "sabía", "sabré", "sabría", "sepa"],
        correctAnswers: [1],
        explanation: "saber_moment"
    },
    {
        id: 7,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "Ayer _____ que estudiar toda la noche.",
        infinitive: "tener",
        options: ["tengo", "tuve", "tenía", "tendré", "tendría", "tenga"],
        correctAnswers: [1],
        explanation: "ayer_past"
    },
    {
        id: 8,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "Mientras _____ la televisión, sonó el teléfono.",
        infinitive: "ver",
        options: ["veo", "vi", "veía", "veré", "vería", "vea"],
        correctAnswers: [2],
        explanation: "mientras_interrupted"
    },
    {
        id: 9,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "De repente, _____ una gran explosión.",
        infinitive: "escuchar",
        options: ["escucho", "escuché", "escuchaba", "escucharé", "escucharía", "escuche"],
        correctAnswers: [1],
        explanation: "repente_sudden"
    },
    {
        id: 10,
        type: "Verbos Irregulares",
        difficulty: 3,
        text: "_____ a verte tan pronto como recibí tu mensaje.",
        infinitive: "venir",
        options: ["vengo", "vine", "venía", "vendré", "vendría", "venga"],
        correctAnswers: [1],
        explanation: "sequence_completed"
    },
    {
        id: 11,
        type: "Pretérito vs Imperfecto",
        difficulty: 1,
        text: "¿_____ mucho para el examen ayer?",
        infinitive: "estudiar",
        options: ["estudias", "estudiaste", "estudiabas", "estudiarás", "estudiarías", "estudies"],
        correctAnswers: [1],
        explanation: "question_specific"
    },
    {
        id: 12,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "¿_____ tiempo libre el fin de semana pasado?",
        infinitive: "tener",
        options: ["tienes", "tuviste", "tenías", "tendrás", "tendrías", "tengas"],
        correctAnswers: [1],
        explanation: "question_specific"
    },
    {
        id: 13,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "Cuando tenías 10 años, ¿_____ en bicicleta todos los días?",
        infinitive: "montar",
        options: ["montas", "montaste", "montabas", "montarás", "montarías", "montes"],
        correctAnswers: [2],
        explanation: "cada_habitual"
    },
    {
        id: 14,
        type: "Verbos Irregulares",
        difficulty: 3,
        text: "¿_____ terminar el proyecto a tiempo?",
        infinitive: "poder",
        options: ["puedes", "pudiste", "podías", "podrás", "podrías", "puedas"],
        correctAnswers: [1],
        explanation: "poder_specific"
    },
    {
        id: 15,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "Antes _____ mucho café, pero ahora solo bebes té.",
        infinitive: "beber",
        options: ["bebes", "bebiste", "bebías", "beberás", "beberías", "bebas"],
        correctAnswers: [2],
        explanation: "siempre_habitual"
    },
    {
        id: 16,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "¿_____ a la fiesta el sábado pasado?",
        infinitive: "venir",
        options: ["vienes", "viniste", "venías", "vendrás", "vendrías", "vengas"],
        correctAnswers: [1],
        explanation: "question_specific"
    },
    {
        id: 17,
        type: "Pretérito vs Imperfecto",
        difficulty: 1,
        text: "Anoche _____ una película muy interesante.",
        infinitive: "ver",
        options: ["veo", "viste", "veías", "verás", "verías", "veas"],
        correctAnswers: [1],
        explanation: "ayer_past"
    },
    {
        id: 18,
        type: "Pretérito vs Imperfecto",
        difficulty: 3,
        text: "No sabía que _____ francés tan bien.",
        infinitive: "hablar",
        options: ["hablas", "hablaste", "hablabas", "hablarás", "hablarías", "hables"],
        correctAnswers: [2],
        explanation: "saber_continuous"
    },
    {
        id: 19,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "María _____ en esa empresa cuando la conocí.",
        infinitive: "trabajar",
        options: ["trabaja", "trabajó", "trabajaba", "trabajará", "trabajaría", "trabaje"],
        correctAnswers: [2],
        explanation: "context_main"
    },
    {
        id: 20,
        type: "Verbos Irregulares",
        difficulty: 3,
        text: "Él _____ a la fiesta muy tarde anoche.",
        infinitive: "venir",
        options: ["viene", "vino", "venía", "vendrá", "vendría", "venga"],
        correctAnswers: [1],
        explanation: "ayer_past"
    },
    {
        id: 21,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "Mi hermana _____ doctora cuando la conociste.",
        infinitive: "ser",
        options: ["es", "fue", "era", "será", "sería", "sea"],
        correctAnswers: [2],
        explanation: "description_past"
    },
    {
        id: 22,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "Ella _____ mucha prisa ayer por la mañana.",
        infinitive: "tener",
        options: ["tiene", "tuvo", "tenía", "tendrá", "tendría", "tenga"],
        correctAnswers: [1],
        explanation: "ayer_past"
    },
    {
        id: 23,
        type: "Pretérito vs Imperfecto",
        difficulty: 3,
        text: "El ladrón _____ por la ventana mientras la familia dormía.",
        infinitive: "entrar",
        options: ["entra", "entró", "entraba", "entrará", "entraría", "entre"],
        correctAnswers: [1],
        explanation: "mientras_interrupted"
    },
    {
        id: 24,
        type: "Verbos Irregulares",
        difficulty: 3,
        text: "Ella _____ la respuesta desde el principio.",
        infinitive: "saber",
        options: ["sabe", "supo", "sabía", "sabrá", "sabría", "sepa"],
        correctAnswers: [1],
        explanation: "saber_moment"
    },
    {
        id: 25,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "_____ muy cansado cuando llegué a casa.",
        infinitive: "estar",
        options: ["estoy", "estuve", "estaba", "estaré", "estaría", "esté"],
        correctAnswers: [2],
        explanation: "description_past"
    },
    {
        id: 26,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "Juan _____ resolver el problema rápidamente.",
        infinitive: "poder",
        options: ["puede", "pudo", "podía", "podrá", "podría", "pueda"],
        correctAnswers: [1],
        explanation: "poder_specific"
    },
    {
        id: 27,
        type: "Descripciones",
        difficulty: 2,
        text: "La casa _____ muy grande y tenía un jardín hermoso.",
        infinitive: "ser",
        options: ["es", "fue", "era", "será", "sería", "sea"],
        correctAnswers: [2],
        explanation: "description_past"
    },
    {
        id: 28,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "Nosotros _____ en Madrid cuando éramos pequeños.",
        infinitive: "vivir",
        options: ["vivimos", "vivimos", "vivíamos", "viviremos", "viviríamos", "vivamos"],
        correctAnswers: [2],
        explanation: "context_main"
    },
    {
        id: 29,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "Nosotros _____ la tarea juntos ayer.",
        infinitive: "hacer",
        options: ["hacemos", "hicimos", "hacíamos", "haremos", "haríamos", "hagamos"],
        correctAnswers: [1],
        explanation: "ayer_past"
    },
    {
        id: 30,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "Todos los miércoles _____ al gimnasio después del trabajo.",
        infinitive: "ir",
        options: ["vamos", "fuimos", "íbamos", "iremos", "iríamos", "vayamos"],
        correctAnswers: [2],
        explanation: "cada_habitual"
    },
    {
        id: 31,
        type: "Verbos Irregulares",
        difficulty: 3,
        text: "Nosotros _____ temprano pero el evento ya había empezado.",
        infinitive: "venir",
        options: ["venimos", "vinimos", "veníamos", "vendremos", "vendríamos", "vengamos"],
        correctAnswers: [1],
        explanation: "sequence_completed"
    },
    {
        id: 32,
        type: "Pretérito vs Imperfecto",
        difficulty: 3,
        text: "Durante mi infancia, _____ muchos cuentos antes de dormir.",
        infinitive: "leer",
        options: ["leemos", "leímos", "leíamos", "leeremos", "leeríamos", "leamos"],
        correctAnswers: [2],
        explanation: "siempre_habitual"
    },
    {
        id: 33,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "Nosotros _____ mucha suerte en ese viaje.",
        infinitive: "tener",
        options: ["tenemos", "tuvimos", "teníamos", "tendremos", "tendríamos", "tengamos"],
        correctAnswers: [1],
        explanation: "poder_specific"
    },
    {
        id: 34,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "Antes _____ caminar al trabajo, pero ahora manejamos.",
        infinitive: "poder",
        options: ["podemos", "pudimos", "podíamos", "podremos", "podríamos", "podamos"],
        correctAnswers: [2],
        explanation: "siempre_habitual"
    },
    {
        id: 35,
        type: "Secuencias",
        difficulty: 2,
        text: "Primero _____ la tarea, luego salimos a jugar.",
        infinitive: "terminar",
        options: ["terminamos", "terminamos", "terminábamos", "terminaremos", "terminaríamos", "terminemos"],
        correctAnswers: [1],
        explanation: "sequence_completed"
    },
    {
        id: 36,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "Mis padres _____ cuando llegué a casa.",
        infinitive: "cenar",
        options: ["cenan", "cenaron", "cenaban", "cenarán", "cenarían", "cenen"],
        correctAnswers: [2],
        explanation: "mientras_interrupted"
    },
    {
        id: 37,
        type: "Verbos Irregulares",
        difficulty: 3,
        text: "Ellos _____ la respuesta desde el principio.",
        infinitive: "saber",
        options: ["saben", "supieron", "sabían", "sabrán", "sabrían", "sepan"],
        correctAnswers: [1],
        explanation: "saber_moment"
    },
    {
        id: 38,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "Los invitados _____ a las ocho en punto.",
        infinitive: "venir",
        options: ["vienen", "vinieron", "venían", "vendrán", "vendrían", "vengan"],
        correctAnswers: [1],
        explanation: "poder_specific"
    },
    {
        id: 39,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "Los niños _____ en el jardín cuando empezó a llover.",
        infinitive: "jugar",
        options: ["juegan", "jugaron", "jugaban", "jugarán", "jugarían", "jueguen"],
        correctAnswers: [2],
        explanation: "mientras_interrupted"
    },
    {
        id: 40,
        type: "Verbos Irregulares",
        difficulty: 3,
        text: "Ellas _____ resolver todos los ejercicios.",
        infinitive: "poder",
        options: ["pueden", "pudieron", "podían", "podrán", "podrían", "puedan"],
        correctAnswers: [1],
        explanation: "poder_specific"
    },
    {
        id: 41,
        type: "Pretérito vs Imperfecto",
        difficulty: 3,
        text: "Durante la reunión, todos _____ en silencio hasta que habló el director.",
        infinitive: "estar",
        options: ["están", "estuvieron", "estaban", "estarán", "estarían", "estén"],
        correctAnswers: [2],
        explanation: "mientras_interrupted"
    },
    {
        id: 42,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "Mis hermanos _____ que estudiar todo el fin de semana.",
        infinitive: "tener",
        options: ["tienen", "tuvieron", "tenían", "tendrán", "tendrían", "tengan"],
        correctAnswers: [1],
        explanation: "poder_specific"
    },
    {
        id: 43,
        type: "Descripciones",
        difficulty: 2,
        text: "El cielo _____ muy nublado ayer por la mañana.",
        infinitive: "estar",
        options: ["está", "estuvo", "estaba", "estará", "estaría", "esté"],
        correctAnswers: [2],
        explanation: "description_past"
    },
    {
        id: 44,
        type: "Tiempo y Frecuencia",
        difficulty: 1,
        text: "Todos los domingos _____ a casa de mis abuelos.",
        infinitive: "ir",
        options: ["voy", "fui", "iba", "iré", "iría", "vaya"],
        correctAnswers: [2],
        explanation: "cada_habitual"
    },
    {
        id: 45,
        type: "Secuencias",
        difficulty: 3,
        text: "Primero _____, luego salí de casa.",
        infinitive: "desayunar",
        options: ["desayuno", "desayuné", "desayunaba", "desayunaré", "desayunaría", "desayune"],
        correctAnswers: [1],
        explanation: "sequence_completed"
    },
    {
        id: 46,
        type: "Verbos Irregulares",
        difficulty: 3,
        text: "Usted _____ las llaves en la mesa anoche.",
        infinitive: "poner",
        options: ["pone", "puso", "ponía", "pondrá", "pondría", "ponga"],
        correctAnswers: [1],
        explanation: "ayer_past"
    },
    {
        id: 47,
        type: "Tiempo y Frecuencia",
        difficulty: 1,
        text: "A menudo _____ en ese café cuando vivía cerca.",
        infinitive: "desayunar",
        options: ["desayuno", "desayuné", "desayunaba", "desayunaré", "desayunaría", "desayune"],
        correctAnswers: [2],
        explanation: "siempre_habitual"
    },
    {
        id: 48,
        type: "Tiempo y Frecuencia",
        difficulty: 2,
        text: "Una vez _____ un accidente muy grave en esa esquina.",
        infinitive: "ver",
        options: ["veo", "vi", "veía", "veré", "vería", "vea"],
        correctAnswers: [1],
        explanation: "poder_specific"
    },
    {
        id: 49,
        type: "Descripciones",
        difficulty: 2,
        text: "Hacía mucho calor cuando _____ de la oficina.",
        infinitive: "salir",
        options: ["salgo", "salí", "salía", "saldré", "saldría", "salga"],
        correctAnswers: [1],
        explanation: "mientras_interrupted"
    },
    {
        id: 50,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "El teléfono _____ cuando estaba en la ducha.",
        infinitive: "sonar",
        options: ["suena", "sonó", "sonaba", "sonará", "sonaría", "suene"],
        correctAnswers: [1],
        explanation: "mientras_interrupted"
    },
    {
        id: 51,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "_____ las tres de la mañana cuando llegaste.",
        infinitive: "ser",
        options: ["son", "fueron", "eran", "serán", "serían", "sean"],
        correctAnswers: [2],
        explanation: "context_main"
    },
    {
        id: 52,
        type: "Verbos Irregulares",
        difficulty: 3,
        text: "No _____ dormir anoche por el ruido.",
        infinitive: "poder",
        options: ["puedo", "pude", "podía", "podré", "podría", "pueda"],
        correctAnswers: [1],
        explanation: "ayer_past"
    },
    {
        id: 53,
        type: "Pretérito vs Imperfecto",
        difficulty: 3,
        text: "De niño, _____ muy tímido, pero un día decidí cambiar.",
        infinitive: "ser",
        options: ["soy", "fui", "era", "seré", "sería", "sea"],
        correctAnswers: [2],
        explanation: "description_past"
    },
    {
        id: 54,
        type: "Descripciones",
        difficulty: 3,
        text: "El restaurante _____ lleno cuando llegamos.",
        infinitive: "estar",
        options: ["está", "estuvo", "estaba", "estará", "estaría", "esté"],
        correctAnswers: [2],
        explanation: "context_main"
    },
    {
        id: 55,
        type: "Secuencias",
        difficulty: 3,
        text: "Como _____ lluvia, decidimos quedarnos en casa.",
        infinitive: "haber",
        options: ["hay", "hubo", "había", "habrá", "habría", "haya"],
        correctAnswers: [2],
        explanation: "context_main"
    },
    {
        id: 56,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "No pude salir porque _____ enfermo.",
        infinitive: "estar",
        options: ["estoy", "estuve", "estaba", "estaré", "estaría", "esté"],
        correctAnswers: [2],
        explanation: "description_past"
    },
    {
        id: 57,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "En aquella época, no _____ usar computadoras.",
        infinitive: "saber",
        options: ["sé", "supe", "sabía", "sabré", "sabría", "sepa"],
        correctAnswers: [2],
        explanation: "saber_continuous"
    },
    {
        id: 58,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "El año pasado _____ español en la universidad.",
        infinitive: "estudiar",
        options: ["estudio", "estudié", "estudiaba", "estudiaré", "estudiaría", "estudie"],
        correctAnswers: [2],
        explanation: "context_main"
    },
    {
        id: 59,
        type: "Pretérito vs Imperfecto",
        difficulty: 3,
        text: "Después de que _____ el examen, me sentí muy aliviado.",
        infinitive: "terminar",
        options: ["termino", "terminé", "terminaba", "terminaré", "terminaría", "termine"],
        correctAnswers: [1],
        explanation: "sequence_completed"
    },
    {
        id: 60,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "Mis abuelos _____ de visita cada Navidad.",
        infinitive: "venir",
        options: ["vienen", "vinieron", "venían", "vendrán", "vendrían", "vengan"],
        correctAnswers: [2],
        explanation: "cada_habitual"
    },
    {
        id: 61,
        type: "Pretérito vs Imperfecto",
        difficulty: 2,
        text: "Conocí a María cuando _____ en Madrid.",
        infinitive: "vivir",
        options: ["vivo", "viví", "vivía", "viviré", "viviría", "viva"],
        correctAnswers: [2]
    },
    {
        id: 62,
        type: "Verbos Irregulares",
        difficulty: 3,
        text: "Anoche _____ mucho frío en la montaña.",
        infinitive: "hacer",
        options: ["hace", "hizo", "hacía", "hará", "haría", "haga"],
        correctAnswers: [1]
    },
    {
        id: 63,
        type: "Pretérito vs Imperfecto",
        difficulty: 1,
        text: "Siempre _____ temprano cuando trabajaba allí.",
        infinitive: "levantarse",
        options: ["me levanto", "me levanté", "me levantaba", "me levantaré", "me levantaría", "me levante"],
        correctAnswers: [2]
    },
    {
        id: 64,
        type: "Verbos Irregulares",
        difficulty: 2,
        text: "Ese día _____ todas mis cosas en una maleta.",
        infinitive: "traer",
        options: ["traigo", "traje", "traía", "traeré", "traería", "traiga"],
        correctAnswers: [1]
    },
    {
        id: 65,
        type: "Pretérito vs Imperfecto",
        difficulty: 3,
        text: "Cuando era pequeña, mi abuela me _____ cuentos todas las noches.",
        infinitive: "contar",
        options: ["cuenta", "contó", "contaba", "contará", "contaría", "cuente"],
        correctAnswers: [2]
    }
];