import './MusicPlayer.css'

export const initMusicPlayer = (audioPlayer, playButton, ulMusic, btnMusica) => {
    playButton.addEventListener("click", function () {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = "Pausar";
      } else {
        audioPlayer.pause();
        playButton.textContent = "Reproducir";
      }
      console.log('MUSICA');
    });
  
    const playMusic = () => {
      ulMusic.style.display = ulMusic.style.display === 'none' ? 'flex' : 'none';
    };
    
    btnMusica.addEventListener('click', playMusic);
  };
  