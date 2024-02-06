/* function fetchPokemons() {
    const apiUrl = 'https://majazocom.github.io/Data/pokemons.json';

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the data (e.g., display it or process it further)
            console.log('Pokémon data:', data);
        })
        .catch(error => {
            console.error('Error fetching Pokémon data:', error);
        });
}

// Call the function to fetch Pokémon data
fetchPokemons(); */



async function fetchPokemons() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/pokemons.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        data.forEach((pokemon) => {
            console.log(pokemon);
        });
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
}
fetchPokemons();

async function fetchAndRenderPokemons() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/pokemons.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const pokemonListContainer = document.getElementById("pokemon-list"); // Assuming you have a <div> with this ID

        data.forEach((pokemon) => {
            const pokemonName = pokemon.name;
            const paragraph = document.createElement("p");
            paragraph.textContent = pokemonName;
            pokemonListContainer.appendChild(paragraph);
        });
    } catch (error) {
        console.error("Error fetching and rendering Pokémon data:", error);
    }
}

fetchAndRenderPokemons();

                    // Here is another way to do above thing

   /*  async function fetchme() {
        const response = await fetch("https://majazocom.github.io/Data/pokemons.json");
        const data = await response.json();
        for (const pokemon of data) {
            console.log(pokemon);
            document.body.insertAdjacentHTML("beforeend", `<p>${pokemon.name}</p>`);
        }
    }
    fetchme();  */

