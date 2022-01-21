import { useState } from "react";
import "./Input.css";

const allowedKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "Backspace",
];

const negativeKeys = [...allowedKeys, "-"];

const Input = ({ onChange, allowNegative, className, maxLength = 2 }) => {
  const [value, setValue] = useState("");

  return (
    <div className={className}>
      <input
        type="text"
        value={value}
        className="scoreInput"
        onKeyDown={(e) =>
          !(allowNegative ? negativeKeys : allowedKeys).includes(e.key) &&
          e.preventDefault()
        }
        maxLength={maxLength}
        onChange={({ target }) => {
          const val = parseInt(target.value);
          if (target.value === "-") {
            // If the string is just "-" then we're trying to type a negative number.
            // Allow it, but don't check the parse because it's NaN until the second character comes through.
            // Send out a callback value of undefined.
            setValue("-");
            onChange(undefined);
          } else if (isNaN(val)) {
            setValue("");
            onChange(undefined);
          } else {
            setValue(target.value);
            onChange(val);
          }
        }}
      />
    </div>
  );
};

export default Input;
