const Grid = ({ children }) => (
  <div
    style={{
      display: "grid",
      columnGap: 24,
      padding: "12px 0",
      gridTemplateColumns: "80px repeat(10, 120px)",
      gridTemplateRow: "max-content",
      gridAutoFlow: "row",
    }}
  >
    {children}
  </div>
);

export default Grid;
