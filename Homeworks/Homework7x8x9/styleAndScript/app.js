const getRanHex = (size) => {
  let result = [];
  let hexRef = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join("");
};

async function loginToSystem() {
  const rawDatabase = await fetch("styleAndScript/database.json");
  const databaseData = await rawDatabase.json();

  const inputUserName = document.getElementById("userName").value;
  const inputPassword = document.getElementById("password").value;

  for (let userData of databaseData.userCredentials) {
    if (
      userData.username === inputUserName &&
      userData.password === inputPassword
    ) {
      const dateNowInTimestamp = Date.now();
      const validTime = 120 * 60 * 1000;
      const userTokenData = getRanHex(64);
      localStorage.setItem("sessionToken", userTokenData);
      localStorage.setItem("validUntil", dateNowInTimestamp + validTime);
      document.getElementById("loginChecker").innerHTML =
        "You have logged in to system, you'll log in in 3 seconds";
      document.getElementById("loginChecker").style.color = "#00ff00";
      setTimeout(function () {
        window.location = "./pages/test.html";
      }, 3000);
      document.getElementById("userName").style.border = "1px solid #00ff00";
      document.getElementById("password").style.border = "1px solid #00ff00";
      document.getElementById("loginSVG").style.color = "#00ff00";
      document.getElementById("pleaseText").style.color = "#00ff00";
    } else {
      document.getElementById("loginChecker").innerHTML =
        "Wrong username or password";
      document.getElementById("loginChecker").style.color = "#FF244E";
      document.getElementById("userName").style.border = "1px solid #FF244E";
      document.getElementById("password").style.border = "1px solid #FF244E";
      document.getElementById("loginSVG").style.color = "#FF244E";
      document.getElementById("pleaseText").style.color = "#FF244E";
    }
  }
}

fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  .then((response) => response.json())
  .then((data) => {
    const cardsContainer = document.getElementById("cards-container");
    data.forEach((product) => {
      const card = document.createElement("div");
      const image = document.createElement("img");
      const name = document.createElement("h5");
      const price = document.createElement("p");
      card.classList.add("card");
      image.id = "mainImg";
      name.classList.add("card-title");
      name.id = "card-title";
      price.id = "cardPrice";
      card.style.display = "inline-block"
      image.src = product.image_link;
      name.textContent = product.name;
      price.textContent = product.price;
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(price);
      cardsContainer.appendChild(card);
    });
  });
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const name = card.querySelector("h5").textContent.toLowerCase();
      if (name.includes(searchValue)) {
        card.style.display = "inline-block";
      } else {
        card.style.display = "none";
      }
    });
  });
  