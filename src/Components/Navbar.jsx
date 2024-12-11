import React from "react";

function Navbar({ state }) {
  return (
    <div className="bg-slate-900 text-[#f6d362] font-bold flex items-center justify-center p-2 mb-40 ">
      <div className="w-[40%] flex items-center justify-between ">
        <div>
          BALANCE: <span className="text-white">{state.balance}</span>
        </div>
        <div>
          BET: <span className="text-white">{state.bet}</span>
        </div>
        <div>
          WIN: <span className="text-white">{state.win}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
