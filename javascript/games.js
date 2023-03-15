async function getGames() {
  const res = await fetch("https://aks-faret.no/apiex/wp-json/wc/store/products");
  const data = await res.json();
  console.log(data);
  data.forEach((game) => renderGame(game));
}

getGames();

function renderGame(game) {
/*
  document.querySelector(".playgames").innerHTML += `
    <a href="../html/procuct.html"><div class="gameImage">
      <img class="playgame" id="playgame1" src="${game.images[0].src}">
      <h3 class="play-price" id="play-price1">${game.price_html}</h3>
    </a>
  `;*/
  
  
  if (game.attributes[1].name === "playbox"){
    document.querySelector(".playgames").innerHTML += `
    <a href="../html/procuct.html"><div class="gameImage">
      <img class="playgame" id="playgame1" src="${game.images[0].src}">
      <h3 class="play-price" id="play-price1">${game.price_html}</h3>
    </a>
  `;
  }

  if (game.attributes[1].name === "playstation"){
    document.querySelector(".psgames").innerHTML += `
    <a href="../html/procuct.html"><div class="gameImage">
      <img class="psgame" id="psgame1" src="${game.images[0].src}">
      <h3 class="ps-price" id="ps-price1">${game.price_html}</h3>
    </a>
  `;
  }

  if (game.attributes[1].name === "switch"){
    document.querySelector(".swgames").innerHTML += `
    <a href="../html/procuct.html"><div class="gameImage">
      <img class="swgame" id="swgame1" src="${game.images[0].src}">
      <h3 class="sw-price" id="sw-price1">${game.price_html}</h3>
    </a>
  `;
  }
  
  /*
  if game.category== "switch"{
    document.querySelector("switch").innerHTML += `
    switch html her
    
    `
  }*/
  /*
  document.querySelector(".playgames").innerHTML += `
    <a href="../html/procuct.html"><div class="gameImage">
      <img class="playgame" id="playgame1" src="${game.images[0].src}">
      <h3 class="play-price" id="play-price1">${game.price_html}</h3>
    </a>
  `;*/

  /*
  document.querySelector(".psgames").innerHTML += `
    <a href="../html/procuct.html"><div class="gameImage">
      <img class="playgame" id="playgame1" src="${game.images[0].src}">
      <h3 class="play-price" id="play-price1">${game.price_html}</h3>
    </a>
  `;*/
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

    <h2>${game.description}</h2>
    <h2>${game.attributes[0].terms[0].name}</h2>
    <div>
      ${game.price_html}
    </div>
    <img src="${game.images[0].src}" width="300px">
    <hr>
  `;
}*/