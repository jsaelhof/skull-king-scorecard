import "./Box.css";
import React, { useEffect, useState } from "react";
import Input from "./Input";

const Box = ({ player, round, prevTotal = 0, locked, onTotalUpdate }) => {
  const [bid, setBid] = useState();
  const [tricks, setTricks] = useState();
  const [score, setScore] = useState();
  const [bonus, setBonus] = useState();
  const [subtotal, setSubtotal] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
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
  }, [bid, bonus, onTotalUpdate, player, prevTotal, round, tricks]);

  return (
    <div className="box">
      <Input className="bid" callback={setBid} locked={locked} />
      <Input className="tricks" callback={setTricks} locked={locked} />
      <div className="score">{score}</div>
      <Input className="bonus" callback={setBonus} locked={locked} />
      <div className="subtotal">{subtotal}</div>
      <div className="total">{total}</div>
    </div>
  );
};

export default React.memo(Box);
