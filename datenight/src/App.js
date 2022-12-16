import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";

const App = () => {
  <NavBar />;
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

<BrowserRouter>
  <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Movies" element={<Movies />} />
  </Routes>
</BrowserRouter>;

export default App;
