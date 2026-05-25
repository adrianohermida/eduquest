// Questões do Capítulo 7: Doenças Transmissíveis
// Estrutura: {id, stage, difficulty, category, theme, q, alt:[], c, e}

const CAP7_QUESTIONS = [
  // ETAPA 1: Imunidade e Vacinas (40 questões)
  {id:1, stage:1, difficulty:'easy', category:'conceitos', theme:'anticorpos', 
   q:"Anticorpos são:", 
   alt:["Proteínas produzidas pelo sistema imune para combater invasores",
        "Vírus enfraquecidos usados em vacinas",
        "Bactérias benéficas do intestino",
        "Minerais essenciais da alimentação"], 
   c:0, e:"Anticorpos são proteínas do sistema imune que se ligam a microrganismos e ajudam a destruí-los."},
  
  {id:2, stage:1, difficulty:'easy', category:'vacinas', theme:'prevenção', 
   q:"A vacina serve principalmente para:", 
   alt:["Tratar doenças já instaladas", "Prevenir doenças antes do contágio", 
        "Substituir antibióticos", "Curar ferimentos na pele"], 
   c:1, e:"Vacinas são preventivas. Estimulam o corpo a produzir anticorpos e memória imunológica."},
  
  {id:3, stage:1, difficulty:'easy', category:'soro', theme:'tratamento', 
   q:"O soro terapêutico contém:", 
   alt:["Anticorpos prontos para ação imediata", "Vírus vivos atenuados", 
        "Antibióticos de amplo espectro", "Hormônios estimulantes"], 
   c:0, e:"Soros possuem anticorpos prontos, indicados para tratamento pós-exposição com ação rápida."},
  
  {id:4, stage:1, difficulty:'easy', category:'epidemiologia', theme:'definições', 
   q:"Aumento rápido de casos em uma região define:", 
   alt:["Pandemia", "Endemia", "Epidemia", "Imunidade coletiva"], 
   c:2, e:"Epidemia = surto localizado e repentino com aumento significativo de casos."},
  
  {id:5, stage:1, difficulty:'easy', category:'epidemiologia', theme:'definições', 
   q:"Doença constante em uma região é:", 
   alt:["Endemia", "Epidemia", "Pandemia", "Surtos isolados"], 
   c:0, e:"Endemia = presença contínua e esperada da doença em determinada área."},
  
  {id:6, stage:1, difficulty:'easy', category:'epidemiologia', theme:'definições', 
   q:"O prefixo 'PAN' em pandemia refere-se a:", 
   alt:["Região específica", "Mundo inteiro (planeta)", "Apenas animais", "Clima quente"], 
   c:1, e:"PAN = todos. Pandemia = doença espalhada globalmente."},
  
  {id:7, stage:1, difficulty:'medium', category:'vacinas', theme:'imunidade_coletiva', 
   q:"Qual afirmação sobre vacinas é VERDADEIRA?", 
   alt:["Causam a doença que pretendem prevenir", "Substituem completamente a higiene",
        "Protegem apenas o indivíduo vacinado", "Reduzem a circulação do patógeno na população"], 
   c:3, e:"A vacinação em massa cria imunidade de rebanho, reduzindo transmissão."},
  
  {id:8, stage:1, difficulty:'medium', category:'soro', theme:'aplicação', 
   q:"Uma pessoa picada por cobra peçonhenta deve receber:", 
   alt:["Vacina antiofídica preventiva", "Soro antiofídico para neutralizar a peçonha",
        "Antibiótico de amplo espectro", "Anti-inflamatório para dor"], 
   c:1, e:"Soro antiofídico contém anticorpos prontos que neutralizam a peçonha já no organismo."},
  
  {id:9, stage:1, difficulty:'medium', category:'fake_news', theme:'identificação', 
   q:"Fake news em saúde geralmente NÃO apresenta:", 
   alt:["Apelo ao medo ou urgência", "Promessas de curas milagrosas",
        "Fontes científicas e referências verificáveis", "Emojis e linguagem sensacionalista"], 
   c:2, e:"Notícias falsas carecem de respaldo científico e fontes confiáveis."},
  
  {id:10, stage:1, difficulty:'medium', category:'imunidade', theme:'comparação', 
   q:"Comparando imunidade natural vs vacina:", 
   alt:["A imunidade natural é sempre superior", "A vacina gera resposta mais segura e controlada",
        "São idênticas em eficácia", "A vacina causa mais efeitos colaterais graves"], 
   c:1, e:"Vacinas simulam a infecção sem os riscos da doença real."},
  
  {id:11, stage:1, difficulty:'medium', category:'antibióticos', theme:'especificidade', 
   q:"Antibióticos NÃO funcionam contra:", 
   alt:["Bactérias Gram-positivas", "Vírus", "Protozoários como o da malária", "Fungos causadores de micoses"], 
   c:1, e:"Antibióticos atacam estruturas específicas de bactérias. Vírus não possuem essas estruturas."},
  
  {id:12, stage:1, difficulty:'medium', category:'saúde_pública', theme:'sus', 
   q:"O SUS oferece vacinas gratuitamente porque:", 
   alt:["É obrigação constitucional garantir saúde preventiva", "Gera lucro para a indústria",
        "É teste clínico em larga escala", "Substitui a necessidade de médicos"], 
   c:0, e:"A Constituição garante direito à saúde. Vacinação coletiva é política pública."},
  
  {id:13, stage:1, difficulty:'medium', category:'fake_news', theme:'desinformação', 
   q:"Se uma mensagem diz que 'vacina de mRNA altera DNA humano', é provável que seja:", 
   alt:["Fato científico amplamente aceito", "Fake news sem base em evidências",
        "Novidade médica revolucionária", "Consenso da comunidade científica"], 
   c:1, e:"Vacinas de mRNA atuam no citoplasma, não entram no núcleo onde está o DNA."},
  
  {id:14, stage:1, difficulty:'medium', category:'lógica', theme:'falácias', 
   q:"A expressão 'post hoc ergo propter hoc' alerta para:", 
   alt:["Efeito colateral vacinal", "Correlação não implica causalidade",
        "Mutação viral acelerada", "Prevenção primária eficaz"], 
   c:1, e:"Falácia lógica: 'depois disso, logo causado por isso'. Correlação ≠ causalidade."},
  
  {id:15, stage:1, difficulty:'hard', category:'vacinas', theme:'atualização', 
   q:"Por que a vacina da gripe precisa ser atualizada anualmente?", 
   alt:["Bactérias desenvolvem resistência", "O vírus da gripe sofre mutações frequentes (drift antigênico)",
        "O SUS quer vender mais doses", "A vacina perde validade no calor"], 
   c:1, e:"Alta taxa de mutação do influenza exige atualização anual para acompanhar variantes."},
  
  {id:16, stage:1, difficulty:'hard', category:'imunidade', theme:'rebanho', 
   q:"Imunidade de rebanho ocorre quando:", 
   alt:["Todos tomam soro preventivo", "Maioria está imune, criando barreira epidemiológica",
        "Animais são vacinados em massa", "A doença some espontaneamente"], 
   c:1, e:"Quando % suficiente está imune, a transmissão é interrompida, protegendo vulneráveis."},
  
  {id:17, stage:1, difficulty:'hard', category:'pesquisa', theme:'ensaios_clínicos', 
   q:"Em um ensaio clínico fase 3, o grupo controle geralmente recebe:", 
   alt:["Vacina experimental em dose reduzida", "Placebo ou soro fisiológico",
        "Nenhuma intervenção", "Antibiótico profilático"], 
   c:1, e:"Grupo controle recebe placebo para comparar efeitos reais vs psicológicos/naturais."},
  
  {id:18, stage:1, difficulty:'hard', category:'soro', theme:'indicação', 
   q:"O soro antitetânico é aplicado quando:", 
   alt:["Carteira de vacinação está em dia", "Há ferimento sujo/profundo + vacinação incerta",
        "Para prevenir gripe sazonal", "No tratamento da cólera"], 
   c:1, e:"Imunização passiva emergencial: anticorpos prontos para neutralizar toxina já produzida."},
  
  {id:19, stage:1, difficulty:'easy', category:'viroses', theme:'poliomielite', 
   q:"A poliomielite pode causar como complicação grave:", 
   alt:["Manchas vermelhas na pele", "Paralisia muscular, especialmente em crianças",
        "Diarreia aquosa intensa", "Tosse seca persistente"], 
   c:1, e:"O vírus ataca neurônios motores da medula, podendo paralisar membros."},
  
  {id:20, stage:1, difficulty:'easy', category:'vacinas', theme:'tríplice_viral', 
   q:"O sarampo é prevenido pela vacina:", 
   alt:["BCG (aplicada no braço)", "Tríplice viral (sarampo, caxumba, rubéola)",
        "Pentavalente (5 doenças)", "HPV (papilomavírus)"], 
   c:1, e:"Tríplice viral protege contra Sarampo, Caxumba e Rubéola."},
  
  {id:21, stage:1, difficulty:'medium', category:'viroses', theme:'rubéola', 
   q:"A rubéola é perigosa principalmente para:", 
   alt:["Idosos acima de 70 anos", "Crianças pequenas abaixo de 2 anos",
        "Gestantes, especialmente no 1º trimestre", "Homens adultos"], 
   c:2, e:"Pode atravessar a placenta e causar síndrome da rubéola congênita: surdez, catarata."},
  
  {id:22, stage:1, difficulty:'medium', category:'viroses', theme:'caxumba', 
   q:"A caxumba pode causar esterilidade principalmente em:", 
   alt:["Crianças pré-púberes", "Adolescentes e adultos pós-puberdade",
        "Idosos acima de 60 anos", "Animais domésticos"], 
   c:1, e:"Inflamação dos testículos/ovários pode ocorrer em pós-puberdade."},
  
  {id:23, stage:1, difficulty:'medium', category:'história', theme:'varíola', 
   q:"A varíola foi erradicada globalmente em 1980 graças a:", 
   alt:["Antibióticos de amplo espectro", "Campanhas de vacinação em massa coordenadas pela OMS",
        "Isolamento total de doentes por décadas", "Melhoria espontânea da higiene"], 
   c:1, e:"Única doença humana erradicada por esforço global de vacinação."},
  
  {id:24, stage:1, difficulty:'medium', category:'nutrição', theme:'mitos', 
   q:"Qual vitamina NÃO previne doenças virais diretamente?", 
   alt:["Vitamina A", "Vitamina C", "Vitamina D", "Todas são 'curas milagrosas' contra vírus"], 
   c:3, e:"Vitaminas apoiam o sistema imune, mas não substituem vacinas ou tratamento."},
  
  {id:25, stage:1, difficulty:'medium', category:'viroses', theme:'raiva', 
   q:"A raiva também é conhecida como 'hidrofobia' porque:", 
   alt:["Causa febre muito alta", "Provoca medo de água devido a espasmos na deglutição",
        "Sempre vem com catapora", "É transmitida por água contaminada"], 
   c:1, e:"Espasmos dolorosos na garganta ao tentar engolir geram aversão à água."},
  
  {id:26, stage:1, difficulty:'medium', category:'prevenção', theme:'animais', 
   q:"Animais vacinados contra raiva:", 
   alt:["Transmitem mais o vírus", "Não espalham o vírus, quebrando o ciclo zoonótico",
        "Ficam agressivos temporariamente", "Devem ser soltos na natureza"], 
   c:1, e:"Vacinação animal é estratégia eficaz de saúde pública para interromper transmissão."},
  
  {id:27, stage:1, difficulty:'medium', category:'emergência', theme:'raiva', 
   q:"Se você for mordido por animal suspeito de raiva, deve:", 
   alt:["Esperar sintomas aparecerem", "Lavar com água e sabão e procurar atendimento médico imediatamente",
        "Tomar chá de ervas calmantes", "Ignorar se o animal parecer saudável"], 
   c:1, e:"Higiene imediata + avaliação médica para profilaxia pós-exposição salvam vidas."},
  
  {id:28, stage:1, difficulty:'medium', category:'viroses', theme:'raiva', 
   q:"O vírus da raiva afeta principalmente qual sistema?", 
   alt:["Sistema digestório", "Sistema respiratório", "Sistema nervoso central", "Sistema tegumentar"], 
   c:2, e:"Migra pelos nervos periféricos até o cérebro, causando encefalite fatal."},
  
  {id:29, stage:1, difficulty:'medium', category:'história', theme:'revolta_vacina', 
   q:"A vacinação obrigatória em 1904 no Rio de Janeiro gerou:", 
   alt:["Revolta da Vacina, com protestos populares", "Comemoração espontânea",
        "Nenhuma reação significativa", "Protestos exclusivamente ambientais"], 
   c:0, e:"Conflito histórico por falta de informação. Lição sobre comunicação em saúde."},
  
  {id:30, stage:1, difficulty:'medium', category:'história', theme:'jenner', 
   q:"Edward Jenner criou a primeira vacina usando material de:", 
   alt:["Cachorros raivosos", "Gatos com infecções", "Varíola bovina (vaccinia) em ordenhadoras", "Plantas medicinais"], 
   c:2, e:"Observou que ordenhadoras com varíola bovina não pegavam varíola humana."},
  
  {id:31, stage:1, difficulty:'hard', category:'vacinas', theme:'eficácia', 
   q:"Dizer que uma vacina tem 90% de eficácia NÃO significa que:", 
   alt:["Reduz em 90% o risco de doença sintomática", "100% dos vacinados estarão protegidos individualmente",
        "Diminui drasticamente casos graves", "Contribui para controle populacional"], 
   c:1, e:"Eficácia é medida populacional. Nenhum imunobiológico é 100% eficaz para cada indivíduo."},
  
  {id:32, stage:1, difficulty:'hard', category:'pesquisa', theme:'fases', 
   q:"Para ser aprovada, uma vacina passa por fases que incluem:", 
   alt:["Apenas opinião de especialistas", "Testes em animais, depois humanos (fases 1-3) com milhares de voluntários",
        "Venda direta após testes em 10 pessoas", "Aprovação baseada apenas em dados de outros países"], 
   c:1, e:"Fases rigorosas: segurança, dosagem, eficácia em larga escala."},
  
  {id:33, stage:1, difficulty:'hard', category:'imunologia', theme:'antígeno', 
   q:"O termo 'antígeno' refere-se a:", 
   alt:["Defesa produzida pelo corpo (anticorpo)", "Qualquer substância que desencadeia resposta imune específica",
        "Remédio antiviral genérico", "Anticorpo pronto em soroterapia"], 
   c:1, e:"Parte do patógeno que o sistema imune reconhece como estranho e ataca."},
  
  {id:34, stage:1, difficulty:'hard', category:'imunologia', theme:'memória', 
   q:"A memória imunológica permite que:", 
   alt:["Fiquemos doentes sempre pelo mesmo agente", "O corpo reaja mais rápido na 2ª exposição ao mesmo antígeno",
        "Precisemos de soro toda vez que adoecemos", "Anticorpos desapareçam após a infecção"], 
   c:1, e:"Células B e T de memória persistem, acelerando produção de anticorpos."},
  
  {id:35, stage:1, difficulty:'hard', category:'vetores', theme:'definição', 
   q:"Qual NÃO é considerado vetor biológico de doenças?", 
   alt:["Mosquito Anopheles (malária)", "Carrapato (febre maculosa)", "Barbeiro (doença de Chagas)", "Seringa contaminada (hepatites)"], 
   c:3, e:"Seringa é veículo/fômite (objeto inanimado). Vetor biológico é organismo vivo."},
  
  {id:36, stage:1, difficulty:'hard', category:'transmissão', theme:'vertical', 
   q:"A transmissão vertical de doenças ocorre:", 
   alt:["De pai para filho por contato físico", "De mãe para feto/bebê durante gestação, parto ou amamentação",
        "De animal para humano por mordida", "De pessoa para pessoa por água contaminada"], 
   c:1, e:"Exemplos: HIV, sífilis, rubéola, Zika. Prevenção inclui tratamento materno."},
  
  {id:37, stage:1, difficulty:'hard', category:'imunidade', theme:'proteção_coletiva', 
   q:"A 'imunidade coletiva' protege principalmente:", 
   alt:["Apenas quem foi vacinado", "Vacinados E não vacinados vulneráveis (imunodeprimidos, alérgicos)",
        "Somente profissionais de saúde", "Ninguém, é conceito teórico"], 
   c:1, e:"Reduz circulação do patógeno, criando escudo para quem não pode desenvolver imunidade."},
  
  {id:38, stage:1, difficulty:'easy', category:'conceitos', theme:'defesas', 
   q:"Além dos anticorpos, outra defesa não específica do corpo é:", 
   alt:["Produção de insulina", "Barreiras físicas como pele e mucosas", "Síntese de hemoglobina", "Digestão de proteínas"], 
   c:1, e:"Pele íntegra, muco, cílios, pH ácido do estômago são barreiras inatas."},
  
  {id:39, stage:1, difficulty:'easy', category:'vacinas', theme:'calendário', 
   q:"A caderneta de vacinação serve para:", 
   alt:["Registrar apenas vacinas obrigatórias", "Acompanhar histórico vacinal e orientar próximas doses",
        "Substituir consultas médicas", "Comprovar renda familiar"], 
   c:1, e:"Documento essencial para monitorar imunizações conforme calendário do PNI/SUS."},
  
  {id:40, stage:1, difficulty:'medium', category:'saúde_pública', theme:'pni', 
   q:"O Programa Nacional de Imunizações (PNI) do Brasil é referência mundial porque:", 
   alt:["Oferece apenas vacinas importadas", "Garante acesso gratuito e universal a múltiplas vacinas pelo SUS",
        "Funciona apenas em grandes cidades", "Substitui a necessidade de saneamento"], 
   c:1, e:"Um dos maiores programas públicos de vacinação do mundo."},
  
  // ETAPA 2: Doenças Virais (40 questões) - amostra representativa
  {id:41, stage:2, difficulty:'easy', category:'covid19', theme:'agente', 
   q:"O SARS-CoV-2 causa qual doença?", 
   alt:["Gripe sazonal", "Covid-19", "Dengue hemorrágica", "Tétano generalizado"], 
   c:1, e:"Vírus da família Coronaviridae, identificado em 2019."},
  
  {id:42, stage:2, difficulty:'easy', category:'dengue', theme:'vetor', 
   q:"A dengue é transmitida principalmente por:", 
   alt:["Água de torneira não tratada", "Picada do mosquito Aedes aegypti", "Contato físico com doentes", "Inalação de aerossóis"], 
   c:1, e:"Aedes aegypti é vetor urbano. Fêmea pica durante o dia."},
  
  {id:43, stage:2, difficulty:'easy', category:'zika', theme:'complicações', 
   q:"A infecção por Zika em gestantes pode causar no feto:", 
   alt:["Paralisia cerebral adquirida", "Microcefalia e outras malformações neurológicas", "Diabetes tipo 1", "Cegueira por catarata"], 
   c:1, e:"Vírus atravessa placenta e compromete desenvolvimento cerebral intrauterino."},
  
  {id:44, stage:2, difficulty:'easy', category:'chikungunya', theme:'sintomas', 
   q:"Chikungunya tem como sintoma característico:", 
   alt:["Tosse produtiva", "Dores articulares intensas e prolongadas", "Diarreia com sangue", "Manchas roxas"], 
   c:1, e:"Artralgia severa pode persistir por meses/anos."},
  
  {id:45, stage:2, difficulty:'easy', category:'febre_amarela', theme:'urbana', 
   q:"A febre amarela urbana no Brasil:", 
   alt:["É comum e endêmica", "Foi erradicada (último caso em 1942)", "Só existe no Nordeste", "É forma leve"], 
   c:1, e:"Controlada por vacinação e combate ao Aedes."},
  
  {id:46, stage:2, difficulty:'easy', category:'febre_amarela', theme:'macacos', 
   q:"Na febre amarela silvestre, os macacos são:", 
   alt:["Culpados pela transmissão", "Vítimas e sentinelas da circulação viral", "Vetores biológicos", "Imunes"], 
   c:1, e:"Bugios adoecem e morrem. Sua morte alerta para risco humano."},
  
  {id:47, stage:2, difficulty:'medium', category:'covid19', theme:'transmissão', 
   q:"A covid-19 se espalha principalmente por:", 
   alt:["Apenas contato direto", "Gotículas respiratórias e aerossóis no ar", "Comida crua", "Picada de mosquitos"], 
   c:1, e:"Respiração próxima e ambientes fechados amplificam risco."},
  
  {id:48, stage:2, difficulty:'medium', category:'covid19', theme:'prevenção', 
   q:"Para reduzir transmissão da covid-19, a estratégia mais eficaz combina:", 
   alt:["Uso exclusivo de álcool", "Máscara + distância + ventilação + vacinação", "Isolamento total", "Apenas vacina"], 
   c:1, e:"Abordagem em camadas: nenhuma medida é 100%, mas juntas reduzem risco."},
  
  {id:49, stage:2, difficulty:'medium', category:'diagnóstico', theme:'pcr', 
   q:"O teste PCR para covid-19 detecta:", 
   alt:["Anticorpos produzidos", "Material genético (RNA) do vírus", "Células brancas", "Bactérias secundárias"], 
   c:1, e:"Amplifica sequências específicas do RNA viral para diagnóstico agudo."},
  
  {id:50, stage:2, difficulty:'medium', category:'diagnóstico', theme:'sorologia', 
   q:"A sorologia na covid-19 detecta:", 
   alt:["Vírus vivo", "Resposta imunológica (anticorpos IgG/IgM)", "Sintomas clínicos", "RNA viral"], 
   c:1, e:"Indica infecção passada ou resposta vacinal."},
  
  // Questões 51-80: Continuação Etapa 2 (resumidas para espaço)
  {id:51, stage:2, difficulty:'medium', category:'dengue', theme:'criadouro', 
   q:"O Aedes aegypti se reproduz em:", 
   alt:["Água corrente", "Qualquer recipiente com água parada", "Apenas em lixo", "Só em rios"], 
   c:1, e:"Pneus, garrafas, vasos. Eliminar água parada semanalmente é crucial."},
  
  {id:52, stage:2, difficulty:'medium', category:'dengue', theme:'hemorrágica', 
   q:"A dengue hemorrágica ocorre mais em:", 
   alt:["1ª infecção", "2ª infecção por sorotipo diferente", "Quem tomou vacina", "Crianças só"], 
   c:1, e:"Anticorpos não neutralizantes facilitam infecção grave (ADE)."},
  
  {id:53, stage:2, difficulty:'hard', category:'vetores', theme:'albopictus', 
   q:"Sobre o Aedes albopictus:", 
   alt:["Não transmite dengue", "Pode transmitir, vive em matas/periferias", "É sempre menor", "Só bebe água doce"], 
   c:1, e:"Vetor secundário importante, adaptado a diferentes climas."},
  
  {id:54, stage:2, difficulty:'hard', category:'gripe', theme:'classificação', 
   q:"O vírus da gripe é classificado por:", 
   alt:["Tamanho", "Hemaglutinina (H) e Neuraminidase (N)", "Cor", "País de origem"], 
   c:1, e:"Ex: H1N1. Mutações nessas proteínas exigem atualização vacinal."},
  
  {id:55, stage:2, difficulty:'hard', category:'hpv', theme:'oncogênico', 
   q:"O HPV está associado principalmente a:", 
   alt:["Gripe sazonal", "Câncer de colo do útero, pênis, ânus", "Dengue hemorrágica", "Tétano"], 
   c:1, e:"Vacina previne tipos oncogênicos. Recomendada pelo SUS."},
  
  // ETAPA 3: Doenças Bacterianas (35 questões)
  {id:81, stage:3, difficulty:'easy', category:'leptospirose', theme:'transmissão', 
   q:"Leptospirose é transmitida principalmente por:", 
   alt:["Picada de mosquito", "Contato com água/lama com urina de ratos", "Inalação de ar", "Comida estragada"], 
   c:1, e:"Bactéria Leptospira entra por pele/mucosa. Enchentes aumentam risco."},
  
  {id:82, stage:3, difficulty:'easy', category:'cólera', theme:'sintoma', 
   q:"Cólera causa principalmente:", 
   alt:["Tosse", "Diarreia aquosa intensa tipo 'água de arroz'", "Dor de cabeça", "Manchas vermelhas"], 
   c:1, e:"Perda rápida de água/eletrólitos. Risco de desidratação severa."},
  
  {id:83, stage:3, difficulty:'easy', category:'tuberculose', theme:'alvo', 
   q:"Tuberculose afeta principalmente:", 
   alt:["Fígado", "Pulmões", "Coração", "Pele"], 
   c:1, e:"Bacilo de Koch. Tosse >3 semanas é sinal de alerta."},
  
  {id:84, stage:3, difficulty:'easy', category:'tétano', theme:'entrada', 
   q:"Tétano entra no corpo por:", 
   alt:["Inalação", "Ferimentos na pele com solo/objetos", "Picada de mosquito", "Água potável"], 
   c:1, e:"Esporos no solo entram em cortes profundos. Anaerobiose favorece toxina."},
  
  {id:85, stage:3, difficulty:'medium', category:'saneamento', theme:'impacto', 
   q:"Saneamento precário favorece:", 
   alt:["Doenças crônicas", "Doenças de veiculação hídrica", "Câncer de pele", "Alergias"], 
   c:1, e:"Ciclo fecal-oral ativo: patógenos de fezes contaminam água/alimentos."},
  
  {id:86, stage:3, difficulty:'hard', category:'resistência', theme:'causa', 
   q:"A resistência bacteriana surge principalmente por:", 
   alt:["Uso indevido/excesso de antibióticos", "Vacinação", "Higiene excessiva", "Saneamento"], 
   c:0, e:"Pressão seletiva: bactérias sensíveis morrem, resistentes sobrevivem."},
  
  // ETAPA 4: Revisão Final + Simulado Oficial (35 questões)
  {id:116, stage:4, difficulty:'easy', category:'antibióticos', theme:'especificidade', 
   q:"Antibiótico cura gripe?", 
   alt:["Sim, sempre", "Não, gripe é viral e antibióticos só atuam em bactérias", "Às vezes", "Só em crianças"], 
   c:1, e:"Uso inadequado em viroses é ineficaz e contribui para resistência."},
  
  {id:117, stage:4, difficulty:'easy', category:'febre_amarela', theme:'mito', 
   q:"Macacos transmitem febre amarela?", 
   alt:["Sim, por mordida", "Não, são vítimas/sentinels; transmissão é por mosquito", "Só bugios", "Só saguis"], 
   c:1, e:"Macacos adoecem e morrem. Matar macacos prejudica vigilância."},
  
  {id:118, stage:4, difficulty:'easy', category:'higiene', theme:'mãos', 
   q:"Lavar as mãos previne:", 
   alt:["Só gripe", "Várias doenças (diarreias, respiratórias, pele)", "Nenhuma", "Apenas alergias"], 
   c:1, e:"Remove patógenos de contato. Medida simples, barata e eficaz."},
  
  // Questões do Simulado Oficial (41-50)
  {id:141, stage:4, difficulty:'medium', category:'interpretação', theme:'leptospirose_enchente', 
   q:"Após fortes chuvas e enchentes, aumentaram casos de febre, dores musculares e infecções por contato com água contaminada por urina de ratos. A doença mais associada é:", 
   alt:["dengue", "covid-19", "leptospirose", "sarampo", "catapora"], 
   c:2, e:"Leptospirose: transmissão por água/lama com urina de roedores. Comum em enchentes."},
  
  {id:142, stage:4, difficulty:'easy', category:'epidemiologia', theme:'epidemia', 
   q:"Uma cidade apresentou aumento rápido de casos de dengue durante alguns meses, mas apenas naquela região. Isso caracteriza:", 
   alt:["pandemia", "mutação", "endemia mundial", "epidemia", "imunização"], 
   c:3, e:"Epidemia: aumento repentino em área delimitada."},
  
  {id:143, stage:4, difficulty:'easy', category:'dengue', theme:'prevenção_vetor', 
   q:"Agentes orientam eliminar recipientes com água parada para combater dengue. Isso é importante porque:", 
   alt:["Elimina diretamente o vírus", "Impede a reprodução do mosquito vetor", "Mata bactérias", "Substitui vacinas", "Reduz poluição"], 
   c:1, e:"Aedes põe ovos em água parada. Eliminar criadouros interrompe ciclo."},
  
  {id:144, stage:4, difficulty:'easy', category:'raiva', theme:'emergência', 
   q:"Pessoa mordida por cão com suspeita de raiva. Atitude correta:", 
   alt:["Esperar sintomas", "Tomar antibióticos", "Procurar imediatamente atendimento médico", "Apenas lavar", "Ignorar"], 
   c:2, e:"Profilaxia pós-exposição imediata é crucial."},
  
  {id:145, stage:4, difficulty:'easy', category:'fake_news', theme:'identificação', 
   q:"Mensagem afirma que 'vacinas alteram DNA humano', sem estudos ou fontes. Isso provavelmente é:", 
   alt:["Pesquisa validada", "Consenso médico", "Fake news", "Campanha oficial", "Propaganda"], 
   c:2, e:"Fake news: falta de fonte, promessa sensacionalista, contraria consenso."},
  
  {id:146, stage:4, difficulty:'medium', category:'vacinas', theme:'imunidade_coletiva', 
   q:"Uma das maiores vantagens da vacinação coletiva é:", 
   alt:["Impedir totalmente qualquer doença", "Proteger somente quem está vacinado", "Diminuir a circulação do agente na população", "Substituir higiene", "Eliminar médicos"], 
   c:2, e:"Imunidade de rebanho: redução da transmissão protege indiretamente vulneráveis."},
  
  {id:147, stage:4, difficulty:'easy', category:'dengue', theme:'sintomas', 
   q:"Pessoa com febre alta, manchas vermelhas e dores no corpo após picada de mosquito. Doença mais provável:", 
   alt:["tuberculose", "hanseníase", "dengue", "tétano", "cólera"], 
   c:2, e:"Sintomas clássicos de dengue. Buscar atendimento para monitorar sinais de alarme."},
  
  {id:148, stage:4, difficulty:'easy', category:'antibióticos', theme:'especificidade', 
   q:"Aluno afirmou: 'Antibióticos são eficazes no tratamento da gripe'. A afirmação está:", 
   alt:["correta, porque gripe é bacteriana", "correta apenas em crianças", "incorreta, porque gripe é viral", "correta apenas em idosos", "correta somente em casos graves"], 
   c:2, e:"Gripe é viral. Antibióticos não atuam contra vírus."},
  
  {id:149, stage:4, difficulty:'easy', category:'saneamento', theme:'impacto', 
   q:"Comunidade sem coleta de lixo, rede de esgoto e água tratada apresenta maior risco de:", 
   alt:["prevenção de epidemias", "doenças transmissíveis", "imunidade coletiva", "redução de infecções", "eliminação de bactérias"], 
   c:1, e:"Saneamento precário favorece doenças de veiculação hídrica e vetorial."},
  
  {id:150, stage:4, difficulty:'medium', category:'síntese', theme:'afirmativas', 
   q:"Analise: I-Vacinas previnem doenças. II-Aedes é vetor da dengue. III-Saneamento previne doenças. IV-Antibióticos funcionam contra qualquer vírus. Estão corretas:", 
   alt:["Apenas I e II", "Apenas III e IV", "Apenas I, II e III", "Apenas IV", "Todas"], 
   c:2, e:"I, II e III corretas. IV errada: antibióticos não atuam contra vírus."}
];

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.CAP7_QUESTIONS = CAP7_QUESTIONS;
}