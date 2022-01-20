import "./Input.css";

const Input = ({ callback, locked, className }) => (
  <div className={className}>
    <input
      className="scoreInput"
      type="text"
      maxLength={2}
      onKeyDown={({ key }) => {
        if (
          ![
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
          ].includes(key)
        ) {
          console.log("prevent");
          return false;
        }
      }} // TODO: Why doesn't this bloody work????
      onChange={({ target }) => {
        if (!locked) callback(parseInt(target.value));
      }}
    />
  </div>
);

export default Input;
