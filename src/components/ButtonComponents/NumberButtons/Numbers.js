import React, { useState } from "react";
//Import your array data to from the provided data file
//import any components needed
import { Numbers } from '../../../data'






export const Numbers = () => {

  // STEP 2 - add the imported data to state
  const [ numbers, setNumbers ] = useState(numbers)


  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      
      {numbers.map(number => ( <button classname="button"> {number} </button> ))}

      
    </div>
  );
};
