import { setupScrollableSet } from '../../Utils/setupScrollableSet';
import { handleChangePreview } from '../../Utils/handleChangePreview';
import { IMAGES } from '../../Utils/data';
import './Carousel.css'

export const initCarousel = (scrollableSet, imagePrevElement) => {
  let actualImageIndex = 0;
  let imageInterval;

  const setupImagePreview = (src) => {
    imagePrevElement.style.backgroundImage = `url(${src})`;
    console.log('setupImagePreview ', src);
  };

  const setupCarouselInterval = () => {
    imageInterval = setInterval(() => {
      if (actualImageIndex === IMAGES.length - 1) {
        actualImageIndex = 0;
      } else {
        actualImageIndex += 1;
      }
      setupImagePreview(IMAGES[actualImageIndex].src);
      console.log('Intervalo');
    }, 5000);
  };

  const resetCarouselPreview = () => {
    clearInterval(imageInterval);
    setupCarouselInterval();
  };

  setupScrollableSet(scrollableSet, setupImagePreview, resetCarouselPreview);
  setupImagePreview(IMAGES[0].src);
  setupCarouselInterval();
};
