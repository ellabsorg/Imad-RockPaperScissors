import React from "react";

function PositionBox({ box, handlePositionClick }) {
  return (
    <div
      className={`bg-[${box.bgColor}] text-[${box.textColor}] border-[3px] border-[${box.borderColor}] rounded-lg px-6 py-4 text-3xl font-bold w-[200px] h-[150px] flex flex-col justify-between items-center ml-10 mr-10`}
      onClick={() => handlePositionClick(box.text)}
    >
      <div
        className={`bg-white text-black border-[5px] rounded-[50%] border-blue-500 w-[70px] h-[70px] flex items-center justify-center text-xl`}
      >
        500
      </div>
      <div>{box.text}</div>
    </div>
  );
}

export default PositionBox;
