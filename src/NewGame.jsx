import "./NewGame.css";
import { useState } from "react";
import { isEmpty, negate, trim } from "lodash";

const NewGame = ({ onStart }) => {
  const [val, setVal] = useState("Dad, Mom, Ash, Cole");
  const [saved, setSaved] = useState(
    JSON.parse(sessionStorage.getItem("players"))
  );

  return (
    <div className="newGame">
      {saved ? (
        <div className="newGameContent">
          <div>A game is currently in progress with {saved.join(", ")}.</div>
          <div>Would you like to continue or start a new game?</div>
          <div className="actions">
            <button className="action" onClick={() => onStart(saved, true)}>
              Continue
            </button>
            <button
              className="action"
              onClick={() => {
                setSaved(false);
              }}
            >
              New Game
            </button>
          </div>
        </div>
      ) : (
        <div className="newGameContent">
          <div>Who's Playing?</div>
          <input
            className="input"
            type="text"
            value={val}
            onChange={({ target }) => setVal(target.value)}
          />
          <button
            className="action"
            onClick={() =>
              onStart(val.split(",").map(trim).filter(negate(isEmpty)))
            }
          >
            Start Game
          </button>
        </div>
      )}
    </div>
  );
};

export default NewGame;
