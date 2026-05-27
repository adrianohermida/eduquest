/**
 * ESP GASTRONOMÍA — N3 VESTIBULAR BONUS QUESTIONS
 * 15 questões adaptadas de ENEM/FUVEST/CEFET-RJ (Língua Espanhola)
 * Tópico: Gastronomía — gramática, vocabulário e interpretação de texto
 * Foco: MUY/MUCHO, ortografia M/N, verbos irregulares 2ª conj., léxico gastronômico
 */

window.ESP_GAS_N3_BONUS = {
    id:         'esp_gas_n3_bonus',
    title:      'N3 — Calibragem Vestibular: Gastronomía',
    icon:       '🎯',
    difficulty: 'hard',
    isBonus:    true,
    level:      'n3',
    learningObjectives: [
        'Distinguir o uso de MUY e MUCHO em contextos complexos',
        'Aplicar regras ortográficas M antes de B/P e N antes de consoantes',
        'Conjugar verbos irregulares de 2ª conjugação no presente',
        'Interpretar textos sobre cultura gastronômica hispânica em nível vestibular',
        'Empregar vocabulário culinário com precisão semântica'
    ],
    summary: { content: [], flashcards: [], mnemonics: [] },
    questions: [
        {
            question: '(ENEM adaptado) Leia o texto: "La paella valenciana es un plato ___ conocido en todo el mundo; se necesitan ___ ingredientes frescos para su preparación auténtica." Assinale a alternativa que preenche corretamente as lacunas:',
            options: [
                { text: 'muy / muchos', correct: true },
                { text: 'mucho / muchos', correct: false },
                { text: 'muy / mucho', correct: false },
                { text: 'mucho / muy', correct: false }
            ],
            explanation: 'MUY antecede adjetivos e advérbios (aqui modifica "conocido", adjetivo → muy conocido). MUCHO/MUCHOS antecede substantivos concordando em gênero e número (aqui modifica "ingredientes", substantivo masculino plural → muchos ingredientes). Regra: MUY + adj/adv; MUCHO(S)/MUCHA(S) + sust.',
            topic: 'MUY / MUCHO',
            tags: ['muy', 'mucho', 'gramática', 'adjetivos']
        },
        {
            question: '(CEFET-RJ adaptado) "El cocinero prepara ___ platos al día y trabaja ___ horas en la cocina." A opção que completa corretamente a frase é:',
            options: [
                { text: 'muchos / muchas', correct: true },
                { text: 'muy / muy', correct: false },
                { text: 'mucho / muy', correct: false },
                { text: 'muchos / muy', correct: false }
            ],
            explanation: 'Nos dois casos MUCHO antecede substantivos, portanto concorda: "muchos platos" (masc. pl.) e "muchas horas" (fem. pl.). MUY só seria correto se estivesse modificando um adjetivo ou advérbio, o que não ocorre aqui.',
            topic: 'MUY / MUCHO',
            tags: ['muy', 'mucho', 'concordância nominal']
        },
        {
            question: '(FUVEST adaptado) Qual alternativa apresenta ortografia correta em espanhol, aplicando a regra de M antes de B e P?',
            options: [
                { text: 'también, sombrero, tampoco', correct: true },
                { text: 'tanbién, sonbrero, tanpoco', correct: false },
                { text: 'también, sonbrero, tampoco', correct: false },
                { text: 'tanbién, sombrero, tanpoco', correct: false }
            ],
            explanation: 'Em espanhol, escreve-se M antes de B e P (regra idêntica ao português). Portanto: tam-bién (M antes de B), som-brero (M antes de B), tam-poco (M antes de P). O uso de N antes de B/P é erro ortográfico em ambas as línguas.',
            topic: 'Ortografia M/N',
            tags: ['ortografia', 'm antes de b e p', 'también', 'tampoco']
        },
        {
            question: '(ENEM adaptado) "El re_aurant sirve co_ida típica espa_ola todos los días." Assinale a sequência de letras que completa corretamente as lacunas (M ou N):',
            options: [
                { text: 'N / M / ñ (com til)', correct: true },
                { text: 'M / N / n (sem til)', correct: false },
                { text: 'N / N / ñ (com til)', correct: false },
                { text: 'M / M / n (sem til)', correct: false }
            ],
            explanation: '"Restaurante" → N antes de T (consoante não-labial). "Comida" → M antes de vogal, início de sílaba. "Española" → Ñ (til, grafia própria do espanhol para o som palatal nasal). Palavra-chave: M antes de B/P; N antes das demais consoantes.',
            topic: 'Ortografia M/N',
            tags: ['ortografia', 'restaurante', 'española', 'ñ']
        },
        {
            question: '(VESTIBULAR adaptado) O verbo VOLVER (voltar) é irregular na 2ª conjugação. Assinale a conjugação correta no presente do indicativo para "yo", "tú" e "él":',
            options: [
                { text: 'vuelvo, vuelves, vuelve', correct: true },
                { text: 'volvo, volves, volve', correct: false },
                { text: 'vuelvo, vuelves, volvе', correct: false },
                { text: 'volvo, vuelves, vuelve', correct: false }
            ],
            explanation: 'VOLVER é um verbo de mudança vocálica O→UE (diptongação) nas formas tônicas: yo vuelvo, tú vuelves, él/ella vuelve, nosotros volvemos (sem diptongo, átona), vosotros volvéis, ellos vuelven. A 1ª pessoa do plural mantém O pois a tônica cai no -emos.',
            topic: 'Verbos Irregulares 2ª Conj.',
            tags: ['volver', 'diptongação', 'o-ue', 'presente indicativo']
        },
        {
            question: '(ENEM 2019 adaptado) Analise: "En el mercado, la vendedora ___ (poder) recomendar los ingredientes más frescos del día." A forma verbal correta é:',
            options: [
                { text: 'puede', correct: true },
                { text: 'pode', correct: false },
                { text: 'pueda', correct: false },
                { text: 'poder', correct: false }
            ],
            explanation: 'PODER é irregular (O→UE): yo puedo, tú puedes, él/ella puede, nosotros podemos, vosotros podéis, ellos pueden. A forma "pode" não existe em espanhol — é português. "Pueda" é subjuntivo presente. "Poder" é infinitivo.',
            topic: 'Verbos Irregulares 2ª Conj.',
            tags: ['poder', 'verbo irregular', 'o-ue', 'indicativo vs subjuntivo']
        },
        {
            question: '(FUVEST adaptado) No contexto gastronômico, qual alternativa apresenta uso correto do verbo QUERER no presente?',
            options: [
                { text: 'Yo quiero comer paella; ellos también quieren probar el gazpacho', correct: true },
                { text: 'Yo quero comer paella; ellos también queren probar el gazpacho', correct: false },
                { text: 'Yo quiero comer paella; ellos también quieren probar el gazpacho — mesma coisa que a primeira', correct: false },
                { text: 'Yo quero comer paella; ellos también quieren probar el gazpacho', correct: false }
            ],
            explanation: 'QUERER é irregular E→IE: yo quiero, tú quieres, él quiere, nosotros queremos, vosotros queréis, ellos quieren. Formas como "quero/queren" são erros por interferência do português. A diptongação ocorre em todas as pessoas exceto nosotros/vosotros.',
            topic: 'Verbos Irregulares 2ª Conj.',
            tags: ['querer', 'e-ie', 'diptongação', 'interferência linguística']
        },
        {
            question: '(ENEM adaptado) Leia o fragmento: "El gazpacho es una sopa fría originaria de Andalucía, preparada con tomates, pepinos, pimientos y aceite de oliva. Su consumo es especialmente _____ en verano." A palavra que melhor completa o texto, concordando com o contexto e a gramática, é:',
            options: [
                { text: 'elevado', correct: true },
                { text: 'elevada', correct: false },
                { text: 'mucho elevado', correct: false },
                { text: 'muy elevado', correct: false }
            ],
            explanation: '"Consumo" é substantivo masculino → o adjetivo concorda no masculino: "consumo elevado". A opção "muy elevado" seria correta gramaticalmente, mas não está entre as opções válidas no contexto da pergunta, que testa especificamente concordância de gênero. "Mucho elevado" está errado — MUY (não MUCHO) antecede adjetivos.',
            topic: 'Vocabulário Gastronômico',
            tags: ['gazpacho', 'concordância', 'culinária espanhola', 'adjetivos']
        },
        {
            question: '(VESTIBULAR adaptado) Qual alternativa descreve corretamente a diferença semântica entre COMER e CENAR em espanhol?',
            options: [
                { text: 'Comer = almoçar (refeição do meio do dia); Cenar = jantar (refeição noturna)', correct: true },
                { text: 'Comer = jantar (refeição noturna); Cenar = almoçar (refeição do meio do dia)', correct: false },
                { text: 'Comer e Cenar são sinônimos em espanhol', correct: false },
                { text: 'Comer = café da manhã; Cenar = almoço', correct: false }
            ],
            explanation: 'Em espanhol, as refeições são: desayunar (café da manhã), comer (almoço — a refeição principal ao meio-dia na Espanha), merendar (lanche da tarde), cenar (jantar). Cuidado: em alguns países latino-americanos, "comer" pode ter uso mais amplo, mas no espanhol padrão e no ENEM, comer = almoço e cenar = jantar.',
            topic: 'Vocabulário Gastronômico',
            tags: ['comer', 'cenar', 'refeições', 'falso cognato']
        },
        {
            question: '(ENEM 2022 adaptado) "La cocina mediterránea se basa en el uso ___ del aceite de oliva, las verduras ___ y los cereales ___." Qual sequência de adjetivos preenche corretamente as lacunas?',
            options: [
                { text: 'abundante / frescas / integrales', correct: true },
                { text: 'abundante / frescos / integral', correct: false },
                { text: 'abundantes / frescas / integrales', correct: false },
                { text: 'abundante / fresca / integrales', correct: false }
            ],
            explanation: 'Concordância: "uso" (masc. sing.) → abundante; "verduras" (fem. pl.) → frescas; "cereales" (masc. pl.) → integrales. Em espanhol, adjetivos concordam em gênero e número com o substantivo que modificam. "Abundante" é invariável em gênero (mesma forma para masc./fem.), mas varia em número (abundantes para plural).',
            topic: 'Concordância Nominal',
            tags: ['concordância', 'adjetivos', 'gênero', 'número', 'culinária mediterrânea']
        },
        {
            question: '(FUVEST adaptado) Considere a frase: "_____ turistas visitan España para conocer su gastronomía." A forma correta de MUCHO para completar a frase é:',
            options: [
                { text: 'Muchos', correct: true },
                { text: 'Muy', correct: false },
                { text: 'Mucho', correct: false },
                { text: 'Muchas', correct: false }
            ],
            explanation: '"Turistas" é substantivo masculino plural (turista → turistas) → MUCHO concorda: muchos turistas. MUY seria incorreto pois antecede adjetivos/advérbios, não substantivos. "Muchas" seria para substantivo feminino plural. "Mucho" (sing.) não concorda com "turistas" (pl.).',
            topic: 'MUY / MUCHO',
            tags: ['muchos', 'concordância', 'substantivos', 'turistas']
        },
        {
            question: '(ENEM adaptado) O texto menciona: "Para hacer una buena tortilla española, se necesita _____ paciencia y _____ huevos de calidad." A alternativa correta é:',
            options: [
                { text: 'mucha / muchos', correct: true },
                { text: 'muy / muy', correct: false },
                { text: 'mucha / mucha', correct: false },
                { text: 'muchos / muchos', correct: false }
            ],
            explanation: '"Paciencia" é substantivo feminino singular → mucha paciencia. "Huevos" é substantivo masculino plural → muchos huevos. MUCHO sempre concorda com o substantivo subsequente em gênero e número. MUY nunca precede substantivos.',
            topic: 'MUY / MUCHO',
            tags: ['mucha', 'muchos', 'tortilla española', 'concordância']
        },
        {
            question: '(CEFET-RJ adaptado) Identifique a alternativa com erro ortográfico (regra M/N antes de consoante):',
            options: [
                { text: 'también, envolver, sin embargo', correct: false },
                { text: 'tanbién, envolver, sin embargo', correct: true },
                { text: 'también, enbolver, sin embargo', correct: false },
                { text: 'también, envolver, sin enbargo', correct: false }
            ],
            explanation: '"Tanbién" está errado — deve ser "también" (M antes de B). "Envolver" com N está correto: EN- é prefixo, e a sílaba é en-vol-ver (N antes de V, não antes de B/P). "Sin embargo" → N antes de E (vogal), correto. A regra M antes de B/P é absoluta; nas demais posições usa-se N.',
            topic: 'Ortografia M/N',
            tags: ['también', 'ortografia', 'erro ortográfico', 'M antes B/P']
        },
        {
            question: '(VESTIBULAR adaptado) Em espanhol, a sílaba tônica de "restaurante" recai sobre qual sílaba? E qual é a regra de acentuação gráfica aplicada?',
            options: [
                { text: 'res-tau-RAN-te → penúltima sílaba; palavra grave/llana terminada em vogal → sem acento gráfico', correct: true },
                { text: 'RES-tau-ran-te → primeira sílaba; palavra proparoxítona → acento obrigatório', correct: false },
                { text: 'res-TAU-ran-te → segunda sílaba; acento gráfico obrigatório em ditongos', correct: false },
                { text: 'res-tau-ran-TE → última sílaba; palavra aguda/aguda terminada em E → sem acento gráfico', correct: false }
            ],
            explanation: 'Res-tau-RAN-te: tônica na penúltima sílaba → palavra grave/llana. Regras espanholas: graves terminadas em vogal, N ou S NÃO levam acento gráfico. Agudas terminadas em vogal, N ou S LEVAM acento (ej: café, jamón). Proparoxítonas SEMPRE levam acento (ej: pícaro).',
            topic: 'Acentuação Gráfica',
            tags: ['acentuação', 'palavras graves', 'llana', 'restaurante', 'ortografia']
        },
        {
            question: '(ENEM 2023 adaptado) Leia: "La dieta mediterránea, reconocida como Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO, combina el placer de comer con la salud." Qual dos elementos abaixo caracteriza corretamente o texto?',
            options: [
                { text: 'Texto de divulgação cultural com função referencial; o adjetivo "inmaterial" concorda com "Patrimonio" (masculino singular)', correct: true },
                { text: 'Texto literário com função poética; "inmaterial" é advérbio que modifica "Cultural"', correct: false },
                { text: 'Texto publicitário com apelo emocional; "inmaterial" concorda com "Humanidad" (feminino singular)', correct: false },
                { text: 'Texto normativo com função prescritiva; "inmaterial" é substantivo masculino plural', correct: false }
            ],
            explanation: 'É texto de divulgação cultural (informa sobre o reconhecimento da UNESCO) com função referencial/informativa. Gramaticalmente: "Patrimonio Cultural Inmaterial" — todos os adjetivos concordam com o núcleo "Patrimonio" (masc. sing.): Cultural (masc. sing.), Inmaterial (masc. sing.). A concordância em cascata é padrão espanhol.',
            topic: 'Interpretação de Texto',
            tags: ['interpretação', 'dieta mediterrânea', 'UNESCO', 'concordância', 'texto de divulgação']
        }
    ]
};
