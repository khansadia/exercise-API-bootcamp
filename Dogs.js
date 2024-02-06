async function fetchDogs() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/dogs.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        data.forEach((dog) => {
            console.log(dog.name);
        });
    } catch (error) {
        console.error("Error fetching dog data:", error);
    }
}

fetchDogs();
   // Rendering Dog Names in the DOM: 
async function fetchAndRenderDogs() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/dogs.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const dogListContainer = document.getElementById("dog-list"); // Assuming you have a <ul> with this ID

        data.forEach((dog) => {
            const dogName = dog.name;
            const listItem = document.createElement("li");
            listItem.textContent = dogName;
            dogListContainer.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching and rendering dog data:", error);
    }
}

fetchAndRenderDogs();
