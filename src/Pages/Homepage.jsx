import React, { useEffect, useReducer, useState } from "react";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import PositionBoxes from "../Components/PositionBoxes";
import {
  Actions,
  reducerFunction,
  INITIAL_VALUE,
} from "../Reducers/coins-reducers";
import ResaultsSection from "../Components/ResaultsSection";

function Homepage() {
  const [state, dispatch] = useReducer(reducerFunction, INITIAL_VALUE);
  const positionsList = ["ROCK", "PAPER", "SCISSORS"];
  const [togglePlay, setTogglePlay] = useState(true);
  const [resaults, setResaults] = useState(true);
  const [position, setPosition] = useState({
    player: "",
    computer: "",
  });

  const handlePositionSelection = (playerPosition) => {
    const computerPosition = positionsList[Math.floor(Math.random() * 3)];
    setPosition({
      player: playerPosition,
      computer: computerPosition,
    });
    dispatch({
      type: Actions.HANDLE_BET,
    });
  };
  const handlePlayClick = () => {
    if (position.player === position.computer) {
      setResaults("tie");
      dispatch({
        type: Actions.HANDLE_TIE,
      });
    } else if (
      (position.player === "ROCK" && position.computer === "SCISSORS") ||
      (position.player === "PAPER" && position.computer === "ROCK") ||
      (position.player === "SCISSORS" && position.computer === "PAPER")
    ) {
      setResaults("won");
      dispatch({
        type: Actions.HANDLE_WIN,
      });
    } else {
      setResaults("lost");
      dispatch({ type: Actions.HANDLE_LOSE });
    }
    console.log("------------------------------------");
    console.log("Player Position:", position.player);
    console.log("Computer Position:", position.computer);
    console.log("State:", state);
    console.log("--------------------------------------");
  };

  return (
    <div>
      <Navbar state={state} />
      <ResaultsSection
        resaults={resaults}
        position={position}
        bet={state.bet}
        togglePlay={togglePlay}
      />
      <PositionBoxes
        handlePlayClick={handlePlayClick}
        handlePositionSelection={handlePositionSelection}
        togglePlay={togglePlay}
        setTogglePlay={setTogglePlay}
        selection={position.player}
        bet={state.bet}
      />
      <Button
        handlePlayClick={handlePlayClick}
        togglePlay={togglePlay}
        setTogglePlay={setTogglePlay}
        bet={state.bet}
        dispatch={dispatch}
        setPosition={setPosition}
      />
    </div>
  );
}

export default Homepage;
