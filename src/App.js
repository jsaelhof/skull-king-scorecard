import "./App.css";
import Scorecard from "./Scorecard";
import Rounds from "./Rounds";

const PLAYERS = ["Dad", "Mom", "Cole", "Ash"];

function App() {
  return (
    <div className="App">
      <div class="background" />
      <div style={{ display: "flex" }}>
        <Rounds />

        {PLAYERS.map((player) => (
          <Scorecard player={player} />
        ))}
      </div>
    </div>
  );
}

export default App;
