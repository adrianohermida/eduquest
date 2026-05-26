/**
 * EDUQUEST BUILDER v1.0
 * Content creation module for premium users and the admin.
 * Creates custom chapters, stages, and questions playable across all game modules.
 */

const Builder = {
    _view:    'chapters',
    _chId:    null,   // chapter being browsed/edited
    _stage:   null,   // stage being edited
    _qs:      [],     // questions being edited

    // ── ENTRY ──────────────────────────────────────────────────────
    start(container) {
        if (typeof State === 'undefined') return;
        if (!State.isPremiumOrAdmin()) {
            const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';
            container.innerHTML = `
            <div class="screen builder-screen">
                <button class="btn-back" onclick="Router.navigate('#home')">‹ Voltar</button>
                <div class="bldr-gate">
                    <div class="bldr-gate-icon">${_ic('crown',{size:'4xl',color:'final'})}</div>
                    <h2>Builder de Conteúdo</h2>
                    <p>Crie suas próprias disciplinas, fases e questões personalizadas.<br>Disponível para usuários <strong>Premium</strong>.</p>
                    <button class="btn-primary" onclick="Router.navigate('#shop')">👑 Upgrade Premium</button>
                    <button class="btn-secondary" style="margin-top:8px" onclick="Router.navigate('#ai-studio')">🤖 Usar AI Studio</button>
                </div>
            </div>`;
            return;
        }
        this._render(container);
    },

    // ── MAIN SHELL ─────────────────────────────────────────────────
    _render(container) {
        const isAdmin = State.isAdmin();
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        container.innerHTML = `
        <div class="screen builder-screen">
            <div class="bldr-header">
                ${isAdmin ? `<div class="bldr-admin-badge">${_ic('crown',{size:'xs',color:'final'})} Admin Mode</div>` : ''}
                <div class="bldr-title">${_ic('backpack',{size:'sm',color:'brand'})} Builder de Conteúdo</div>
                <div class="bldr-subtitle">Crie e gerencie seu material personalizado</div>
            </div>

            <div class="bldr-tabs" id="bldr-tabs">
                <button class="bldr-tab${this._view === 'chapters' || this._view === 'stages' ? ' active' : ''}"
                    onclick="Builder._goto('chapters')">📚 Disciplinas</button>
                <button class="bldr-tab${this._view === 'create-chapter' || this._view === 'edit-chapter' ? ' active' : ''}"
                    onclick="Builder._goto('create-chapter')">+ Nova Disciplina</button>
                ${isAdmin ? `<button class="bldr-tab${this._view === 'platform' ? ' active' : ''}" onclick="Builder._goto('platform')">🌐 Plataforma</button>` : ''}
            </div>

            <div id="bldr-body"></div>
        </div>`;

        this._renderBody(container.querySelector('#bldr-body'));
    },

    _renderBody(el) {
        if (!el) return;
        switch (this._view) {
            case 'chapters':       this._renderChapters(el);     break;
            case 'create-chapter': this._renderChapterForm(el);  break;
            case 'edit-chapter':   this._renderChapterForm(el, State.getCustomContent().chapters.find(c => c.id === this._chId)); break;
            case 'stages':         this._renderStages(el);       break;
            case 'create-stage':   this._renderStageForm(el);    break;
            case 'edit-stage':     this._renderStageForm(el, this._stage); break;
            case 'platform':       this._renderPlatform(el);     break;
            default:               this._renderChapters(el);
        }
    },

    _goto(view, chId = null, stage = null) {
        this._view = view;
        if (chId  !== null) this._chId  = chId;
        if (stage !== null) { this._stage = stage; this._qs = stage ? JSON.parse(JSON.stringify(stage.questions || [])) : []; }
        if (view === 'create-stage') { this._stage = null; this._qs = []; }
        const container = document.getElementById('app-container');
        if (container) this._render(container);
    },

    // ── CHAPTERS LIST ──────────────────────────────────────────────
    _renderChapters(el) {
        const { chapters, stages } = State.getCustomContent();
        const _ic = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        if (!chapters.length) {
            el.innerHTML = `
            <div class="bldr-empty">
                ${_ic('scroll',{size:'xl',color:'locked'})}
                <p>Nenhuma disciplina criada ainda.</p>
                <p style="font-size:.82rem">Clique em "+ Nova Disciplina" para começar.</p>
            </div>`;
            return;
        }

        el.innerHTML = chapters.map(ch => {
            const n = stages.filter(s => s.chapterId === ch.id).length;
            return `
            <div class="bldr-chapter-card">
                <div class="bldr-ch-icon">${ch.icon || '📚'}</div>
                <div class="bldr-ch-body">
                    <div class="bldr-ch-title">${ch.title}</div>
                    <div class="bldr-ch-meta">${ch.subject || 'Geral'}${ch.grade ? ' · ' + ch.grade : ''} · ${n} fase${n !== 1 ? 's' : ''}</div>
                </div>
                <div class="bldr-ch-actions">
                    <button class="bldr-btn-sm bldr-btn-primary" onclick="Builder._goto('stages','${ch.id}')">Fases</button>
                    <button class="bldr-btn-sm bldr-btn-edit" title="Editar" onclick="Builder._goto('edit-chapter','${ch.id}')">✏️</button>
                    <button class="bldr-btn-sm bldr-btn-delete" title="Excluir" onclick="Builder._confirmDeleteChapter('${ch.id}')">🗑️</button>
                </div>
            </div>`;
        }).join('');
    },

    // ── CHAPTER FORM ───────────────────────────────────────────────
    _renderChapterForm(el, ch = null) {
        const isEdit = !!ch;
        el.innerHTML = `
        <div class="bldr-form">
            <h3 class="bldr-form-title">${isEdit ? '✏️ Editar Disciplina' : '+ Nova Disciplina'}</h3>
            <div class="bldr-field-row">
                <div class="bldr-field" style="width:70px">
                    <label class="bldr-label">Ícone</label>
                    <input class="bldr-input bldr-icon-input" id="bldr-ch-icon" type="text" placeholder="🧪" maxlength="4" value="${ch?.icon || ''}">
                </div>
                <div class="bldr-field" style="flex:1">
                    <label class="bldr-label">Nome da Disciplina *</label>
                    <input class="bldr-input" id="bldr-ch-title" type="text" placeholder="Ex: Biologia Celular" maxlength="60" value="${ch?.title || ''}">
                </div>
            </div>
            <div class="bldr-field-row">
                <div class="bldr-field" style="flex:1">
                    <label class="bldr-label">Matéria</label>
                    <input class="bldr-input" id="bldr-ch-subject" type="text" placeholder="Ex: Ciências" maxlength="40" value="${ch?.subject || ''}">
                </div>
                <div class="bldr-field" style="flex:1">
                    <label class="bldr-label">Série / Nível</label>
                    <input class="bldr-input" id="bldr-ch-grade" type="text" placeholder="Ex: 7º Ano" maxlength="20" value="${ch?.grade || ''}">
                </div>
            </div>
            <div class="bldr-field">
                <label class="bldr-label">Descrição (opcional)</label>
                <textarea class="bldr-textarea" id="bldr-ch-desc" placeholder="Breve descrição..." maxlength="200">${ch?.description || ''}</textarea>
            </div>
            <div class="bldr-form-actions">
                <button class="btn-primary" onclick="Builder._saveChapter('${ch?.id || ''}')">
                    ${isEdit ? '✅ Salvar Alterações' : '+ Criar Disciplina'}
                </button>
                <button class="btn-secondary" onclick="Builder._goto('chapters')">Cancelar</button>
            </div>
        </div>`;
        setTimeout(() => document.getElementById('bldr-ch-title')?.focus(), 80);
    },

    _saveChapter(editId) {
        const icon    = document.getElementById('bldr-ch-icon')?.value.trim()    || '📚';
        const title   = document.getElementById('bldr-ch-title')?.value.trim()   || '';
        const subject = document.getElementById('bldr-ch-subject')?.value.trim() || 'Geral';
        const grade   = document.getElementById('bldr-ch-grade')?.value.trim()   || '';
        const desc    = document.getElementById('bldr-ch-desc')?.value.trim()    || '';

        if (!title) {
            if (typeof ModalEngine !== 'undefined') ModalEngine.interrupt('simpleAlert',{icon:'⚠️',title:'Campo obrigatório',message:'Dê um nome para a disciplina.'});
            return;
        }
        const ch = { id: editId || `ch_${Date.now()}`, icon, title, subject, grade, description: desc };
        State.addCustomChapter(ch);
        if (typeof ModalEngine !== 'undefined') ModalEngine.enqueue('reward',{title: editId ? 'Disciplina atualizada!' : 'Disciplina criada!', desc: `"${title}" salva com sucesso.`, xp:0, gems:0});
        this._goto('chapters');
    },

    _confirmDeleteChapter(id) {
        const ch = State.getCustomContent().chapters.find(c => c.id === id);
        const n  = State.getCustomContent().stages.filter(s => s.chapterId === id).length;
        const msg = n > 0 ? `Isso também apagará ${n} fase${n>1?'s':''}.` : 'Esta ação não pode ser desfeita.';
        if (typeof ModalEngine !== 'undefined') {
            ModalEngine.interrupt('confirm',{ title:'Excluir disciplina?', message: msg,
                onConfirm: () => { State.deleteCustomChapter(id); Builder._goto('chapters'); }
            });
        } else { State.deleteCustomChapter(id); this._goto('chapters'); }
    },

    // ── STAGES LIST ────────────────────────────────────────────────
    _renderStages(el) {
        const { chapters, stages } = State.getCustomContent();
        const ch     = chapters.find(c => c.id === this._chId);
        const myStgs = stages.filter(s => s.chapterId === this._chId);
        const _ic    = (id, o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id, o) : '';

        const stagesHTML = myStgs.length
            ? myStgs.map(s => `
            <div class="bldr-stage-card">
                <div class="bldr-st-icon">${s.icon || _ic('scroll',{size:'md'})}</div>
                <div class="bldr-st-body">
                    <div class="bldr-st-title">${s.title}</div>
                    <div class="bldr-st-meta">${s.difficulty || 'normal'} · ${s.questions?.length || 0} questão(ões)</div>
                </div>
                <div class="bldr-st-actions">
                    <button class="bldr-btn-sm bldr-btn-play" title="Jogar" onclick="Builder._playStage('${s.id}')">▶</button>
                    <button class="bldr-btn-sm bldr-btn-edit" title="Editar" onclick="Builder._goto('edit-stage',null,${JSON.stringify(s).replace(/"/g,'&quot;')})">✏️</button>
                    <button class="bldr-btn-sm bldr-btn-delete" title="Excluir" onclick="Builder._confirmDeleteStage('${s.id}')">🗑️</button>
                </div>
            </div>`)
            .join('')
            : `<div class="bldr-empty">${_ic('scroll',{size:'xl',color:'locked'})}<p>Nenhuma fase ainda.</p></div>`;

        el.innerHTML = `
        <div>
            <div class="bldr-stages-header">
                <button class="bldr-back-link" onclick="Builder._goto('chapters')">‹ Disciplinas</button>
                <div>
                    <div class="bldr-stages-title">${ch?.icon || '📚'} ${ch?.title || 'Disciplina'}</div>
                    <div class="bldr-stages-sub">${myStgs.length} fase${myStgs.length !== 1 ? 's' : ''}</div>
                </div>
                <button class="btn-primary bldr-add-btn" onclick="Builder._goto('create-stage','${this._chId}')">+ Fase</button>
            </div>
            ${stagesHTML}
        </div>`;
    },

    // ── STAGE FORM ─────────────────────────────────────────────────
    _renderStageForm(el, stage = null) {
        const isEdit = !!stage;
        if (!isEdit) this._qs = [];
        else if (!this._qs.length && stage.questions?.length) this._qs = JSON.parse(JSON.stringify(stage.questions));

        const diff = ['easy','normal','hard','boss'].map(d =>
            `<option value="${d}"${(stage?.difficulty||'normal')===d?' selected':''}>
                ${{easy:'Fácil',normal:'Normal',hard:'Difícil',boss:'Chefe'}[d]}
            </option>`).join('');

        el.innerHTML = `
        <div class="bldr-form bldr-stage-form">
            <h3 class="bldr-form-title">${isEdit ? '✏️ Editar Fase' : '+ Nova Fase'}</h3>

            <div class="bldr-field-row">
                <div class="bldr-field" style="width:72px">
                    <label class="bldr-label">Ícone</label>
                    <input class="bldr-input bldr-icon-input" id="bldr-st-icon" type="text" placeholder="🎯" maxlength="4" value="${stage?.icon||''}">
                </div>
                <div class="bldr-field" style="flex:1">
                    <label class="bldr-label">Nome da Fase *</label>
                    <input class="bldr-input" id="bldr-st-title" type="text" placeholder="Ex: Célula e Núcleo" maxlength="60" value="${stage?.title||''}">
                </div>
            </div>

            <div class="bldr-field-row">
                <div class="bldr-field" style="flex:1">
                    <label class="bldr-label">Dificuldade</label>
                    <select class="bldr-input" id="bldr-st-diff">${diff}</select>
                </div>
                <div class="bldr-field" style="width:84px">
                    <label class="bldr-label">Tempo (min)</label>
                    <input class="bldr-input" id="bldr-st-time" type="number" min="1" max="120" value="${stage?.estimatedTime||10}">
                </div>
            </div>

            <div class="bldr-field">
                <label class="bldr-label">Objetivos de aprendizagem (um por linha)</label>
                <textarea class="bldr-textarea" id="bldr-st-obj" placeholder="O aluno será capaz de..." maxlength="600">${(stage?.learningObjectives||[]).join('\n')}</textarea>
            </div>

            <div class="bldr-questions-section">
                <div class="bldr-qs-header">
                    <span class="bldr-qs-title">Questões</span>
                    <span class="bldr-qs-count" id="bldr-qs-count">${this._qs.length}</span>
                </div>
                <div id="bldr-qs-list"></div>
                <button class="bldr-add-q-btn" onclick="Builder._addQ()">+ Adicionar Questão</button>
            </div>

            <div class="bldr-form-actions" style="padding-bottom:32px">
                <button class="btn-primary" onclick="Builder._saveStage('${isEdit?stage.id:''}','${this._chId||stage?.chapterId||''}')">
                    ${isEdit ? '✅ Salvar Fase' : '+ Criar Fase'}
                </button>
                <button class="btn-secondary" onclick="Builder._goto('stages')">Cancelar</button>
            </div>
        </div>`;

        this._renderQsList();
        setTimeout(() => document.getElementById('bldr-st-title')?.focus(), 80);
    },

    _renderQsList() {
        const el    = document.getElementById('bldr-qs-list');
        const count = document.getElementById('bldr-qs-count');
        if (!el) return;
        if (count) count.textContent = this._qs.length;

        if (!this._qs.length) {
            el.innerHTML = `<div class="bldr-no-q">Nenhuma questão. Clique em "+ Adicionar Questão" abaixo.</div>`;
            return;
        }

        el.innerHTML = this._qs.map((q, qi) => `
        <div class="bldr-q-card" id="bldr-q-${qi}">
            <div class="bldr-q-header">
                <span class="bldr-q-num">Q${qi+1}</span>
                <div style="display:flex;gap:4px">
                    ${qi > 0 ? `<button class="bldr-q-move" title="Mover para cima" onclick="Builder._moveQ(${qi},-1)">↑</button>` : ''}
                    <button class="bldr-q-delete" title="Remover" onclick="Builder._removeQ(${qi})">✕</button>
                </div>
            </div>
            <textarea class="bldr-q-text" placeholder="Enunciado da questão..." rows="2"
                onchange="Builder._setQ(${qi},'question',this.value)">${q.question||''}</textarea>
            <div class="bldr-q-opts">
                ${[0,1,2,3].map(oi => `
                <div class="bldr-q-opt-row">
                    <input type="radio" name="bldr-correct-${qi}" class="bldr-q-radio"
                        title="Marcar como resposta correta" ${q.correctIndex===oi?'checked':''}
                        onchange="Builder._setQ(${qi},'correctIndex',${oi})">
                    <input class="bldr-input bldr-q-opt" type="text"
                        placeholder="Opção ${String.fromCharCode(65+oi)}"
                        value="${(q.options||[])[oi]||''}"
                        onchange="Builder._setOpt(${qi},${oi},this.value)">
                </div>`).join('')}
            </div>
        </div>`).join('');
    },

    _addQ() {
        this._qs.push({ question:'', options:['','','',''], correctIndex:0 });
        this._renderQsList();
        setTimeout(() => {
            const last = document.getElementById(`bldr-q-${this._qs.length-1}`);
            if (last) { last.scrollIntoView({behavior:'smooth',block:'center'}); last.querySelector('textarea')?.focus(); }
        }, 60);
    },

    _removeQ(idx)             { this._qs.splice(idx,1); this._renderQsList(); },
    _setQ(idx, field, val)    { if (this._qs[idx]) this._qs[idx][field] = field==='correctIndex' ? parseInt(val) : val; },
    _setOpt(qi, oi, val)      { if (!this._qs[qi]) return; if (!this._qs[qi].options) this._qs[qi].options=['','','','']; this._qs[qi].options[oi]=val; },
    _moveQ(idx, dir) {
        const to = idx + dir;
        if (to < 0 || to >= this._qs.length) return;
        [this._qs[idx], this._qs[to]] = [this._qs[to], this._qs[idx]];
        this._renderQsList();
    },

    _saveStage(editId, chapterId) {
        const icon   = document.getElementById('bldr-st-icon')?.value.trim()  || '🎯';
        const title  = document.getElementById('bldr-st-title')?.value.trim() || '';
        const diff   = document.getElementById('bldr-st-diff')?.value         || 'normal';
        const time   = parseInt(document.getElementById('bldr-st-time')?.value || 10);
        const objs   = (document.getElementById('bldr-st-obj')?.value||'').split('\n').map(s=>s.trim()).filter(Boolean);

        if (!title) {
            if (typeof ModalEngine !== 'undefined') ModalEngine.interrupt('simpleAlert',{icon:'⚠️',title:'Campo obrigatório',message:'Dê um nome para a fase.'});
            return;
        }

        const validQs = this._qs.filter(q =>
            q.question?.trim() && (q.options||[]).filter(o=>o.trim()).length >= 2
        );

        const stage = {
            id:                 editId || `stage_${Date.now()}`,
            chapterId:          chapterId || this._chId,
            icon, title,
            difficulty:         diff,
            estimatedTime:      time,
            learningObjectives: objs,
            questions:          validQs,
            rewards:            { xp: 20 + validQs.length * 10, gems: Math.floor(validQs.length/2) },
            summary:            { flashcards:[], mnemonics:[], content:[] },
            _isCustom:          true,
        };

        State.addCustomStage(stage);
        if (typeof ModalEngine !== 'undefined') {
            ModalEngine.enqueue('reward',{ title: editId?'Fase atualizada!':'Fase criada!',
                desc:`"${title}" com ${validQs.length} questão(ões).`, xp: validQs.length*5, gems:0 });
        }
        this._goto('stages');
    },

    _confirmDeleteStage(id) {
        if (typeof ModalEngine !== 'undefined') {
            ModalEngine.interrupt('confirm',{ title:'Excluir fase?', message:'Esta ação não pode ser desfeita.',
                onConfirm: () => { State.deleteCustomStage(id); Builder._renderBody(document.getElementById('bldr-body')); }
            });
        } else { State.deleteCustomStage(id); this._renderBody(document.getElementById('bldr-body')); }
    },

    _playStage(id) {
        const stage = State.getCustomContent().stages.find(s => s.id === id);
        if (!stage || !stage.questions?.length) {
            if (typeof ModalEngine !== 'undefined') ModalEngine.interrupt('simpleAlert',{icon:'⚠️',title:'Sem questões',message:'Adicione questões antes de jogar.'});
            return;
        }
        window._aiPlaySet   = { ...stage, name: stage.title,
            questions: stage.questions.map(q => ({ text: q.question||q.text, options: q.options, correctIndex: q.correctIndex }))
        };
        window._aiPlayIdx   = 0;
        window._aiPlayScore = 0;
        window._aiPlayHearts = State.data.user.hearts ?? 5;
        window._aiPlayCombo  = 0;
        const container = document.getElementById('app-container');
        if (container && typeof Router !== 'undefined') Router._renderEnhancedPlay(container);
    },

    // ── ADMIN: PLATFORM PANEL ──────────────────────────────────────
    _renderPlatform(el) {
        if (!State.isAdmin()) { el.innerHTML = '<p class="bldr-empty">Acesso negado.</p>'; return; }
        const { chapters, stages } = State.getCustomContent();
        const totalQs = stages.reduce((n,s)=>n+(s.questions?.length||0),0);
        const _ic     = (id,o) => typeof IconSystem !== 'undefined' ? IconSystem.html(id,o) : '';

        el.innerHTML = `
        <div class="bldr-platform">
            <div class="bldr-admin-info">
                ${_ic('ai-tutor',{size:'md',color:'brand'})}
                <div>
                    <strong>Modo Administrador Ativo</strong><br>
                    <span style="font-size:.78rem;color:var(--text-muted)">
                        Crie conteúdo aqui e exporte como arquivo JS para deploy na plataforma.
                    </span>
                </div>
            </div>

            <div class="bldr-platform-stats">
                <div class="bldr-pstat"><span>${chapters.length}</span>Disciplinas</div>
                <div class="bldr-pstat"><span>${stages.length}</span>Fases</div>
                <div class="bldr-pstat"><span>${totalQs}</span>Questões</div>
            </div>

            <div class="bldr-platform-actions">
                <button class="btn-primary" onclick="Builder._exportJSON()">
                    ${_ic('scroll',{size:'sm'})} Exportar JSON
                </button>
                <button class="btn-secondary" onclick="Builder._importJSON()">
                    📂 Importar JSON
                </button>
            </div>
            <p style="font-size:.72rem;color:var(--text-muted);margin-top:8px;line-height:1.5">
                Exporte e salve o arquivo na pasta <code>js/data/</code> do repositório para publicar na plataforma.
            </p>

            <input type="file" id="bldr-import-file" accept=".json" style="display:none" onchange="Builder._onImportFile(this)">
        </div>`;
    },

    _exportJSON() {
        const data = State.getCustomContent();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type:'application/json' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = `eduquest-content-${Date.now()}.json`; a.click();
        URL.revokeObjectURL(url);
    },

    _importJSON() { document.getElementById('bldr-import-file')?.click(); },

    _onImportFile(input) {
        const file = input.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = e => {
            try {
                const data = JSON.parse(e.target.result);
                if (!data.chapters || !data.stages) throw new Error('Formato inválido');
                (data.chapters||[]).forEach(ch  => State.addCustomChapter(ch));
                (data.stages  ||[]).forEach(stg => State.addCustomStage(stg));
                if (typeof ModalEngine !== 'undefined') ModalEngine.enqueue('reward',{title:'Importado!',desc:`${data.chapters.length} disciplinas, ${data.stages.length} fases importadas.`,xp:0,gems:0});
                Builder._goto('chapters');
            } catch (err) {
                if (typeof ModalEngine !== 'undefined') ModalEngine.interrupt('simpleAlert',{icon:'❌',title:'Erro ao importar',message:'Arquivo JSON inválido.'});
            }
        };
        reader.readAsText(file);
        input.value = '';
    },
};

window.Builder = Builder;
