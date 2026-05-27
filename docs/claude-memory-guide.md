# Guia de Memória Persistente para Claude Code
**Versão 1.0 — EduQuest / Maio 2026**

> Este documento é um guia prático de implementação para manter contexto entre sessões do Claude Code, evitando perguntas repetitivas sobre stack, convenções e decisões de design.

---

## 1. Arquitetura de Memória

### Modelo em Camadas

```
┌─────────────────────────────────────────────────────────────────┐
│  CAMADA 3 — Memória de Sessão (Context Window)                  │
│  Conversa atual · Arquivos lidos · Edições pendentes            │
├─────────────────────────────────────────────────────────────────┤
│  CAMADA 2 — Memória de Projeto (Persistência Local)             │
│  ~/.claude/projects/<slug>/memory/*.md                          │
│  MEMORY.md (índice) · Carregado a cada sessão                   │
├─────────────────────────────────────────────────────────────────┤
│  CAMADA 1 — Memória de Usuário (Global)                         │
│  CLAUDE.md na raiz · Preferências · Stack padrão                │
└─────────────────────────────────────────────────────────────────┘
```

### Tipos de Memória

| Tipo       | Escopo      | Exemplos                                                      | Validade      |
|------------|-------------|---------------------------------------------------------------|---------------|
| `user`     | Global      | Preferência de ORM, linguagem favorita, estilo de código      | Permanente    |
| `project`  | Repositório | Stack, arquitetura, decisões de design, sprints em andamento  | Revisão anual |
| `feedback` | Sessão→∞    | Correções do usuário, abordagens aprovadas e rejeitadas       | Permanente    |
| `reference`| Projeto     | URLs, IDs de tickets, dashboards externos                     | Por projeto   |

### Estrutura Física (EduQuest)

```
C:\Users\adria\.claude\projects\d--Github-eduquest\
├── memory\
│   ├── MEMORY.md              ← índice (carregado em todo contexto)
│   ├── project-context.md     ← stack, deployment, estrutura
│   ├── architecture.md        ← fluxo de dados, APIs, convenções
│   ├── design-system.md       ← tokens visuais, brand, componentes
│   ├── roadmap-strategic.md   ← sprints, prioridades, o que NÃO fazer
│   ├── supabase-integration.md← tabelas, RLS, client, migrações
│   ├── admin-system.md        ← admin.js, padrões de UI admin
│   ├── bugs-fixed.md          ← bugs históricos evitar regredir
│   └── motion-hud-sprint.md   ← sistema de motion e HUD v2
└── d5beaf16-...jsonl          ← transcrição da sessão (debug)
```

---

## 2. Modelo de Dados Proposto

### Schema de Entrada de Memória

```markdown
---
name: <kebab-case-slug>           # identificador único, sem espaços
description: <uma linha>          # decide relevância no recall
metadata:
  type: user | feedback | project | reference
  created: 2026-05-27
  updated: 2026-05-27
---

<corpo da memória>

**Why:** <por que esta informação importa>
**How to apply:** <como usar esta memória em código/decisões>

[[related-memory-slug]]           # links para memórias relacionadas
```

### Campos Obrigatórios × Recomendados

| Campo         | Obrigatório | Notas                                           |
|---------------|-------------|-------------------------------------------------|
| `name`        | ✅          | slug único, usado como nome de arquivo          |
| `description` | ✅          | exibida no MEMORY.md, 1 linha                   |
| `metadata.type` | ✅        | classifica o tipo de memória                    |
| `body`        | ✅          | conteúdo factual, sem redundância               |
| `Why`         | ✅ (feedback/project) | raciocínio para preservar contexto    |
| `How to apply`| ✅ (feedback/project) | instrução operacional                 |
| `created`     | ✅          | data absoluta (não relativa)                    |
| `links [[]]`  | recomendado | conexão entre memórias relacionadas             |

---

## 3. Fluxo de Leitura/Gravação

### Leitura (início de sessão)

```
1. Claude Code carrega system-reminder com MEMORY.md
2. O índice lista todos os arquivos com hook de 1 linha
3. Claude decide relevância pelo hook e pela conversa atual
4. Lê arquivos relevantes sob demanda (Read tool)
5. Memórias antigas (>7 dias) incluem aviso de validade
```

