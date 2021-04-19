import React from "react";
import Rectangle from "../Shared/Rectangle";
import Flex from "../Shared/Flex";
import CheckedCircle from "../../Icons/checked-circle.svg";
import Circle from "../../Icons/circle.svg";

//Circle when not checked
const UncheckedCircle = ({ onClick }) => (
  <img
    src={Circle}
    alt="circle-checked"
    style={{
      height: "24px",
      width: "24px",
      marginRight: "8px",
      marginLeft: "-2px",
    }}
    onClick={onClick}
  />
);

//Circle when checked
const CircleChecked = ({ onClick }) => (
  <img
    src={CheckedCircle}
    alt="circle-checked"
    style={{
      height: "24px",
      width: "24px",
      marginRight: "8px",
      marginLeft: "-2px",
    }}
    onClick={onClick}
  />
);

const DropdownOptions = ({
  children,
  selected,
  selectedClick,
  style,
  ...props
}) => {
  //state to manage whether the option is selected or not, default to not selected

  return (
    <Rectangle
      style={{
        ...style,
      }}
      hoverStyles={{}}
    >
      <Flex
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={selectedClick}
      >
        {selected ? <CircleChecked /> : <UncheckedCircle />}
        {children}
      </Flex>
    </Rectangle>
  );
};

export default DropdownOptions;
