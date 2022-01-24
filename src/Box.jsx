import "./Box.css";
import React, { useCallback, useEffect } from "react";
import Input from "./Input";
import clsx from "clsx";
import { isNil } from "lodash";

const Box = ({
  player,
  playerNum,
  round,
  boxScore: { bid, tricks, bonus, score, subtotal, total },
  updateBoxScore,
  prevTotal = 0,
}) => {
  const cards = round + 1; // round is zero-based

  const setBid = useCallback(
    (bid) => updateBoxScore(round, { bid }),
    [round, updateBoxScore]
  );

  const setTricks = useCallback(
    (tricks) => updateBoxScore(round, { tricks }),
    [round, updateBoxScore]
  );

  const setBonus = useCallback(
    (bonus) => updateBoxScore(round, { bonus }),
    [round, updateBoxScore]
  );

  const setScores = useCallback(
    (score, subtotal, total) =>
      updateBoxScore(round, { score, subtotal, total }),
    [round, updateBoxScore]
  );

  useEffect(() => {
    if (!isNil(bid) && !isNil(tricks)) {
      let roundScore;
      let roundBonus = bonus ?? 0;
      if (bid === tricks) {
        if (bid === 0) {
          roundScore = cards * 10;
        } else {
          roundScore = bid * 20;
        }
      } else {
        roundScore = Math.abs(bid - tricks) * -10;
        roundBonus = 0; // Ignore bonus if bid is not met
      }

      const subtotal = roundScore + roundBonus;
      const total = prevTotal + subtotal;
      setScores(roundScore, subtotal, total);
    } else {
      setScores(undefined, undefined, undefined);
    }
  }, [bid, bonus, cards, player, prevTotal, setScores, tricks]);

  return (
    <div className="box">
      <Input
        initVal={bid}
        className={clsx(
          "bid",
          !isNil(subtotal) && subtotal < 0 && "failed",
          !isNil(subtotal) && subtotal > 0 && "success"
        )}
        onChange={setBid}
        focusId={{ phase: 0, playerNum, round }}
      />
      <Input
        initVal={tricks}
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
        initVal={bonus}
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
