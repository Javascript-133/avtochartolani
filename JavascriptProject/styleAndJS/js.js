var menuHolder = document.getElementById("menuHolder");
var siteBrand = document.getElementById("siteBrand");
function menuToggle() {
  if (menuHolder.className === "drawMenu") menuHolder.className = "";
  else menuHolder.className = "drawMenu";
}
if (window.innerWidth < 426) siteBrand.innerHTML = "MAS";
window.onresize = function () {
  if (window.innerWidth < 420) siteBrand.innerHTML = "MAS";
  else siteBrand.innerHTML = "ავთოს პროექტი";
};
// ნავ მენიუს დაკეტვა ნებისმიერ ადგილას კლიკით
document.addEventListener("click", function (event) {
  var menuHolder = document.getElementById("menuHolder");
  if (!menuHolder.contains(event.target)) {
    menuHolder.classList.remove("drawMenu");
  }
});
//
// Quote-ების კარუსელი
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let getQuoteBtn = document.getElementById("getQuoteBtn");
let getQuoteBtn2 = document.getElementById("getQuoteBtn2");

function changeSliderImage() {
  const imagePaths = [
    "./img/carousel/1.jpg",
    "./img/carousel/2.jpg",
    "./img/carousel/3.jpg",
    "./img/carousel/4.jpg",
    "./img/carousel/5.jpg",
    "./img/carousel/6.jpg",
    "./img/carousel/7.jpg",
    "./img/carousel/8.jpg",
    "./img/carousel/9.jpg",
    "./img/carousel/10.jpg",
    "./img/carousel/11.jpg",
    "./img/carousel/12.jpg",
    "./img/carousel/13.jpg",
    "./img/carousel/14.jpg",
    "./img/carousel/15.jpg",
    "./img/carousel/16.jpg",
    "./img/carousel/17.jpg",
    "./img/carousel/18.jpg",
    "./img/carousel/19.jpg",
    "./img/carousel/20.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  const sliderImage = document.getElementById("slider-image");
  sliderImage.src = imagePaths[randomIndex];
}

const quote_api_url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(quote_api_url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};
window.addEventListener("load", getQuote);

getQuoteBtn.addEventListener("click", getQuote);
getQuoteBtn2.addEventListener("click", getQuote);
//
// 5 წამიანი ინტერვალი თუ როდის შეიცვლება სლაიდი
setInterval(function () {
  document.getElementById("getQuoteBtn").click();
}, 5000);
//
// ტექსტის ეფექტი წყარო: https://www.youtube.com/watch?v=W5oawMJaXbU

const letters = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ";

let interval = null;

document
  .querySelectorAll(
    ".whiteLink, .blackLink, #siteBrand, .nav-menu-item, .text-light"
  )
  .forEach((link) => {
    link.onmouseover = (event) => {
      let ganm = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < ganm) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (ganm >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        ganm += 1 / 3;
      }, 30);
    };

    link.onmouseout = () => {
      clearInterval(interval);
      link.innerText = link.dataset.value;
    };
  });

// footer

const animatedText = document.getElementById("footerAuthor");

function changeText() {
  const currentText = animatedText.textContent;
  let newText;

  switch (currentText) {
    case "© 2023 ავთო ჩართოლანი":
      newText = "";
      break;
    case "":
      newText = "ავთო";
      break;
    case "ავთო":
      newText = "ჩართოლანი";
      break;
    default:
      newText = "© 2023 ავთო ჩართოლანი";
  }

  animatedText.textContent = newText;
}

animatedText.addEventListener("animationiteration", changeText);
