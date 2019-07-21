import React from "react";
import { OperatorButtonStyle } from '../ButtonStyles/OperatorButtonStyles';


export const OperatorButton = ({data}) => {
  return (
    <OperatorButtonStyle>
      {data.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </OperatorButtonStyle>
  );
};
