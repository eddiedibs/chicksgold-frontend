import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type QuantityInputProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

const QuantityInput: React.FC<QuantityInputProps> = ({ value, onChange, min = 1, max = 99 }) => {
  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(e.target.value);

    // Ensure the value stays within the range
    if (newValue > max) {
      newValue = max;
    } else if (newValue < min) {
      newValue = min;
    }

    onChange(newValue);
  };

  return (
    <div className="quantity-input">
      <input
        type="number"
        className="quantity-field"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
      />
      <div className="quantity-inner-input">
        <button className="quantity-btn" onClick={handleIncrease} disabled={value >= max}>
          <ArrowDropUpIcon style={{ zIndex: "3" }} width="20" height="20" />
        </button>
        <button className="quantity-btn" onClick={handleDecrease} disabled={value <= min}>
          <ArrowDropDownIcon style={{ zIndex: "3" }} width="20" height="20" />
        </button>
      </div>
    </div>
  );
};

export default QuantityInput;
