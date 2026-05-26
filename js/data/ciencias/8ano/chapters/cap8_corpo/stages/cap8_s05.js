/**
 * CAP8 STAGE 05 — Sistema Excretor
 * Rins, néfrons, urina e homeostase
 */

const CAP8_S05 = {
  id: 'cap8_s05',
  title: 'Sistema Excretor',
  icon: '🫘',
  difficulty: 'medium',
  estimatedTime: 12,

  learningObjectives: [
    'Identificar os órgãos do sistema urinário',
    'Compreender as etapas da formação da urina no néfron',
    'Entender a função dos rins na homeostase',
    'Reconhecer as principais doenças renais',
    'Diferenciar excreção de eliminação'
  ],

  summary: {
    readTime: 4,
    content: [
      {
        icon: '🫘',
        title: 'Órgãos do Sistema Urinário',
        text: 'Rins (2) → Ureteres (2) → Bexiga → Uretra\n\n• Rins: filtram o sangue e produzem urina\n• Ureteres: conduzem urina dos rins à bexiga\n• Bexiga: armazena urina (capacidade ~400ml)\n• Uretra: elimina urina ao exterior\n\n💡 A pele e os pulmões também são órgãos excretores (suor e CO₂)!'
      },
      {
        icon: '🔬',
        title: 'O Néfron — Unidade Funcional do Rim',
        text: 'Cada rim tem ~1 milhão de néfrons! O néfron tem:\n1. Glomérulo: novelo de capilares → filtração (pressão)\n2. Cápsula de Bowman: "captura" o filtrado\n3. Túbulo proximal: reabsorção de glicose, aminoácidos, Na⁺\n4. Alça de Henle: concentração da urina\n5. Túbulo distal + coletor: ajustes finais de água e sais'
      },
      {
        icon: '⚗️',
        title: 'Formação da Urina — 3 Etapas',
        text: '1. FILTRAÇÃO: Sangue → Glomérulo → Filtrado (150L/dia!)\n   Remove: água, glicose, ureia, sais, aminoácidos\n\n2. REABSORÇÃO: ~99% do filtrado volta ao sangue\n   Reabsorve: glicose (100%), água, sais minerais\n\n3. SECREÇÃO: Substâncias nocivas adicionadas à urina\n   Secreta: H⁺, K⁺, fármacos, toxinas\n\n→ Resultado: ~1,5L de urina/dia'
      },
      {
        icon: '⚖️',
        title: 'Homeostase Renal',
        text: 'Os rins regulam:\n• pH do sangue (excretando H⁺)\n• Volume de água (osmorregulação via ADH)\n• Pressão arterial (sistema renina-angiotensina)\n• Concentração de íons (Na⁺, K⁺, Ca²⁺)\n• Produzem eritropoietina (EPO) — estimula produção de hemácias'
      },
      {
        icon: '⚠️',
        title: 'Doenças Renais',
        text: 'DIABETES INSIPIDUS: deficiência de ADH → urina muito diluída e frequente\nINSUFICIÊNCIA RENAL: rins não filtram adequadamente → toxinas acumulam\nLITÍASE RENAL (cálculo): pedras de cristais (oxalato de cálcio) → dor intensa\nGLOMERULONEFRITE: inflamação do glomérulo → proteínas na urina\n\n💊 Diálise simula a função renal em pacientes com insuficiência grave'
      }
    ],

    flashcards: [
      { q: 'Qual é a unidade funcional do rim?',              a: 'O néfron (cada rim tem ~1 milhão).' },
      { q: 'Quanto filtrado o rim produz por dia?',           a: '~150 litros, mas reabsorve 99% → ~1,5L de urina.' },
      { q: 'O que é glicosúria?',                             a: 'Presença de glicose na urina — sinal de diabetes mellitus ou sobrecarga glicêmica.' },
      { q: 'Qual hormônio regula a reabsorção de água nos rins?', a: 'ADH (hormônio antidiurético / vasopressina), produzido pelo hipotálamo.' },
      { q: 'O que é ureia?',                                  a: 'Produto do metabolismo de proteínas (N), excretada pela urina.' },
      { q: 'O que faz a diálise?',                            a: 'Filtra o sangue artificialmente quando os rins falham, removendo toxinas e excesso de líquido.' }
    ],

    mnemonics: [
      { trigger: 'Etapas da urina',     memory: '"FRS: Filtração → Reabsorção → Secreção" — 3 etapas do néfron' },
      { trigger: 'Ureteres vs Uretra',  memory: '"Ureteres = dois (um para cada rim); Uretra = único (saída final)"' },
      { trigger: 'ADH',                 memory: '"ADH = Anti-Diurético → Anti-xixi → retém água → urina concentrada"' }
    ],

    miniReview: [
      { q: 'Por que a glicose NÃO aparece na urina normalmente?', a: 'Porque é completamente reabsorvida no túbulo proximal do néfron.' },
      { q: 'Como os rins controlam a pressão arterial?',          a: 'Via sistema renina-angiotensina: renina converte angiotensinogênio → angiotensina → vasoconstricção + retenção de Na⁺/água.' },
      { q: 'Cite 2 formas de excreção além da urina.',             a: 'Suor (pele) e CO₂ (pulmões).' }
    ]
  },

  warmup: [
    {
      prompt: 'A unidade funcional do rim é chamada de:',
      options: [
        { text: 'Alvéolo', correct: false },
        { text: 'Néfron',  correct: true  },
        { text: 'Glomérulo apenas', correct: false },
        { text: 'Tubérculo', correct: false }
      ],
      explanation: 'Néfron = unidade funcional do rim. Cada rim tem ~1 milhão de néfrons realizando filtração, reabsorção e secreção.'
    },
    {
      prompt: 'A primeira etapa da formação da urina é a:',
      options: [
        { text: 'Secreção',     correct: false },
        { text: 'Reabsorção',   correct: false },
        { text: 'Filtração',    correct: true  },
        { text: 'Excreção',     correct: false }
      ],
      explanation: 'Filtração no glomérulo → reabsorção nos túbulos → secreção → urina final.'
    },
    {
      prompt: 'Qual é a função principal dos rins?',
      options: [
        { text: 'Produzir hormônios digestivos',        correct: false },
        { text: 'Filtrar o sangue e regular a homeostase', correct: true },
        { text: 'Transportar oxigênio',                 correct: false },
        { text: 'Controlar o sistema nervoso autônomo', correct: false }
      ],
      explanation: 'Os rins filtram ~150L de sangue/dia, regulam pH, pressão arterial, volume hídrico e excretam resíduos metabólicos.'
    }
  ],

  guidedPractice: [
    {
      prompt: '🔍 DICA: O ADH é liberado quando o sangue fica muito concentrado (desidratação).\n\nAo tomar pouca água em dia quente, os rins produzem urina:',
      options: [
        { text: 'Mais clara e abundante',       correct: false },
        { text: 'Mais escura e concentrada',    correct: true  },
        { text: 'Com proteínas',                correct: false },
        { text: 'Com glicose',                  correct: false }
      ],
      explanation: 'Desidratação → ADH aumenta → rins reabsorvem mais água → urina escura e concentrada (menor volume).'
    },
    {
      prompt: '🔍 DICA: Na diabetes mellitus tipo 1, a glicose sanguínea fica muito alta, ultrapassando o limiar renal.\n\nO que acontece quando a glicose sanguínea é muito alta?',
      options: [
        { text: 'É completamente reabsorvida normalmente', correct: false },
        { text: 'Aparece na urina (glicosúria)',            correct: true  },
        { text: 'É eliminada pelos pulmões',               correct: false },
        { text: 'É armazenada nos rins',                   correct: false }
      ],
      explanation: 'Quando a glicose ultrapassa o limiar renal (~180 mg/dL), o túbulo proximal não consegue reabsorver tudo → glicosúria.'
    }
  ],

  questions: [
    {
      prompt: 'O que é a ureia e por que precisa ser excretada?',
      options: [
        { text: 'Vitamina produzida no fígado, excretada em excesso',          correct: false },
        { text: 'Resíduo nitrogenado do metabolismo proteico — tóxico em alta concentração', correct: true },
        { text: 'Hormônio produzido pelos rins para regular pressão',          correct: false },
        { text: 'Enzima digestiva produzida pelo estômago',                    correct: false }
      ],
      explanation: 'Proteínas → aminoácidos → amônia (tóxica) → fígado converte em ureia → sangue → rins → urina.'
    },
    {
      prompt: 'A cálculo renal ("pedra no rim") é formada principalmente por:',
      options: [
        { text: 'Depósito de glicose cristalizada',    correct: false },
        { text: 'Cristais de oxalato de cálcio ou ácido úrico', correct: true },
        { text: 'Acúmulo de ureia solidificada',       correct: false },
        { text: 'Coágulos sanguíneos no néfron',       correct: false }
      ],
      explanation: 'Litíase renal: cristalização de sais (oxalato/fosfato de cálcio, ácido úrico) nos túbulos ou pelve renal → dor intensa (cólica nefrítica).'
    },
    {
      prompt: 'A insuficiência renal aguda pode ocorrer por desidratação severa porque:',
      options: [
        { text: 'Os rins produzem urina demais e se esgotam',               correct: false },
        { text: 'Baixo volume sanguíneo reduz a pressão de filtração glomerular', correct: true },
        { text: 'Os rins param de produzir ADH',                            correct: false },
        { text: 'A desidratação destrói os néfrons diretamente',            correct: false }
      ],
      explanation: 'Sem pressão hidrostática suficiente no glomérulo, a filtração cessa → acúmulo de toxinas no sangue → IRA pré-renal.'
    },
    {
      prompt: 'O hormônio aldosterona age nos rins para:',
      options: [
        { text: 'Excretar mais sódio',               correct: false },
        { text: 'Reabsorver mais sódio e excretar potássio', correct: true },
        { text: 'Diminuir a filtração glomerular',   correct: false },
        { text: 'Estimular produção de eritropoietina', correct: false }
      ],
      explanation: 'Aldosterona (córtex adrenal): aumenta a reabsorção de Na⁺ no túbulo distal → retenção de água → aumento da pressão arterial.'
    },
    {
      prompt: 'A proteinúria (proteínas na urina) indica:',
      options: [
        { text: 'Função renal normal',                   correct: false },
        { text: 'Lesão no filtro glomerular',             correct: true  },
        { text: 'Excesso de proteínas na dieta',         correct: false },
        { text: 'Infecção urinária bacteriana',          correct: false }
      ],
      explanation: 'Normalmente, as proteínas são grandes demais para passar pelo filtro glomerular. Proteinúria = barreira danificada.'
    },
    {
      prompt: 'A diálise peritoneal usa a membrana do peritônio como filtro. Qual a diferença da hemodiálise?',
      options: [
        { text: 'A hemodiálise não filtra toxinas',                  correct: false },
        { text: 'Na hemodiálise o sangue passa por máquina; na peritoneal usa a cavidade abdominal', correct: true },
        { text: 'A peritoneal é mais eficiente que a hemodiálise',  correct: false },
        { text: 'São exatamente iguais em princípio',               correct: false }
      ],
      explanation: 'Hemodiálise: sangue circula por membrana artificial. Peritoneal: solução dialítica é infundida na barriga, filtrando pelo peritônio.'
    },
    {
      prompt: 'O clearance de creatinina avalia a função renal porque:',
      options: [
        { text: 'A creatinina é produzida pelos rins',              correct: false },
        { text: 'É filtrada e não reabsorvida, refletindo a taxa de filtração glomerular (TFG)', correct: true },
        { text: 'A creatinina é o principal resíduo proteico filtrado', correct: false },
        { text: 'Só aparece na urina em doenças renais',           correct: false }
      ],
      explanation: 'Creatinina: produzida pelos músculos, filtrada livremente e não reabsorvida → excelente marcador da TFG e função renal.'
    },
    {
      prompt: 'A Alça de Henle é importante para:',
      options: [
        { text: 'Filtração do sangue',                        correct: false },
        { text: 'Criar gradiente osmótico na medula renal para concentrar a urina', correct: true },
        { text: 'Secreção de eritropoietina',                 correct: false },
        { text: 'Reabsorção de glicose e aminoácidos',        correct: false }
      ],
      explanation: 'A alça de Henle cria um gradiente de concentração na medula renal → permite ao rim concentrar a urina muito acima do plasma.'
    },
    {
      prompt: 'Uma infecção urinária (cistite) ocorre principalmente em:',
      options: [
        { text: 'Homens, por terem uretra mais longa',              correct: false },
        { text: 'Mulheres, por terem uretra mais curta e próxima ao ânus', correct: true },
        { text: 'Crianças, por terem rins imaturos',                correct: false },
        { text: 'Idosos, por insuficiência imunológica exclusiva',  correct: false }
      ],
      explanation: 'Mulheres têm uretra ~4cm (vs ~20cm nos homens) e anatomia que facilita a migração bacteriana → maior incidência de ITU.'
    },
    {
      prompt: 'O sistema renina-angiotensina-aldosterona (RAAS) é ativado quando:',
      options: [
        { text: 'A pressão arterial está alta',         correct: false },
        { text: 'A pressão arterial está baixa',        correct: true  },
        { text: 'A glicose sanguínea aumenta',          correct: false },
        { text: 'O ADH está em excesso',                correct: false }
      ],
      explanation: 'RAAS: queda de pressão → renina → angiotensina II → vasoconstrição + aldosterona → retenção de Na⁺/água → pressão sobe.'
    }
  ],

  adaptiveReview: [
    {
      prompt: 'DIFÍCIL: Por que pacientes com insuficiência renal crônica desenvolvem anemia?',
      options: [
        { text: 'Perdem hemácias pela urina',                                      correct: false },
        { text: 'Os rins doentes produzem menos eritropoietina (EPO)',             correct: true  },
        { text: 'Absorvem menos ferro pelo intestino devido às toxinas',           correct: false },
        { text: 'A diálise destrói hemácias mecanicamente',                        correct: false }
      ],
      explanation: 'Rins saudáveis produzem EPO que estimula a medula óssea. Com IRC, menos EPO → menos hemácias → anemia nefrogênica.'
    },
    {
      prompt: 'DIFÍCIL: Por que o consumo excessivo de proteínas aumenta o trabalho renal?',
      options: [
        { text: 'Proteínas elevam a pressão glomerular por serem grandes',         correct: false },
        { text: 'O excesso de aminoácidos gera mais ureia e outros resíduos nitrogenados para filtrar', correct: true },
        { text: 'Proteínas bloqueiam fisicamente os néfrons',                      correct: false },
        { text: 'A digestão de proteínas consome toda a água renal',               correct: false }
      ],
      explanation: 'Cada grama de proteína metabolizada gera resíduos nitrogenados (ureia, creatinina, ácido úrico) → maior carga filtratória para os rins.'
    }
  ],

  rewards: { xp: 130, gems: 13, badge: '🫘 Especialista Renal' },
  completionMessage: '🫘 Sistema Excretor dominado! Seus rins trabalham muito para você. Próximo: Sistema Reprodutor!',
  nextStage: 'cap8_s06'
};

window.CAP8_S05 = CAP8_S05;
