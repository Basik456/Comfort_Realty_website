const text = "Basik.inc – Secure & Smart";
let i = 0;
const title = document.querySelector("h1");

function typeWriter() {
  if (i < text.length) {
    title.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
title.textContent = ""; // очистити перед анімацією
typeWriter();
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    document.querySelector(".hero").style.backgroundPositionY = `${scrolled * 0.5}px`;
  });
  document.getElementById("phone").addEventListener("click", () => {
    navigator.clipboard.writeText("+380684805100");
    alert("Номер скопійовано!");
  });

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  