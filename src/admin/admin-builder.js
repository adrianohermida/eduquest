/* ════════════════════════════════════════════════════════════
   EDUQUEST ADMIN AI BUILDER v1.0
   Geração de conteúdo via Claude API + fluxo de aprovação editorial
   ════════════════════════════════════════════════════════════ */
'use strict';

window.EduBuilder = (() => {

    /* ── State ──────────────────────────────────────────────── */
    let _tab         = 'source';
    let _sourceText  = '';
    let _generated   = null;
    let _loading     = false;
    let _activeRevItem = null;

    let _bState = {
        subject: '', grade: '7º Ano', difficulty: 'medium',
        targetType: 'questions', targetChapter: '', count: 8,
        /* ── Extended parameters (Sprint 9 / Spanish / LE) ── */
        language: 'pt',           // 'pt' = Portuguese output | 'es' = Spanish output
        stageType: 'normal',      // 'normal' | 'boss' | 'final' | 'n3_bonus'
        grammarFocus: '',         // '' | 'muy_mucho' | 'verbos_2conj' | 'verbos_3conj' | 'ortografia_mn' | 'ortografia_rr' | 'numerales' | 'apocope'
        adaptiveN1: 85,           // N1 unlock threshold (%) — default 85, LE=80
        adaptiveN2: 80,           // N2 unlock threshold (%) — default 80, LE=75
        adaptiveN3: 70,           // N3 target (%) — no gate, but sets star threshold
        sensoryTrigger: '',       // icon/color hint for topic UX (e.g. '🍳 amber' for cooking)
        subjectPreset: '',        // preset key that auto-fills language + thresholds
    };

    /* ── Subject Presets ────────────────────────────────────── */
    const SUBJECT_PRESETS = {
        espanhol: {
            label: '🇪🇸 Espanhol/LE', language:'es',
            adaptiveN1:80, adaptiveN2:75, adaptiveN3:70,
            note:'Língua Estrangeira: limites mais baixos (80/75/70%) pois LE exige mais repetição.'
        },
        ingles: {
            label: '🇬🇧 Inglês/LE', language:'en',
            adaptiveN1:80, adaptiveN2:75, adaptiveN3:70,
            note:'Língua Estrangeira: mesmos limiares de LE.'
        },
        ciencias: {
            label: '🔬 Ciências', language:'pt',
            adaptiveN1:85, adaptiveN2:80, adaptiveN3:70,
            note:'Padrão STEM: 85/80/70%.'
        },
        matematica: {
            label: '📐 Matemática', language:'pt',
            adaptiveN1:85, adaptiveN2:80, adaptiveN3:70,
            note:'Padrão STEM: 85/80/70%.'
        },
        default: {
            label: '📚 Padrão', language:'pt',
            adaptiveN1:85, adaptiveN2:80, adaptiveN3:70,
            note:'Limiares padrão: 85/80/70%.'
        },
    };

    /* ── Grammar Focus Options (for LE) ────────────────────── */
    const GRAMMAR_FOCUS = [
        { id:'',              label:'— Nenhum foco específico —' },
        { id:'muy_mucho',     label:'MUY vs MUCHO (regra PAMM)' },
        { id:'verbos_2conj',  label:'Verbos -ER irregulares (e→ie, o→ue, TENGO)' },
        { id:'verbos_3conj',  label:'Verbos -IR irregulares (e→ie, e→i, o→ue)' },
        { id:'ortografia_mn', label:'Ortografia M/N (M antes de P/B)' },
        { id:'ortografia_rr', label:'Ortografia R/RR (pares mínimos, apócope)' },
        { id:'numerales',     label:'Numerales (ordinais, fracionários, coletivos)' },
        { id:'apocope',       label:'Apócope (buen/gran/primer/tercer/cualquier/san)' },
        { id:'comidas',       label:'Vocabulário: Comidas del Día' },
        { id:'deportes',      label:'Vocabulário: Deportes Olímpicos' },
    ];

    /* ── Content Type Catalogue ─────────────────────────────── */
    const CONTENT_TYPES = [
        { id:'full_stage',   icon:'🎮', label:'Estágio Completo',    desc:'Questões + flashcards + resumo + objetivos em uma geração' },
        { id:'full_stage_es',icon:'🇪🇸', label:'Estágio Completo ES', desc:'Estágio completo em Espanhol — inclui mnemonics + flashcards em ES' },
        { id:'questions',    icon:'❓', label:'Questões',             desc:'Múltipla escolha, V/F, lacuna e resposta curta' },
        { id:'flashcards',   icon:'🃏', label:'Flashcards',           desc:'Pares pergunta/resposta para memorização' },
        { id:'mnemonics',    icon:'🧠', label:'Mnemônicos',           desc:'Regras de memória: trigger + frase mnemônica pedagógica' },
        { id:'summary',      icon:'📋', label:'Cards de Resumo',      desc:'Blocos explicativos com ícone, título e texto' },
        { id:'objectives',   icon:'🎯', label:'Objetivos',            desc:'Objetivos de aprendizagem mensuráveis (BNCC-aligned)' },
        { id:'true_false',   icon:'✅', label:'Verdadeiro/Falso',     desc:'Afirmações para classificar como V ou F' },
        { id:'fill_blank',   icon:'✍️', label:'Complete a Lacuna',    desc:'Frases com ___ para preencher (com distractores)' },
        { id:'matching',     icon:'🔗', label:'Correspondência',      desc:'Coluna A → Coluna B: conectar conceitos e definições' },
        { id:'n3_bonus',     icon:'🏆', label:'N3 Bônus Vestibular',  desc:'15 questões de alto nível (ENEM/FUVEST) para o modo N3 de batalha' },
        { id:'verbos_conj',  icon:'🔄', label:'Conjugação Verbal',    desc:'Tabelas de conjugação + frases de exemplo (ideal para LE)' },
    ];

    /* ── Approval Helpers ───────────────────────────────────── */
    const APPR_KEY = 'eq-approval-store';

    function _getStore()        { try { return JSON.parse(localStorage.getItem(APPR_KEY)||'{}'); } catch { return {}; } }
    function _saveStore(d)      { localStorage.setItem(APPR_KEY, JSON.stringify(d)); }
    function _getItemAppr(key)  { return _getStore()[key] || { status:'draft', comments:[], ts:Date.now(), author:'Admin' }; }

    function _setStatus(key, status) {
        const s = _getStore(); if (!s[key]) s[key] = { status, comments:[], ts:Date.now(), author:'Admin' };
        s[key].status = status; s[key].ts = Date.now(); _saveStore(s);
    }

    function _addComment(key, text, author) {
        const s = _getStore(); if (!s[key]) s[key] = { status:'draft', comments:[], ts:Date.now(), author:'Admin' };
        s[key].comments.push({ text, author: author||'Admin', ts: Date.now() }); _saveStore(s);
    }

    /* ── Claude API ─────────────────────────────────────────── */
    const AKEY = 'eq-claude-key';
    function _getKey() { return localStorage.getItem(AKEY)||''; }
    function _saveKey(k) { localStorage.setItem(AKEY,k); }

    async function _claude(userMsg) {
        const key = _getKey(); if (!key) throw new Error('NO_KEY');
        const res = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'x-api-key': key,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json',
                'anthropic-dangerous-direct-browser-access': 'true',
            },
            body: JSON.stringify({
                model: 'claude-haiku-4-5-20251001',
                max_tokens: 4096,
                system: 'Você é especialista em pedagogia e conteúdo educativo gamificado para ensino fundamental. Responda APENAS com JSON válido, sem markdown, sem explicações fora do JSON.',
                messages: [{ role:'user', content: userMsg }],
            }),
        });
        if (!res.ok) { const e = await res.json().catch(()=>{}); throw new Error(e?.error?.message||`HTTP ${res.status}`); }
        const d = await res.json();
        return d.content?.[0]?.text || '';
    }

    /* ── Prompt Builder ─────────────────────────────────────── */
    function _buildPrompt(type, text, opts) {
        const ctx = `Analise o conteúdo educativo abaixo e gere material estruturado para uma plataforma gamificada.\n\nCONTEÚDO DE REFERÊNCIA:\n---\n${text.substring(0,6000)}\n---\n\nContexto: Matéria "${opts.subject||'Geral'}" | Ano: ${opts.grade||'7º Ano'} | Dificuldade: ${opts.difficulty||'medium'} | Língua: Português (Brasil)\n\n`;
        const schemas = {
            questions:   `Gere ${opts.count||8} questões variadas (inclua múltipla escolha, V/F e lacuna quando possível). JSON:\n{"questions":[{"prompt":"","type":"multiple_choice|true_false|fill_blank|short_answer","options":[{"text":"","correct":true|false}],"answer":"(para fill_blank/short_answer)","explanation":""}]}`,
            full_stage:  `Gere um estágio completo de aprendizagem. JSON:\n{"title":"","icon":"emoji","difficulty":"easy|medium|hard","estimatedTime":15,"learningObjectives":[""],"summary":{"content":[{"icon":"emoji","title":"","text":""}],"flashcards":[{"q":"","a":""}]},"questions":[{"prompt":"","type":"multiple_choice","options":[{"text":"","correct":false}],"explanation":""}]}`,
            flashcards:  `Gere ${opts.count||10} flashcards. JSON:\n{"flashcards":[{"q":"","a":""}]}`,
            summary:     `Gere ${opts.count||5} cards de resumo com macetes. JSON:\n{"content":[{"icon":"emoji","title":"","text":"texto longo com exemplos e macetes"}]}`,
            objectives:  `Gere ${opts.count||5} objetivos de aprendizagem (verbos de Bloom). JSON:\n{"objectives":[""]}`,
            true_false:  `Gere ${opts.count||8} afirmações V/F. JSON:\n{"questions":[{"prompt":"","type":"true_false","correct":true,"explanation":""}]}`,
            fill_blank:  `Gere ${opts.count||6} questões de lacuna. Use ___ na frase. JSON:\n{"questions":[{"prompt":"frase com ___","type":"fill_blank","answer":"","options":[{"text":"","correct":false}],"explanation":""}]}`,
            matching:    `Gere ${opts.count||5} pares. JSON:\n{"pairs":[{"left":"conceito","right":"definição"}]}`,
        };
        return ctx + (schemas[type]||schemas.questions) + '\n\nRetorne APENAS o JSON válido.';
    }

    /* ── PDF / File Reading ─────────────────────────────────── */
    async function _readFile(file) {
        if (file.name.match(/\.(txt|md)$/i)) {
            return new Promise((res,rej) => {
                const r = new FileReader(); r.onload = e=>res(e.target.result); r.onerror = rej;
                r.readAsText(file,'UTF-8');
            });
        }
        if (file.name.match(/\.pdf$/i) && typeof AIStudio !== 'undefined') {
            return AIStudio.extractFromPDF(file);
        }
        return null; // DOCX etc — instruct user to copy-paste
    }

    /* ── Render ─────────────────────────────────────────────── */
    function render(container) {
        container.innerHTML = _html();
    }

    function _html() {
        const hasKey = !!_getKey();
        const queueLen = Object.values(_getStore()).filter(d=>d.status==='review').length;
        return `
        <div class="admin-page-header">
            <div><div class="admin-page-title">IA & Builder</div>
            <div class="admin-page-sub">Geração de conteúdo com Claude AI · fluxo de aprovação editorial</div></div>
            <div class="admin-page-actions">
                <button class="admin-topbar-btn admin-topbar-btn-ghost" onclick="EduBuilder._openKeyModal()">${hasKey?'🔑 API Key ✓':'⚠️ Configurar API Key'}</button>
            </div>
        </div>
        <div class="bld-tabs">
            ${[['source','📥 Fonte'],['generate','✨ Gerar'],['review',`📋 Revisão${queueLen?` <span class="bld-badge">${queueLen}</span>`:''}`,],['monitor','📊 Monitor']].map(([id,lbl])=>`
            <button onclick="EduBuilder._switchTab('${id}')" class="bld-tab${_tab===id?' active':''}">${lbl}</button>`).join('')}
        </div>
        <div id="bld-body">
            ${_tab==='source'   ? _htmlSource()   :
              _tab==='generate' ? _htmlGenerate() :
              _tab==='review'   ? _htmlReview()   : _htmlMonitor()}
        </div>`;
    }

    /* ── Source Tab ─────────────────────────────────────────── */
    function _htmlSource() {
        return `
        <div class="bld-grid2">
            <div class="admin-section-card">
                <div class="admin-section-card-header"><div class="admin-chart-title">📄 Fonte de Conteúdo</div></div>
                <div class="bld-dropzone" id="bld-drop" onclick="document.getElementById('bld-file').click()"
                ondragover="event.preventDefault();this.classList.add('active')" ondragleave="this.classList.remove('active')"
                ondrop="EduBuilder._onDrop(event)">
                    <div style="font-size:2.4rem;margin-bottom:8px">📂</div>
                    <div style="font-weight:700;color:#0f172a">Arraste ou clique para enviar arquivo</div>
                    <div style="font-size:0.78rem;color:#64748b;margin-top:4px">.txt, .md — leitura automática · .pdf — extração via PDF.js</div>
                    <div style="font-size:0.72rem;color:#94a3b8;margin-top:2px">.docx → abra no Word e copie o texto abaixo</div>
                    <input type="file" id="bld-file" style="display:none" accept=".txt,.md,.pdf,.docx" onchange="EduBuilder._onFile(event)">
                </div>
                <div id="bld-fname" style="display:none;font-size:0.8rem;color:#64748b;padding:6px 0"></div>
                <div style="text-align:center;color:#94a3b8;font-size:0.78rem;padding:8px 0">— ou cole o texto diretamente —</div>
                <textarea id="bld-src" rows="14"
                placeholder="Cole aqui o conteúdo do livro, apostila, PDF copiado, artigo científico, plano de aula..."
                oninput="EduBuilder._srcChange(this.value)"
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:12px;border-radius:8px;font-size:0.82rem;resize:vertical;box-sizing:border-box;line-height:1.7">${_e(_sourceText)}</textarea>
                <div style="font-size:0.72rem;color:#64748b;text-align:right;margin-top:4px" id="bld-chars">${_sourceText.length} caracteres</div>
            </div>
            <div>
                <div class="admin-section-card" style="margin-bottom:16px">
                    <div class="admin-section-card-header"><div class="admin-chart-title">🎯 Contexto</div></div>
                    <div style="display:flex;flex-direction:column;gap:10px;padding-bottom:4px">
                        <div><label class="bld-label">Matéria / Disciplina</label>
                            <input type="text" value="${_e(_bState.subject)}" oninput="EduBuilder._bs('subject',this.value)" placeholder="ex: Ciências, História..."
                            style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:0.85rem;box-sizing:border-box"></div>
                        <div><label class="bld-label">Ano Escolar</label>
                            <select onchange="EduBuilder._bs('grade',this.value)" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px">
                            ${['6º Ano','7º Ano','8º Ano','9º Ano','1º EM','2º EM','3º EM'].map(g=>`<option ${_bState.grade===g?'selected':''}>${g}</option>`).join('')}</select></div>
                        <div><label class="bld-label">Dificuldade</label>
                            <select onchange="EduBuilder._bs('difficulty',this.value)" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px">
                            ${['easy','medium','hard'].map(d=>`<option value="${d}" ${_bState.difficulty===d?'selected':''}>${d}</option>`).join('')}</select></div>
                        <button onclick="EduBuilder._switchTab('generate')" class="admin-topbar-btn admin-topbar-btn-primary" style="width:100%;padding:10px"
                        ${_sourceText.trim().length<20?'disabled':''}>Avançar para Gerar →</button>
                    </div>
                </div>
                <div style="background:#fef3c7;border:1px solid #f59e0b;border-radius:10px;padding:14px">
                    <div style="font-weight:700;font-size:0.82rem;color:#92400e;margin-bottom:8px">💡 Dicas para melhor resultado</div>
                    <ul style="margin:0;padding-left:16px;font-size:0.78rem;color:#78350f;line-height:1.9">
                        <li>PDF: abra no browser → Ctrl+A → Ctrl+C → cole aqui</li>
                        <li>Texto de referência ideal: 300–2000 palavras</li>
                        <li>Inclua exemplos, definições e conceitos-chave</li>
                        <li>Use arquivos .txt ou .md para upload direto</li>
                    </ul>
                </div>
            </div>
        </div>`;
    }

    /* ── Generate Tab ───────────────────────────────────────── */
    function _htmlGenerate() {
        if (!_sourceText.trim()) return `
        <div style="text-align:center;padding:60px;color:#64748b">
            <div style="font-size:3rem;margin-bottom:12px">📥</div>
            <div style="font-weight:600;margin-bottom:10px">Nenhuma fonte carregada</div>
            <button onclick="EduBuilder._switchTab('source')" class="admin-topbar-btn admin-topbar-btn-primary">← Fonte de Conteúdo</button>
        </div>`;
        const hasKey = !!_getKey();
        const chapters = Object.values(window.CHAPTERS_REGISTRY||{});
        return `
        <div class="bld-gen-layout">
            <div>
                <div class="admin-section-card" style="margin-bottom:16px">
                    <div class="admin-section-card-header"><div class="admin-chart-title">✨ O que gerar?</div></div>
                    <div style="padding-bottom:8px">
                        ${CONTENT_TYPES.map(ct=>`
                        <label class="bld-type-opt${_bState.targetType===ct.id?' sel':''}">
                            <input type="radio" name="bld-ct" value="${ct.id}" ${_bState.targetType===ct.id?'checked':''} onchange="EduBuilder._bs('targetType',this.value);this.closest('label').parentNode.querySelectorAll('.bld-type-opt').forEach(l=>l.classList.remove('sel'));this.closest('label').classList.add('sel')" style="accent-color:#f97316;flex-shrink:0;margin-top:2px">
                            <div><div style="font-size:0.85rem;font-weight:700;color:#f1f5f9">${ct.icon} ${ct.label}</div>
                            <div style="font-size:0.72rem;color:#64748b;margin-top:1px">${ct.desc}</div></div>
                        </label>`).join('')}
                    </div>
                </div>
                <div class="admin-section-card" style="margin-bottom:16px">
                    <div class="admin-section-card-header"><div class="admin-chart-title">📦 Destino</div></div>
                    <div style="display:flex;flex-direction:column;gap:10px;padding-bottom:4px">
                        <div><label class="bld-label">Adicionar ao Capítulo</label>
                            <select onchange="EduBuilder._bs('targetChapter',this.value)" style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px">
                                <option value="">— Criar como rascunho independente —</option>
                                ${chapters.map(c=>`<option value="${c.id}" ${_bState.targetChapter===c.id?'selected':''}>${c.icon||'📚'} ${c.title}</option>`).join('')}
                            </select></div>
                        <div><label class="bld-label">Quantidade de itens: <strong id="bld-cv" style="color:#f97316">${_bState.count}</strong></label>
                            <input type="range" min="3" max="20" value="${_bState.count}" oninput="EduBuilder._bs('count',parseInt(this.value));document.getElementById('bld-cv').textContent=this.value" style="width:100%;accent-color:#f97316"></div>
                    </div>
                </div>
                ${hasKey ? `<button onclick="EduBuilder._generate()" id="bld-gen-btn" class="admin-topbar-btn admin-topbar-btn-primary" style="width:100%;padding:12px;font-size:0.95rem">✨ Gerar com Claude AI</button>` : `
                <div style="background:#fef3c7;border:1px solid #f59e0b;border-radius:8px;padding:14px;text-align:center">
                    <div style="font-size:0.82rem;color:#92400e;font-weight:700;margin-bottom:8px">⚠️ API Key não configurada</div>
                    <button onclick="EduBuilder._openKeyModal()" class="admin-topbar-btn admin-topbar-btn-primary" style="width:100%">🔑 Configurar Claude API Key</button>
                </div>`}
            </div>
            <div class="admin-section-card" style="min-height:500px">
                <div class="admin-section-card-header">
                    <div class="admin-chart-title">👁 Preview Gerado</div>
                    ${_generated ? `<button onclick="EduBuilder._sendReview()" class="admin-topbar-btn admin-topbar-btn-primary" style="padding:4px 14px;font-size:0.78rem">Enviar para Revisão →</button>` : ''}
                </div>
                <div id="bld-preview">${_loading ? `<div style="text-align:center;padding:60px"><div class="bld-spin">⚡</div><div style="color:#64748b;margin-top:10px">Gerando com Claude AI…</div></div>` : _generated ? _htmlPreview() : `<div style="text-align:center;padding:60px;color:#64748b"><div style="font-size:2.5rem;margin-bottom:10px">🤖</div>Configure e clique em Gerar</div>`}</div>
            </div>
        </div>`;
    }

    function _htmlPreview() {
        if (!_generated) return '';
        const g = _generated;
        let h = '';
        if (g.title) h += `<div style="background:#0f172a;border-radius:8px;padding:12px;margin-bottom:12px"><div style="font-size:1.05rem;font-weight:700;color:#f97316">${g.icon||'📚'} ${_e(g.title)}</div><div style="font-size:0.75rem;color:#64748b;margin-top:2px">${g.difficulty||''} · ${g.estimatedTime||'?'}min</div></div>`;
        if (g.questions?.length) {
            h += `<div class="bld-preview-label">❓ Questões (${g.questions.length})</div>`;
            h += g.questions.map((q,i)=>`<div class="bld-q-card"><div class="bld-q-num">Q${i+1} · ${q.type||'múltipla escolha'}</div>
                <div class="bld-q-prompt">${_e(q.prompt||'')}</div>
                ${(q.options||[]).map(o=>`<div style="font-size:0.78rem;color:${o.correct?'#22c55e':'#94a3b8'};padding:2px 0">${o.correct?'✓':'○'} ${_e(o.text||'')}</div>`).join('')}
                ${q.answer?`<div style="font-size:0.78rem;color:#22c55e;margin-top:4px">✓ ${_e(q.answer)}</div>`:''}
                <div class="bld-q-expl">${_e(q.explanation||'')}</div></div>`).join('');
        }
        if (g.flashcards?.length) {
            h += `<div class="bld-preview-label">🃏 Flashcards (${g.flashcards.length})</div>`;
            h += g.flashcards.map(fc=>`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:7px;background:#0f172a;border-radius:6px;margin-bottom:4px;font-size:0.78rem"><div style="color:#94a3b8"><strong>P:</strong> ${_e(fc.q||'')}</div><div style="color:#22c55e"><strong>R:</strong> ${_e(fc.a||'')}</div></div>`).join('');
        }
        if (g.content?.length) {
            h += `<div class="bld-preview-label">📋 Cards de Resumo (${g.content.length})</div>`;
            h += g.content.map(c=>`<div style="border-left:3px solid #f97316;padding:8px 12px;background:#0f172a;border-radius:0 6px 6px 0;margin-bottom:6px"><div style="font-weight:700;font-size:0.85rem;color:#f1f5f9">${c.icon||''} ${_e(c.title||'')}</div><div style="font-size:0.78rem;color:#94a3b8;margin-top:3px">${_e((c.text||'').substring(0,200))}</div></div>`).join('');
        }
        if (g.objectives?.length) { h += `<div class="bld-preview-label">🎯 Objetivos</div>${g.objectives.map(o=>`<div style="font-size:0.82rem;color:#f1f5f9;padding:3px 0">• ${_e(o)}</div>`).join('')}`; }
        if (g.pairs?.length) {
            h += `<div class="bld-preview-label">🔗 Correspondências (${g.pairs.length})</div>`;
            h += g.pairs.map(p=>`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.78rem;padding:5px 0;border-bottom:1px solid #334155"><div style="color:#f1f5f9">${_e(p.left||'')}</div><div style="color:#22c55e">→ ${_e(p.right||'')}</div></div>`).join('');
        }
        return h || `<div style="color:#94a3b8;font-style:italic;padding:20px">Nenhum conteúdo estruturado detectado na resposta. Tente novamente.</div>`;
    }

    /* ── Review Tab ─────────────────────────────────────────── */
    function _htmlReview() {
        const store = _getStore();
        const items = Object.entries(store).sort((a,b)=>(b[1].ts||0)-(a[1].ts||0));
        const SC = { draft:'grey', review:'blue', approved:'green', published:'orange', rejected:'red' };
        const SL = { draft:'Rascunho', review:'Em Revisão', approved:'Aprovado', published:'Publicado', rejected:'Rejeitado' };
        if (!items.length) return `<div style="text-align:center;padding:60px;color:#64748b"><div style="font-size:3rem;margin-bottom:10px">📋</div>Nenhum item na fila</div>`;
        return `
        <div class="bld-review-layout">
            <div>
                ${items.map(([k,d])=>{
                    const sd = window[k]||{}; const title = sd.title||k;
                    return `<div id="rv-${k}" onclick="EduBuilder._selectReview('${k}')" class="bld-rev-card${_activeRevItem===k?' sel':''}">
                        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
                            <div style="min-width:0"><div style="font-weight:700;color:#f1f5f9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${_e(title)}</div>
                            <div style="font-size:0.75rem;color:#64748b;margin-top:2px">${k} · ${d.author||'Admin'} · ${d.ts?new Date(d.ts).toLocaleString('pt-BR','shortDate'):''}</div></div>
                            <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
                                <span class="adm-badge adm-badge-${SC[d.status]||'grey'}"><span class="adm-badge-dot"></span>${SL[d.status]||d.status}</span>
                                ${d.comments?.length?`<span style="background:#334155;color:#94a3b8;border-radius:10px;padding:1px 7px;font-size:0.7rem">${d.comments.length} 💬</span>`:''}
                            </div>
                        </div>
                        <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">
                            ${d.status!=='approved'&&d.status!=='published'?`<button onclick="event.stopPropagation();EduBuilder._approve('${k}')" class="admin-topbar-btn admin-topbar-btn-primary" style="padding:3px 10px;font-size:0.72rem;background:#22c55e">✓ Aprovar</button>`:''}
                            ${d.status==='approved'?`<button onclick="event.stopPropagation();EduBuilder._publish('${k}')" class="admin-topbar-btn admin-topbar-btn-primary" style="padding:3px 10px;font-size:0.72rem">🚀 Publicar</button>`:''}
                            ${d.status!=='rejected'&&d.status!=='published'?`<button onclick="event.stopPropagation();EduBuilder._reject('${k}')" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:3px 10px;font-size:0.72rem;color:#ef4444">✗ Rejeitar</button>`:''}
                            <button onclick="event.stopPropagation();EduAdmin&&EduAdmin._openStageEditor('${k}')" class="admin-topbar-btn admin-topbar-btn-ghost" style="padding:3px 10px;font-size:0.72rem">✏️ Editar</button>
                        </div>
                        ${d.comments?.length?`<div style="margin-top:8px;padding-top:8px;border-top:1px solid #334155">${d.comments.slice(-2).map(c=>`<div style="font-size:0.74rem;color:#94a3b8">💬 <strong style="color:#f1f5f9">${_e(c.author)}</strong>: ${_e(c.text)}</div>`).join('')}</div>`:''}
                    </div>`;
                }).join('')}
            </div>
            <div id="rv-panel" style="background:#1e293b;border:1px solid #334155;border-radius:10px;padding:18px;height:fit-content;position:sticky;top:20px">
                <div style="font-weight:700;color:#f97316;font-size:0.85rem;margin-bottom:12px">💬 Comentários & Feedback</div>
                <div id="rv-target" style="font-size:0.78rem;color:#64748b;margin-bottom:10px">${_activeRevItem?`Comentando em: <strong style="color:#f1f5f9">${_activeRevItem}</strong>`:'Clique em um item para comentar'}</div>
                <textarea id="rv-text" rows="4" placeholder="Feedback, correções, instruções para a equipe..."
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:0.82rem;resize:vertical;box-sizing:border-box;margin-bottom:8px"></textarea>
                <input id="rv-author" type="text" placeholder="Seu nome" value="${_e(localStorage.getItem('eq-rev-name')||'')}"
                oninput="localStorage.setItem('eq-rev-name',this.value)"
                style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:8px;border-radius:6px;font-size:0.82rem;box-sizing:border-box;margin-bottom:8px">
                <button onclick="EduBuilder._postComment()" class="admin-topbar-btn admin-topbar-btn-primary" style="width:100%">Enviar Comentário</button>
            </div>
        </div>`;
    }

    /* ── Monitor Tab ────────────────────────────────────────── */
    function _htmlMonitor() {
        const store = _getStore();
        const cnt = { draft:0, review:0, approved:0, published:0, rejected:0 };
        Object.values(store).forEach(d => { if (cnt[d.status]!==undefined) cnt[d.status]++; });
        const recent = Object.entries(store).sort((a,b)=>(b[1].ts||0)-(a[1].ts||0)).slice(0,12);
        return `
        <div class="admin-kpi-grid" style="margin-bottom:20px">
            ${[['📝','Rascunhos','draft','accent-blue'],['🔍','Em Revisão','review','accent-orange'],['✅','Aprovados','approved','accent-green'],['🚀','Publicados','published','accent-purple']].map(([ic,lb,k,ac])=>`
            <div class="admin-kpi-card ${ac}"><div class="admin-kpi-icon">${ic}</div><div class="admin-kpi-label">${lb}</div><div class="admin-kpi-value">${cnt[k]}</div></div>`).join('')}
        </div>
        <div class="admin-section-card">
            <div class="admin-section-card-header"><div class="admin-chart-title">⚡ Atividade Recente</div></div>
            ${recent.length ? recent.map(([k,d])=>`
            <div style="padding:10px 20px;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center">
                <div><div style="font-size:0.85rem;font-weight:600">${_e(k)}</div>
                <div style="font-size:0.74rem;color:#64748b">${d.author||'Admin'} · ${d.ts?new Date(d.ts).toLocaleString('pt-BR'):'–'}</div></div>
                <span class="adm-badge adm-badge-blue">${d.status}</span>
            </div>`).join('') : `<div style="padding:20px;text-align:center;color:#94a3b8">Sem atividade registrada ainda</div>`}
        </div>`;
    }

    /* ── API Key Modal ──────────────────────────────────────── */
    function _openKeyModal() {
        document.getElementById('bld-key-modal')?.remove();
        const m = document.createElement('div');
        m.id = 'bld-key-modal';
        m.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:4000;display:flex;align-items:center;justify-content:center';
        m.innerHTML = `
        <div style="background:#1e293b;border:1px solid #334155;border-radius:12px;padding:28px;width:500px;max-width:95vw">
            <div style="font-size:1.1rem;font-weight:700;color:#f1f5f9;margin-bottom:6px">🔑 Claude API Key</div>
            <div style="font-size:0.8rem;color:#64748b;margin-bottom:18px">Armazenada localmente no browser (localStorage). Obtenha em <strong style="color:#f97316">console.anthropic.com</strong>.</div>
            <input id="bld-key-in" type="password" value="${_e(_getKey())}" placeholder="sk-ant-api03-..."
            style="width:100%;background:#0f172a;border:1px solid #334155;color:#f1f5f9;padding:10px;border-radius:8px;font-size:0.88rem;box-sizing:border-box;margin-bottom:12px;font-family:monospace">
            <div style="display:flex;gap:8px;justify-content:flex-end">
                <button onclick="document.getElementById('bld-key-modal').remove()" class="admin-topbar-btn admin-topbar-btn-ghost">Cancelar</button>
                <button onclick="EduBuilder._saveKeyTest()" class="admin-topbar-btn admin-topbar-btn-primary">Testar e Salvar</button>
            </div>
            <div id="bld-key-res" style="margin-top:10px;font-size:0.8rem;display:none"></div>
        </div>`;
        document.body.appendChild(m);
        m.addEventListener('click', e => { if (e.target===m) m.remove(); });
    }

    async function _saveKeyTest() {
        const key = document.getElementById('bld-key-in')?.value?.trim();
        if (!key) return;
        const el = document.getElementById('bld-key-res');
        if (el) { el.style.display='block'; el.style.color='#64748b'; el.textContent='Testando…'; }
        try {
            _saveKey(key);
            const res = await fetch('https://api.anthropic.com/v1/messages', {
                method:'POST',
                headers:{'x-api-key':key,'anthropic-version':'2023-06-01','content-type':'application/json','anthropic-dangerous-direct-browser-access':'true'},
                body: JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:5,messages:[{role:'user',content:'hi'}]}),
            });
            if (res.ok||res.status===400) {
                if (el) { el.style.color='#22c55e'; el.textContent='✅ Chave válida!'; }
                setTimeout(()=>document.getElementById('bld-key-modal')?.remove(), 1200);
            } else throw new Error(`HTTP ${res.status}`);
        } catch(e) {
            if (el) { el.style.color='#ef4444'; el.textContent=`⚠️ ${e.message}`; }
        }
    }

    /* ── Generate Action ────────────────────────────────────── */
    async function _generate() {
        const btn = document.getElementById('bld-gen-btn');
        const prev = document.getElementById('bld-preview');
        if (btn) { btn.disabled=true; btn.textContent='⏳ Gerando…'; }
        if (prev) prev.innerHTML = `<div style="text-align:center;padding:60px"><div class="bld-spin">⚡</div><div style="color:#64748b;margin-top:10px">Gerando com Claude AI…</div></div>`;
        _loading = true; _generated = null;
        try {
            const prompt = _buildPrompt(_bState.targetType, _sourceText, _bState);
            const raw = await _claude(prompt);
            const m = raw.match(/\{[\s\S]*\}/);
            if (!m) throw new Error('Resposta não contém JSON válido');
            _generated = JSON.parse(m[0]);
            if (prev) prev.innerHTML = _htmlPreview();
            // Refresh header button
            const header = document.querySelector('#bld-body .admin-section-card-header button');
            if (!header) {
                const hdr = document.querySelector('#bld-preview')?.closest('.admin-section-card')?.querySelector('.admin-section-card-header');
                if (hdr && !hdr.querySelector('button')) hdr.insertAdjacentHTML('beforeend',`<button onclick="EduBuilder._sendReview()" class="admin-topbar-btn admin-topbar-btn-primary" style="padding:4px 14px;font-size:0.78rem">Enviar para Revisão →</button>`);
            }
        } catch(e) {
            if (e.message==='NO_KEY') { _openKeyModal(); if(prev) prev.innerHTML=`<div style="text-align:center;padding:40px;color:#64748b">Configure a API Key para gerar</div>`; }
            else { if(prev) prev.innerHTML=`<div style="text-align:center;padding:40px"><div style="color:#ef4444;font-weight:700;margin-bottom:6px">⚠️ Erro</div><div style="font-size:0.82rem;color:#94a3b8">${_e(e.message)}</div></div>`; }
        } finally {
            _loading=false;
            if (btn) { btn.disabled=false; btn.textContent='✨ Gerar com Claude AI'; }
        }
    }

    function _sendReview() {
        if (!_generated) return;
        const key = `GEN_${Date.now()}`;
        window[key] = { ..._generated, title: _generated.title||`Gerado ${new Date().toLocaleTimeString('pt-BR')}` };
        _setStatus(key, 'review');
        _toast('✅ Enviado para a fila de revisão!');
        _tab = 'review';
        const body = document.getElementById('bld-body');
        if (body) body.innerHTML = _htmlReview();
    }

    /* ── Review Actions ─────────────────────────────────────── */
    function _selectReview(key) {
        _activeRevItem = key;
        document.querySelectorAll('.bld-rev-card').forEach(el=>el.classList.remove('sel'));
        document.getElementById(`rv-${key}`)?.classList.add('sel');
        const el = document.getElementById('rv-target');
        if (el) el.innerHTML = `Comentando em: <strong style="color:#f1f5f9">${key}</strong>`;
    }

    function _approve(key) { _setStatus(key,'approved'); _toast('✅ Aprovado!'); _refreshReview(); }
    function _reject(key)  { _setStatus(key,'rejected'); _toast('✗ Rejeitado.');  _refreshReview(); }
    function _publish(key) { _setStatus(key,'published'); _toast('🚀 Publicado!'); _refreshReview(); }

    function _postComment() {
        if (!_activeRevItem) { _toast('Clique em um item para comentar'); return; }
        const text = document.getElementById('rv-text')?.value?.trim();
        const author = document.getElementById('rv-author')?.value?.trim()||'Admin';
        if (!text) return;
        _addComment(_activeRevItem, text, author);
        document.getElementById('rv-text').value='';
        _toast('💬 Comentário adicionado!');
        _refreshReview();
    }

    function _refreshReview() {
        const body = document.getElementById('bld-body');
        if (body && _tab==='review') body.innerHTML = _htmlReview();
    }

    /* ── Tab Switch ─────────────────────────────────────────── */
    function _switchTab(id) {
        _tab = id;
        document.querySelectorAll('.bld-tab').forEach(el=>{
            const isActive = el.getAttribute('onclick')?.includes(`'${id}'`);
            el.classList.toggle('active', isActive);
        });
        const body = document.getElementById('bld-body');
        if (!body) return;
        if (id==='source')   body.innerHTML = _htmlSource();
        if (id==='generate') body.innerHTML = _htmlGenerate();
        if (id==='review')   body.innerHTML = _htmlReview();
        if (id==='monitor')  body.innerHTML = _htmlMonitor();
    }

    /* ── File / Drag Handlers ───────────────────────────────── */
    function _srcChange(val) {
        _sourceText = val;
        const c = document.getElementById('bld-chars');
        if (c) c.textContent = `${val.length} caracteres`;
    }

    function _onFile(event) { const f=event.target.files?.[0]; if(f) _handleFile(f); }
    function _onDrop(event) { event.preventDefault(); document.getElementById('bld-drop')?.classList.remove('active'); const f=event.dataTransfer.files?.[0]; if(f) _handleFile(f); }

    async function _handleFile(file) {
        const nm = document.getElementById('bld-fname');
        if (nm) { nm.style.display='block'; nm.textContent=`📄 ${file.name} (${(file.size/1024).toFixed(1)} KB) — carregando…`; }
        try {
            const text = await _readFile(file);
            if (text) {
                _sourceText = text;
                const ta = document.getElementById('bld-src');
                if (ta) ta.value = text;
                const c = document.getElementById('bld-chars');
                if (c) c.textContent = `${text.length} caracteres`;
                if (nm) nm.textContent = `📄 ${file.name} — ✅ ${text.length} caracteres carregados`;
            } else {
                if (nm) nm.textContent = `📄 ${file.name} — abra o arquivo e copie o texto manualmente`;
                _toast(`Arquivo "${file.type||file.name}": abra, copie (Ctrl+A, Ctrl+C) e cole na área de texto`);
            }
        } catch(e) {
            if (nm) nm.textContent = `⚠️ Erro ao ler ${file.name}: ${e.message}`;
        }
    }

    /* ── State Helpers ──────────────────────────────────────── */
    function _bs(k,v) { _bState[k]=v; }

    /* ── Approval Status for Content Module ─────────────────── */
    function getStatus(varName) { return _getItemAppr(varName).status; }
    function getStatusBadge(varName) {
        const s = getStatus(varName);
        const map = { draft:['grey','Rascunho'], review:['blue','Em Revisão'], approved:['green','Aprovado'], published:['orange','Publicado'], rejected:['red','Rejeitado'] };
        const [c,l] = map[s]||['grey',s];
        return `<span class="adm-badge adm-badge-${c}"><span class="adm-badge-dot"></span>${l}</span>`;
    }

    /* ── Helpers ────────────────────────────────────────────── */
    function _e(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
    function _toast(msg) {
        const t = document.createElement('div');
        t.style.cssText = 'position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:#1e293b;border:1px solid #334155;color:#f1f5f9;padding:12px 24px;border-radius:8px;font-size:0.88rem;font-weight:600;z-index:5000;box-shadow:0 4px 24px rgba(0,0,0,0.5)';
        t.textContent = msg; document.body.appendChild(t); setTimeout(()=>t.remove(), 3500);
    }

    return {
        render, getStatus, getStatusBadge,
        _switchTab, _bs, _srcChange, _onFile, _onDrop,
        _openKeyModal, _saveKeyTest,
        _generate, _sendReview,
        _selectReview, _approve, _reject, _publish, _postComment,
    };
})();
