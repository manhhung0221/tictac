import Player from "./components/Players"
function App() {


  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player player_name="Player 1" player_symbol='X'/>
          <Player player_name="Player 2" player_symbol='O'/>
        </ol>
      </div>
    </main>
  )
}

export default App
