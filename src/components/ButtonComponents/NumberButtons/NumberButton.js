import React from "react";
import { NumberButtonStyle } from '../ButtonStyles/NumberButtonStyle';
export const NumberButton = (props) => {
  return (
    <NumberButtonStyle>
      {props.number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </NumberButtonStyle>
  );
};
