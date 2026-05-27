/**
 * GEO CAP7 — N3 VESTIBULAR BONUS QUESTIONS
 * 15 questões adaptadas de ENEM/FUVEST/UNICAMP
 * Tópico: Urbanização, Redes Urbanas, Segregação, Xenofobia, Projeções
 * BNCC: EF07GE06, EF07GE07
 */

window.GEO_CAP7_N3_BONUS = {
    id:         'geo_cap7_n3_bonus',
    title:      'N3 — Calibragem Vestibular: Urbanização',
    icon:       '🎯',
    difficulty: 'hard',
    isBonus:    true,
    level:      'n3',
    learningObjectives: [
        'Analisar o processo de urbanização brasileiro em perspectiva vestibular',
        'Interpretar redes urbanas e hierarquia de cidades',
        'Relacionar segregação socioespacial com políticas públicas',
        'Avaliar xenofobia, migração internacional e direitos humanos'
    ],
    summary: { content: [], flashcards: [], mnemonics: [] },
    questions: [
        {
            question: '(ENEM 2021 adaptado) O Brasil passou de 36% de população urbana em 1950 para 87% em 2022. Esse processo acelerado de urbanização gerou como principal problema estrutural:',
            options: [
                { text: 'Excesso de infraestrutura nas cidades que supera a demanda da população migrante', correct: false },
                { text: 'Urbanização precária com formação de periferias, favelas e déficit habitacional por falta de planejamento', correct: true },
                { text: 'Desertificação do campo por abandono total da atividade agropecuária', correct: false },
                { text: 'Queda permanente do PIB industrial por concentração excessiva de trabalhadores nas cidades', correct: false }
            ],
            explanation: 'A urbanização brasileira foi rápida e desplanejada: as cidades não tinham infraestrutura para absorver milhões de migrantes. Resultado: periferias precárias, favelas, déficit de moradia, transporte coletivo insuficiente — o lado escuro do "milagre econômico".',
            topic: 'Urbanização e Periferização',
            tags: ['urbanização', 'periferia', 'favela', 'planejamento urbano']
        },
        {
            question: '(FUVEST 2022 adaptado) A metropolização é um processo mais avançado que a urbanização simples. Uma região metropolitana se caracteriza por:',
            options: [
                { text: 'Conjunto de municípios independentes que compõem estados federativos sem relação funcional entre si', correct: false },
                { text: 'Núcleo urbano principal (metrópole) integrado funcionalmente a municípios vizinhos com fluxos de pessoas, bens e serviços', correct: true },
                { text: 'Município isolado que ultrapassa 1 milhão de habitantes independente de relações com outros municípios', correct: false },
                { text: 'Área urbana contínua sem fronteiras administrativas entre bairros de diferentes cidades', correct: false }
            ],
            explanation: 'Região Metropolitana = metrópole + cidades-satélites integradas. O que as une não é a continuidade física, mas os fluxos funcionais: pessoas que moram em um município e trabalham em outro, serviços compartilhados, infraestrutura regional. Ex.: RMSP tem 39 municípios.',
            topic: 'Metropolização',
            tags: ['metropolização', 'região metropolitana', 'fluxos urbanos']
        },
        {
            question: '(ENEM 2019 adaptado) A teoria da "desmetropolização" ou "contraurbanização" observada em alguns países desenvolvidos descreve:',
            options: [
                { text: 'Abandono total das cidades e retorno em massa à vida rural por movimentos ecológicos', correct: false },
                { text: 'Migração de populações e empresas para cidades médias e pequenas, valorizando qualidade de vida e custo menor', correct: true },
                { text: 'Destruição planejada de edifícios antigos para renovação dos centros urbanos das metrópoles', correct: false },
                { text: 'Fusão de metrópoles vizinhas em uma única megacidade por expansão contínua dos limites', correct: false }
            ],
            explanation: 'Em países com metrópoles maduras, observa-se migração para cidades médias: menor custo de vida, menos congestionamento, home office post-pandemia viabilizou isso. No Brasil, esse processo é incipiente — ainda há forte atração das metrópoles, mas começa a aparecer em cidades médias do interior paulista.',
            topic: 'Desmetropolização',
            tags: ['desmetropolização', 'cidades médias', 'migração urbana']
        },
        {
            question: '(FUVEST 2023 adaptado) A "gentrificação" é um processo urbano que afeta especialmente bairros centrais degradados. Esse fenômeno consiste em:',
            options: [
                { text: 'Revitalização de áreas históricas com manutenção da população original e incremento do patrimônio cultural', correct: false },
                { text: 'Valorização imobiliária de bairros populares que expulsa os moradores de baixa renda originais e os substitui por grupos de maior poder aquisitivo', correct: true },
                { text: 'Construção de novos bairros populares na periferia para acomodar populações removidas do centro', correct: false },
                { text: 'Processo de degradação urbana causado por abandono governamental e envelhecimento dos imóveis', correct: false }
            ],
            explanation: 'Gentrificação: bairro popular → artistas/boêmios chegam (aluguel barato) → área valoriza → especulação imobiliária → população original não consegue pagar e é expulsa → classe média/alta ocupa → ciclo de exclusão espacial. Exemplos: Vila Madalena (SP), Lapa (RJ).',
            topic: 'Gentrificação',
            tags: ['gentrificação', 'segregação', 'especulação imobiliária', 'expulsão']
        },
        {
            question: '(UNICAMP 2022 adaptado) O Estatuto da Cidade (Lei 10.257/2001) estabelece o IPTU progressivo no tempo como instrumento de combate à especulação imobiliária. Esse mecanismo funciona ao:',
            options: [
                { text: 'Cobrar o mesmo valor de IPTU independente do uso que o proprietário faz do imóvel', correct: false },
                { text: 'Aumentar progressivamente o IPTU de imóveis não utilizados ou subutilizados, forçando o proprietário a cumprir a função social da propriedade', correct: true },
                { text: 'Reduzir o IPTU de grandes terrenos vagos para estimular a manutenção de áreas verdes urbanas', correct: false },
                { text: 'Cobrar IPTU apenas de imóveis residenciais, isentando completamente os terrenos baldios', correct: false }
            ],
            explanation: 'IPTU progressivo: deixou terreno vago especulando? O imposto aumenta a cada ano. O objetivo é forçar o cumprimento da "função social da propriedade" (Art. 182 da CF). Obriga o dono a construir/usar ou vender. É um instrumento de reforma urbana que ainda tem baixa aplicação prática no Brasil.',
            topic: 'Função Social da Propriedade',
            tags: ['IPTU progressivo', 'Estatuto da Cidade', 'especulação imobiliária', 'função social']
        },
        {
            question: '(ENEM 2020 adaptado) A segregação socioespacial nas cidades brasileiras é intensificada pela "mobilidade diferenciada". Esse conceito indica que:',
            options: [
                { text: 'Pessoas ricas e pobres usam modais de transporte distintos, mas com tempos de deslocamento semelhantes', correct: false },
                { text: 'A localização periférica dos pobres, combinada com transporte público deficiente, aumenta o tempo de deslocamento e limita acesso ao trabalho, saúde e educação', correct: true },
                { text: 'A mobilidade social ascendente garante que trabalhadores pobres possam se mudar facilmente para regiões centrais', correct: false },
                { text: 'O sistema de ciclovias e calçadas favorece exclusivamente a população de alta renda nas zonas sul das cidades', correct: false }
            ],
            explanation: 'Pobres moram na periferia (custo menor) → ficam longe do trabalho/serviços → transporte público ruim → 2-3h de deslocamento diário → menos tempo para família, estudo, lazer → ciclo de reprodução da pobreza. A "cidade dos ricos" e a "cidade dos pobres" são geografias muito diferentes.',
            topic: 'Segregação e Mobilidade',
            tags: ['segregação socioespacial', 'mobilidade urbana', 'transporte público', 'periferia']
        },
        {
            question: '(FUVEST 2021 adaptado) As "cidades dormitório" são municipios que integram regiões metropolitanas com característica específica de:',
            options: [
                { text: 'Cidades planejadas do zero para abrigar populações de outros municípios com infraestrutura completa', correct: false },
                { text: 'Municípios que funcionam como locais de residência para trabalhadores que exercem suas atividades em outros municípios da mesma região', correct: true },
                { text: 'Centros de turismo noturno que só recebem visitantes após o anoitecer nas áreas metropolitanas', correct: false },
                { text: 'Bairros de elite com alto padrão de segurança onde os moradores vivem isolados dos problemas urbanos', correct: false }
            ],
            explanation: 'Cidade dormitório: as pessoas "só dormem" ali. Acordam, vão trabalhar na metrópole, voltam à noite. Característica: poucos empregos locais, muita saída pendular, alta dependência da metrópole para serviços. Problema: arrecadação fiscal baixa, pois os gastos são feitos fora.',
            topic: 'Cidades Dormitório',
            tags: ['cidades dormitório', 'migração pendular', 'região metropolitana', 'trabalho']
        },
        {
            question: '(ENEM 2022 adaptado) A xenofobia contra migrantes internacionais no Brasil (haitianos, venezuelanos, sírios) e contra migrantes internos (nordestinos em São Paulo) resulta de:',
            options: [
                { text: 'Diferenças biológicas comprovadas que tornam as culturas incompatíveis entre si', correct: false },
                { text: 'Processos históricos de construção de preconceito, disputas por trabalho em contexto de desigualdade e desconhecimento cultural', correct: true },
                { text: 'Legislação federal que restringe direitos de migrantes e estimula sua segregação em guetos urbanos', correct: false },
                { text: 'Incapacidade natural de integração cultural entre grupos de diferentes regiões ou países', correct: false }
            ],
            explanation: 'Xenofobia é construída historicamente, não é natural. Migrantes (internos ou externos) competem por empregos em contextos de desigualdade → tensão → preconceito. O nordestino "rouba emprego" em São Paulo, o venezuelano "rouba emprego" em Roraima. São narrativas falsas amplificadas por ignorância e medo.',
            topic: 'Xenofobia e Migração',
            tags: ['xenofobia', 'migração', 'preconceito', 'direitos humanos']
        },
        {
            question: '(UNICAMP 2021 adaptado) A Lei de Migração brasileira (Lei 13.445/2017) representa avanço em relação ao antigo Estatuto do Estrangeiro porque:',
            options: [
                { text: 'Reforça a soberania nacional ao aumentar as restrições à entrada de estrangeiros por motivos de segurança', correct: false },
                { text: 'Substitui a lógica securitária por uma perspectiva de direitos humanos, garantindo aos migrantes acesso a serviços e igualdade de tratamento', correct: true },
                { text: 'Cria um sistema de pontos similar ao canadense que seleciona apenas migrantes altamente qualificados', correct: false },
                { text: 'Estabelece cotas raciais para distribuição de imigrantes entre os estados brasileiros', correct: false }
            ],
            explanation: 'O antigo Estatuto do Estrangeiro (1980, ditadura militar) via o migrante como ameaça à segurança nacional. A Lei de Migração de 2017 inverte essa lógica: migrante tem direitos, acesso ao SUS, à educação, pode ter documentos legalizados. É muito mais alinhada aos tratados internacionais de direitos humanos.',
            topic: 'Lei de Migração',
            tags: ['Lei de Migração', 'direitos dos migrantes', 'xenofobia', 'políticas públicas']
        },
        {
            question: '(ENEM 2021 adaptado) As projeções do IBGE indicam que a população brasileira atingirá seu pico por volta de 2047 e começará a declinar. Para o planejamento urbano, esse cenário exige:',
            options: [
                { text: 'Expansão contínua das cidades com novos bairros para acomodar o crescimento populacional persistente', correct: false },
                { text: 'Planejamento para cidades com populações estagnadas ou em queda, priorizando qualidade e serviços em vez de expansão física', correct: true },
                { text: 'Abandono imediato de regiões periféricas pois a retração demográfica tornará os imóveis sem valor', correct: false },
                { text: 'Importação massiva de imigrantes para manter o crescimento das cidades indefinidamente', correct: false }
            ],
            explanation: 'Com população estagnando/declinando, as cidades não precisarão crescer em área. O desafio passa a ser: manter infraestrutura existente, adaptar para idosos, reconverter imóveis vazios, melhorar qualidade do que já existe. É o modelo europeu, onde muitas cidades têm mais espaço do que população.',
            topic: 'Projeções Populacionais e Planejamento Urbano',
            tags: ['projeções populacionais', 'planejamento urbano', 'envelhecimento', 'futuro']
        },
        {
            question: '(FUVEST 2022 adaptado) A hierarquia urbana brasileira, conforme o IBGE, classifica as cidades em metrópoles globais, nacionais, regionais, centros sub-regionais e locais. São Paulo se destaca nessa hierarquia porque:',
            options: [
                { text: 'É a capital federal e sede dos três poderes do governo nacional', correct: false },
                { text: 'Concentra a maior parte do PIB industrial e de serviços do país, com influência que extrapola as fronteiras nacionais', correct: true },
                { text: 'É a cidade mais populosa em termos absolutos, sendo que população define automaticamente o nível hierárquico', correct: false },
                { text: 'Possui o maior território municipal do Brasil, com dimensões equivalentes a estados menores', correct: false }
            ],
            explanation: 'São Paulo é metrópole global não apenas pela população (12 milhões), mas pela função: sede de multinacionais, bolsa de valores, consulados, feiras internacionais, maior aeroporto da América do Sul. Hierarquia urbana se define por funções e alcance de influência, não só por tamanho.',
            topic: 'Hierarquia Urbana',
            tags: ['hierarquia urbana', 'metrópole global', 'São Paulo', 'rede urbana']
        },
        {
            question: '(ENEM adaptado) O fenômeno da "macrocefalia urbana" ocorre quando uma ou poucas cidades concentram excessivamente a população e funções econômicas do país ou região. No Brasil, essa situação é atenuada em relação a outros países latinoamericanos porque:',
            options: [
                { text: 'O Brasil proibiu constitucionalmente que qualquer cidade ultrapassasse 5 milhões de habitantes', correct: false },
                { text: 'O Brasil tem rede urbana mais polinucleada, com São Paulo, Rio, Brasília, Belo Horizonte e Recife exercendo funções regionais complementares', correct: true },
                { text: 'O Estado brasileiro aplicou políticas de desindustrialização forçada de São Paulo para redistribuir empresas', correct: false },
                { text: 'A Amazônia absorve automaticamente o excesso demográfico das metrópoles por sua capacidade receptiva natural', correct: false }
            ],
            explanation: 'Macrocefalia extrema: Buenos Aires tem 40% da pop. argentina, Lima tem 30% da peruana. No Brasil, São Paulo é dominante mas outros centros regionais (Recife no NE, Porto Alegre no Sul, Manaus no Norte, Brasília no Centro) exercem funções complementares. A rede urbana brasileira é mais equilibrada, embora ainda concentrada no Sudeste.',
            topic: 'Macrocefalia e Rede Urbana',
            tags: ['macrocefalia', 'rede urbana', 'policentralidade', 'hierarquia']
        },
        {
            question: '(UNICAMP 2023 adaptado) A "rurbanização" descreve um processo contemporâneo que consiste em:',
            options: [
                { text: 'Retorno em massa de populações urbanas para a zona rural motivado por desemprego nas metrópoles', correct: false },
                { text: 'Difusão de valores, hábitos e infraestrutura urbanos para o campo, simultaneamente à chegada de atividades rurais nas franjas das cidades', correct: true },
                { text: 'Transformação de municípios rurais em urbanos por decreto governamental para obter mais repasses federais', correct: false },
                { text: 'Processo de degradação ambiental que converte áreas urbanas em zonas de produção agrícola', correct: false }
            ],
            explanation: 'Rurbanização: o campo ganha internet, supermercados, escolas, e os moradores rurais adotam comportamentos urbanos. Simultaneamente, as franjas das cidades ganham hortas, criação de animais, condomínios rurais. As fronteiras entre rural e urbano se tornam difusas — é o "continuum rural-urbano".',
            topic: 'Rurbanização',
            tags: ['rurbanização', 'rural-urbano', 'continuum', 'modernização do campo']
        },
        {
            question: '(ENEM 2022 adaptado) Os condomínios fechados e shopping centers nas periferias das grandes cidades brasileiras são exemplos de segregação socioespacial porque:',
            options: [
                { text: 'Estão localizados em zonas centrais e expulsam os pobres que habitavam essas áreas valorizadas', correct: false },
                { text: 'Criam enclaves de consumo e moradia para grupos de alta renda, aprofundando a separação espacial entre classes sociais e enfraquecendo o espaço público', correct: true },
                { text: 'São construídos pelo governo para forçar a mistura de classes sociais em um mesmo espaço controlado', correct: false },
                { text: 'Concentram apenas trabalhadores de baixa renda que não podem pagar aluguel no centro da cidade', correct: false }
            ],
            explanation: 'Condomínios fechados = "cidade particular" com segurança privada, lazer privado, serviços privados. Os ricos criam bolhas que se desconectam do espaço público comum (praças, ruas, parques). Isso enfraquece a cidadania e aprofunda a fragmentação social. Shoppings periféricos idem: comércio sem contato com o espaço público.',
            topic: 'Segregação e Condomínios Fechados',
            tags: ['condomínios fechados', 'segregação socioespacial', 'espaço público', 'fragmentação urbana']
        },
        {
            question: '(FUVEST 2023 adaptado) Segundo as projeções da ONU, em 2050, 68% da população mundial viverá em áreas urbanas. Para as cidades brasileiras, esse cenário apresenta como maior desafio:',
            options: [
                { text: 'Expansão das fronteiras agrícolas para abastecer uma população cada vez mais urbana e distante da produção de alimentos', correct: false },
                { text: 'Conciliar crescimento urbano com sustentabilidade ambiental, redução das desigualdades e adaptação às mudanças climáticas', correct: true },
                { text: 'Criação de novas capitais nacionais para distribuir melhor as funções políticas e administrativas entre o litoral e o interior', correct: false },
                { text: 'Proibição de novas construções nas metrópoles para forçar a desconcentração para cidades menores', correct: false }
            ],
            explanation: 'Mais urbanização = mais pressão sobre saneamento, transporte, moradia, energia, lixo. Com o adicional das mudanças climáticas (enchentes, ilhas de calor, secas urbanas) e das desigualdades históricas brasileiras, o desafio é fazer cidades mais sustentáveis, inclusivas e resilientes. Agenda 2030 da ONU trata disso no ODS 11.',
            topic: 'Futuro das Cidades e ODS',
            tags: ['projeções', 'sustentabilidade urbana', 'ODS', 'mudanças climáticas', 'futuro']
        }
    ]
};

window.GEO_CAP7_N3_BONUS.questions = window.GEO_CAP7_N3_BONUS.questions.map(q => ({
    ...q,
    options:      q.options.map(o => o.text || String(o)),
    correctIndex: q.options.findIndex(o => o.correct === true)
}));
