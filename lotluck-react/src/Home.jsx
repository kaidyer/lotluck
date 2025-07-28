import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([
    {
        airport: "ILM",
        company: "Enterprise",
        reserved: "Intermediate SUV",
        got: "Nissan Rogue SV",
        status: "No elite status",
        notes: "Basic model, clean interior, ~20k miles",
        user: "mjackson"
    },
    {
        airport: "ATL",
        company: "Hertz",
        reserved: "Economy",
        got: "Chrysler 300 (free upgrade!)",
        status: "Gold Member",
        notes: "Smooth pickup, car was spotless",
        user: "psmith"
    },
    {
        airport: "LAX",
        company: "Budget",
        reserved: "Full-size SUV",
        got: "Ford Edge ST",
        status: "None",
        notes: "Took 30 mins to get the car, but worth it",
        user: "scombs"
    }
  ])

  return (
    <>
      <header className="site_header">
        <nav>
          <ul role="list" className="flex flex_center">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>

      <h1>LotLuck</h1>

      <div className="container">
        <div className="posts-section" id="postList">
          {posts.map((post, index) => (
            <div className="post" key={index}>
              <h2>🛫 {post.airport} — {post.company}</h2>
                <p>@{post.user}</p>
                <p><span class="tag">Reserved:</span> {post.reserved}</p>
                <p><span class="tag">Got:</span> {post.got}</p>
                <p><span class="tag">Status:</span> {post.status}</p>
                <p><strong>Notes:</strong> {post.notes}</p>
            </div>
          ))}
        </div>
        <div className="form-section">
          <form id="postForm">
            <h2>Tell Us About Your Experience</h2>
            <input type="text" id="airport" placeholder="Airport" required />
            <input type="text" id="company" placeholder="Rental Company" required />
            <input type="text" id="reserved" placeholder="Reserved Car" required />
            <input type="text" id="got" placeholder="Car Received" required />
            <input type="text" id="status" placeholder="Loyalty Status" />
            <textarea id="notes" placeholder="Notes"></textarea>
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </>
  );
}