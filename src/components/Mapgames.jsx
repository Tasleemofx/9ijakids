const MapGames = ({games, index = 100}) => {
    return(games.map(({GameTitle,GameDescription, topic, Group,GameImage})=>{
            return(
                <div key={Math.floor(Math.random()*index)}>
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