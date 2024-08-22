document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPause = document.getElementById('playPause');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const progressBar = document.getElementById('progress-bar');
    const currentTime  = document.getElementById('time');
    const duration = document.getElementById('duration');
    const musicName = document.getElementById('musicName'); 

    const playlist = [
        'media/Come Along With Me.mp3',
        'media/Obsidian - Monster.mp3',
        'media/Everything Stays.mp3',
        'media/Woke Up.mp3'
    ];

    let musicPlaying = 0; // índice atual

    // atualiza a barra
    function updateProgress() {
        if (!audio.duration) return; 
    
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    
        // Formata e exibe o tempo atual
        const formatTime = (time) => {
            const minutes = Math.floor(time / 60).toString().padStart(2, '0');
            const seconds = Math.floor(time % 60).toString().padStart(2, '0');
            return `${minutes}:${seconds}`;
        };
    
        currentTime.textContent = formatTime(audio.currentTime);
        duration.textContent = formatTime(audio.duration);
    }

    // carrega a música e mostra o nome dela sem o "mp3"
    function loadMusic() {
        audio.src = playlist[musicPlaying];
        audio.play();
        playPause.textContent = 'Pause';

        musicName.textContent = playlist[musicPlaying].split('/').pop().replace('.mp3', '');
    }

    // controla o play/pause
    function controlPlayPause() {
        audio.paused ? (audio.play(),playPause.textContent = 'Pause') : (audio.pause(),
        playPause.textContent = 'Play');
    }

    function nextMusic() {
        loadMusic(musicPlaying = (musicPlaying + 1 >= playlist.length) ? 0 : musicPlaying + 1);
    }

    function prevMusic() {
        loadMusic(musicPlaying = (musicPlaying - 1 < 0) ? playlist.length - 1 : musicPlaying - 1);
    }

    // eventos
    playPause.addEventListener('click', controlPlayPause);
    next.addEventListener('click', nextMusic);
    prev.addEventListener('click', prevMusic);
    progressBar.addEventListener('input', () => {
        const newTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = newTime; 
    });

    // atualiza a barra de progresso conforme o áudio toca
    audio.addEventListener('timeupdate', updateProgress);

    // exibe toda a duração quando o áudio é carregado
    audio.addEventListener('loadedmetadata', () => {
        const minutes = Math.floor(audio.duration / 60);
        const seconds = Math.floor(audio.duration % 60);
        duration.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });

    loadMusic(musicPlaying);
    playPause.textContent = 'Play';
});
