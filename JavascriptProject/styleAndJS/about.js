const letters = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ";

function animateLetters() {
  document.querySelectorAll(".letter-switch").forEach((link) => {
    let ganm = 0;

    clearInterval(link.interval);

    link.interval = setInterval(() => {
      link.innerText = link.innerText
        .split("")
        .map((letter, index) => {
          if (index < ganm) {
            return link.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (ganm >= link.dataset.value.length) {
        clearInterval(link.interval);
      }

      ganm += 1 / 3;
    }, 30);
  });
}

function resetLetters() {
  document.querySelectorAll(".letter-switch").forEach((link) => {
    clearInterval(link.interval);
    link.innerText = link.dataset.value;
  });
}

// ანიმაციის დაწყება გვერდის ჩატვირთვისთანავე
document.addEventListener("DOMContentLoaded", () => {
  animateLetters();
  setInterval(() => {
    resetLetters();
    animateLetters();
  }, 5000);
});
