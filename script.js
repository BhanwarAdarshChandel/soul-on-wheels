// Mobile Menu Toggle
document.getElementById("hamburger").onclick = function () {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
};

// Load ride data from JSON
fetch("data/rides.json")
    .then(res => res.json())
    .then(rides => {
        const list = document.getElementById("rideList");

        rides.forEach(ride => {
            list.innerHTML += `
                <div class="ride-card">
                    <h3>${ride.title}</h3>
                    <p>${ride.description}</p>
                    <p><strong>Date:</strong> ${ride.date}</p>
                    <p><strong>Distance:</strong> ${ride.distance} km</p>
                </div>
            `;
        });
    });
