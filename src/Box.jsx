import "./Box.css";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import clsx from "clsx";
import { isNil } from "lodash";

const Box = ({ player, playerNum, round, prevTotal = 0, onTotalUpdate }) => {
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
    } else {
      setScore(undefined);
      setSubtotal(undefined);
      setTotal(undefined);
      onTotalUpdate(round, undefined);
    }
  }, [bid, bonus, onTotalUpdate, player, prevTotal, round, tricks]);

  return (
    <div className="box">
      <Input
        className={clsx(
          "bid",
          !isNil(subtotal) && subtotal < 0 && "failed",
          !isNil(subtotal) && subtotal > 0 && "success"
        )}
        onChange={setBid}
        focusId={{ phase: 0, playerNum, round }}
      />
      <Input
        className={clsx(
          "tricks",
          !isNil(subtotal) && subtotal < 0 && "failed",
          !isNil(subtotal) && subtotal > 0 && "success"
        )}
        onChange={setTricks}
        focusId={{ phase: 1, playerNum, round }}
      />
      <div className="score">{score}</div>
      <Input
        className="bonus"
        onChange={setBonus}
        maxLength={3}
        allowNegative
        focusId={{ phase: 2, playerNum, round }}
      />
      <div className="subtotal">{subtotal}</div>
      <div className="total">{total}</div>
    </div>
  );
};

export default React.memo(Box);
