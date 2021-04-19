import React, { useState, useEffect } from "react";
import Rectangle from "../Shared/Rectangle";
import DropdownOption from "./DropdownOption";
import ExpandMore from "../../Icons/expand-more.svg";
import ExpandLess from "../../Icons/expand-less.svg";
import Flex from "../Shared/Flex";
import styled from "styled-components";

//Textbox to display values when state is uncollasped
const Textbox = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Dropdown = ({
  options = [],
  helperText,
  style,
  onHandleChange,
  value,
  selectedAllPressed,
  ...props
}) => {
  //set open and close state of Dropdown, default to uncollasped
  const [isCollasped, setisCollasped] = useState(false);

  //state handler for DropdownOption
  const [dropdownOptionState, setDropdownOptionState] = useState([
    ...options.map((k) => {
      return {
        value: k,
        selected: false,
      };
    }),
  ]);

  // object example for dropdownOptionState
  // [
  //   {value: "option1", selected:false},
  //   {value: "option2", selected:false},
  //   {value: "option3", selected:false}
  // ]

  useEffect(() => {
    setDropdownOptionState((previousState) => {
      return [
        ...previousState.map((option) => {
          return {
            value: option.value,
            selected: selectedAllPressed,
          };
        }),
      ];
    });
  }, [selectedAllPressed]);

  useEffect(() => {
    getAllSelectedValues();
  }, [dropdownOptionState]);

  //state management for all the selectedValues
  const [selectedValues, setSelectedValues] = useState([]);

  //return all the options that have been selected
  const getAllSelectedValues = () => {
    let array = [];
    dropdownOptionState.map(
      (option) => option.selected && array.push(option.value)
    );
    setSelectedValues(array);
    return array;
  };

  //handle when the option is selected
  //selected values state is updated as well, long with values from parent that which to retrieve all the selected values
  const handleSelectClicked = (clickedOptionIndex) => {
    const clickedOption = dropdownOptionState[clickedOptionIndex];
    const updatedSelectionState = [...dropdownOptionState];
    updatedSelectionState.splice(clickedOptionIndex, 1, {
      ...dropdownOptionState[clickedOptionIndex],
      selected: !clickedOption.selected,
    });
    setDropdownOptionState(updatedSelectionState);
  };

  //handle when user clicks on expand button
  const handleExpandClicked = () => {
    setisCollasped(!isCollasped);
    onHandleChange && onHandleChange(selectedValues);
  };

  return (
    <div
      style={
        style
          ? { ...style }
          : {
              width: "300px",
              position: "relative",
            }
      }
    >
      <Rectangle>
        <Flex
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={handleExpandClicked}
        >
          <Textbox>
            {selectedValues.length === 0
              ? helperText
              : selectedValues.toString()}
          </Textbox>
          {isCollasped ? (
            <img src={ExpandLess} alt="expand-less" />
          ) : (
            <img src={ExpandMore} alt="expand-more" />
          )}
        </Flex>
      </Rectangle>
      {isCollasped && options && (
        <Flex
          style={{
            flexDirection: "column",
            width: "inherit",
            overflowY: "scroll",
            overflowX: "hidden",
            maxHeight: "200px",
            maxWidth: "inherit",
            position: "absolute",
            zIndex: 1,
            background: "#344167",
          }}
        >
          {dropdownOptionState.map((option, k) => {
            return (
              <DropdownOption
                key={k}
                selected={option.selected}
                selectedClick={() => {
                  handleSelectClicked(k);
                }}
                style={{
                  width: "inherit",
                }}
              >
                {option.value}
              </DropdownOption>
            );
          })}
        </Flex>
      )}
    </div>
  );
};

export default Dropdown;
