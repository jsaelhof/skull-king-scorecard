import { useCallback, useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  const [scores, setScores] = useState({});
  const [players] = useState(["Dad", "Mom", "Cole", "Ash"]);

  const onTotalUpdate = useCallback((round, total) => {
    console.log("Update", round, total);
    setScores((prev) => ({
      ...prev,
      [round]: total,
    }));
  }, []);

  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          rowGap: 16,
          columnGap: 24,
          margin: 24,
          gridTemplateRows: "repeat(11, auto)",
          gridTemplateColumns: "repeat(5, max-content)",
          gridAutoFlow: "column",
        }}
      >
        <div />

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div
            key={i}
            style={{
              width: 40,
              height: "100%",
              display: "flex",
              alignItems: "center",
              fontSize: 24,
            }}
          >
            {i}
          </div>
        ))}

        {players.map((player) => (
          <>
            <div>{player}</div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <Box
                key={`${player}-round${i}`}
                round={i}
                prevTotal={i === 1 ? 0 : scores[i - 1]}
                onTotalUpdate={onTotalUpdate}
              />
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
