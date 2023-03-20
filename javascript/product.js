/*
  Chosen game from games.html
*/

const gameContainer = document.querySelector(".wrapper");
const detailContainer = document.querySelector(".product-detail");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const gameId = params.get("id");

console.log(gameId);

const url = `https://aks-faret.no/apiex/wp-json/wc/store/products/${gameId}`;

// Gets the chosen game from previous page
async function fetchGame() {
  const response = await fetch(url);
  const game = await response.json();
  console.log(game);

  createHTML(game);
  createDetails(game);
}

fetchGame();

/*
  Get the api data
*/

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

function createDetails(game) {
  detailContainer.innerHTML = `
    <div class="text1">
      <div class="left">
        <h3 class="f-detail">Genre</h3>
        <p class="s-detail">${game.attributes[4].terms[0].name}</p>
      </div>
      <div class="right">
        <p class="description" id="desc1">${game.description}</p>
      </div>
    </div>

    <hr class="text-line">

    <div class="text2">
      <div class="left">
        <h3 class="f-detail">Number of players</h3>
        <p class="s-detail">${game.attributes[5].terms[0].name}</p>
      </div>
      <div class="right">
        <p class="description" id="desc2">
        </p>
      </div>
    </div>

    <hr class="text-line">

    <div class="text3">
      <div class="left">
        <h3 class="f-detail">Series</h3>
        <p class="s-detail">${game.attributes[6].terms[0].name}</p>
      </div>
      <div class="right">
        <p class="description" id="desc3">
        </p>
      </div>
    </div>

    <div class="text4">
      <div class="left">
        <h3 class="f-detail">User ratings</h3>
        <p class="s-detail">${game.attributes[7].terms[0].name}</p>
      </div>
    </div>
  `;
}
