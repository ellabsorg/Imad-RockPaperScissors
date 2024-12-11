import React, { useState } from "react";

function Button({ handlePlayClick, setTogglePlay, togglePlay }) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => {
          handlePlayClick();
          setTogglePlay(!togglePlay);
        }}
        class="bg-black text-[#f6d362] border-[3px] border-[#f6d362] rounded-full px-10 py-3 text-3xl font-bold"
      >
        {togglePlay ? "PLAY" : "CLEAR"}
      </button>
    </div>
  );
}

export default Button;
