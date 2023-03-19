/*
  Chosen game from games.html
*/
//const gameContainer = document.querySelector(".wrapper");
//const detailContainer = document.querySelector(".product-detail");

const gameContainer = document.querySelector(".wrapper");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const gameId = params.get("id");

console.log(gameId);

const url = "https://aks-faret.no/apiex/wp-json/wc/store/products/" + gameId;

// Gets the chosen game from previous page
async function fetchGame() {
  const response = await fetch(url);
  const game = await response.json();
  console.log(game);

  createHTML(game);
}

fetchGame();

// Get the api data
function createHTML(game) {
  gameContainer.innerHTML = `
  <img class="game" src="${game.images[0].src}">
  <div class="descbox">
    <h2 class="title">${game.attributes[0].terms[0].name}</h2>
    <br>
    <h3 class="details"> 
      Platform: ${game.attributes[1].terms[0].name} | 
      Publisher: ${game.attributes[2].terms[0].name} | 
      Release year: ${game.attributes[3].terms[0].name}
    </h3>
    <h3 class="second-details"></h3>
  </div>`;
}