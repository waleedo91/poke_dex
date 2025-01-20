const pokeList = document.getElementById("poke-list");
const searchInput = document.getElementById("search-input");
let pokemon = [];

const fetchPokemon = async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon?limit=1400")
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((poke) => {
        searchInput.addEventListener("keyup", (e) => {
          const searchResult = e.target.value;
          console.log(searchResult);
          if (poke.name.includes(searchResult)) {
            fetch(poke.url)
              .then((res) => res.json())
              .then((data) => {
                pokemon.push(data);
                const pokeSearch = pokemon
                  .map((poke) => {
                    // console.log(poke.name);
                    return `
                    <li>
                      <h2>${poke.name}</h2>
                      <img src=${poke.sprites.front_default} />
                    </li>
                    `;
                  })
                  .join("");
                pokeList.innerHTML = pokeSearch;
              });
          }
        });
      });
    });
};

fetchPokemon();
