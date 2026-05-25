/**
 * EDUQUEST GAME ENGINE v1.0
 * Responsável pela lógica de Quiz, Timer, Vidas e Feedback Visual.
 */

const GameEngine = {
    state: {
        currentStage: null,
        questions: [],
        currentIndex: 0,
        score: 0,
        lives: 3,
        timer: 0,
        timerInterval: null,
        isPlaying: false,
        combo: 0
    },

    // Inicializa uma nova partida
    start(stageData, chapterId, stageIndex) {
        this.state.currentStage = stageData;
        // Seleciona questões aleatórias ou usa as definidas no stage
        // Para este MVP, usamos o banco global QUESTIONS_BANK filtrado ou aleatório se vazio
        this.state.questions = this.loadQuestions(stageData);
        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.lives = 3;
        this.state.combo = 0;
        this.state.isPlaying = true;
        
        // Tempo base: 15s por questão + bônus
        this.state.timer = 15; 

        this.renderArena(chapterId, stageIndex);
        this.startTimer();
    },

    loadQuestions(stageData) {
        // Tenta pegar questões específicas do stage, senão pega do banco global aleatoriamente
        if (stageData.questions && stageData.questions.length > 0) {
            return stageData.questions;
        }
        // Fallback: Pegar 10 questões aleatórias do banco global (simulação)
        const allQuestions = window.QUESTIONS_BANK || [];
        return allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    },

    startTimer() {
        clearInterval(this.state.timerInterval);
        this.state.timerInterval = setInterval(() => {
            this.state.timer--;
            this.updateHUD();
            
            if (this.state.timer <= 0) {
                this.handleAnswer(-1); // Tempo esgotado conta como erro
            }
        }, 1000);
    },

    stopTimer() {
        clearInterval(this.state.timerInterval);
    },

    updateHUD() {
        const timerEl = document.getElementById('game-timer');
        const livesEl = document.getElementById('game-lives');
        const progressEl = document.getElementById('game-progress');
        
        if (timerEl) {
            timerEl.innerText = `⏱️ ${this.state.timer}s`;
            timerEl.style.color = this.state.timer < 5 ? '#ef4444' : '#f8fafc';
        }
        
        if (livesEl) {
            livesEl.innerHTML = '❤️'.repeat(this.state.lives) + '🖤'.repeat(3 - this.state.lives);
        }

        if (progressEl) {
            const pct = ((this.state.currentIndex) / this.state.questions.length) * 100;
            progressEl.style.width = `${pct}%`;
        }
    },

    renderArena(chapterId, stageIndex) {
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="game-arena">
                <div class="game-header">
                    <button class="btn-exit" onclick="GameEngine.exit()">✕</button>
                    <div id="game-progress" class="progress-bar"></div>
                    <div class="game-stats">
                        <span id="game-lives">❤️❤️❤️</span>
                        <span id="game-timer">⏱️ 15s</span>
                    </div>
                </div>
                
                <div id="question-container" class="question-container">
                    <!-- Questão injetada aqui -->
                </div>

                <div id="feedback-overlay" class="feedback-overlay"></div>
            </div>
        `;
        this.loadQuestion();
    },

    loadQuestion() {
        if (this.state.currentIndex >= this.state.questions.length) {
            this.endGame(true);
            return;
        }

        const q = this.state.questions[this.state.currentIndex];
        const container = document.getElementById('question-container');
        
        // Reset timer para nova questão
        this.state.timer = 15; 
        this.updateHUD();

        container.innerHTML = `
            <div class="question-card animate-in">
                <h2 class="question-text">${q.question}</h2>
                <div class="options-grid">
                    ${q.options.map((opt, idx) => `
                        <button class="option-btn" onclick="GameEngine.handleAnswer(${idx})">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    },

    handleAnswer(selectedIndex) {
        if (!this.state.isPlaying) return;
        
        const currentQ = this.state.questions[this.state.currentIndex];
        const isCorrect = selectedIndex === currentQ.correctIndex;
        const buttons = document.querySelectorAll('.option-btn');

        // Desabilita cliques
        this.state.isPlaying = false;
        buttons.forEach(btn => btn.disabled = true);

        if (isCorrect) {
            // Lógica de Acerto
            this.state.combo++;
            const points = 100 + (this.state.combo * 10) + (this.state.timer * 5);
            this.state.score += points;
            
            if (buttons[selectedIndex]) {
                buttons[selectedIndex].classList.add('correct');
            }
            this.triggerFeedback('success');
            
            setTimeout(() => {
                this.state.currentIndex++;
                this.state.isPlaying = true;
                this.loadQuestion();
            }, 1000);
        } else {
            // Lógica de Erro
            this.state.combo = 0;
            this.state.lives--;
            this.updateHUD();
            
            if (selectedIndex !== -1 && buttons[selectedIndex]) {
                buttons[selectedIndex].classList.add('wrong');
            }
            // Mostra a correta
            if (buttons[currentQ.correctIndex]) {
                buttons[currentQ.correctIndex].classList.add('correct');
            }
            
            this.triggerFeedback('error');

            if (this.state.lives <= 0) {
                setTimeout(() => this.endGame(false), 1500);
            } else {
                setTimeout(() => {
                    this.state.currentIndex++;
                    this.state.isPlaying = true;
                    this.loadQuestion();
                }, 1500);
            }
        }
    },

    triggerFeedback(type) {
        const overlay = document.getElementById('feedback-overlay');
        const app = document.getElementById('app');
        
        if (type === 'success') {
            overlay.className = 'feedback-overlay success-anim';
            overlay.innerHTML = '<div class="feedback-text">CORRETO! ⚡</div>';
            if (navigator.vibrate) navigator.vibrate(50);
        } else {
            overlay.className = 'feedback-overlay error-anim';
            overlay.innerHTML = '<div class="feedback-text">ERROU! 💥</div>';
            app.classList.add('shake');
            if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        }

        setTimeout(() => {
            overlay.className = 'feedback-overlay';
            overlay.innerHTML = '';
            app.classList.remove('shake');
        }, 800);
    },

    endGame(victory) {
        this.stopTimer();
        const app = document.getElementById('app');
        const stars = victory ? (this.state.lives === 3 ? 3 : this.state.lives === 2 ? 2 : 1) : 0;
        
        // Salvar progresso
        if (victory) {
            const stageKey = `${this.state.currentStage.id || 'unknown'}_s${window.currentStageIdx || 0}`;
            // Nota: Em produção, passar o ID correto do stage
            window.GameState.completeStage('cap7_doencas', window.currentStageIdx || 0, stars);
        }

        app.innerHTML = `
            <div class="modal-overlay active">
                <div class="modal-content result-screen ${victory ? 'victory' : 'defeat'}">
                    <div class="result-icon">${victory ? '🏆' : '💀'}</div>
                    <h1>${victory ? 'MISSÃO CUMPRIDA!' : 'GAME OVER'}</h1>
                    <div class="result-stats">
                        <div class="stat-box">
                            <span class="label">Pontos</span>
                            <span class="value">${this.state.score}</span>
                        </div>
                        <div class="stat-box">
                            <span class="label">Estrelas</span>
                            <span class="value">${'⭐'.repeat(stars)}</span>
                        </div>
                    </div>
                    <p>${victory ? 'Você evoluiu seu conhecimento!' : 'Não desista! Tente novamente.'}</p>
                    
                    <div class="action-buttons">
                        <button class="btn-primary" onclick="Router.navigate()">VOLTAR AO MAPA</button>
                        ${!victory ? `<button class="btn-secondary" onclick="GameEngine.restart()">TENTAR DE NOVO</button>` : ''}
                    </div>
                </div>
            </div>
        `;
    },

    exit() {
        if(confirm("Deseja sair da missão? Seu progresso será perdido.")) {
            Router.navigate();
        }
    },

    restart() {
        // Reinicia com os mesmos parâmetros
        const chapterId = 'cap7_doencas'; // Deveria ser passado dinamicamente
        const stageIdx = window.currentStageIdx || 0;
        // Recarrega a view do stage para reiniciar
        UI.renderStage(chapterId, stageIdx);
    }
};

// Expor globalmente
window.GameEngine = GameEngine;