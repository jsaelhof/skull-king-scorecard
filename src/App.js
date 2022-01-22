import "./App.css";
import Scorecard from "./Scorecard";
import Rounds from "./Rounds";
import { AppProvider } from "./AppContext";
import Docs from "./Docs";

const PLAYERS = ["Dad", "Mom", "Cole", "Ash"];

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  return (e.returnValue = "Are you sure you want to close?");
});

// TODO: Add pirate powers, loot, kraken, white whale reference rules below the scores
function App() {
  return (
    <AppProvider players={PLAYERS}>
      <div className="App">
        <div className="background" />
        <div className="container">
          <Rounds />

          {PLAYERS.map((player, i) => (
            <Scorecard key={player} player={player} playerNum={i} />
          ))}

          <Docs />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