### Gravação (durante/após sessão)

```
1. Usuário fornece informação nova não óbvia do código
2. Claude avalia: "isso o repo já registra?" → SE NÃO → gravar
3. Claude verifica MEMORY.md: arquivo existente cobre isso?
   ├── SIM → usa Edit para atualizar (não duplica)
   └── NÃO → usa Write para criar novo arquivo
4. Adiciona/atualiza linha em MEMORY.md
5. Confirma gravação com usuário implicitamente (sem perguntar)
```

### Diagrama de Decisão

```
Nova informação detectada
         │
         ▼
É derivável do código/git/CLAUDE.md?
    ├─ SIM → descartar (não salvar)
    └─ NÃO ▼
         │
Já existe memória cobrindo isso?
    ├─ SIM → Edit (atualizar arquivo existente)
    └─ NÃO → Write (criar novo arquivo) + atualizar MEMORY.md
```

---

## 4. Gatilhos de Atualização

### Gatilhos Automáticos (Claude detecta)

| Evento                                    | Ação                                  |
|-------------------------------------------|---------------------------------------|
| Usuário corrige decisão de Claude         | Gravar como `feedback`                |
| Stack ou biblioteca nova introduzida      | Atualizar `project-context`           |
| Bug corrigido que pode regredir           | Adicionar a `bugs-fixed`              |
| Novo sprint iniciado                      | Criar/atualizar `roadmap-strategic`   |
| Decisão de arquitetura documentada        | Atualizar `architecture`              |
| Convenção de código estabelecida          | Atualizar `architecture`              |
| Recurso externo referenciado (URL, ID)    | Criar `reference`                     |

### Gatilhos Manuais (usuário solicita)

```
"Lembre que preferimos X em vez de Y"
"Registre que decidimos usar Z"
"Salva essa decisão para futuras sessões"
"Atualiza o contexto do projeto"
```

### O que NÃO salvar

- ✗ Estrutura de arquivos derivável do código
- ✗ Correções de bugs que já estão no git log
- ✗ Conteúdo que só importa para a sessão atual
- ✗ Duplicatas de informação já em CLAUDE.md
- ✗ Informações que mudam frequentemente sem valor duradouro

---

## 5. Regras de Privacidade e Consentimento

### Opt-In / Opt-Out

```markdown
# CLAUDE.md — seção de privacidade
## Configuração de Memória
memory_enabled: true        # false = Claude nunca grava memória
memory_types:
  user: true                # preferências pessoais
  project: true             # contexto do projeto
  feedback: true            # correções e aprovações
  reference: false          # sem URLs externas salvas
sensitive_patterns:
  - /password|secret|token|key/i   # nunca salvar matches
  - /email.*@/i                    # sem emails em memória
```

### Regras de Retenção

| Tipo       | Retenção padrão | Expiração automática |
|------------|-----------------|----------------------|
| `user`     | Permanente      | Manual               |
| `project`  | 1 ano           | Após repositório arquivado |
| `feedback` | Permanente      | Manual               |
| `reference`| 90 dias         | Verificar se URL ainda válida |

### Dados Sensíveis — Nunca Salvar

```
🚫 Chaves de API, tokens, senhas, segredos
🚫 Dados pessoais identificáveis (CPF, RG, telefone)
🚫 Credentials de banco de dados
🚫 Variáveis de ambiente com valores reais
🚫 Conteúdo de arquivos .env
```

### Criptografia (recomendação)

Para projetos com dados sensíveis, use encryption at rest para o diretório de memória:
```powershell
# Windows — BitLocker ou EFS no diretório de memória
# macOS — FileVault cobre ~/.claude automaticamente
# Linux — ecryptfs ou LUKS para /home
```

---

## 6. Estratégias de Recuperação de Contexto com Prompts

### Prompt de Inicialização de Sessão

```
Estou retomando o desenvolvimento do projeto EduQuest.
Por favor:
1. Leia MEMORY.md para entender o contexto atual
2. Identifique os arquivos de memória mais relevantes para esta sessão
3. Confirme: qual é o sprint atual e quais sprints foram concluídos?
4. Confirme: qual é a pilha tecnológica e convenções de código?
NÃO pergunte sobre informações que já estão na memória.
```

