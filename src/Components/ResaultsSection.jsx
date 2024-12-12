import React from "react";

function ResaultsSection({ position, togglePlay, bet, resaults }) {
  console.log(resaults);

  return (
    <div className=" h-[200px] flex flex-col items-center mb-10 gap-20">
      <div className=" flex justify-center items-start gap-32">
        <div>
          <div className="font-bold text-white text-[15px]">Computer:</div>
          <div className="font-bold text-white text-[40px]">
            {(!togglePlay && position.computer) || "____"}
          </div>
        </div>
        <div>
          <div className="font-bold text-yellow-500 text-[25px]">Vs</div>
        </div>
        <div>
          <div className="font-bold text-white text-[15px]">You:</div>
          <div className="font-bold text-white text-[40px]">
            {(!togglePlay && position.player) || "____"}
          </div>
        </div>
      </div>
      {!togglePlay && (
        <div>
          {resaults === "lost" && (
            <div className="font-bold text-red-600 text-[30px]">YOU LOST </div>
          )}
          {resaults === "won" && (
            <div className="font-bold text-green-500 text-[30px]">
              YOU WON: {bet * 3}
            </div>
          )}
          {resaults === "tie" && (
            <div className="font-bold text-gray-200 text-[30px]">TIE </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ResaultsSection;
