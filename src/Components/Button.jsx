import React, { useState } from "react";
import { Actions } from "../Reducers/coins-reducers";

function Button({
  handlePlayClick,
  setTogglePlay,
  togglePlay,
  bet,
  dispatch,
  setPosition,
}) {
  const handleButtonClick = () => {
    if (togglePlay) {
      handlePlayClick();
    } else {
      dispatch({ type: Actions.HANDLE_CLEAR });
      setPosition({
        player: "",
        computer: "",
      });
    }
    setTogglePlay(!togglePlay);
  };
  return (
    <div className="flex items-center justify-center">
      <button
        disabled={!bet}
        onClick={handleButtonClick}
        className={`bg-black text-[#f6d362] border-[3px] border-[#f6d362] rounded-full px-10 py-3 text-4xl font-bold  ${
          bet == 0 && "text-[#6c5a22] border-[#6c5a22]"
        } `}
      >
        {togglePlay ? "PLAY" : "CLEAR"}
      </button>
    </div>
  );
}

export default Button;
