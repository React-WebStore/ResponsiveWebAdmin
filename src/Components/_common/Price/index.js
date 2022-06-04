import React, { useState } from "react";
import { Input } from "../../../Utils/styles";

const Price = ({ setPrice = () => {} }) => {
  const [notANum, setNotANum] = useState(false);

  const checkIsNumber = (value) => {
    if (value.length < 1) return setNotANum(false);
    const check = parseInt(value);
    isNaN(check) ? setNotANum(true) : setNotANum(false);

    return setPrice(check);
  };
  return (
    <>
      <label>Price</label>
      <Input onChange={(e) => checkIsNumber(e.target.value)} type="text" />
      {notANum && <p style={{ color: "red" }}>please provide a number</p>}
    </>
  );
};

export default Price;
