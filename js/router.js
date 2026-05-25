/**
 * Router Simples para SPA (Single Page Application)
 * Rotas suportadas: #home, #chapter/:id, #stage/:chapter/:stageId
 */
const Router = {
    currentRoute: null,

    init() {
        // Nada especial needed para hash routing vanilla
    },

    handleRoute() {
        const hash = window.location.hash || '#home';
        const parts = hash.split('/');
        const route = parts[0].replace('#', '');
        
        const container = document.getElementById('app-container');
        if (!container) {
            console.error('Container #app-container não encontrado no index.html');
            return;
        }

        // Limpa container
        container.innerHTML = '';

        switch(route) {
            case 'home':
                this.renderHome(container);
                break;
            case 'chapter':
                const chapterId = parts[1];
                this.renderChapterMap(container, chapterId);
                break;
            case 'stage':
                const chapId = parts[1];
                const stageId = parts[2];
                this.renderStage(container, chapId, stageId);
                break;
            default:
                this.renderHome(container);
        }
    },

    renderHome(container) {
        // Header Gamificado
        const header = UIComponents.createHeader();
        container.appendChild(header);

        // Lista de Matérias/Anos (Estilo Duolingo Path)
        const main = document.createElement('main');
        main.className = 'path-container';
        
        const title = document.createElement('h2');
        title.textContent = 'Seu Caminho de Aprendizado';
        title.className = 'section-title';
        main.appendChild(title);

        // Card do Capítulo Disponível (Exemplo: 7º Ano Ciências)
        const chapterCard = UIComponents.createChapterCard('cap7_doencas', 'Ciências 7º Ano', 'Doenças e Epidemias', State.getChapterProgress('cap7_doencas'));
        main.appendChild(chapterCard);

        // Card do Modelo Template (Para teste)
        const templateCard = UIComponents.createChapterCard('modelo_template', 'Modelo Template', 'Estrutura Base (Demo)', State.getChapterProgress('modelo_template'));
        main.appendChild(templateCard);

        container.appendChild(main);
    },

    renderChapterMap(container, chapterId) {
        const header = UIComponents.createHeader();
        container.appendChild(header);

        const main = document.createElement('main');
        main.className = 'stage-map-container';

        // Botão Voltar
        const backBtn = document.createElement('button');
        backBtn.className = 'btn-back';
        backBtn.innerHTML = '← Voltar';
        backBtn.onclick = () => window.location.hash = '#home';
        main.appendChild(backBtn);

        // Título do Capítulo
        let chapterData = window[chapterId.toUpperCase().replace('_','')] || window['CAP7_DOENCAS']; // Fallback
        if(!chapterData && chapterId === 'modelo_template') chapterData = MODELO_TEMPLATE_METADATA;
        
        const h2 = document.createElement('h2');
        h2.textContent = chapterData ? chapterData.title : 'Capítulo';
        main.appendChild(h2);

        // Mapa Vertical de Stages (Estilo Duolingo)
        const stagesList = document.createElement('div');
        stagesList.className = 'stages-path';

        const totalStages = chapterData ? chapterData.totalStages : 5;

        for (let i = 1; i <= totalStages; i++) {
            const stageId = `stage_0${i}`;
            const isUnlocked = State.isStageUnlocked(chapterId, i);
            const isCompleted = State.isStageCompleted(chapterId, i);
            const stars = State.getStageStars(chapterId, i);

            const node = UIComponents.createStageNode(i, stageId, chapterId, isUnlocked, isCompleted, stars);
            stagesList.appendChild(node);
        }

        main.appendChild(stagesList);
        container.appendChild(main);
    },

    renderStage(container, chapterId, stageId) {
        // Aqui entraria a lógica complexa do Quiz
        // Por enquanto, um placeholder funcional
        container.innerHTML = `
            <div class="stage-view">
                <div class="stage-header">
                    <button onclick="window.location.hash='#chapter/${chapterId}'" class="btn-close">✕</button>
                    <div class="progress-bar"><div class="fill" style="width:0%"></div></div>
                    <div class="hearts">❤️❤️❤️</div>
                </div>
                <div class="question-area">
                    <h3>Carregando Stage: ${stageId}...</h3>
                    <p>Integração com motor de quiz em breve nesta iteração.</p>
                    <button class="btn-primary" onclick="alert('Simulação: Resposta Correta!')">Responder Teste</button>
                </div>
            </div>
        `;
        // Nota: A lógica completa do quiz requereria um arquivo quiz-engine.js
        // que consome os dados de questions.js e state.js
    }
};