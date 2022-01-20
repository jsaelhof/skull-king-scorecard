import "./Scorecard.css";
import { times } from "lodash";
import { useCallback, useState } from "react";
import Box from "./Box";
import Grid from "./Grid";

const Scorecard = ({ player }) => {
  const [scores, setScores] = useState({});

  const onTotalUpdate = useCallback((round, total) => {
    setScores((prev) => ({
      ...prev,
      [round]: total,
    }));
  }, []);

  console.log(scores);

  return (
    <Grid>
      <div className="name">{player}</div>

      {times(10, (i) => (
        <Box
          key={`round${i}`}
          round={i + 1}
          prevTotal={i === 0 ? 0 : scores[i]}
          player={player}
          onTotalUpdate={onTotalUpdate}
        />
      ))}
    </Grid>
  );
};

export default Scorecard;
