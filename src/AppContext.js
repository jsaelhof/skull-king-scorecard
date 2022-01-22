import React, { useCallback } from "react";
import { createContext, useState } from "react";

const AppContext = createContext({});

const AppProvider = ({ players, children }) => {
  const [focus, setFocus] = useState({
    phase: 0,
    playerNum: 0,
    round: 1,
  });

  // TODO: Refactor to clean this up
  const nextFocus = useCallback(() => {
    setFocus((prev) => {
      const moveToNextPhase = prev.playerNum + 1 === players.length;
      const moveToNextRound = moveToNextPhase && prev.phase === 2;
      return {
        playerNum: moveToNextPhase ? 0 : prev.playerNum + 1,
        phase: moveToNextRound
          ? 0
          : moveToNextPhase
          ? prev.phase + 1
          : prev.phase,
        round:
          moveToNextPhase && prev.phase === 2 ? prev.round + 1 : prev.round,
      };
    });
  }, [players.length]);

  const context = {
    focus,
    nextFocus,
    setFocus,
    players,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
