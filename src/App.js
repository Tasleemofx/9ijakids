import {Fragment, useState} from "react"
import Filtergames from "./components/Filtergames";
import MapGames from "./components/Mapgames";
import details from "./data/data"
import "./css/home.css"
function App() {
  const [games, setGames] = useState(details)
  const [value, setValue] = useState('')
  const [searchterm, setSearchterm] = useState('')
  const handleSearch=(e)=>{
    e.preventDefault()
    const newGames=  games.filter(game=> game.Topic === searchterm)
    setGames(newGames)
  }
  const handleChange = (e) => {
    setValue(e.target.value)
    setSearchterm(value)
  }
  return (    
    <Fragment>
      <p className="alert">
        The filter function doesnt work because your backend/api
        person did not enable CORS in his Api and i had to copy it
        for use.
      </p>
      <h1>9ija kids Game List</h1>
      <form 
        onSubmit={handleSearch}>
        <input 
        placeholder="search game by topic"
        value={value}
        onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <Filtergames />
      <section className="games">
        <MapGames games={games}/>
      </section>
      
    </Fragment>
  );
  }

export default App;

