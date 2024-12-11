import React from "react";
import PositionBox from "./PositionBox";

function PositionBoxes() {
  const boxes = [
    {
      bgColor: "#211f4f",
      textColor: "#2680ea",
      borderColor: "#2680ea",
      text: "ROCK",
    },
    {
      bgColor: "#1A381D",
      textColor: "#16C359",
      borderColor: "#16C359",
      text: "PAPER",
    },
    {
      bgColor: "#690229",
      textColor: "#FF004D",
      borderColor: "#FF004D",
      text: "SCISSORS",
    },
  ];

  return (
    <div className="flex items-center justify-center mb-40">
      <div className="grid grid-cols-3 gap-4  ">
        {boxes.map((box, index) => (
          <PositionBox key={index} box={box} />
        ))}
      </div>
    </div>
  );
}

export default PositionBoxes;
