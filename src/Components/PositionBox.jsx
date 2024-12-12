import React from "react";

function PositionBox({
  box,
  handlePositionSelection,
  selection,
  bet,
  togglePlay,
}) {

  return (
    <button
      disabled={!togglePlay}
      className={`scale-100 
        ${box.bgColor} ${box.textColor} border-[2px] ${
        selection === box.text ? "scale-125 border-[5px]" : ""
      } ${
        box.borderColor
      } rounded-lg px-6 py-4 text-3xl font-bold w-[250px] h-[200px] flex flex-col justify-between items-center ml-10 mr-10`}
      onClick={() => {
        handlePositionSelection(box.text);
      }}
    >
      <div className="mb-10">{box.text}</div>
      {selection === box.text && (
        <div
          className={`bg-white text-black border-[5px] rounded-[50%] border-blue-500 w-[70px] h-[70px] flex items-center justify-center text-xl`}
        >
          {bet}
        </div>
      )}
    </button>
  );
}

export default PositionBox;
