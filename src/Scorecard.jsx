import "./Scorecard.css";
import { times } from "lodash";
import { useCallback, useState } from "react";
import Box from "./Box";
import Grid from "./Grid";

const Scorecard = ({ player, playerNum }) => {
  const [scores, setScores] = useState(
    times(10).reduce((acc, i) => {
      acc[i] = {};
      return acc;
    }, {})
  );

  const updateBoxScore = useCallback(
    (round, update) =>
      setScores((prev) => ({
        ...prev,
        [round]: {
          ...prev[round],
          ...update,
        },
      })),
    []
  );

  return (
    <Grid>
      <div className="name">{player}</div>

      {times(10, (i) => (
        <Box
          key={`round${i}`}
          round={i}
          prevTotal={i === 0 ? 0 : scores[i - 1].total}
          boxScore={scores[i]}
          updateBoxScore={updateBoxScore}
          player={player}
          playerNum={playerNum}
        />
      ))}
    </Grid>
  );
};

export default Scorecard;
