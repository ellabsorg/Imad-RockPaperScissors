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
  const [isDisabled, setIsDisabled] = useState(false);

  const handleButtonClick = () => {
    setIsDisabled(true);
    if (togglePlay) {
      setTimeout(() => {
        handlePlayClick();
        setIsDisabled(false);
      }, 1000);
    } else {
      dispatch({ type: Actions.HANDLE_CLEAR });
      setPosition({
        player: "",
        computer: "",
      });
      setTimeout(() => {
        setIsDisabled(false);
      }, 2000);
    }
    setTogglePlay(!togglePlay);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        disabled={isDisabled || !bet}
        onClick={handleButtonClick}
        className={`bg-black text-[#f6d362] border-[3px] border-[#f6d362] rounded-full px-10 py-3 text-4xl font-bold ${
          isDisabled || bet === 0 ? "text-[#6c5a22] border-[#6c5a22]" : ""
        } `}
      >
        {togglePlay ? "PLAY" : "CLEAR"}
      </button>
    </div>
  );
}

export default Button;
