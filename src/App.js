import "./App.css";
import Scorecard from "./Scorecard";
import Rounds from "./Rounds";
import { AppProvider } from "./AppContext";

const PLAYERS = ["Dad", "Mom", "Cole", "Ash"];

// TODO: Persist scores to local storage in case of interuption, will require a new game button
// TODO: Add pirate powers, loot, kraken, white whale reference rules below the scores
function App() {
  return (
    <AppProvider players={PLAYERS}>
      <div className="App">
        <div class="background" />
        <div>
          <Rounds />

          {PLAYERS.map((player, i) => (
            <Scorecard player={player} playerNum={i} />
          ))}
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
