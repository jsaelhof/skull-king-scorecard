import { isEqual } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "./AppContext";
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

const Input = ({
  initVal, // Used when restoring an in-progress game from sessionStorage
  onChange,
  allowNegative,
  className,
  maxLength = 2,
  focusId,
}) => {
  const [value, setValue] = useState(initVal ?? "");
  const { focus, nextFocus, setFocus } = useAppContext();
  const ref = useRef();

  // If this input's information matches the current focus info in the context, then focus this field
  useEffect(() => {
    isEqual(focusId, focus) && ref?.current?.focus();
  }, [focus, focusId]);

  return (
    <div className={className}>
      <input
        ref={ref}
        type="text"
        value={value}
        className="scoreInput"
        onFocus={() => setFocus(focusId)}
        onKeyDown={(e) => {
          if (e.key === "Tab" || e.key === "Enter") {
            // If the field is not the bonus phase and is blank, set it to 0
            if (focusId.phase !== 2 && value === "") {
              setValue("0");
              onChange(0);
            }
            nextFocus();
          }

          !(allowNegative ? negativeKeys : allowedKeys).includes(e.key) &&
            e.preventDefault();
        }}
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
