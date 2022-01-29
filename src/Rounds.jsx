import { times } from "lodash";
import Grid from "./Grid";

const Rounds = ({ firstDeal, players }) => (
  <Grid>
    <div />

    {times(10, (i) => (
      <div key={i}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: 24,
          }}
        >
          {i + 1}
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 10,
            marginTop: 8,
            color: "#666",
          }}
        >
          {firstDeal &&
            players[(players.findIndex((v) => v === firstDeal) + i) % 3]}
        </div>
      </div>
    ))}
  </Grid>
);

export default Rounds;
