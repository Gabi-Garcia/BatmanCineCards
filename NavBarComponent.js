import "./Navbar.css";


export const Navbar = () => {
    document.addEventListener("DOMContentLoaded", () => {
       
       // Verificar si el ancho de pantalla es menor a 767px
 
       const navLinks = document.querySelectorAll(".nav-links");
       const mainNav = document.querySelector(".main-nav");
       const navBarBurguer = document.querySelector("#js-navbar-burguer");
       const nav = document.querySelector(".nav")

      //  if (!mainNav) {
      //     console.error("No se encontró la barra de navegación principal.");
      //     return;
      //  }
       navBarBurguer.addEventListener("click", () =>{
         if(mainNav){
           mainNav.style= "display:flex";
         }
         else{
          mainNav.style = "display: none"
         }
         console.log('click button')
        })
        
        navLinks.forEach(link => {
          if(
            link.addEventListener("click", () => {
              if(window.innerWidth < 767){
                mainNav.style = "height:0px";
                console.log('mobile')
              }
             else if(window.innerWidth >= 767){
              mainNav.style = "height:150px";
             }
            })
          )
          ;
          // showNav(console.log('PRUEBA'))
       });
    })
  ;
  return `
  <div class="burguer">
     <button class="navbar-burguer" id="js-navbar-burguer">
       <img src="/images/barra-de-menus.png"</>
     </button>
    <h2>Batman CineCards</h2>
  </div>
  
  <nav class="nav">
   <ul class="main-nav" id="js-menu">
      <li>
      <a href="#cabecera"  class="nav-links" id="homelink">Bienvenida</a>
      </li>
      <li>
      <a href="#carousel"  class="nav-links" id="projectslink">Carousel</a>
      </li>
      <li>
      <a href="#section-3"  class="nav-links" id="aboutlink">Música</a>
      </li>
      <li>
      <a href="#sugerencias"  class="nav-links" id="certificados">Sugerencias</a>
      </li>
      </ul>
      </nav>
      `;
    }