import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import NavBar from "../pages/NavBar";
import Home, { Banner } from "../pages/Home";
import About from "../pages/About";

// const Movies = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     let key = "e7cd0eac";

//     const moviesData = async () => {
//       let response = await fetch(
//         `http://www.omdbapi.com/?s=date&apikey=${key}`
//       );

//       let data = await response.json();
//       console.log(data.Search);
//       setMovies(data.Search);
//     };
//     moviesData();
//   }, []);
//   return <Movies movies={movies} />;
// };

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let key = "e7cd0eac";

    const moviesData = async () => {
      let response = await fetch(
        `http://www.omdbapi.com/?s=date&apikey=${key}`
      );

      let data = await response.json();
      console.log(data.Search);
      setMovies(data.Search);
    };
    moviesData();
  }, []);
  return <Movies movies={movies} />;
};

<Router>
  <NavBar />
  <div>
    <Link to="/"> Home</Link>
    <Link to="/About"> About</Link>
    <Link to="/Movies"> Movies</Link>
  </div>

  <Banner />

  <Routes>
    <Route path="/" exact>
      <Home />
    </Route>

    <Route path="/about" exact>
      <About />
    </Route>
    <Route path="/movies" exact>
      <Movies />
    </Route>
  </Routes>
</Router>;

export default App;