### Prompt de Recall Seletivo

```
Antes de prosseguir com [TAREFA], verifique:
- memory/architecture.md: fluxo relevante para esta tarefa
- memory/bugs-fixed.md: já corrigimos algo similar?
- memory/roadmap-strategic.md: isso está no escopo do sprint atual?
```

### Prompt de Atualização de Contexto

```
Esta sessão introduziu as seguintes novidades:
- [LISTA DE DECISÕES/MUDANÇAS]
Atualize os arquivos de memória relevantes antes de encerrar.
```

### Prompt de Validação de Memória

```
Responda sem consultar código:
1. Qual é o nome do branch de produção?
2. Qual é o nome-chave do localStorage?
3. Qual é a estrutura de um objeto Stage?
4. Quais tabelas existem no Supabase?
5. Qual o padrão de naming para novos stages?
SE errar qualquer item, leia os arquivos de memória antes de continuar.
```

---

## 7. Exemplos de Entradas de Memória

### Exemplo: Preferência de ORM (`user`)

```markdown
---
name: orm-preference
description: Preferência de ORM — Drizzle rejeitado, usando Supabase cliente direto
metadata:
  type: user
---

Preferência: cliente Supabase direto (`supabase-js`) em vez de Drizzle ou Prisma.

**Why:** EduQuest usa Vanilla JS sem Node.js no frontend. Drizzle e Prisma requerem
bundler ou Node runtime que contradiz o deploy estático no GitHub Pages.

**How to apply:** Sempre usar `window.SupaDB.*` para queries. Nunca sugerir
Prisma/Drizzle/TypeORM. Para migrações, usar o diretório `supabase/migrations/`.
```

### Exemplo: Decisão de Arquitetura (`project`)

```markdown
---
name: architecture
description: SPA hash-routing, Config→State→Router→GameEngine, stage data structure
metadata:
  type: project
---

**Decisão:** Vanilla JS sem framework (sem React, Vue, Svelte).

**Why:** Deploy estático no GitHub Pages. Zero build step. Bundler violaria o
princípio de simplicidade do projeto e complicaria o deploy.

**How to apply:** Não sugerir bundlers, frameworks ou build tools. Tudo como
`<script src="">` em `index.html`. Módulos via IIFEs expostos como `window.*`.

[[project-context]]
```

### Exemplo: Biblioteca Rejeitada (`feedback`)

```markdown
---
name: rejected-chart-libraries
description: Chart.js e D3 rejeitados — usar CSS puro para visualizações admin
metadata:
  type: feedback
---

Chart.js e D3.js foram considerados e rejeitados para o admin dashboard.

**Why:** Adicionariam ~150KB ao bundle sem bundler. O admin usa barras em CSS
puro (`admin-bar-chart`, `admin-sparkline`) que são suficientes para MVP.

**How to apply:** Não sugerir bibliotecas externas para charts no admin. Manter
as funções `barChart()` e `sparkline()` em `admin.js`. Se charts interativos
forem necessários, introduzir apenas com bundler e aprovação explícita.
```

### Exemplo: Convenção de Naming (`project`)

```markdown
---
name: stage-naming-conventions
description: Convenções de naming para arquivos de stage e IDs
metadata:
  type: project
---

**Padrão de ID de stage:** `{subject_prefix}_{chapter_prefix}_s{NN}` ou `s{NN}`
- Regular: `geo_cap6_s01`, `esp_gas_s01`, `cap7_s01`
- Boss: `..._sboss`
- Final: `..._sfinal`
- N3 bonus: `..._n3_bonus`

**Padrão de varName (JS global):** ID em UPPER_SNAKE_CASE
- `geo_cap6_s01` → `GEO_CAP6_S01`

**Padrão de arquivo:** `/js/data/{subject}/{grade}/chapters/{chapter_id}/stages/{stage_id}.js`

**How to apply:** Seguir este padrão para novos stages. O service worker usa os
paths exatos — adicionar ao `CACHE_SHELL` em `sw.js` após criar o arquivo.
```

