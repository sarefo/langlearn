// Spanish past tense exercises - Comprehensive collection with 60+ exercises
// Well distributed across persons (yo, tú, él/ella, nosotros, ellos) and verb types
const exercises = [
    // ========== YO (First person singular) ==========
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
    {
        id: 4,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "No _____ (saber) qué hacer en esa situación.",
        hint: "(saber)",
        options: ["supe", "sabía", "sé", "sabré"],
        correct: 1,
        explanation: "'Saber' en imperfecto describe conocimiento continuo en el pasado."
    },
    {
        id: 5,
        type: "Pretérito vs Imperfecto",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Cada verano _____ (ir) a la playa con mi familia.",
        hint: "(ir)",
        options: ["fui", "iba", "voy", "iré"],
        correct: 1,
        explanation: "'Cada verano' indica una acción habitual repetida."
    },
    {
        id: 6,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Cuando _____ (saber) la noticia, no lo podía creer.",
        hint: "(saber)",
        options: ["supe", "sabía", "sé", "sabré"],
        correct: 0,
        explanation: "'Saber' en pretérito indica el momento específico de enterarse."
    },
    {
        id: 7,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Ayer _____ (tener) que estudiar toda la noche.",
        hint: "(tener)",
        options: ["tuve", "tenía", "tengo", "tendré"],
        correct: 0,
        explanation: "Pretérito para obligaciones específicas en el pasado."
    },
    {
        id: 8,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Mientras _____ (ver) la televisión, sonó el teléfono.",
        hint: "(ver)",
        options: ["vi", "veía", "veo", "veré"],
        correct: 1,
        explanation: "Imperfecto para acción en progreso que fue interrumpida."
    },
    {
        id: 9,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "De repente, _____ (escuchar) una gran explosión.",
        hint: "(escuchar)",
        options: ["escuchaba", "escuché", "escucho", "escucharé"],
        correct: 1,
        explanation: "'De repente' indica una acción súbita y completada."
    },
    {
        id: 10,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "_____ (venir) a verte tan pronto como recibí tu mensaje.",
        hint: "(venir)",
        options: ["Vine", "Venía", "Vengo", "Vendré"],
        correct: 0,
        explanation: "Pretérito para acción específica en respuesta a un evento."
    },

    // ========== TÚ (Second person singular) ==========
    {
        id: 11,
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
        id: 12,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "¿_____ (tener) tiempo libre el fin de semana pasado?",
        hint: "(tener)",
        options: ["Tenías", "Tuviste", "Tienes", "Tendrás"],
        correct: 1,
        explanation: "Pretérito irregular de 'tener' es 'tuviste'."
    },
    {
        id: 13,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Cuando tenías 10 años, ¿_____ (montar) en bicicleta todos los días?",
        hint: "(montar)",
        options: ["montaste", "montabas", "montas", "montarás"],
        correct: 1,
        explanation: "Imperfecto para actividad habitual en el pasado."
    },
    {
        id: 14,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "¿_____ (poder) terminar el proyecto a tiempo?",
        hint: "(poder)",
        options: ["Pudiste", "Podías", "Puedes", "Podrás"],
        correct: 0,
        explanation: "Pretérito para capacidad en una situación específica."
    },
    {
        id: 15,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Antes _____ (beber) mucho café, pero ahora solo bebes té.",
        hint: "(beber)",
        options: ["bebiste", "bebías", "bebes", "beberás"],
        correct: 1,
        explanation: "'Antes' + imperfecto contrasta hábitos pasados con el presente."
    },
    {
        id: 16,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "¿_____ (venir) a la fiesta el sábado pasado?",
        hint: "(venir)",
        options: ["Venías", "Viniste", "Vienes", "Vendrás"],
        correct: 1,
        explanation: "Pretérito irregular de 'venir' es 'viniste'."
    },
    {
        id: 17,
        type: "Pretérito vs Imperfecto",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Anoche _____ (ver) una película muy interesante.",
        hint: "(ver)",
        options: ["veías", "viste", "ves", "verás"],
        correct: 1,
        explanation: "Anoche + acción específica = pretérito."
    },
    {
        id: 18,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "No sabía que _____ (hablar) francés tan bien.",
        hint: "(hablar)",
        options: ["hablaste", "hablabas", "hablas", "hablarás"],
        correct: 1,
        explanation: "Imperfecto para habilidades continuas en el pasado."
    },

    // ========== ÉL/ELLA (Third person singular) ==========
    {
        id: 19,
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
        id: 20,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Él _____ (venir) a la fiesta muy tarde anoche.",
        hint: "(venir)",
        options: ["venía", "viene", "vino", "vendrá"],
        correct: 2,
        explanation: "Pretérito irregular de 'venir' es 'vino'."
    },
    {
        id: 21,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Mi hermana _____ (ser) doctora cuando la conociste.",
        hint: "(ser)",
        options: ["fue", "era", "es", "será"],
        correct: 1,
        explanation: "Imperfecto para profesiones como característica continua en el pasado."
    },
    {
        id: 22,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Ella _____ (tener) mucha prisa ayer por la mañana.",
        hint: "(tener)",
        options: ["tenía", "tuvo", "tiene", "tendrá"],
        correct: 1,
        explanation: "Pretérito para estado específico en un momento determinado."
    },
    {
        id: 23,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "El ladrón _____ (entrar) por la ventana mientras la familia dormía.",
        hint: "(entrar)",
        options: ["entró", "entraba", "entra", "entrará"],
        correct: 0,
        explanation: "Pretérito para acción específica completada, aunque ocurra durante otra acción continua."
    },
    {
        id: 24,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Ella _____ (saber) la respuesta desde el principio.",
        hint: "(saber)",
        options: ["sabía", "supo", "sabe", "sabrá"],
        correct: 1,
        explanation: "'Saber' en pretérito (supo) indica momento de enterarse."
    },
    {
        id: 25,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "_____ (estar) muy cansado cuando llegué a casa.",
        hint: "(estar)",
        options: ["Estuve", "Estaba", "Estoy", "Estaré"],
        correct: 1,
        explanation: "Imperfecto para describir el estado en que se encontraba."
    },
    {
        id: 26,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Juan _____ (poder) resolver el problema rápidamente.",
        hint: "(poder)",
        options: ["podía", "pudo", "puede", "podrá"],
        correct: 1,
        explanation: "Pretérito para capacidad exitosa en una situación específica."
    },
    {
        id: 27,
        type: "Descripciones",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "La casa _____ (ser) muy grande y tenía un jardín hermoso.",
        hint: "(ser)",
        options: ["fue", "era", "es", "será"],
        correct: 1,
        explanation: "Imperfecto para describir características físicas en el pasado."
    },

    // ========== NOSOTROS (First person plural) ==========
    {
        id: 28,
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
        id: 29,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Nosotros _____ (hacer) la tarea juntos ayer.",
        hint: "(hacer)",
        options: ["hacíamos", "hicimos", "hacemos", "haremos"],
        correct: 1,
        explanation: "Pretérito irregular de 'hacer' es 'hicimos'."
    },
    {
        id: 30,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Todos los miércoles _____ (ir) al gimnasio después del trabajo.",
        hint: "(ir)",
        options: ["fuimos", "íbamos", "vamos", "iremos"],
        correct: 1,
        explanation: "Imperfecto para rutinas semanales o periódicas."
    },
    {
        id: 31,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Nosotros _____ (venir) temprano pero el evento ya había empezado.",
        hint: "(venir)",
        options: ["veníamos", "vinimos", "venimos", "vendremos"],
        correct: 1,
        explanation: "Pretérito irregular de 'venir' es 'vinimos'."
    },
    {
        id: 32,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Durante mi infancia, _____ (leer) muchos cuentos antes de dormir.",
        hint: "(leer)",
        options: ["leímos", "leíamos", "leemos", "leeremos"],
        correct: 1,
        explanation: "'Durante' + período de tiempo + actividad habitual = imperfecto."
    },
    {
        id: 33,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Nosotros _____ (tener) mucha suerte en ese viaje.",
        hint: "(tener)",
        options: ["teníamos", "tuvimos", "tenemos", "tendremos"],
        correct: 1,
        explanation: "Pretérito para experiencia específica durante el viaje."
    },
    {
        id: 34,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Antes _____ (poder) caminar al trabajo, pero ahora manejamos.",
        hint: "(poder)",
        options: ["pudimos", "podíamos", "podemos", "podremos"],
        correct: 1,
        explanation: "Imperfecto para capacidades habituales en el pasado."
    },
    {
        id: 35,
        type: "Secuencias",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Primero _____ (terminar) la tarea, luego salimos a jugar.",
        hint: "(terminar)",
        options: ["terminamos", "terminábamos", "terminamos", "terminaremos"],
        correct: 0,
        explanation: "'Primero' indica una secuencia de acciones completadas."
    },

    // ========== ELLOS/ELLAS (Third person plural) ==========
    {
        id: 36,
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
        id: 37,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Ellos _____ (saber) la respuesta desde el principio.",
        hint: "(saber)",
        options: ["sabían", "supieron", "saben", "sabrán"],
        correct: 1,
        explanation: "'Saber' en pretérito (supieron) indica momento de enterarse."
    },
    {
        id: 38,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Los invitados _____ (venir) a las ocho en punto.",
        hint: "(venir)",
        options: ["vinieron", "venían", "vienen", "vendrán"],
        correct: 0,
        explanation: "Pretérito para acción completada en un momento específico."
    },
    {
        id: 39,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Los niños _____ (jugar) en el jardín cuando empezó a llover.",
        hint: "(jugar)",
        options: ["jugaron", "jugaban", "juegan", "jugarán"],
        correct: 1,
        explanation: "Imperfecto para acción en progreso interrumpida por la lluvia."
    },
    {
        id: 40,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Ellas _____ (poder) resolver todos los ejercicios.",
        hint: "(poder)",
        options: ["podían", "pudieron", "pueden", "podrán"],
        correct: 1,
        explanation: "Pretérito para capacidad exitosa demostrada."
    },
    {
        id: 41,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Durante la reunión, todos _____ (estar) en silencio hasta que habló el director.",
        hint: "(estar)",
        options: ["estuvieron", "estaban", "están", "estarán"],
        correct: 1,
        explanation: "Imperfecto para estado continuo hasta ser interrumpido."
    },
    {
        id: 42,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Mis hermanos _____ (tener) que estudiar todo el fin de semana.",
        hint: "(tener)",
        options: ["tenían", "tuvieron", "tienen", "tendrán"],
        correct: 1,
        explanation: "Pretérito para obligación específica durante el fin de semana."
    },

    // ========== MIXED PERSONS - Additional exercises ==========
    {
        id: 43,
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
        id: 44,
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
        id: 45,
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
        id: 46,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Usted _____ (poner) las llaves en la mesa anoche.",
        hint: "(poner)",
        options: ["ponía", "puso", "pone", "pondrá"],
        correct: 1,
        explanation: "Pretérito irregular de 'poner' es 'puso'."
    },
    {
        id: 47,
        type: "Tiempo y Frecuencia",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "A menudo _____ (desayunar) en ese café cuando vivía cerca.",
        hint: "(desayunar)",
        options: ["desayuné", "desayunaba", "desayuno", "desayunaré"],
        correct: 1,
        explanation: "'A menudo' indica una acción habitual."
    },
    {
        id: 48,
        type: "Tiempo y Frecuencia",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Una vez _____ (ver) un accidente muy grave en esa esquina.",
        hint: "(ver)",
        options: ["vi", "veía", "veo", "veré"],
        correct: 0,
        explanation: "'Una vez' indica una acción específica y única."
    },
    {
        id: 49,
        type: "Descripciones",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Hacía mucho calor cuando _____ (salir) de la oficina.",
        hint: "(salir)",
        options: ["salí", "salía", "salgo", "saldré"],
        correct: 0,
        explanation: "Condiciones climáticas (imperfecto) + acción específica (pretérito)."
    },
    {
        id: 50,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "El teléfono _____ (sonar) cuando estaba en la ducha.",
        hint: "(sonar)",
        options: ["sonó", "sonaba", "suena", "sonará"],
        correct: 0,
        explanation: "Acción que interrumpe = pretérito, acción interrumpida = imperfecto."
    },

    // ========== ADDITIONAL EXERCISES (51-65) ==========
    {
        id: 51,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "_____ (ser) las tres de la mañana cuando llegaste.",
        hint: "(ser)",
        options: ["Fueron", "Eran", "Son", "Serán"],
        correct: 1,
        explanation: "La hora siempre se expresa en imperfecto cuando da contexto a otra acción."
    },
    {
        id: 52,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "No _____ (poder) dormir anoche por el ruido.",
        hint: "(poder)",
        options: ["pude", "podía", "puedo", "podré"],
        correct: 0,
        explanation: "'Poder' en pretérito indica incapacidad en una situación específica."
    },
    {
        id: 53,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "De niño, _____ (ser) muy tímido, pero un día decidí cambiar.",
        hint: "(ser)",
        options: ["fui", "era", "soy", "seré"],
        correct: 1,
        explanation: "Características de personalidad en el pasado usan imperfecto."
    },
    {
        id: 54,
        type: "Descripciones",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "El restaurante _____ (estar) lleno cuando llegamos.",
        hint: "(estar)",
        options: ["estuvo", "estaba", "está", "estará"],
        correct: 1,
        explanation: "Estados como contexto de otras acciones van en imperfecto."
    },
    {
        id: 55,
        type: "Secuencias",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Como _____ (haber) lluvia, decidimos quedarnos en casa.",
        hint: "(haber)",
        options: ["hubo", "había", "hay", "habrá"],
        correct: 1,
        explanation: "Condiciones que explican decisiones van en imperfecto."
    },
    {
        id: 56,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "No pude salir porque _____ (estar) enfermo.",
        hint: "(estar)",
        options: ["estuve", "estaba", "estoy", "estaré"],
        correct: 1,
        explanation: "Estados que explican por qué algo pasó se expresan en imperfecto."
    },
    {
        id: 57,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "En aquella época, no _____ (saber) usar computadoras.",
        hint: "(saber)",
        options: ["supe", "sabía", "sé", "sabré"],
        correct: 1,
        explanation: "Conocimientos continuos en el pasado van en imperfecto."
    },
    {
        id: 58,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "El año pasado _____ (estudiar) español en la universidad.",
        hint: "(estudiar)",
        options: ["estudiaba", "estudié", "estudio", "estudiaré"],
        correct: 0,
        explanation: "Períodos largos de tiempo con acciones habituales usan imperfecto."
    },
    {
        id: 59,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Después de que _____ (terminar) el examen, me sentí muy aliviado.",
        hint: "(terminar)",
        options: ["terminé", "terminaba", "termino", "terminaré"],
        correct: 0,
        explanation: "'Después de que' introduce acciones completadas que van en pretérito."
    },
    {
        id: 60,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Mis abuelos _____ (venir) de visita cada Navidad.",
        hint: "(venir)",
        options: ["vinieron", "venían", "vienen", "vendrán"],
        correct: 1,
        explanation: "Acciones habituales en el pasado (cada Navidad) usan imperfecto."
    },
    {
        id: 61,
        type: "Pretérito vs Imperfecto",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Conocí a María cuando _____ (vivir) en Madrid.",
        hint: "(vivir)",
        options: ["viví", "vivía", "vivo", "viviré"],
        correct: 1,
        explanation: "Imperfecto para establecer contexto de una acción en pretérito."
    },
    {
        id: 62,
        type: "Verbos Irregulares",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Anoche _____ (hacer) mucho frío en la montaña.",
        hint: "(hacer)",
        options: ["hizo", "hacía", "hace", "hará"],
        correct: 0,
        explanation: "Condiciones climáticas específicas usan pretérito con expresiones temporales precisas."
    },
    {
        id: 63,
        type: "Pretérito vs Imperfecto",
        difficulty: "Fácil",
        question: "Completa la oración:",
        text: "Siempre _____ (levantarse) temprano cuando trabajaba allí.",
        hint: "(levantarse)",
        options: ["me levanté", "me levantaba", "me levanto", "me levantaré"],
        correct: 1,
        explanation: "'Siempre' indica una rutina habitual en el pasado."
    },
    {
        id: 64,
        type: "Verbos Irregulares",
        difficulty: "Medio",
        question: "Completa la oración:",
        text: "Ese día _____ (traer) todas mis cosas en una maleta.",
        hint: "(traer)",
        options: ["traía", "traje", "traigo", "traeré"],
        correct: 1,
        explanation: "Pretérito irregular de 'traer' es 'traje'."
    },
    {
        id: 65,
        type: "Pretérito vs Imperfecto",
        difficulty: "Difícil",
        question: "Completa la oración:",
        text: "Cuando era pequeña, mi abuela me _____ (contar) cuentos todas las noches.",
        hint: "(contar)",
        options: ["contó", "contaba", "cuenta", "contará"],
        correct: 1,
        explanation: "Acciones habituales en la infancia se expresan en imperfecto."
    }
];