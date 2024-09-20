import { IMAGES } from '../Utils/data';
import { printBajoImagen } from '../componentes/PrintBajoImagen/PrintBajoImagen';

export const setupScrollableSet = (scrollableSet, setupImagePreview, resetCarouselPreview) => {
  const getScrollableElementTemplate = (image, index) => `
    <li role="button" class="clickable">
      <img id="image-${index}" 
        src="${image.src}"
        alt="${image.alt}"
        title="${image.title}"
        anio="${image.anio}" 
        reparto="${image.reparto}" 
        director="${image.director}" 
        duracion="${image.duracion}" 
        temaPrincipaldelaBandaSonora="${image.temaPrincipaldelaBandaSonora}"
        compositordelaBandaSonora="${image.compositordelaBandaSonora}"
        premios="${image.premios}" />
       
    </li>
  `;

  IMAGES.forEach((image, index) => {
    const template = getScrollableElementTemplate(image, index);
    scrollableSet.innerHTML += template;
  });

  const addScrollableListeners = () => {
    const scrollables = document.querySelectorAll('li.clickable');
    scrollables.forEach((scrollable) => {
      scrollable.addEventListener('click', (event) => {
        const image = event.target.querySelector('img');
        if (!image) return;
        setupImagePreview(image.src);
        resetCarouselPreview();

        // Llamamos a printBajoImagen para actualizar el contenido al hacer clic en la imagen
        printBajoImagen({
          src: image.src,
          alt: image.alt,
          title: image.title,
          anio: image.getAttribute('anio'),
          reparto:image.getAttribute('reparto'),
          director:image.getAttribute('director'),
          duracion:image.getAttribute('duracion'),
          temaPrincipaldelaBandaSonora:image.getAttribute('temaPrincipaldelaBandaSonora'),
          compositordelaBandaSonora:image.getAttribute('compositordelaBandaSonora'),
          premios:image.getAttribute('premios')  
        });

      });
    });
  };

  addScrollableListeners();
};
