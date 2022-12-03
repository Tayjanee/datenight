import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let key = "e7cd0eac";

    const moviesData = async () => {
      let response = await fetch(
        `http://www.omdbapi.com/?s=princess&apikey=${key}`
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
  <Route path="/" element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact />} />
</Routes>;
export default App;
