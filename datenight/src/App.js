import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let key = "e7cd0eac";

    const moviesData = async () => {
      let response = await fetch(
        `http://www.omdbapi.com/?s=love&apikey=${key}`
      );

      let data = await response.json();
      console.log(data.Search);
      setMovies(data.Search);
    };
    moviesData();
  }, []);
  return <Movies movies={movies} />;
};

<Routes>
  <Route path="/Home" element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="NavBar" element={<NavBar />} />
</Routes>;
export default App;
