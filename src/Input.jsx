import { useState } from "react";
import InputMask from "react-input-mask";
import "./Input.css";

const Input = ({ onChange, className }) => {
  const [value, setValue] = useState("");

  return (
    <div className={className}>
      <InputMask
        value={value}
        mask="99"
        maskChar=" "
        className="scoreInput"
        onChange={({ target }) => {
          const val = parseInt(target.value);
          if (isNaN(val)) {
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
