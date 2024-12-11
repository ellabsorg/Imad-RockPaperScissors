import React, { useEffect, useReducer, useState } from "react";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import PositionBoxes from "../Components/PositionBoxes";
import {
  Actions,
  reducerFunction,
  INITIAL_VALUE,
} from "../Reducers/coins-reducers";

function Homepage() {
  const [state, dispatch] = useReducer(reducerFunction, INITIAL_VALUE);

  const positionsList = ["ROCK", "PAPER", "SCISSORS"];
  const [togglePlay, setTogglePlay] = useState(true);

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
      dispatch({
        type: Actions.HANDLE_TIE,
      });
    } else if (
      (position.player === "ROCK" && position.computer === "SCISSORS") ||
      (position.player === "PAPER" && position.computer === "ROCK") ||
      (position.player === "SCISSORS" && position.computer === "PAPER")
    ) {
      dispatch({
        type: Actions.HANDLE_WIN,
      });
    } else {
      dispatch({ type: Actions.HANDLE_LOSE });
    }
  };
  useEffect(() => {
    console.log("------------------------------------");
    console.log("Player Position:", position.player);
    console.log("Computer Position:", position.computer);
    console.log("State:", state);
    console.log("--------------------------------------");
  }, [position, state]);

  return (
    <div>
      <Navbar state={state} />
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
      />
    </div>
  );
}

export default Homepage;
