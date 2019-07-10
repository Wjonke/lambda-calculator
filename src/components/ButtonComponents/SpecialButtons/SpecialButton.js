import React from "react";
import { SpecialButtonStyle } from '../ButtonStyles/SpecialButtonStyles';

export const SpecialButton = (props) => {
  return (
    <SpecialButtonStyle>
      {props.special}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </SpecialButtonStyle>
  );
};
