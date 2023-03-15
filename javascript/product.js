async function getGames() {
  const res = await fetch("https://aks-faret.no/apiex/wp-json/wc/store/products");
  const data = await res.json();
  console.log(data);
  data.forEach((game) => renderGame(game));
}

getGames();

function renderGame(game) {
  document.querySelector("body").innerHTML += `
    <h2>${game.name}</h2>
    <h2>${game.description}</h2>
    <h2>${game.attributes[0].terms[0].name}</h2>
    <div>
      ${game.price_html}
    </div>
    <img src="${game.images[0].src}" width="300px">
    <hr>
  `;
}

/*
function renderSwitchGame(switchGame) {
  document.querySelector("body").innerHTML += `
    <a href="../html/procuct.html">
    <div class="gameImage">
            <img class="playgame" id="playgame1" src="${switchGame.images[0].src}">
            <h3 class="play-price" id="play-price1"> ${switchGame.price_html}</h3>
          </div>
          </a>
  `;
}*/

/*
  Chosen game from games.html
*/
/*
console.log(localStorage.getItem("id"));

const detailContainer = document.querySelector(".book_details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const gameId = params.get("id");

const url = "https://aks-faret.no/apiex/wp-json/wc/store/products" + gameId;
*/
// Gets the chosen game from previous page
/*
async function fetchGame() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  createHTML(data);
}

fetchGame();
*/
// Get the api data
/*
function createHTML(data) {
  detailContainer.innerHTML = `
  <h1 class="specific_book_title">${data.results[0].title}</h1>
  <div class="details_image"
    style="background-image: url('${data.results[0].formats["image/jpeg"]}')">
  </div>
  <div class="details_author">
    Name: ${data.results[0].authors[0].name}
    Birth year: ${data.results[0].authors[0].birth_year}
    Death year: ${data.results[0].authors[0].death_year}
  </div>`;
}*/