### Exemplo: Bug Histórico (`feedback`)

```markdown
---
name: wrong-answer-field-names
description: q.question era undefined — campo correto é q.prompt
metadata:
  type: feedback
---

Em `game-engine.js` `_persistWrongAnswer()`, os campos do objeto questão são:
- `q.prompt` (não `q.question`)
- `q.options[].correct` (boolean) — não `q.correctIndex` (int)

**Why:** O formato de questão mudou em Sprint 3 mas havia compatibilidade
retroativa em `_normalizeQuestion()`. O campo `question` existe apenas no
formato legado (format B), o formato novo (format A) usa `prompt`.

**How to apply:** Sempre usar `q.prompt || q.question` como fallback seguro.
Para opção correta: `q.options?.find(o => o.correct)?.text`.

[[architecture]]
```

---

## 8. Critérios de Avaliação

### Métricas de Eficácia da Memória

| Métrica                          | Meta    | Como medir                                      |
|----------------------------------|---------|-------------------------------------------------|
| Perguntas repetitivas evitadas   | 0/sessão| Contar quantas vezes Claude pergunta sobre stack|
| Tempo até primeira contribuição  | <2min   | Da abertura da sessão à primeira edição de código|
| Regressões de bugs conhecidos    | 0       | Bugs em `bugs-fixed.md` que voltaram            |
| Cobertura de decisões            | >80%    | % de decisões do projeto documentadas           |
| Tamanho do MEMORY.md             | <50 linhas | Índice conciso, não exaustivo               |
| Freshness (%) entradas recentes  | >70%    | Entradas atualizadas nos últimos 30 dias        |

### Teste de Validação de Memória

Execute ao início de cada nova sessão (sem consultar código):

```
CENÁRIO 1 — Stack
Q: Qual framework JS é usado?
A esperada: Nenhum — Vanilla JS

CENÁRIO 2 — Deploy
Q: Como fazer deploy?
A esperada: git push para branch gh-pages (GitHub Pages)

CENÁRIO 3 — Banco de dados
Q: Qual ORM é usado?
A esperada: Nenhum — supabase-js cliente direto

CENÁRIO 4 — Naming
Q: Qual o localStorage key do app?
A esperada: 'eduquest_v5'

CENÁRIO 5 — Anti-padrão
Q: Posso usar React neste projeto?
A esperada: Não — violaria o princípio de deploy estático

CENÁRIO 6 — Supabase
Q: Como o admin lê dados de analytics?
A esperada: Via RPC eq_analytics_dashboard() (SECURITY DEFINER)

CENÁRIO 7 — Convenção
Q: Qual o padrão de ID para um boss stage de Espanhol Gastronomia?
A esperada: esp_gas_sboss
```

---

## 9. API Conceitual de Integração

### Interface de Memória (TypeScript conceitual)

```typescript
interface MemoryEntry {
  name: string;             // slug kebab-case
  description: string;      // 1 linha para o índice
  type: 'user' | 'project' | 'feedback' | 'reference';
  body: string;             // conteúdo markdown
  why?: string;             // raciocínio
  howToApply?: string;      // instrução operacional
  links?: string[];         // [[slugs]] de memórias relacionadas
  created: string;          // ISO date
  updated: string;          // ISO date
}

interface MemoryAPI {
  // Leitura
  index(): Promise<MemoryEntry[]>;
  read(name: string): Promise<MemoryEntry | null>;
  search(query: string): Promise<MemoryEntry[]>;

  // Escrita
  write(entry: MemoryEntry): Promise<void>;
  update(name: string, patch: Partial<MemoryEntry>): Promise<void>;
  delete(name: string): Promise<void>;

  // Utilidades
  isDuplicate(entry: MemoryEntry): Promise<boolean>;
  isOutdated(name: string, maxAgeDays: number): Promise<boolean>;
  exportContext(names: string[]): Promise<string>;  // prompt-ready
}
```

### Fluxo de Integração com Claude Code

```
Claude Code Session
      │
      ▼
system-reminder injects MEMORY.md
      │
      ▼
Claude reads relevant .md files via Read tool
      │
      ▼
Session work proceeds with full context
      │
      ▼
New information detected
      │
      ├─ Write/Edit memory files
      └─ Update MEMORY.md index
```

