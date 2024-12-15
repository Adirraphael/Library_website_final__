function openInfoBox() {
    document.getElementById("infoBox").style.display = "flex";
}

function closeInfoBox() {
    document.getElementById("infoBox").style.display = "none";
}



function toggleLibraryDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Show the details
    } else {
        details.style.display = "none"; // Hide the details
    }
}

// events page 

function filterEvents() {
    const search = document.getElementById("eventSearch").value.toLowerCase();
    const events = document.querySelectorAll(".event-card");

    events.forEach(event => {
        const title = event.querySelector("h2").textContent.toLowerCase();
        event.style.display = title.includes(search) ? "block" : "none";
    });
}

function sortEvents() {
    const container = document.getElementById("eventsContainer");
    const events = Array.from(container.children);

    events.sort((a, b) => {
        const dateA = new Date(a.querySelector("p").textContent.split(": ")[1]);
        const dateB = new Date(b.querySelector("p").textContent.split(": ")[1]);
        return dateA - dateB;
    });

    events.forEach(event => container.appendChild(event));
}

function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === "block") {
        details.style.display = "none";
        button.textContent = "View Details";
    } else {
        details.style.display = "block";
        button.textContent = "Hide Details";
    }
}


