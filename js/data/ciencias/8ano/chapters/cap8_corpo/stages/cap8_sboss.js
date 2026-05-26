/**
 * CAP8 BOSS — Dr. Chaos: Protocolo Colapso
 * Revisão integrada de todos os sistemas do corpo humano
 */

const CAP8_SBOSS = {
  id: 'cap8_sboss',
  title: 'Dr. Chaos — Protocolo Colapso',
  icon: '☠️',
  difficulty: 'boss',
  estimatedTime: 20,

  learningObjectives: [
    'Integrar o funcionamento dos 6 sistemas estudados',
    'Analisar consequências de falhas em cada sistema',
    'Relacionar sistemas entre si em situações clínicas',
    'Aplicar conhecimentos em cenários de diagnóstico',
    'Resolver problemas complexos envolvendo múltiplos sistemas'
  ],

  summary: {
    readTime: 6,
    content: [
      {
        icon: '☠️',
        title: 'Missão: Derrotar Dr. Chaos',
        text: 'Dr. Chaos ativou o Protocolo Colapso — um vírus digital que imita falhas em cadeia nos sistemas do corpo humano. Para vencê-lo, você precisa dominar TODOS os sistemas:\n\n🍽️ Digestório → 🫀 Circulatório → 🫁 Respiratório → 🧠 Nervoso → 🫘 Excretor → 🧬 Reprodutor\n\nCada sistema que você dominar desativa uma parte do Protocolo Colapso!'
      },
      {
        icon: '🔄',
        title: 'Integração dos Sistemas',
        text: 'Os sistemas não trabalham isolados:\n• Digestório absorve nutrientes → Circulatório distribui\n• Respiratório capta O₂ → Circulatório transporta\n• Nervoso coordena todos os sistemas\n• Excretor filtra o sangue que Circulatório traz\n• Endócrino (parte do Reprodutor) regula via hormônios\n\n⚡ Uma falha em um sistema afeta TODOS os outros!'
      },
      {
        icon: '🏥',
        title: 'Cenário Clínico Integrado',
        text: 'Paciente com insuficiência cardíaca:\n• Coração fraco → menos sangue bombeado\n• Rins recebem menos sangue → acúmulo de toxinas\n• Pulmões congestos → dificuldade de respirar\n• Cérebro mal perfundido → confusão mental\n• Tecidos sem O₂ → fraqueza generalizada\n\nUm problema no circulatório cascateia em 4+ sistemas!'
      },
      {
        icon: '⚡',
        title: 'Revisão: Órgãos-Chave',
        text: 'DIGESTÓRIO: boca→esôfago→estômago→intestinos→reto\nCIRCULATÓRIO: coração (4 câmaras), artérias, veias, capilares\nRESPIRATÓRIO: nariz→laringe→traqueia→brônquios→alvéolos\nNERVOSO: SNC (encéfalo+medula), SNP (nervos)\nEXCRETOR: rins→ureteres→bexiga→uretra (+pele, pulmões)\nREPRODUTOR: gônadas, gametas, hormônios sexuais'
      },
      {
        icon: '🎯',
        title: 'Estratégia Final: Pontos Críticos',
        text: 'Para vencer o chefe, domine estes conceitos integrados:\n• Hematose (trocas O₂/CO₂ nos alvéolos)\n• Filtração glomerular (rins filtrando o sangue)\n• Arco reflexo (medula, sem passar pelo cérebro)\n• Digestão enzimática (cada enzima tem seu pH ideal)\n• Feedback hormonal (homeostase reprodutora)\n• Imunidade (leucócitos e barreira intestinal)\n\nForça, agente — o corpo humano está em suas mãos!'
      }
    ],

    flashcards: [
      { q: 'Qual sistema distribui nutrientes absorvidos pelo intestino?',       a: 'Sistema circulatório (vasos sanguíneos e linfáticos).' },
      { q: 'O que acontece com O₂ e CO₂ nos alvéolos?',                         a: 'Hematose: O₂ entra no sangue; CO₂ sai para o ar expirado, por difusão.' },
      { q: 'Qual órgão produz bílis para emulsificar gorduras?',                 a: 'Fígado (bile armazenada na vesícula biliar).' },
      { q: 'Qual estrutura do rim realiza a filtração do sangue?',               a: 'O glomérulo (capilares dentro da cápsula de Bowman).' },
      { q: 'O que regula temperatura, fome e sede no cérebro?',                  a: 'Hipotálamo.' },
      { q: 'Qual hormônio feminino regula o ciclo menstrual?',                   a: 'Estrogênio e progesterona (produzidos pelos ovários).' },
      { q: 'O que são vilosidades intestinais?',                                  a: 'Dobras do intestino delgado que aumentam a área de absorção.' },
      { q: 'Por que o ventrículo esquerdo é mais espesso?',                      a: 'Precisa bombear sangue para todo o corpo (maior resistência).' }
    ],

    mnemonics: [
      { trigger: 'Ordem dos sistemas',    memory: '"Diga Certo, Respire Normalmente, Excrete Regularmente" = Digestório, Circulatório, Respiratório, Nervoso, Excretor, Reprodutor' },
      { trigger: 'Câmaras do coração',    memory: '"AD→VD→AE→VE" — "A Direita Vai, A Esquerda Volta"' },
      { trigger: 'Trajeto do ar',         memory: '"Nariz Faz Lindo Trajeto: Brônquios Brincam Aqui" = Nariz, Faringe, Laringe, Traqueia, Brônquios, Bronquíolos, Alvéolos' }
    ],

    miniReview: [
      { q: 'Cite 3 sistemas que dependem diretamente do circulatório para funcionar.', a: 'Digestório (absorção), Excretor (filtração renal), Respiratório (transporte de O₂).' },
      { q: 'Por que uma lesão na medula espinhal pode causar paralisia abaixo do nível da lesão?', a: 'A medula conduz impulsos nervosos motores e sensitivos — lesão interrompe a comunicação entre cérebro e membros.' },
      { q: 'O que acontece com o pH do sangue na insuficiência renal?', a: 'Fica mais ácido (acidose metabólica) — os rins não eliminam H⁺ nem reabsorvem bicarbonato adequadamente.' }
    ]
  },

  warmup: [
    {
      prompt: 'CHEFE ATIVADO ☠️ | Qual sistema é responsável por ABSORVER nutrientes do alimento?',
      options: [
        { text: 'Sistema Circulatório',  correct: false },
        { text: 'Sistema Digestório',    correct: true  },
        { text: 'Sistema Excretor',      correct: false },
        { text: 'Sistema Nervoso',       correct: false }
      ],
      explanation: 'O sistema digestório quebra e absorve nutrientes no intestino delgado. O circulatório os distribui após a absorção.'
    },
    {
      prompt: 'CHEFE ATIVADO ☠️ | A filtração do sangue para produzir urina ocorre em qual órgão?',
      options: [
        { text: 'Fígado',    correct: false },
        { text: 'Pulmão',    correct: false },
        { text: 'Rim',       correct: true  },
        { text: 'Pâncreas',  correct: false }
      ],
      explanation: 'Os rins filtram cerca de 180L de sangue por dia, produzindo urina para eliminar resíduos nitrogenados.'
    },
    {
      prompt: 'CHEFE ATIVADO ☠️ | Qual parte do SNC controla funções vitais como respiração e batimentos?',
      options: [
        { text: 'Cerebelo',         correct: false },
        { text: 'Córtex frontal',   correct: false },
        { text: 'Hipotálamo',       correct: false },
        { text: 'Tronco encefálico (bulbo)', correct: true }
      ],
      explanation: 'O bulbo (tronco encefálico) controla respiração, frequência cardíaca e pressão arterial — funções automáticas vitais.'
    }
  ],

  guidedPractice: [
    {
      prompt: '⚔️ ATAQUE DO CHEFE: "Falha no sistema de transporte!"\n🔍 DICA: Sangue arterial e venoso têm composições diferentes.\n\nO sangue rico em O₂ que sai dos pulmões vai para:',
      options: [
        { text: 'Átrio direito via veias cavas',          correct: false },
        { text: 'Átrio esquerdo via veias pulmonares',    correct: true  },
        { text: 'Ventrículo direito via artéria pulmonar', correct: false },
        { text: 'Ventrículo esquerdo direto',              correct: false }
      ],
      explanation: 'Veias pulmonares → Átrio esquerdo → Ventrículo esquerdo → Aorta → corpo. Exceção: veias pulmonares transportam sangue oxigenado!'
    },
    {
      prompt: '⚔️ ATAQUE DO CHEFE: "Colapso renal detectado!"\n🔍 DICA: Os rins regulam o volume e composição do sangue.\n\nA urina começa a ser formada quando o sangue chega ao rim e é filtrado no:',
      options: [
        { text: 'Túbulo coletor',          correct: false },
        { text: 'Pelve renal',             correct: false },
        { text: 'Glomérulo',               correct: true  },
        { text: 'Ureter',                  correct: false }
      ],
      explanation: 'Filtração: glomérulo → cápsula de Bowman → filtrado primário. Depois: reabsorção nos túbulos → urina final → pelve → ureter → bexiga.'
    }
  ],

  questions: [
    {
      prompt: '☠️ PROTOCOLO COLAPSO | Enzima que digere proteínas no estômago:',
      options: [
        { text: 'Lipase',    correct: false },
        { text: 'Amilase',   correct: false },
        { text: 'Pepsina',   correct: true  },
        { text: 'Insulina',  correct: false }
      ],
      explanation: 'Pepsina (ativada pelo ácido clorídrico) digere proteínas no estômago. Amilase = amido (boca). Lipase = gorduras.'
    },
    {
      prompt: '☠️ PROTOCOLO COLAPSO | Um paciente tem taxa de filtração glomerular muito baixa. Qual substância se acumula no sangue?',
      options: [
        { text: 'Glicose',    correct: false },
        { text: 'Ureia',      correct: true  },
        { text: 'Hemoglobina',correct: false },
        { text: 'Insulina',   correct: false }
      ],
      explanation: 'Ureia é o principal resíduo nitrogenado filtrado pelos rins. Na insuficiência renal, a ureia se acumula (uremia) → toxicidade.'
    },
    {
      prompt: '☠️ PROTOCOLO COLAPSO | O arco reflexo é mais rápido que uma resposta voluntária porque:',
      options: [
        { text: 'O cérebro age mais rápido em emergências',               correct: false },
        { text: 'O estímulo é processado na medula, sem passar pelo cérebro', correct: true },
        { text: 'Os nervos motores são mais rápidos nos reflexos',        correct: false },
        { text: 'A bainha de mielina é mais espessa nos reflexos',        correct: false }
      ],
      explanation: 'Reflexo: receptor → nervo sensitivo → medula → nervo motor → músculo. O cérebro recebe a informação DEPOIS que o reflexo ocorre.'
    },
    {
      prompt: '☠️ PROTOCOLO COLAPSO | Qual hormônio masculino é produzido pelos testículos?',
      options: [
        { text: 'Estrogênio',    correct: false },
        { text: 'Progesterona',  correct: false },
        { text: 'Testosterona',  correct: true  },
        { text: 'Prolactina',    correct: false }
      ],
      explanation: 'Testosterona é o principal androgênio, produzido pelas células de Leydig nos testículos. Estimula caracteres sexuais masculinos.'
    },
    {
      prompt: '☠️ PROTOCOLO COLAPSO | Qual componente do sangue é responsável pelo transporte de O₂?',
      options: [
        { text: 'Leucócitos',  correct: false },
        { text: 'Plaquetas',   correct: false },
        { text: 'Plasma',      correct: false },
        { text: 'Hemácias',    correct: true  }
      ],
      explanation: 'Hemácias (glóbulos vermelhos) contêm hemoglobina — proteína que se liga ao O₂ nos pulmões e o libera nos tecidos.'
    },
    {
      prompt: '☠️ PROTOCOLO COLAPSO | A hematose ocorre nos alvéolos por qual mecanismo?',
      options: [
        { text: 'Transporte ativo (ATP)',          correct: false },
        { text: 'Difusão simples por gradiente',   correct: true  },
        { text: 'Osmose',                          correct: false },
        { text: 'Endocitose',                      correct: false }
      ],
      explanation: 'O₂ está mais concentrado no alvéolo → difunde para o sangue. CO₂ está mais concentrado no sangue → difunde para o alvéolo. Sem gasto de energia!'
    },
    {
      prompt: '☠️ PROTOCOLO COLAPSO | Qual hormônio regula o reabsorção de água nos rins?',
      options: [
        { text: 'Adrenalina',  correct: false },
        { text: 'Insulina',    correct: false },
        { text: 'ADH',         correct: true  },
        { text: 'Cortisol',    correct: false }
      ],
      explanation: 'ADH (hormônio antidiurético ou vasopressina) aumenta a reabsorção de água nos túbulos coletores → urina mais concentrada.'
    },
    {
      prompt: '☠️ PROTOCOLO COLAPSO | A digestão de amido começa em qual parte do sistema digestório?',
      options: [
        { text: 'Estômago',          correct: false },
        { text: 'Intestino delgado',  correct: false },
        { text: 'Boca',               correct: true  },
        { text: 'Esôfago',           correct: false }
      ],
      explanation: 'A amilase salivar na boca inicia a digestão do amido. No estômago (pH ácido), a amilase é inativada. Retoma no intestino com amilase pancreática.'
    },
    {
      prompt: '☠️ PROTOCOLO COLAPSO | Um paciente com lesão no lobo occipital apresentará:',
      options: [
        { text: 'Perda da audição',                    correct: false },
        { text: 'Déficit de memória',                  correct: false },
        { text: 'Distúrbios da visão',                 correct: true  },
        { text: 'Problemas de coordenação motora',     correct: false }
      ],
      explanation: 'Lobo occipital = visão. Temporal = audição/memória. Parietal = sensações corporais. Frontal = raciocínio/personalidade. Cerebelo = coordenação.'
    },
    {
      prompt: '☠️ PROTOCOLO COLAPSO | A fecundação (encontro de óvulo e espermatozoide) ocorre normalmente na:',
      options: [
        { text: 'Vagina',              correct: false },
        { text: 'Tuba uterina',        correct: true  },
        { text: 'Útero',               correct: false },
        { text: 'Ovário',              correct: false }
      ],
      explanation: 'A fecundação ocorre nas tubas uterinas (trompas de Falópio). O embrião então migra para o útero onde ocorre a implantação.'
    },
    {
      prompt: '☠️ PROTOCOLO COLAPSO | Qual a função principal da bile produzida pelo fígado?',
      options: [
        { text: 'Digere proteínas no estômago',              correct: false },
        { text: 'Emulsifica gorduras para facilitar digestão', correct: true },
        { text: 'Produz enzimas digestivas para o pâncreas',  correct: false },
        { text: 'Neutraliza o ácido do estômago apenas',     correct: false }
      ],
      explanation: 'A bile emulsifica gorduras (quebra gotas grandes em pequenas) → aumenta a superfície para ação da lipase pancreática. Também neutraliza o quimo ácido.'
    },
    {
      prompt: '☠️ PROTOCOLO COLAPSO | Qual estrutura impede o refluxo de alimento do estômago para o esôfago?',
      options: [
        { text: 'Vilo intestinal',      correct: false },
        { text: 'Esfíncter esofágico inferior (cárdia)', correct: true },
        { text: 'Epiglote',             correct: false },
        { text: 'Válvula ileocecal',    correct: false }
      ],
      explanation: 'O esfíncter esofágico inferior (cárdia) separa esôfago do estômago. Quando falha → refluxo gastroesofágico (DRGE) → queimação.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'FASE FINAL ☠️ DIFÍCIL: Uma pessoa com diabetes mellitus tipo 1 tem destruição das células beta do pâncreas. Qual cascata sistêmica ocorre?',
      options: [
        { text: 'Menos insulina → glicose não entra nas células → hiperglicemia → danos renais, nervosos e vasculares', correct: true },
        { text: 'Mais glucagon → hipoglicemia → coma imediato',                                                         correct: false },
        { text: 'Pâncreas para de produzir enzimas digestivas apenas',                                                  correct: false },
        { text: 'O fígado compensa produzindo insulina extra',                                                          correct: false }
      ],
      explanation: 'Sem insulina: glicose não entra nas células (apesar de alta no sangue) → células "morrem de fome" → mobilização de gorduras → cetoacidose. Crônico: nefropatia, neuropatia, retinopatia diabética.'
    },
    {
      prompt: 'FASE FINAL ☠️ DIFÍCIL: Por que COVID-19 grave causa lesão em múltiplos órgãos, não apenas pulmões?',
      options: [
        { text: 'O vírus infecta apenas células com receptor ACE2, que existe só nos pulmões',      correct: false },
        { text: 'A hiperinflamação (tempestade de citocinas) e a formação de coágulos afetam todos os órgãos via sistema circulatório', correct: true },
        { text: 'O vírus produz toxinas específicas para cada órgão separadamente',                 correct: false },
        { text: 'Os pulmões danificados param de oxigenar, causando hipóxia apenas',               correct: false }
      ],
      explanation: 'COVID grave: inflamação excessiva (citocinas) + coagulopatia → microtrombos em rim, coração, cérebro, fígado. O receptor ACE2 existe em vários órgãos além dos pulmões.'
    }
  ],

  rewards: { xp: 200, gems: 20, badge: '☠️ Vencedor do Caos' },
  completionMessage: '☠️ Dr. Chaos DERROTADO! O Protocolo Colapso foi neutralizado! Seu domínio do corpo humano salvou o dia. Uma última missão te espera — o Exame Final!',
  nextStage: 'cap8_sfinal'
};

window.CAP8_SBOSS = CAP8_SBOSS;
