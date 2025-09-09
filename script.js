// Smooth scroll navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll indicator smooth scroll
document.querySelector(".scroll-indicator")?.addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});


// Gallery modal
const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

const modalImg = document.createElement("img");
modal.appendChild(modalImg);

document.querySelectorAll(".gallery-item").forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.style.display = "flex";
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Console Easter Egg
console.log("🌹 Welcome to Lana Del Rey Fanpage - Made with love by Vivek!");
