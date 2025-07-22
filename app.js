const posts = [
  {
    airport: "ILM",
    company: "Enterprise",
    reserved: "Intermediate SUV",
    got: "Nissan Rogue SV",
    status: "No elite status",
    notes: "Basic model, clean interior, ~20k miles"
  },
  {
    airport: "ATL",
    company: "Hertz",
    reserved: "Economy",
    got: "Chrysler 300 (free upgrade!)",
    status: "Gold Member",
    notes: "Smooth pickup, car was spotless"
  },
  {
    airport: "LAX",
    company: "Budget",
    reserved: "Full-size SUV",
    got: "Ford Edge ST",
    status: "None",
    notes: "Took 30 mins to get the car, but worth it"
  }
];

posts.forEach((post) => {
  const div = document.createElement("div");
  div.className = "post";
  div.innerHTML = `
    <h2>🛫 ${post.airport} — ${post.company}</h2>
    <p><span class="tag">Reserved:</span> ${post.reserved}</p>
    <p><span class="tag">Got:</span> ${post.got}</p>
    <p><span class="tag">Status:</span> ${post.status}</p>
    <p><strong>Notes:</strong> ${post.notes}</p>
  `;
  document.body.appendChild(div);
});