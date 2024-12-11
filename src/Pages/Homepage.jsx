import React from "react";
import CustomButton from "../Components/CustomButton";
import PositionBox from "../Components/PositionBox";
import Navbar from "../Components/Navbar";
import PickedPositions from "../Components/PickedPositions";
import PositionBoxes from "../Components/PositionBoxes";

function Homepage() {
  return (
    <div>
      <Navbar />
      <PositionBoxes />
      <CustomButton />
    </div>
  );
}

export default Homepage;
