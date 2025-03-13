function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
  
/* Stili generali contenitore immagini home page */
let currentIndex = 0;

// Funzione per far scorrere le immagini ogni 5 secondi
function startImageSlider() {
  const images = document.querySelector('.slider-images');
  const totalImages = images.children.length;

  // Cambia la posizione del contenitore delle immagini
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages; // Vai alla prima immagine dopo l'ultima
    const offset = -currentIndex * (images.children[0].offsetWidth + 20); // Calcola lo spostamento
    images.style.transform = `translateX(${offset}px)`; // Applica lo spostamento
  }, 5000); // Scorri ogni 5 secondi
}

// Avvia lo slider
startImageSlider();


/* Stili generali contenitore immagini home page */

// Funzione per rilevare quando si è arrivati in fondo alla pagina
window.onscroll = function() {
    let footer = document.querySelector('footer'); // Seleziona il footer
    let scrollHeight = document.documentElement.scrollHeight; // Altezza totale della pagina
    let scrollPosition = window.innerHeight + window.scrollY; // Altezza della finestra + posizione dello scroll
  
    // Se l'utente ha raggiunto la fine della pagina
    if (scrollPosition >= scrollHeight - 100) {  // Aggiungere uno spazio di 100px dal fondo per attivare il footer
      footer.classList.add('visible');
    } else {
      footer.classList.remove('visible');
    }
  };
  