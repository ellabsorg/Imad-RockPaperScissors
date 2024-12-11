import React, { useEffect, useState } from "react";
import PositionBox from "./PositionBox";

function PositionBoxes() {
  const positionsList = ["ROCK", "PAPER", "SCISSORS"];

  const [position, setPosition] = useState({
    playerPosition: "",
    computerPosition: "",
  });

  const handlePositionClick = (selectedPosition) => {
    setPosition({
      playerPosition: selectedPosition,
      computerPosition: positionsList[Math.floor(Math.random() * 3)],
    });
  };

  useEffect(() => {
    console.log("Player Position:", position.playerPosition);
    console.log("Computer Position:", position.computerPosition);
    console.log("----------------------------");
  }, [position]);
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
          <PositionBox
            key={index}
            box={box}
            handlePositionClick={handlePositionClick}
          />
        ))}
      </div>
    </div>
  );
}

export default PositionBoxes;
