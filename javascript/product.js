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