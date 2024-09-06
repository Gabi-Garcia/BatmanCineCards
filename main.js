import './style.css';
import { initCarousel } from './componentes/Carousel/Carousel';
import { initMusicPlayer } from './componentes/MusicPlayer/MusicPlayer.js';
import { Navbar } from './componentes/Navbar/Navbar.js';
import { printBajoImagen } from './componentes/PrintBajoImagen/PrintBajoImagen.js';

// Setup de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.querySelector('#app');
  // const pruebaElement = document.querySelector('#section-2');
  // const btnDelete = document.querySelector('#btn-delete');
  const ulMusic = document.querySelector('#ulMusic');
  const btnMusica = document.querySelector('#btnMusica');
  const audioPlayer = document.getElementById("audioPlayer");
  const playButton = document.getElementById("playButton");
  
 
  // Inserta el carrusel en el DOM
  appElement.innerHTML = `
 <div id="thepower-carousel" class="thepower-carousel">
   <ul class="scrollable-set"></ul>
   <div class="image-preview"></div>
 </div>
`;

// Ahora que el carrusel está en el DOM, selecciona los elementos
const scrollableSet = document.querySelector('.scrollable-set');
const imagePrevElement = document.querySelector('.image-preview');


// Inicializar el carrusel
initCarousel(scrollableSet, imagePrevElement);

// Inicializar el reproductor de música
initMusicPlayer(audioPlayer, playButton, ulMusic, btnMusica);
Navbar();
printBajoImagen()
});
