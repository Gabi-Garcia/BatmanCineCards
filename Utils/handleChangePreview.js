export const handleChangePreview = (event, setupImagePreview, resetCarouselPreview) => {
    const image = event.target.querySelector('img');
    if (!image) return;
  
    setupImagePreview(image.src);
    resetCarouselPreview();
  };
  