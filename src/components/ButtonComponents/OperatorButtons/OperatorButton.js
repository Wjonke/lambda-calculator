import React from "react";
import { OperatorButtonStyle } from '../ButtonStyles/OperatorButtonStyles';
export const OperatorButton = (props) => {
  return (
    <OperatorButtonStyle>
      {props.operator.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </OperatorButtonStyle>
  );
};
