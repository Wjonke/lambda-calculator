import React from "react";
import { DisplayArea } from './DisplayStyles';

export const Display = ({total}) => {
  return (
    <DisplayArea>
      {total}
    </DisplayArea>
  )
};
