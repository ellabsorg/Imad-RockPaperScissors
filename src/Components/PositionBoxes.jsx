import React, { useEffect, useReducer, useState } from "react";
import PositionBox from "./PositionBox";

function PositionBoxes({
  handlePlayClick,
  handlePositionSelection,
  togglePlay,
  selection,
  bet,
}) {
  const boxes = [
    {
      bgColor: "bg-[#211f4f]",
      textColor: "text-[#2680EA]",
      borderColor: "border-[#2680ea]",
      text: "ROCK",
    },
    {
      bgColor: "bg-[#1A381D]",
      textColor: "text-[#16C359]",
      borderColor: "border-[#16C359]",
      text: "PAPER",
    },
    {
      bgColor: "bg-[#690229]",
      textColor: "text-[#FF004D]",
      borderColor: "border-[#FF004D]",
      text: "SCISSORS",
    },
  ];

  return (
    <div className="flex items-center justify-center mb-40">
      <div className="grid grid-cols-3 gap-4  ">
        {boxes.map((box, index) => (
          <PositionBox
            key={index}
            box={box}
            handlePositionSelection={handlePositionSelection}
            handlePlayClick={handlePlayClick}
            selection={selection}
            bet={bet}
            togglePlay={togglePlay}
          />
        ))}
      </div>
    </div>
  );
}

export default PositionBoxes;
