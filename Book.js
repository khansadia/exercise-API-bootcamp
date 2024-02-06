
async function fetchBooks() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/books.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        data.forEach((book) => {
            console.log(book.name);   // why it says undefined book 
        });

    } catch (error) {
        console.error("Error fetching books data:", error);
    }
}

fetchBooks();

async function fetchAndRenderBooks() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/books.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const bookListContainer = document.getElementById("book-list");

        data.forEach((book) => {
            if (book.pages < 500) {
                const listItem = document.createElement("li");
                listItem.textContent = book.title;
                bookListContainer.appendChild(listItem);
            }
        });
    } catch (error) {
        console.error("Error fetching and rendering book data:", error);
    }
}

fetchAndRenderBooks();
