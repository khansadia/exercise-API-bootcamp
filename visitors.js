async function fetcher() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/attendees.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Log the data to the console
        console.log(data);

        // Render attending attendees to the DOM
        document.body.insertAdjacentHTML("beforeend", "<h1>Attendees</h1>");
        for (const attendee of data) {
            if (attendee.attending) {
                document.body.insertAdjacentHTML("beforeend", `<p>${attendee.name}</p>`);
            }
        }

        // Render allergic attendees to the DOM
        document.body.insertAdjacentHTML("beforeend", "<h2>Attendees with Allergies</h2>");
        for (const attendee of data) {
            if (attendee.attending && attendee.allergies.length > 0) {
                document.body.insertAdjacentHTML("beforeend", `<p>${attendee.name}</p>`);
            }
        }
    } catch (error) {
        console.error("Error fetching and rendering attendee data:", error);
    }
}

fetcher();

            //  another way to do this
  /* async function fetcher() {
    const response = await fetch("https://majazocom.github.io/Data/attendees.json");
    const data = await response.json();
    console.log(data);
    document.body.insertAdjacentHTML("beforeend", `<h1>Attendies</h1>`);
    for (mon of data) {
        if (mon.attending) {
            document.body.insertAdjacentHTML("beforeend", `<p>${mon.name}</p>`);
        }
    }
    document.body.insertAdjacentHTML("beforeend", `<h2>Attendies with Allergic</h2>`);
    for (mon of data) {
        if (mon.attending && mon.allergies.length > 0) {
            document.body.insertAdjacentHTML("beforeend", `<p>${mon.name}</p>`);
        }
    }
}
fetcher(); */



