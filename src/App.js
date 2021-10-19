import {Fragment, useEffect, useState} from "react"
import Filtergames from "./components/Filtergames";
import MapGames from "./components/Mapgames";
import details from "./data/data"
function App() {
  const [games, setGames] = useState(details)
 
  return (    
    <Fragment>
      <h1>9ija kids Game List</h1>
      <form>
      <input 
      placeholder="search here"/>
      <button>Search</button>
      </form>
      <Filtergames />
      <MapGames games={games}/>
      
    </Fragment>
  );
  }

export default App;

