import React from "react";
import { NumberButtonStyle } from '../ButtonStyles/NumberButtonStyle';


export const NumberButton = ({data}) => {
  return (
    <NumberButtonStyle>
      {data}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </NumberButtonStyle>
  );
};
