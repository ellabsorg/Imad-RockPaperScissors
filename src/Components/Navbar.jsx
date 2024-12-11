import React from "react";

function Navbar() {
  return (
    <div className="bg-slate-900 text-[#f6d362] font-bold flex items-center justify-center p-2 mb-40 ">
      <div className="w-[40%] flex items-center justify-between ">
        <div>
          BALANCE: <span className="text-white">XXXX</span>
        </div>
        <div>
          BET: <span className="text-white">XX</span>
        </div>
        <div>
          WIN: <span className="text-white">X</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
