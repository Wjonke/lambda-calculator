import React from "react";
import { SpecialButtonStyle } from '../ButtonStyles/SpecialButtonStyles';

export const SpecialButton = ({data}) => {
  return (
    <SpecialButtonStyle>
      {data}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </SpecialButtonStyle>
  );
};
