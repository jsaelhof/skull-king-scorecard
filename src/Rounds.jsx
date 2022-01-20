import { times } from "lodash";
import Grid from "./Grid";

const Rounds = () => (
  <Grid>
    <div />

    {times(10, (i) => (
      <div
        key={i}
        style={{
          width: 40,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
        }}
      >
        {i + 1}
      </div>
    ))}
  </Grid>
);

export default Rounds;