### Hooks de Integração

```javascript
// .claude/hooks/pre-session.js (conceitual)
export async function onSessionStart(context) {
  const memories = await Memory.search(context.currentTask);
  return memories.map(m => m.body).join('\n\n');
}

// .claude/hooks/post-session.js (conceitual)
export async function onSessionEnd(decisions) {
  for (const decision of decisions) {
    if (!await Memory.isDuplicate(decision)) {
      await Memory.write(decision);
    }
  }
}
```

---

## 10. Template de Prompt Reutilizável para Claude Code

### Template Mestre de Inicialização

```
# Contexto de Sessão — EduQuest
Data: {{DATE}}
Branch: {{BRANCH}}
Tarefa: {{TASK_DESCRIPTION}}

## Instruções de Memória
1. Leia `MEMORY.md` e identifique os 3-5 arquivos mais relevantes
2. Leia esses arquivos antes de iniciar
3. NÃO pergunte sobre stack, bibliotecas ou convenções já documentadas
4. Para qualquer nova decisão de design, grave em memória antes de encerrar

## Contexto EduQuest (resumo rápido)
- Stack: Vanilla JS, Supabase, GitHub Pages
- Branch: gh-pages (produção)
- Admin: window.EduAdmin (src/admin/admin.js)
- Backend: window.SupaDB (js/supabase-client.js)
- Engine: window.GameEngine (js/game-engine.js)
- Conteúdo: window.CHAPTERS_REGISTRY (populado pelos metadata.js)

## Regras de Código
- Não introduzir bundlers, frameworks ou npm packages sem aprovação
- SW cache: sempre bumpar CACHE_NAME quando scripts/CSS novos são adicionados
- Migração Supabase: sempre criar arquivo .sql em supabase/migrations/
- Nomes de stage: {subject}_{chapter}_s{NN}, boss=_sboss, final=_sfinal
```

### Template de Encerramento de Sessão

```
# Encerramento de Sessão — Atualizar Memória

Itens para gravar (verifique cada um):
- [ ] Novas decisões de arquitetura → architecture.md
- [ ] Bugs corrigidos permanentemente → bugs-fixed.md
- [ ] Sprints iniciados/concluídos → roadmap-strategic.md
- [ ] Novos padrões de código → architecture.md
- [ ] Correções do usuário → feedback/*.md
- [ ] Novas tabelas/funções Supabase → supabase-integration.md
- [ ] URLs/recursos externos → reference/*.md

Para cada item: criar/atualizar arquivo de memória e linha no MEMORY.md.
```

### Template de Prompt de Revisão de Sprint

```
Revisar sprint anterior:
1. Leia memory/roadmap-strategic.md — qual era o objetivo?
2. Leia os arquivos de código relevantes para verificar implementação
3. Identifique pendências: bugs, edge cases, código comentado, TODOs
4. Corrija todas as pendências encontradas
5. Confirme: "Sprint [X] concluído sem ressalvas" ou liste o que ficou pendente
6. Atualize memory/roadmap-strategic.md com o status atualizado
7. Prossiga com o próximo sprint planejado
```

---

## Apêndice — Memórias Específicas do EduQuest

### Decisões de Design que Não São Óbvias no Código

| Decisão                            | Razão                                                        |
|------------------------------------|--------------------------------------------------------------|
| Sem React/Vue                      | Deploy estático, zero build step                             |
| Supabase RPC para admin analytics  | RLS bloqueia leitura cross-user; SECURITY DEFINER é correto  |
| Mnemonics em JSONB na tabela stages| Não vale tabela separada — arrays pequenos, sem indexação     |
| SW cache manual (não Workbox)      | Workbox precisaria de bundler                                 |
| `window.*` para módulos            | IIFE pattern sem module bundler                              |
| Questão format A e B coexistem     | Legado format B ainda existe; `_normalizeQuestion()` faz bridge|
| `localStorage('eduquest_v5')`      | v5 = versão do schema de estado; bump ao mudar estrutura     |

---

*Documento gerado em 2026-05-27. Atualizar após cada sprint significativo.*
