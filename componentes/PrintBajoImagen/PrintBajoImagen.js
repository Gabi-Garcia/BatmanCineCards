import './PrintBajoImagen.css';

export const printBajoImagen = (imageData) => {
  const pruebaElement = document.getElementById('section-2');

  if (!pruebaElement) {
    console.error("No se encontró el contenedor 'section-2'");
    return;
  }

  // Actualiza el contenido con los datos de la imagen clicada
  pruebaElement.innerHTML = `
    <div class="printBajoImagen">
      <p>${imageData.title} - Año: ${imageData.anio}</p>
      <p>${imageData.reparto}</p>
      <div class="imgBox">
        <img src="${imageData.src}" alt="${imageData.alt}" />
      </div>
    </div>
  `;
};

  
  // <ul class="printBajoImagen">
  //     <img src="${src}" alt="${image.alt}" title="${image.title}"/>
  //     <li>Título: ${image.title}</li>
  //     <li>Año: ${image.anio}</li> 
  //     <li>Reparto: ${image.reparto}</li>
  //     <li>Director: ${image.director}</li>
  //     <li>Duración: ${image.duracion}</li>
  //     <li>Donde Ver: ${image.dondeVer}</li>
  //     <li>Tema Principal de la Banda Sonora: ${image.temaPrincipaldelaBandaSonora}</li>
  //     <li>Compositor de la Banda Sonora: ${image.compositordelaBandaSonora}</li>
  //     <li>Premios: ${image.premios}</li>
  //   </div>
  // </ul>