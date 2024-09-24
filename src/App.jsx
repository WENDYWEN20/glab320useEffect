import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import "./App.css";

export default function App() {
  const apiKey = "27f3f9bd";
  // State to hold movie data
  const [movie, setMovie] = useState(null);
  console.log(movie)

  // Function to get movies
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        // Make fetch request and store the response
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a JavaScript object

      const data = await response.json();

      // Set the Movie state to the received data
      setMovie(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);
  // We pass the getMovie function as a prop called moviesearch

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
