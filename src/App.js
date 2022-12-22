import {useState, useEffect} from "react"
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';


function App() {
  //Our Api Key
  const apiKey = "6f61571d"

  //declare our state
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async(searchTerm) => {
    //make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    //Parse JSON response into javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  }

  console.log("log in the body of the component")
  useEffect(()=>{
    getMovie("Swiss Army Man")
    console.log("log in the use effect")
  }, [])
  
  return (
  
  <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
