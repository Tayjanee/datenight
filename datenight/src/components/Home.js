import React from "react";
import NavBar from "./NavBar";
import { useRouteMatch } from "react-router-dom";

function Home() {
  let match = useRouteMatch();
  return (
    <div>
      <NavBar />
      <nav class="navbar background">
        <ul class="nav-list">
          <div class="logo">
            <img src="https://static.thenounproject.com/png/2269048-200.png" />
          </div>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#movies">Movies</a>
          </li>
        </ul>

        <div class="rightNav">
          <input type="text" name="search" id="search" />
          <button class="btn btn-sm">Search</button>
        </div>
      </nav>

      <section class="section">
        <div class="box-main">
          <div class="firstHalf">
            <h1 class="text-big">Date night App</h1>
            <p class="text-small">text here</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="box-main">
          <div class="secondHalf">
            <h1 class="text-big" id="program">
              Movie generator
            </h1>
            <p class="text-small">Perfect for Friday night at home!</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="box-main">
          <div class="secondHalf">
            <h1 class="text-big" id="program">
              Date night App
            </h1>
            <p class="text-small">We do the search, so you dont have to!</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="box-main">
          <div class="secondHalf">
            <h1 class="text-big" id="program">
              Need Ideas for Date Night?
            </h1>
            <p class="text-small">
              Date night generator is here to help. Use our Movie search by
              entering a keyword into the search box. Type any word to fit your
              mood! You will receive a list of movies that match.
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p className="text-footer">Copyright ©-All rights are reserved</p>
      </footer>
    </div>
  );
}

export default Home;
