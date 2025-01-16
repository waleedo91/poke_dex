const pokeContainer = document.getElementById("poke-container");

async function getPokemon() {
  try {
    await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
      .then((res) => res.json())
      .then((data) => {
        pokeContainer.innerHTML = `
            <img src="${data.sprites.front_shiny}" class="card-img-top" alt="${data.name}">
            <div class="card-body">
              <h5 class="card-title">Name: ${data.name}</h5>
            </div>
        `;
      });
  } catch (err) {
    console.error(err);
  }
}

getPokemon();
