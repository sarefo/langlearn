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
        }
    }
};