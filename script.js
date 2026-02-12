function openLetter() {
  document.getElementById("heart").style.display = "none";
  document.getElementById("letter").classList.remove("hidden");
}

function acceptLove() {
  window.location.href = "memory.html";
}

/* RUNNING NO BUTTON */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
}