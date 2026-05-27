/**
 * ESP DEPORTES — N3 VESTIBULAR BONUS QUESTIONS
 * 15 questões adaptadas de ENEM/FUVEST/UNICAMP (Língua Espanhola)
 * Tópico: Deportes — gramática, vocabulário e interpretação de texto
 * Foco: R/RR intervocálico, apócope, verbos irregulares 3ª conj., Olimpíadas, numerais
 */

window.ESP_DEP_N3_BONUS = {
    id:         'esp_dep_n3_bonus',
    title:      'N3 — Calibragem Vestibular: Deportes',
    icon:       '🎯',
    difficulty: 'hard',
    isBonus:    true,
    level:      'n3',
    learningObjectives: [
        'Distinguir o uso de R e RR em posição intervocálica',
        'Aplicar a apócope de adjetivos (buen, gran, primer etc.) corretamente',
        'Conjugar verbos irregulares de 3ª conjugação no presente e pretérito',
        'Interpretar textos sobre esportes e Olimpíadas em nível vestibular',
        'Empregar numerais ordinais e cardinais em contextos esportivos'
    ],
    summary: { content: [], flashcards: [], mnemonics: [] },
    questions: [
        {
            question: '(ENEM adaptado) Assinale a alternativa com uso CORRETO de R e RR em espanhol:',
            options: [
                { text: 'El portero paró el balón con una reacción rápida', correct: true },
                { text: 'El portero paró el balón con una reacción rrapida', correct: false },
                { text: 'El portero parró el balón con una reacción rápida', correct: false },
                { text: 'El portero paró el balón con una reación rápida', correct: false }
            ],
            explanation: 'Regras: (1) RR só ocorre entre vogais: pa-RR-ar estaria errado — "parar" (só uma viagem, não entre vogais da mesma forma). (2) R no início de palavra já representa o som forte: "reacción rápida" → R inicial = som forte, escreve-se R simples. (3) RR intervocálico representa som forte: "portero" → entre vogais, som fraco, escreve-se R simples (por-te-ro). A forma correta é a opção A.',
            topic: 'R / RR',
            tags: ['r duplo', 'ortografia', 'portero', 'fonologia']
        },
        {
            question: '(FUVEST adaptado) Qual par de palavras demonstra corretamente a distinção fonológica entre R e RR em posição intervocálica?',
            options: [
                { text: 'pero (mas) / perro (cachorro)', correct: true },
                { text: 'pero (mas) / pero (mas) — mesma palavra', correct: false },
                { text: 'caro (caro) / carros (plural de carro)', correct: false },
                { text: 'para (para) / parra (videira) — mas é a mesma regra', correct: false }
            ],
            explanation: '"Pero" [r fraco] = conjunção adversativa (mas). "Perro" [rr forte] = cachorro. O par pero/perro é o exemplo clássico do contraste fonológico R vs. RR em espanhol: ambos com R intervocálico, mas pronuncia e grafia diferentes que mudam o significado. Da mesma forma: caro (caro)/carro (veículo), moro (mouro)/morro (morro).',
            topic: 'R / RR',
            tags: ['pero', 'perro', 'par mínimo', 'fonologia', 'R intervocálico']
        },
        {
            question: '(ENEM 2020 adaptado) "Fue un ___ partido de fútbol; el ___ tiempo fue emocionante." A apócope correta para completar as lacunas é:',
            options: [
                { text: 'gran / segundo', correct: true },
                { text: 'grande / segundo', correct: false },
                { text: 'gran / segund', correct: false },
                { text: 'grande / segund', correct: false }
            ],
            explanation: 'GRANDE apocopado → GRAN antes de substantivo masculino ou feminino singular: un gran partido, una gran jugada. "Grande" só antes de plural ou após o substantivo. SEGUNDO não sofre apócope — apenas: buen(o), mal(o), primer(o), tercer(o), algún(o), ningún(o), gran(de), san(to). Ordinais como segundo, cuarto etc. não apocopam.',
            topic: 'Apócope',
            tags: ['gran', 'grande', 'apócope', 'adjetivos', 'masculino']
        },
        {
            question: '(VESTIBULAR adaptado) "Lionel Messi fue el ___ jugador en ganar ocho Balones de Oro en la historia del fútbol." A forma correta do numeral ordinal é:',
            options: [
                { text: 'primer', correct: true },
                { text: 'primero', correct: false },
                { text: 'prime', correct: false },
                { text: 'uno', correct: false }
            ],
            explanation: 'PRIMERO apocopado → PRIMER antes de substantivo masculino singular: el primer jugador, el primer gol. Mantém "primero" após o substantivo (el jugador primero, uso menos comum) ou antes de substantivo feminino com apócope opcional. "Tercer" segue a mesma regra: el tercer tiempo.',
            topic: 'Apócope',
            tags: ['primer', 'primero', 'apócope', 'ordinais', 'Messi']
        },
        {
            question: '(ENEM adaptado) No contexto: "Los atletas ___ (seguir) entrenando a pesar del calor intenso", a conjugação correta do verbo SEGUIR (3ª conjugação, E→I) é:',
            options: [
                { text: 'siguen', correct: true },
                { text: 'seguен', correct: false },
                { text: 'sigen', correct: false },
                { text: 'siguien', correct: false }
            ],
            explanation: 'SEGUIR é irregular da 3ª conjugação com mudança vocálica E→I: yo sigo, tú sigues, él sigue, nosotros seguimos, vosotros seguís, ellos siguen. Atenção: a mudança E→I ocorre em todas as pessoas exceto nosotros/vosotros. "Siguien" não existe. A forma correta para "ellos" é "siguen".',
            topic: 'Verbos Irregulares 3ª Conj.',
            tags: ['seguir', 'e-i', 'terceira conjugação', 'presente indicativo']
        },
        {
            question: '(FUVEST adaptado) Assinale a conjugação correta do verbo PEDIR (3ª conj., E→I) no presente do indicativo:',
            options: [
                { text: 'yo pido, tú pides, él pide, nosotros pedimos, ellos piden', correct: true },
                { text: 'yo pedo, tú pedes, él pede, nosotros pedemos, ellos peden', correct: false },
                { text: 'yo pido, tú pides, él pide, nosotros pidemos, ellos piden', correct: false },
                { text: 'yo pido, tú pidес, él pide, nosotros pedimos, ellos peden', correct: false }
            ],
            explanation: 'PEDIR: mudança E→I em todas as pessoas exceto nosotros (pedimos) e vosotros (pedís). A 1ª pessoa do plural mantém E porque a tônica cai no -imos (pedimos), não no radical. Outros verbos do mesmo padrão: servir, repetir, competir, medir.',
            topic: 'Verbos Irregulares 3ª Conj.',
            tags: ['pedir', 'e-i', 'nosotros', 'exceção', 'padrão E-I']
        },
        {
            question: '(UNICAMP adaptado) Leia: "En los Juegos Olímpicos de Río 2016, Brasil ganó ___ medallas de oro en atletismo." O numeral adequado, escrito por extenso, para o número 2 (dois) em espanhol é:',
            options: [
                { text: 'dos', correct: true },
                { text: 'deux', correct: false },
                { text: 'dous', correct: false },
                { text: 'doce', correct: false }
            ],
            explanation: '"Dos" = 2 em espanhol. Atenção aos falsos cognatos numéricos: "doce" em espanhol = 12 (doze em português). A série: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce. "Deux" é francês; "dous" é galego/português antigo.',
            topic: 'Numerais',
            tags: ['dos', 'numerais', 'falso cognato', 'doce', 'olimpíadas']
        },
        {
            question: '(ENEM 2021 adaptado) Em espanhol, os ordinais de 11 a 20 são pouco usados no cotidiano. Qual alternativa apresenta o ordinal correto para "décimo terceiro"?',
            options: [
                { text: 'decimotercero', correct: true },
                { text: 'decimo tercero', correct: false },
                { text: 'decimo-tercero', correct: false },
                { text: 'tercio décimo', correct: false }
            ],
            explanation: 'Os ordinais compostos em espanhol acima de décimo formam-se por justaposição em uma única palavra: decimoprimero (11º), decimosegundo (12º), decimotercero (13º), etc. Também se aceita a forma "décimo tercero" (duas palavras) em alguns contextos, mas a forma fundida é a preferida pela RAE. A inversão "tercio décimo" é incorreta.',
            topic: 'Numerais',
            tags: ['ordinais', 'decimotercero', 'RAE', 'composição']
        },
        {
            question: '(ENEM adaptado) Leia o fragmento: "El fútbol nació en In_laterra en el siglo XIX y se ex_andió por todo el mundo gracias a los marinos y comerciantes británicos." A sequência correta para as lacunas é:',
            options: [
                { text: 'g / p', correct: true },
                { text: 'j / b', correct: false },
                { text: 'g / b', correct: false },
                { text: 'j / p', correct: false }
            ],
            explanation: '"Inglaterra" → G (no espanhol, GL inicial sem palatização: In-gla-terra). "Expandió" → P: ex-pan-dir → M antes de P exige M, mas aqui é o prefixo EX- + PAND- → ex-pan-dió. Regra de M/N: M antes de B e P. Aqui "expan-" já tem N antes de P implicitamente na raiz latina, mas na ortografia espanhol moderna é ex-pan-dió com P.',
            topic: 'Ortografia R/RR e M/N',
            tags: ['Inglaterra', 'expandió', 'ortografia', 'etimologia']
        },
        {
            question: '(FUVEST adaptado) "El maratonista corrió ___ kilómetros en menos de ___ horas." Qual alternativa completa corretamente com numerais cardinais em espanhol?',
            options: [
                { text: 'cuarenta y dos / dos', correct: true },
                { text: 'quarenta y dos / dos', correct: false },
                { text: 'cuarenta y dos / dues', correct: false },
                { text: 'cuarenta dos / dos', correct: false }
            ],
            explanation: '"Cuarenta" (40) = Q em espanhol, sem W (quarenta é português). A maratona tem 42,195 km → "cuarenta y dos" para 42. Numerais compostos: dezenas + Y + unidade: treinta y uno (31), cuarenta y dos (42), cincuenta y tres (53). "Dues" não existe em espanhol — é catalão. O Y de ligação é obrigatório nos compostos.',
            topic: 'Numerais',
            tags: ['cuarenta', 'numerais compostos', 'maratona', 'y de ligação']
        },
        {
            question: '(ENEM 2023 adaptado) Assinale a alternativa com uso CORRETO da apócope em espanhol:',
            options: [
                { text: 'Es un buen deportista con gran dedicación', correct: true },
                { text: 'Es un bueno deportista con grande dedicación', correct: false },
                { text: 'Es un buen deportista con grande dedicación', correct: false },
                { text: 'Es un bueno deportista con gran dedicación', correct: false }
            ],
            explanation: 'BUENO → BUEN antes de substantivo masculino singular: "un buen deportista". GRANDE → GRAN antes de qualquer substantivo singular (masc. ou fem.): "gran dedicación". As formas plenas "bueno" e "grande" são usadas após o substantivo ou em predicativo: "el deportista es bueno"; "la dedicación es grande".',
            topic: 'Apócope',
            tags: ['buen', 'gran', 'apócope', 'masculino singular', 'antes do substantivo']
        },
        {
            question: '(VESTIBULAR adaptado) O verbo DORMIR é irregular na 3ª conjugação (O→UE / O→U). Qual forma correta para "ellos" no presente do indicativo?',
            options: [
                { text: 'duermen', correct: true },
                { text: 'dormen', correct: false },
                { text: 'duerman', correct: false },
                { text: 'dormien', correct: false }
            ],
            explanation: 'DORMIR: O→UE nas formas tônicas do presente: yo duermo, tú duermes, él duerme, nosotros dormimos, vosotros dormís, ellos duermen. A mudança O→U ocorre no gerúndio e pretérito: durmiendo, durmió. "Duerman" é o subjuntivo presente. Verbos similares: morir (muero/mueren), dormir (duermo/duermen).',
            topic: 'Verbos Irregulares 3ª Conj.',
            tags: ['dormir', 'o-ue', 'duermen', 'ellos', 'irregular']
        },
        {
            question: '(ENEM adaptado) "La ___ jugadora de tenis ganó el ___ set sin perder ningún game." Assinale a sequência de ordinais corretos em espanhol para 1ª e 3º:',
            options: [
                { text: 'primera / tercer', correct: true },
                { text: 'primer / tercer', correct: false },
                { text: 'primera / tercero', correct: false },
                { text: 'primer / tercero', correct: false }
            ],
            explanation: 'PRIMERO apocopado: PRIMER antes de masc. sing. ("el primer set"), mas PRIMERA antes de fem. sing. ("la primera jugadora") — a apócope do feminino não ocorre. TERCERO apocopado: TERCER só antes de masc. sing. ("el tercer set"). Para fem.: "la tercera jugadora". Na frase: "jugadora" (fem.) → primera; "set" (masc.) → tercer.',
            topic: 'Apócope',
            tags: ['primera', 'tercer', 'gênero', 'apócope feminino', 'ordinais']
        },
        {
            question: '(UNICAMP adaptado) Leia: "El baloncesto fue introducido en los Juegos Olímpicos de manera permanente en 1936, en Berlín. Desde entonces, los Estados Unidos acumularon ___ medallas de oro." Qual numeral cardinal em espanhol representa 16?',
            options: [
                { text: 'dieciséis', correct: true },
                { text: 'diez y seis', correct: false },
                { text: 'dieceseis', correct: false },
                { text: 'diez seis', correct: false }
            ],
            explanation: 'Os numerais 16-19 em espanhol são formas fundidas (uma palavra): dieciséis (16), diecisiete (17), dieciocho (18), diecinueve (19). A forma "diez y seis" (duas palavras) é arcaica e não recomendada pela RAE. "Dieceseis" (sem acento) está errado — o acento em "séis" é necessário para indicar a tônica. Os numerais 21-29: veintiuno, veintidós etc. (também fundidos).',
            topic: 'Numerais',
            tags: ['dieciséis', 'numerais', 'RAE', 'ortografia', 'fusão']
        },
        {
            question: '(ENEM 2022 adaptado) Analise o texto: "El deporte es mucho más que competencia: es una herramienta de integración social, salud pública y diplomacia cultural. Grandes eventos como los Juegos Olímpicos unen naciones." Qual afirmação sobre o texto está CORRETA?',
            options: [
                { text: '"mucho más" está correto: MUCHO antes de advérbio de intensidade MÁS (comparativo); o texto tem função argumentativa', correct: true },
                { text: '"mucho más" está incorreto — deveria ser "muy más" pois MUY antecede advérbios', correct: false },
                { text: 'O texto tem função narrativa pois relata fatos históricos das Olimpíadas', correct: false },
                { text: '"Grandes" é apócope de "grandísimos" antes de "eventos"', correct: false }
            ],
            explanation: '"Mucho más" está correto: quando MUCHO antecede o comparativo MÁS (advérbio), usa-se MUCHO (invariável como advérbio de intensidade): mucho más, mucho mejor, mucho peor. NÃO se diz "muy más". O texto é argumentativo: apresenta tese ("deporte es más que competencia") + argumentos + exemplos. "Grandes" é a forma plena de GRANDE no plural (plural não apocopado).',
            topic: 'MUY / MUCHO + Interpretação',
            tags: ['mucho más', 'comparativo', 'texto argumentativo', 'grandes', 'plurais']
        }
    ]
};
