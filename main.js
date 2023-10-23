import { IMAGES } from './constants';
import './style.css';

//Setup de la aplicación
const appElement = document.querySelector('#app');
const pruebaElement = document.querySelector('#section-2')
const btnDelete = document.querySelector('#btn-delete')
const ulMusic = document.querySelector('#ulMusic')
const btnMusica = document.querySelector('#btnMusica')


/**AUDIO*/
const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton"); 
/***/

const printBajoImagen = () => {
  IMAGES.forEach((image)=>{
    const imagen = getScrollableElementTemplate(image)
    pruebaElement.innerHTML +=  `
    <ul id="pruebaPrueba" class="pruebaPrueba">
    <li>${imagen}</li>
    <div class="datos">
    <li>Título: ${image.title}</li>
    <li>Año: ${image.anio}</li>
    <li>Reparto: ${image.reparto}</li>
    <li>Director: ${image.director}</li>
    <li>Duración: ${image.duracion}</li>
    <li>Donde Ver: ${image.dondeVer}</li>
    <li>Tema Principal de la Banda Sonora: ${image.temaPrincipaldelaBandaSonora}</li>
    <li>Compositor de la Banda Sonora: ${image.compositordelaBandaSonora}</li>
    <li>Premios: ${image.premios}</li>
    </div>
    </ul>
    `
  })
}
const limpiarBajoImagen = () => { 
  pruebaElement.innerHTML = ''
  btnDelete.addEventListener('click', limpiarBajoImagen);
}

IMAGES.forEach((image) => {
  const getCarouselTemplate = ()=> 
  `
  <div id="thepower-carousel" class="thepower-carousel">
  <ul class="scrollable-set"></ul>
  <div class="image-preview"></div>
  </div>
  `
  appElement.innerHTML = getCarouselTemplate();
  console.log('IMAGE : ', image.title)
}) 


//Lógica de la aplicación
playButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = "Pausar";
    } else {
        audioPlayer.pause();
        playButton.textContent = "Reproducir";
    }
});

const playMusic = () => {
  if(ulMusic.style.display === 'none'){
    ulMusic.style.display ='block'
  }else{
    ulMusic.style.display = 'none'
  }
}
btnMusica.addEventListener('click', playMusic)

const scrollableSet = document.querySelector('.scrollable-set');
const imagePrevElement = document.querySelector('.image-preview');
let actualImageIndex = 0;
let imageInterval;

const getScrollableElementTemplate = (image, index)=>
`
<li role="button" class="clickable">
<img id="image-${index}" src="${image.src}" alt="${image.alt}" title="${image.title}" anio="${image.anio}"/>
</li>
`
const setupScrollableSet = () => {
  IMAGES.forEach((image, index) => {
    const template = getScrollableElementTemplate(image, index)
    scrollableSet.innerHTML += template;
    console.log(image.title,' - ', image.anio)
  }
  )};
  const setupCarouselInterval = () => {
    imageInterval = setInterval(()=>{
      if(actualImageIndex === IMAGES.length -1){
        actualImageIndex = 0;
      }else{
        actualImageIndex += 1;
      }
      setupImagePreview(IMAGES[actualImageIndex].src);
      console.log('Intervalo')
    },5000);
    
  };
  const resetCarouselPreview = (image) => {
    clearInterval(imageInterval);
    setupCarouselInterval()
    printBajoImagen();
    
}
const setupImagePreview = (src) => {
      imagePrevElement.style.backgroundImage = `url(${src})`;
      console.log('setupImagePreview ', src)
    };
    
    const handleChangePreview = (event) => {
      console.log('Soy la función handleChangePreview : ', event.target);
      const image = event.target.children[0];
      console.log('BUSCANDO : ', event.target.children[0])
      const imageIndex = Number(image.id.split('-')[1]);
      actualImageIndex = imageIndex;
      setupImagePreview(image.src);
      console.log('setupImageIndex : ',image.id)
      resetCarouselPreview();
    };
    const addScrollableListeners = () => {
      const scrollables = document.querySelectorAll('li.clickable');
      scrollables.forEach((scrollable)=>{``
        limpiarBajoImagen()
        scrollable.addEventListener('click', handleChangePreview)
      })
    };
    setupScrollableSet();
    setupImagePreview(IMAGES[3].src);
    addScrollableListeners();
    setupCarouselInterval();
