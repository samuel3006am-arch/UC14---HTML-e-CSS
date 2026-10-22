
// Atualiza automaticamente o ano do rodapé.
const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Elementos da fotografia.
const profilePhoto = document.querySelector("#profile-photo");
const photoPlaceholder = document.querySelector("#photo-placeholder");

// Mostra um espaço ilustrativo se a fotografia não existir.
function showPhotoPlaceholder() {
  if (profilePhoto && photoPlaceholder) {
    profilePhoto.hidden = true;
    photoPlaceholder.style.display = "grid";
  }
}

// Detecta se a imagem não foi carregada.
if (profilePhoto && photoPlaceholder) {
  profilePhoto.addEventListener("error", showPhotoPlaceholder);

  if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {
    showPhotoPlaceholder();
  }
}

// Anima os cartões de habilidades e projetos.
const animatedCards = document.querySelectorAll(
  ".skill-card, .project-card"
);

if ("IntersectionObserver" in window) {
  animatedCards.forEach((card) => {
    card.classList.add("reveal-pending");
  });

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          // Para de observar o cartão depois da animação.
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  animatedCards.forEach((card) => {
    observer.observe(card);
  });
}
