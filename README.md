# 🎓 EduQuest - Plataforma de Estudos Gamificada

Aprenda Ciências de forma divertida e eficiente, inspirado no Duolingo e IXL Matemática!

## 🚀 Funcionalidades

- **🎮 Gamificação Completa**: XP, níveis, streaks, conquistas e ranking
- **📱 Mobile-First**: Totalmente responsivo para celular, tablet e desktop
- **📚 Conteúdo Estruturado**: Capítulos divididos em 5 etapas de aprendizado
- **🔄 Revisão Inteligente**: Sistema de revisão de erros com spaced repetition
- **🏆 Progresso Visual**: Mapa de progresso estilo Duolingo
- **📊 Mastery Tracking**: Acompanhamento de domínio por tópico (estilo IXL)

## 📖 Estrutura do Conteúdo

Cada capítulo segue a estrutura de 5 etapas:

1. **Introdução + Conceitos** - Apresentação do tema
2. **Conteúdo Principal** - Aprendizado profundo
3. **Prática Guiada** - Exercícios com feedback
4. **Desafios** - Questões de maior dificuldade
5. **Revisão + Simulado** - Consolidação do conhecimento

## 🛠️ Instalação Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/eduquest.git

# Entre na pasta
cd eduquest

# Abra com um servidor local
python3 -m http.server 8000

# Acesse no navegador
http://localhost:8000
```

## 🌐 Deploy no GitHub Pages

O deploy é automático ao fazer push na branch `main` ou `gh-pages`.

### Configuração no GitHub:

1. Vá em **Settings** → **Pages**
2. Em **Source**, selecione:
   - Branch: `gh-pages` ou `main`
   - Folder: `/ (root)`
3. Salve e aguarde o deploy

### Deploy Manual (opcional):

```bash
# Certifique-se de estar na branch gh-pages
git checkout gh-pages

# Faça push
git push origin gh-pages
```

## 📁 Estrutura do Projeto

```
eduquest/
├── index.html              # Ponto de entrada
├── css/
│   ├── styles.css          # Estilos principais
│   ├── main.css            # Layout e componentes
│   └── animations.css      # Animações gamificadas
├── js/
│   ├── app.js              # Aplicação principal (entry point)
│   ├── config.js           # Configurações globais
│   ├── state.js            # Gerenciamento de estado
│   ├── utils.js            # Funções utilitárias
│   ├── audio.js            # Efeitos sonoros
│   ├── components/         # Componentes UI
│   │   ├── QuestionCard.js
│   │   ├── Flashcard.js
│   │   ├── Modal.js
│   │   └── ...
│   └── data/
│       ├── chapters.js     # Estrutura de capítulos
│       ├── ciencias/       # Dados de Ciências
│       │   └── 7ano/
│       │       └── chapters/
│       │           └── cap7_doencas/
│       └── MODELO_TEMPLATE/ # Template para novos capítulos
└── .github/
    └── workflows/
        ├── deploy.yml      # Deploy automático
        └── test.yml        # Testes de validação
```

## 🎯 Como Adicionar Novo Capítulo

Use o `MODELO_TEMPLATE` como base:

```bash
# Copie o template
cp -r js/data/MODELO_TEMPLATE js/data/ciencias/6ano/chapters/cap1_novotitulo/

# Edite os arquivos:
# - metadata.js (dados do capítulo)
# - summaries.js (resumo completo)
# - stages/stage_01.js a stage_05.js (5 etapas)
```

## 🔧 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e animações
- **Vanilla JavaScript** - Sem frameworks, máximo de performance
- **LocalStorage** - Persistência de dados offline
- **GitHub Actions** - CI/CD automático

## 📈 Roadmap

- [ ] Mais matérias (Matemática, História, Geografia)
- [ ] Sistema de conquistas/badges
- [ ] Leaderboard online
- [ ] Modo offline (PWA)
- [ ] Sons e efeitos audiovisuais
- [ ] Relatórios de desempenho detalhados

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

---

Feito com ❤️ para estudantes brasileiros
