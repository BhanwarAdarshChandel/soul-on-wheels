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
                    <p><strong>Meeting Point:</strong> ${ride.meeting_point}</p>
                </div>
            `;
        });
    });

// Load team data from JSON
fetch("data/riders.json")
    .then(res => res.json())
    .then(team => {
        const teamList = document.getElementById("teamList");

        team.forEach(member => {
            teamList.innerHTML += `
                <div class="team-card">
                    <img src="images/logo.jpg" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p><strong>Team:</strong> ${member.team}</p>
                    <p><strong>City:</strong> ${member.city}</p>
                    <p><strong>Expertise:</strong><br> ${member.expertise.join(", ")}</p>
                </div>
            `;
        });
    });
