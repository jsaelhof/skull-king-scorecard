import "./App.css";
import Scorecard from "./Scorecard";
import Rounds from "./Rounds";
import { AppProvider } from "./AppContext";
import Docs from "./Docs";
import { useState } from "react";
import NewGame from "./NewGame";

// TODO: Add pirate powers, loot, kraken, white whale reference rules below the scores
function App() {
  const [players, setPlayers] = useState();
  const [started, setStarted] = useState(false);
  const [firstDeal, setFirstDeal] = useState(null);

  return (
    <AppProvider players={players}>
      <div className="App">
        <div className="background" />

        {started ? (
          <div className="container">
            <Rounds firstDeal={firstDeal} players={players} />

            {players.map((player, i) => (
              <Scorecard
                key={player}
                player={player}
                playerNum={i}
                onChangeFirstDeal={(player) => setFirstDeal(player)}
              />
            ))}

            <Docs />
          </div>
        ) : (
          <NewGame
            onStart={(playerList, keepState) => {
              if (!keepState) {
                window.sessionStorage.clear();
                window.sessionStorage.setItem(
                  "players",
                  JSON.stringify(playerList)
                );
              }
              setStarted(true);
              setPlayers(playerList);
              setFirstDeal(playerList[0]);
            }}
          />
        )}
      </div>
    </AppProvider>
  );
}

export default App;
