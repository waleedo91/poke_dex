const pokeList = document.getElementById("poke-list");
const searchInput = document.getElementById("search-input");
let pokemonList = [];

const URL = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemon = async () => {
  await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((pokeName) => {
        if (pokeName.name) {
          fetchPokeInfo(pokeName.url);
        }
      });
    });
};

fetchPokemon();

const fetchPokeInfo = async (pokemon) => {
  await fetch(pokemon)
    .then((res) => res.json())
    .then((data) => {
      pokemonList.push(data);
    });
};

searchInput.addEventListener("keyup", (e) => {
  const searchResult = e.target.value;
  const pokeSearch = pokemonList
    .map((poke) => {
      if (poke.name.includes(searchResult)) {
        return `
        <li class='poke-item'>
          <div class="card " style="width: 18rem;">
          <img src="${
            poke.sprites.front_default
          }" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${poke.name}</h5>
            ${poke.types.map((type) => {
              return `
                <p>${type.type.name}</p>
              `;
            })}
          </div>
        </div>
        </li>
      `;
      }
    })
    .join("");
  pokeList.innerHTML = pokeSearch;
});

// searchInput.addEventListener("keyup", (e) => {
//   const searchResult = e.target.value;
// });

// fetchPokemon();

// {
//   data.results.forEach((poke) => {
//     searchInput.addEventListener("keyup", (e) => {
//       const searchResult = e.target.value;
//       console.log(searchResult);
//       if (poke.name.includes(searchResult)) {
//         fetch(poke.url)
//           .then((res) => res.json())
//           .then((data) => {
//             pokemon.push(data);
//             const pokeSearch = pokemon
//               .map((poke) => {
//                 // console.log(poke.name);
//                 return `
//                 <li>
//                   <h2>${poke.name}</h2>
//                   <img src=${poke.sprites.front_default} />
//                 </li>
//                 `;
//               })
//               .join("");
//             pokeList.innerHTML = pokeSearch;
//           });
//       }
//     });
//   });
// });
