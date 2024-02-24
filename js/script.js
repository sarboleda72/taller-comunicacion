document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las opciones del menú
    const menuItems = document.querySelectorAll(".navbar-nav .nav-item a.nav-link");

    // Iterar sobre cada opción del menú
    menuItems.forEach(function(item) {
      // Agregar un evento de clic a cada opción
      item.addEventListener("click", function(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtener el atributo href del enlace
        const targetId = item.getAttribute("href").substring(1); // Eliminar el signo '#' del inicio

        // Obtener el artículo correspondiente al atributo href
        const targetArticle = document.getElementById(targetId);

        // Desplazarse suavemente hasta el artículo
        targetArticle.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
 // Función para obtener la fecha y hora actual
 function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
  }

  // Función para actualizar la fecha y hora cada segundo
  function updateClock() {
    const currentDateTimeElement = document.getElementById('current-date-time');
    if (currentDateTimeElement) {
      currentDateTimeElement.textContent = `Todos los derechos reservados | Última actualización: ${getCurrentDateTime()}`;
    }
  }

  // Llamar a la función inicialmente para mostrar la fecha y hora actual
  updateClock();

  // Actualizar la fecha y hora cada segundo
  setInterval(updateClock, 1000);