// Spanish verb tense explanations - contextual but non-redundant
const explanations = {
    // Common explanation patterns that can be reused
    patterns: {
        // Time indicators that require pretérito
        "ayer_past": {
            0: "El contexto indica pasado",
            1: "Acción específica completada ayer", 
            2: "'Ayer' requiere acción específica, no habitual",
            3: "'Ayer' es pasado",
            4: "Es un hecho, no hipotético",
            5: "No hay duda ni emoción"
        },
        
        // Time indicators that require imperfecto  
        "siempre_habitual": {
            0: "El contexto indica pasado",
            1: "'Siempre' indica repetición, no acción única",
            2: "Describe acciones habituales en el pasado",
            3: "El contexto es pasado", 
            4: "Es un hecho pasado, no hipotético",
            5: "No hay duda ni emoción"
        },
        
        "cada_habitual": {
            0: "El contexto sugiere pasado",
            1: "Indica repetición, no evento único", 
            2: "Acción habitual repetida",
            3: "Posible para planes futuros, pero contexto sugiere pasado",
            4: "No es hipotético",
            5: "No hay duda ni emoción"
        },
        
        // Irregular verbs - poder
        "poder_specific": {
            0: "El contexto indica pasado",
            1: "Incapacidad/capacidad en situación específica",
            2: "Se refiere a evento específico, no habitual", 
            3: "El contexto es pasado",
            4: "Es un hecho, no hipotético",
            5: "No hay duda ni emoción"
        },
        
        // Saber - continuous knowledge vs specific moment
        "saber_continuous": {
            0: "El contexto sugiere pasado", 
            1: "Describe momento específico, no conocimiento continuo",
            2: "Conocimiento continuo en el pasado",
            3: "El contexto es pasado",
            4: "Es un hecho, no hipotético", 
            5: "No hay duda ni emoción"
        },
        
        "saber_moment": {
            0: "El contexto es pasado",
            1: "Momento específico de enterarse", 
            2: "Se refiere al momento específico, no conocimiento continuo",
            3: "El contexto es pasado",
            4: "Es un hecho, no hipotético",
            5: "No hay duda ni emoción"
        },
        
        // While/durante - interrupted actions
        "mientras_interrupted": {
            0: "El contexto es pasado",
            1: "'Mientras' indica acción continua, no completada",
            2: "Acción en progreso que fue interrumpida", 
            3: "El contexto es pasado",
            4: "Es un hecho, no hipotético",
            5: "No hay duda ni emoción"
        },
        
        // Sudden actions
        "repente_sudden": {
            0: "El contexto es pasado", 
            1: "'De repente' indica acción súbita y completada",
            2: "'De repente' sugiere acción específica, no continua",
            3: "El contexto es pasado",
            4: "Es un hecho, no hipotético",
            5: "No hay duda ni emoción"
        },
        
        // Questions about specific past events
        "question_specific": {
            0: "El contexto indica pasado",
            1: "Pregunta sobre acción específica completada",
            2: "Se refiere a evento específico, no habitual",
            3: "El contexto es pasado", 
            4: "Es una pregunta directa, no hipotética",
            5: "No hay duda ni emoción"
        },
        
        // Descriptions and states
        "description_past": {
            0: "El contexto es pasado",
            1: "Describe cambio específico, no característica continua", 
            2: "Describe características/estados en el pasado",
            3: "El contexto es pasado",
            4: "Es una descripción factual, no hipotética",
            5: "No hay duda ni emoción"
        },
        
        // Sequences of actions
        "sequence_completed": {
            0: "El contexto es pasado",
            1: "Secuencia de acciones completadas", 
            2: "Indica secuencia específica, no hábito",
            3: "El contexto es pasado",
            4: "Es hecho pasado, no hipotético", 
            5: "No hay duda ni emoción"
        },
        
        // Context setting vs main action
        "context_main": {
            0: "El contexto es pasado",
            1: "Se refiere a acción específica, no contexto continuo",
            2: "Establece contexto para otra acción",
            3: "El contexto es pasado",
            4: "Es un hecho, no hipotético",
            5: "No hay duda ni emoción"
        },
        
        // Subjunctive patterns
        "esperar_emotion": {
            0: "Expresa certeza, no deseo",
            1: "Expresa hecho específico, no deseo",
            2: "Expresa hecho habitual, no deseo",
            3: "Expresa certeza futura, no deseo",
            4: "Expresa posibilidad, no deseo",
            5: "Expresa deseo/esperanza sobre otra persona"
        },
        
        "querer_desire": {
            0: "Expresa certeza, no deseo",
            1: "Expresa hecho pasado, no deseo",
            2: "Expresa hecho habitual, no deseo",
            3: "Expresa certeza futura, no deseo",
            4: "Expresa hipótesis, no deseo",
            5: "Expresa deseo hacia otra persona"
        },
        
        "dudar_doubt": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado confirmado",
            2: "Expresa hecho habitual confirmado",
            3: "Expresa certeza futura",
            4: "Expresa hipótesis, no duda",
            5: "Expresa duda o incertidumbre"
        },
        
        "necesitar_need": {
            0: "Expresa certeza, no necesidad",
            1: "Expresa hecho pasado, no necesidad",
            2: "Expresa hecho habitual, no necesidad",
            3: "Expresa certeza futura",
            4: "Expresa hipótesis, no necesidad",
            5: "Expresa necesidad hacia otra persona"
        },
        
        "cuando_future": {
            0: "Se refiere al presente habitual",
            1: "Se refiere al pasado específico",
            2: "Se refiere al pasado habitual",
            3: "Se refiere al futuro específico",
            4: "Expresa hipótesis, no tiempo futuro",
            5: "Tiempo futuro incierto requiere subjuntivo"
        },
        
        "aunque_concession": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado confirmado",
            2: "Expresa hecho habitual confirmado",
            3: "Expresa certeza futura",
            4: "Expresa hipótesis, no concesión",
            5: "Expresa concesión o contraste"
        },
        
        "para_que_purpose": {
            0: "Expresa certeza, no propósito",
            1: "Expresa hecho pasado, no propósito",
            2: "Expresa hecho habitual, no propósito",
            3: "Expresa certeza futura",
            4: "Expresa hipótesis general",
            5: "Expresa propósito o finalidad"
        },
        
        "sin_que_negative": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado confirmado",
            2: "Expresa hecho habitual confirmado",
            3: "Expresa certeza futura",
            4: "Expresa hipótesis general",
            5: "Expresa acción sin que ocurra otra"
        },
        
        "es_bueno_opinion": {
            0: "Expresa certeza, no opinión",
            1: "Expresa hecho pasado, no opinión",
            2: "Expresa hecho habitual, no opinión",
            3: "Expresa certeza futura",
            4: "Expresa hipótesis general",
            5: "Expresa valoración u opinión"
        },
        
        "tal_vez_maybe": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado confirmado",
            2: "Expresa hecho habitual confirmado",
            3: "Expresa certeza futura",
            4: "Expresa hipótesis general",
            5: "Expresa posibilidad o duda"
        },
        
        // Conditional patterns
        "si_tuviera_conditional": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado específico",
            2: "Expresa hecho habitual pasado",
            3: "Expresa certeza futura",
            4: "Condición hipotética requiere condicional",
            5: "No hay duda ni emoción"
        },
        
        "polite_request": {
            0: "Forma directa, no cortés",
            1: "Se refiere al pasado, no presente",
            2: "Se refiere al pasado habitual",
            3: "Forma directa futura",
            4: "Forma cortés y respetuosa",
            5: "No hay duda ni emoción"
        },
        
        "advice_conditional": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado específico",
            2: "Expresa hecho habitual pasado",
            3: "Expresa certeza futura",
            4: "Expresa consejo o recomendación",
            5: "No hay duda ni emoción"
        },
        
        "reported_speech": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado directo",
            2: "Expresa hecho habitual pasado",
            3: "Expresa certeza futura",
            4: "Estilo indirecto en pasado",
            5: "No hay duda ni emoción"
        },
        
        "si_pudiera_conditional": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado específico",
            2: "Expresa hecho habitual pasado",
            3: "Expresa certeza futura",
            4: "Condición hipotética con 'pudiera'",
            5: "No hay duda ni emoción"
        },
        
        "hypothetical_condition": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado específico",
            2: "Expresa hecho habitual pasado",
            3: "Expresa certeza futura",
            4: "Situación hipotética o irreal",
            5: "No hay duda ni emoción"
        },
        
        "si_fuera_conditional": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado específico",
            2: "Expresa hecho habitual pasado",
            3: "Expresa certeza futura",
            4: "Condición hipotética con 'fuera'",
            5: "No hay duda ni emoción"
        },
        
        "hypothetical_reaction": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado específico",
            2: "Expresa hecho habitual pasado",
            3: "Expresa certeza futura",
            4: "Reacción hipotética en esa situación",
            5: "No hay duda ni emoción"
        },
        
        "polite_invitation": {
            0: "Forma directa, no cortés",
            1: "Se refiere al pasado, no presente",
            2: "Se refiere al pasado habitual",
            3: "Forma directa futura",
            4: "Invitación cortés y respetuosa",
            5: "No hay duda ni emoción"
        },
        
        "si_estudiara_conditional": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado específico",
            2: "Expresa hecho habitual pasado",
            3: "Expresa certeza futura",
            4: "Condición hipotética con 'estudiara'",
            5: "No hay duda ni emoción"
        },
        
        "si_no_lloviera_conditional": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado específico",
            2: "Expresa hecho habitual pasado",
            3: "Expresa certeza futura",
            4: "Condición hipotética negativa",
            5: "No hay duda ni emoción"
        },
        
        "si_supiera_conditional": {
            0: "Expresa certeza presente",
            1: "Expresa hecho pasado específico",
            2: "Expresa hecho habitual pasado",
            3: "Expresa certeza futura",
            4: "Condición hipotética con 'supiera'",
            5: "No hay duda ni emoción"
        }
    }
};