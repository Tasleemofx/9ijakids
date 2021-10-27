import { v4 as uuidv4 } from "uuid";
const MapGames = ({games}) => {
    return(games.map(({GameTitle,GameDescription, topic, Group,GameImage})=>{
            return(
                <div key={uuidv4()} 
                className= "gameList">
                    <h3>{GameTitle}</h3>
                    <p>{GameDescription}</p>
                    <p>{Group}</p>
                    <img src={GameImage} alt="game-img"/>
                </div>
            )
        } 
        )
    )
}
 
export default MapGames;