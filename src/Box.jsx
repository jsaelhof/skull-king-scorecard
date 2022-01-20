import React, { useEffect, useState } from "react";
import "./Box.css";

const Box = ({ round, prevTotal = 0, locked, onTotalUpdate }) => {
  const [bid, setBid] = useState();
  const [tricks, setTricks] = useState();
  const [score, setScore] = useState();
  const [bonus, setBonus] = useState();
  const [subtotal, setSubtotal] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    console.log("UE");
    if (bid !== undefined && tricks !== undefined) {
      let roundScore;
      let roundBonus = bonus ?? 0;
      if (bid === tricks) {
        if (bid === 0) {
          roundScore = round * 10;
        } else {
          roundScore = bid * 20;
        }
      } else {
        roundScore = Math.abs(bid - tricks) * -10;
        roundBonus = 0; // Ignore bonus if bid is not met
      }

      setScore(roundScore);
      setSubtotal(roundScore + roundBonus);

      const roundTotal = prevTotal + roundScore + roundBonus;
      setTotal(roundTotal);
      onTotalUpdate(round, roundTotal);
    }
  }, [bid, bonus, onTotalUpdate, prevTotal, round, tricks]);

  return (
    <div className="box">
      <div className="bid">
        <input
          type="text"
          maxLength={2}
          onKeyDown={({ key, preventDefault, stopPropagation }) => {
            if (
              ![
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "0",
                "Backspace",
              ].includes(key)
            ) {
              console.log("prevent");
              return false;
            }
          }} // TODO: Why doesn't this bloody work????
          onChange={({ target }) => {
            if (!locked) setBid(parseInt(target.value));
          }}
        />
      </div>
      <div className="tricks">
        <input
          type="text"
          maxLength={2}
          onChange={({ target }) => {
            if (!locked) setTricks(parseInt(target.value));
          }}
        />
      </div>
      <div className="score">{score}</div>
      <div className="bonus">
        <input
          type="text"
          maxLength={2}
          onChange={({ target }) => {
            if (!locked) setBonus(parseInt(target.value));
          }}
        />
      </div>
      <div className="subtotal">{subtotal}</div>
      <div className="total">{total}</div>
    </div>
  );
};

export default React.memo(Box);
