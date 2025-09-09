// Smooth scroll to sections
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  });
});

// Console Easter Egg
console.log("🌹 Welcome to Lana Del Rey Fanpage - Made by a true fan!");
