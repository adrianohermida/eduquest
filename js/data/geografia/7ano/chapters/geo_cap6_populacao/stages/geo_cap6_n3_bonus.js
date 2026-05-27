/**
 * GEO CAP6 — N3 VESTIBULAR BONUS QUESTIONS
 * 15 questões adaptadas de ENEM/FUVEST/UNICAMP
 * Tópico: População Brasileira — Distribuição, Crescimento, Estrutura e Migrações
 * BNCC: EF07GE01, EF07GE02, EF07GE04
 */

window.GEO_CAP6_N3_BONUS = {
    id:         'geo_cap6_n3_bonus',
    title:      'N3 — Calibragem Vestibular: População',
    icon:       '🎯',
    difficulty: 'hard',
    isBonus:    true,
    level:      'n3',
    learningObjectives: [
        'Analisar dados populacionais em contexto vestibular',
        'Interpretar pirâmides etárias e transição demográfica',
        'Relacionar migração interna com fatores históricos e econômicos',
        'Avaliar impactos do envelhecimento populacional nas políticas públicas'
    ],
    summary: { content: [], flashcards: [], mnemonics: [] },
    questions: [
        {
            question: '(ENEM adaptado) O Brasil apresentou queda na taxa de fecundidade de 6,2 filhos por mulher em 1960 para 1,7 em 2022. Esse processo está diretamente relacionado a:',
            options: [
                { text: 'Aumento da mortalidade infantil e piora das condições sanitárias nas décadas recentes', correct: false },
                { text: 'Urbanização, acesso à educação feminina, inserção da mulher no mercado de trabalho e planejamento familiar', correct: true },
                { text: 'Crescimento da população rural e fortalecimento da agricultura familiar extensiva', correct: false },
                { text: 'Política de controle natalista obrigatória implementada pelo governo federal', correct: false }
            ],
            explanation: 'A queda da fecundidade é multifatorial: urbanização (filhos "custam mais" na cidade), educação feminina, trabalho da mulher (filho = custo de oportunidade), acesso a métodos contraceptivos. O Brasil nunca teve política natalista obrigatória.',
            topic: 'Transição Demográfica',
            tags: ['fecundidade', 'urbanização', 'mulher']
        },
        {
            question: '(FUVEST adaptado) A pirâmide etária brasileira passou de base larga e ápice estreito para formato retangularizado. Essa mudança indica:',
            options: [
                { text: 'Crescimento acelerado da população jovem e aumento da taxa de natalidade', correct: false },
                { text: 'Redução da natalidade e aumento da expectativa de vida, caracterizando envelhecimento da população', correct: true },
                { text: 'Aumento da mortalidade adulta por doenças crônicas sem contrapartida no envelhecimento', correct: false },
                { text: 'Imigração de população idosa estrangeira compensando a queda de nascimentos', correct: false }
            ],
            explanation: 'Pirâmide com base estreitando e topo alargando = menos crianças nascendo + mais idosos vivendo. É o envelhecimento populacional, tendência que vai pressionar previdência e saúde pública.',
            topic: 'Pirâmide Etária',
            tags: ['pirâmide etária', 'envelhecimento', 'transição']
        },
        {
            question: '(UNICAMP adaptado) A densidade demográfica do Brasil é de aproximadamente 25 hab/km², mas estados amazônicos têm menos de 3 hab/km² enquanto São Paulo passa de 170 hab/km². Esse contraste se explica por:',
            options: [
                { text: 'Diferenças climáticas exclusivamente, já que o calor amazônico impede a ocupação humana', correct: false },
                { text: 'Distribuição histórica desigual vinculada a ciclos econômicos, industrialização e infraestrutura', correct: true },
                { text: 'Políticas migratórias que concentraram imigrantes europeus apenas no litoral sudeste', correct: false },
                { text: 'Barreiras físicas intransponíveis que isolaram completamente a região Norte', correct: false }
            ],
            explanation: 'A distribuição populacional segue a história econômica: ciclo do café (SP), borracha (AM temporário), industrialização (Sudeste), Brasília (Centro-Oeste). A Amazônia tem baixa densidade por ser de ocupação recente e ter grande área.',
            topic: 'Distribuição Populacional',
            tags: ['densidade demográfica', 'distribuição', 'história econômica']
        },
        {
            question: '(ENEM 2019 adaptado) Entre 1960 e 1980, o Brasil registrou intenso fluxo migratório do Nordeste para o Sudeste. O principal fator push (expulsão) desse movimento foi:',
            options: [
                { text: 'A atração de políticas de incentivo fiscal oferecidas pelo governo estadual paulista', correct: false },
                { text: 'A seca no Nordeste associada à estrutura fundiária concentrada e falta de industrialização regional', correct: true },
                { text: 'A violência urbana no Nordeste que expulsou a população para cidades mais seguras', correct: false },
                { text: 'A queda dos preços agrícolas internacionais que arruinou os produtores nordestinos', correct: false }
            ],
            explanation: 'Fatores push: seca + latifúndio + desemprego + pobreza no Nordeste. Fatores pull: indústria + empregos + salários maiores no Sudeste. A migração nordestina para São Paulo é o maior fluxo interno da história brasileira.',
            topic: 'Migrações Internas',
            tags: ['migração', 'Nordeste', 'êxodo rural', 'fatores push']
        },
        {
            question: '(FUVEST 2021 adaptado) O crescimento vegetativo (natural) é calculado pela diferença entre taxa de natalidade e taxa de mortalidade. No Brasil atual, esse índice se reduziu porque:',
            options: [
                { text: 'A mortalidade aumentou acima da natalidade, gerando saldo negativo', correct: false },
                { text: 'Tanto a natalidade quanto a mortalidade caíram, mas a natalidade caiu mais rapidamente', correct: true },
                { text: 'A natalidade permaneceu estável enquanto apenas a mortalidade caiu', correct: false },
                { text: 'O país atingiu crescimento zero com natalidade e mortalidade em equilíbrio absoluto', correct: false }
            ],
            explanation: 'No Brasil, a mortalidade caiu com melhoras em saúde, saneamento e medicina. A natalidade também caiu, mas mais rapidamente (urbanização, mulher no mercado, anticoncepcionais). Resultado: crescimento vegetativo menor, mas ainda positivo.',
            topic: 'Crescimento Vegetativo',
            tags: ['crescimento vegetativo', 'natalidade', 'mortalidade']
        },
        {
            question: '(ENEM 2020 adaptado) A "bônus demográfico" ou "janela de oportunidade" refere-se ao período em que a população em idade ativa é proporcionalmente maior que dependentes. Para o Brasil aproveitar esse período, é necessário:',
            options: [
                { text: 'Aumentar urgentemente a taxa de natalidade para garantir mais jovens trabalhadores', correct: false },
                { text: 'Investir em educação, emprego e saúde para que a população ativa seja produtiva e gere poupança', correct: true },
                { text: 'Restringir a imigração para preservar empregos aos brasileiros durante esse período', correct: false },
                { text: 'Reduzir gastos previdenciários, pois com muitos jovens os idosos serão minoria negligenciável', correct: false }
            ],
            explanation: 'O bônus demográfico é uma janela: muitos trabalhadores, poucos dependentes. Para aproveitá-la, precisa-se de educação de qualidade, emprego formal e investimento em saúde. Se não aproveitada, o país entra no envelhecimento sem ter acumulado riqueza.',
            topic: 'Bônus Demográfico',
            tags: ['bônus demográfico', 'população ativa', 'desenvolvimento']
        },
        {
            question: '(UNICAMP 2022 adaptado) O fenômeno da "migração de retorno" ocorre quando migrantes regressam às regiões de origem. No caso nordestino, esse processo intensificou-se por:',
            options: [
                { text: 'Crise econômica no Sudeste associada ao crescimento de políticas de transferência de renda que valorizaram o Nordeste', correct: true },
                { text: 'Piora drástica do clima nordestino que tornou impossível o retorno à agricultura familiar', correct: false },
                { text: 'Proibição governamental de residência permanente em estados do Sudeste para migrantes nordestinos', correct: false },
                { text: 'Melhora exclusiva da infraestrutura viária que tornou o transporte de volta mais barato', correct: false }
            ],
            explanation: 'O retorno nordestino ocorre por crises no Sudeste (desindustrialização, desemprego) + melhoras no Nordeste (Bolsa Família, Copa 2014, obras do PAC, agronegócio no Cerrado nordestino). Não é só saudade — é viabilidade econômica.',
            topic: 'Migração de Retorno',
            tags: ['migração de retorno', 'Nordeste', 'desenvolvimento regional']
        },
        {
            question: '(ENEM 2021 adaptado) O índice de masculinidade indica a proporção de homens para cada 100 mulheres. Em cidades do interior nordestino, esse índice costuma ser inferior a 90. Isso ocorre porque:',
            options: [
                { text: 'A mortalidade masculina na infância é muito maior no semiárido nordestino', correct: false },
                { text: 'Os homens migram mais para regiões industriais em busca de trabalho, deixando mais mulheres na origem', correct: true },
                { text: 'As mulheres nordestinas têm expectativa de vida significativamente menor que as do Sudeste', correct: false },
                { text: 'Programas sociais seletivos atraem exclusivamente mulheres para o interior nordestino', correct: false }
            ],
            explanation: 'A migração é seletiva: jovens adultos do sexo masculino migram mais (buscam trabalho industrial e na construção). Resultado: área de origem fica com mais mulheres, crianças e idosos → índice de masculinidade < 100.',
            topic: 'Estrutura por Sexo',
            tags: ['índice de masculinidade', 'migração seletiva', 'Nordeste']
        },
        {
            question: '(ENEM adaptado) A mortalidade infantil no Brasil caiu de 70 por mil nascidos vivos em 1990 para cerca de 12 em 2022. Qual conjunto de fatores explica melhor essa queda?',
            options: [
                { text: 'Apenas avanços na medicina privada e hospitais de alta complexidade nas capitais', correct: false },
                { text: 'Expansão do saneamento básico, vacinação universal, Programa Saúde da Família e transferência de renda', correct: true },
                { text: 'Redução da natalidade, que fez as famílias investirem mais em cada filho individualmente', correct: false },
                { text: 'Melhoria do clima e fim das secas que causavam desnutrição nas regiões mais vulneráveis', correct: false }
            ],
            explanation: 'A queda da mortalidade infantil tem múltiplas causas: saneamento (água tratada previne diarreias), SUS universal, vacinação em massa, PSF/UBS no interior, Bolsa Família condicionada ao pré-natal. É uma conquista de política pública, não apenas de tecnologia médica.',
            topic: 'Mortalidade Infantil',
            tags: ['mortalidade infantil', 'saúde pública', 'saneamento']
        },
        {
            question: '(FUVEST 2023 adaptado) A estrutura etária de uma população é determinante para o planejamento de políticas públicas. Uma população com pirâmide de base estreita e ápice largo exige:',
            options: [
                { text: 'Expansão de creches, escolas primárias e programas de saúde materno-infantil', correct: false },
                { text: 'Reforma da previdência, ampliação de leitos geriátricos e adaptação urbana para acessibilidade', correct: true },
                { text: 'Programas de incentivo à natalidade e benefícios fiscais para famílias numerosas', correct: false },
                { text: 'Redução dos gastos com educação superior por não haver jovens em número suficiente', correct: false }
            ],
            explanation: 'Pirâmide com base estreita e topo largo = população velha. Isso demanda: aposentadorias, remédios para doenças crônicas, acessibilidade urbana, lares de idosos. A previdência fica pressionada pois há menos jovens contribuindo para sustentar mais idosos.',
            topic: 'Políticas Públicas e Estrutura Etária',
            tags: ['envelhecimento', 'previdência', 'políticas públicas']
        },
        {
            question: '(ENEM 2022 adaptado) A população absoluta do Brasil é a quinta maior do mundo, mas sua densidade demográfica relativa é baixa. O paradoxo entre tamanho absoluto e baixa densidade explica-se por:',
            options: [
                { text: 'O Brasil ter a menor taxa de urbanização entre os países com mais de 100 milhões de habitantes', correct: false },
                { text: 'O Brasil possuir vasto território, sendo o 5º maior do mundo, e ocupação histórica concentrada em certas regiões', correct: true },
                { text: 'A política brasileira de incentivo à desconcentração populacional ter sido altamente eficaz', correct: false },
                { text: 'A Amazônia ser habitada por mais de 100 milhões de pessoas em sistema disperso', correct: false }
            ],
            explanation: 'Brasil tem 215 milhões de pessoas em 8,5 milhões de km². A densidade baixa (≈25 hab/km²) existe porque o território é enorme. Além disso, a ocupação é desigual: 60% da população vive em 12% do território (faixa litorânea e Sudeste).',
            topic: 'Densidade Demográfica',
            tags: ['densidade demográfica', 'território', 'distribuição']
        },
        {
            question: '(UNICAMP adaptado) O conceito de "população economicamente ativa" (PEA) inclui pessoas entre 15 e 64 anos que trabalham ou buscam trabalho. Uma PEA elevada em relação aos dependentes é favorável ao crescimento econômico porque:',
            options: [
                { text: 'Gera menos consumo interno e libera recursos para exportação de manufaturados', correct: false },
                { text: 'Aumenta a produção, arrecadação tributária e poupança, financiando investimentos e a previdência dos idosos', correct: true },
                { text: 'Reduz a necessidade de inovação tecnológica ao substituir máquinas por trabalho humano abundante', correct: false },
                { text: 'Garante que os gastos militares sejam menores por haver jovens disponíveis para o serviço compulsório', correct: false }
            ],
            explanation: 'PEA alta = muitos trabalhando → mais produção, mais impostos, mais poupança → financiamento de infraestrutura, educação e aposentadorias. É a lógica do "bônus demográfico": muitos ativos sustentando poucos dependentes.',
            topic: 'PEA e Bônus Demográfico',
            tags: ['PEA', 'população ativa', 'economia', 'previdência']
        },
        {
            question: '(ENEM 2018 adaptado) No mapa dos fluxos migratórios internos do Brasil, a seta mais espessa parte do Nordeste em direção ao Sudeste, seguida de seta do Norte para o Centro-Oeste. Isso reflete:',
            options: [
                { text: 'Preferência cultural dos nordestinos por climas quentes do Sudeste e dos nortistas por cerrado aberto', correct: false },
                { text: 'Atração de empregos industriais/construção no Sudeste e agronegócio/fronteira agrícola no Centro-Oeste', correct: true },
                { text: 'Programas governamentais que pagam subsídios para nordestinos se instalarem no estado de São Paulo', correct: false },
                { text: 'Conflitos armados no Nordeste que expulsam populações para as regiões de destino', correct: false }
            ],
            explanation: 'Nordeste→Sudeste: buscam empregos industriais e de serviços (São Paulo, Rio). Norte/Nordeste→Centro-Oeste: fronteira agrícola do Cerrado, agronegócio da soja, obras de infraestrutura. Em ambos os casos, fator econômico (emprego/renda) é o motor da migração.',
            topic: 'Fluxos Migratórios',
            tags: ['fluxos migratórios', 'Nordeste', 'Centro-Oeste', 'agronegócio']
        },
        {
            question: '(FUVEST 2022 adaptado) A taxa de fecundidade total abaixo de 2,1 filhos por mulher é chamada de "nível de reposição". O Brasil já está abaixo desse nível em todas as regiões. A principal consequência futura será:',
            options: [
                { text: 'Crescimento acelerado da população por acúmulo de gerações anteriores que vivem mais tempo', correct: false },
                { text: 'Declínio absoluto da população no longo prazo e intensificação do envelhecimento demográfico', correct: true },
                { text: 'Necessidade de proibir imigração para evitar superpopulação nas cidades já congestionadas', correct: false },
                { text: 'Aumento expressivo da mortalidade pois menos jovens significa menos cuidadores para os idosos', correct: false }
            ],
            explanation: 'Abaixo do nível de reposição (2,1 filhos/mulher), cada geração é menor que a anterior → população envelhece e depois decresce. O Brasil deve atingir população máxima por volta de 2040-2050 e depois começar a declinar (como ocorre hoje no Japão e Alemanha).',
            topic: 'Nível de Reposição e Declínio Populacional',
            tags: ['taxa de fecundidade', 'nível de reposição', 'envelhecimento', 'declínio']
        },
        {
            question: '(ENEM adaptado) O "índice de Gini demográfico" mede a concentração da distribuição espacial da população. O Brasil tem alta concentração no Sudeste e litoral. Para reverter essa tendência, seriam necessárias:',
            options: [
                { text: 'Restrições ao estabelecimento de novas empresas em São Paulo e Rio de Janeiro', correct: false },
                { text: 'Políticas de desenvolvimento regional que gerem empregos e infraestrutura nas regiões menos populosas', correct: true },
                { text: 'Transferência compulsória de populações do Sudeste para o Norte e Centro-Oeste por decreto', correct: false },
                { text: 'Construção de metrópoles artificiais no interior da Amazônia, como foi Brasília no Planalto Central', correct: false }
            ],
            explanation: 'Para desconcentrar a população é preciso criar atrativos nas regiões-destino: empregos, serviços, educação, saúde, infraestrutura. Brasília foi um exemplo parcialmente bem-sucedido. Sem desenvolvimento real, as pessoas continuarão migrando para onde há mais oportunidades.',
            topic: 'Concentração Populacional e Políticas Regionais',
            tags: ['distribuição', 'desenvolvimento regional', 'desconcentração', 'políticas']
        }
    ]
};

window.GEO_CAP6_N3_BONUS.questions = window.GEO_CAP6_N3_BONUS.questions.map(q => ({
    ...q,
    options:      q.options.map(o => o.text || String(o)),
    correctIndex: q.options.findIndex(o => o.correct === true)
}));
