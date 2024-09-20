import "./Navbar.css";

export const Navbar = () => {
  // Inserta el contenido del Navbar en el header
  const navbarContainer = document.getElementById('navbar-container');
  
  if (navbarContainer) {
    console.log("Contenedor del navbar encontrado. Insertando HTML.");
    navbarContainer.innerHTML = `
      <div class="burguer">
        <button class="navbar-burguer" id="js-navbar-burguer">
          <img src="/images/barra-de-menus.png" alt="Menu" />
        </button>
        <h2>Batman CineCards</h2>
      </div>

      <nav class="nav">
        <ul class="main-nav" id="js-menu">
          <li><a href="#cabecera" class="nav-links">Bienvenida</a></li>
          <li><a href="#carousel" class="nav-links">Carousel</a></li>
          <li><a href="#section-3" class="nav-links">Música</a></li>
          <li><a href="#sugerencias" class="nav-links">Sugerencias</a></li>
        </ul>
      </nav>
    `;
  } else {
    console.error("No se encontró el contenedor del navbar.");
    return;
  }

  const navBarBurguer = document.querySelector("#js-navbar-burguer");
  const mainNav = document.querySelector(".main-nav");

  if (!navBarBurguer) {
    console.error("No se encontró el botón de hamburguesa.");
    return;
  } else {
    console.log("Botón de hamburguesa encontrado.");
  }

  if (!mainNav) {
    console.error("No se encontró la barra de navegación principal.");
    return;
  } else {
    console.log("Barra de navegación encontrada.");
  }

  // Añadir evento al botón de hamburguesa
  navBarBurguer.addEventListener("click", () => {
    console.log("Botón de hamburguesa clicado");
    mainNav.classList.toggle("active");
  });

  // Cerrar el menú automáticamente cuando se hace clic en un enlace (en pantallas pequeñas)
  const navLinks = document.querySelectorAll(".nav-links");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 767) {
        mainNav.classList.remove("active");
      }
    });
  });
};
