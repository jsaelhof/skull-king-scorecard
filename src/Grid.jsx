const Grid = ({ children }) => (
  <div
    style={{
      display: "grid",
      rowGap: 16,
      columnGap: 24,
      margin: "24px 24px 24px 0",
      gridTemplateRows: "30px repeat(10, 80px)",
      gridTemplateColumns: "max-content",
      gridAutoFlow: "column",
    }}
  >
    {children}
  </div>
);

export default Grid;
