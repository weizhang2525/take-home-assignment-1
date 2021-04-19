const Reactangle = ({ style, children, borderColor, ...props }) => {
  return (
    <div
      style={{
        border: `1px solid ${borderColor || "white"}`,
        padding: "5px 10px",
        borderRadius: "5px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Reactangle;
