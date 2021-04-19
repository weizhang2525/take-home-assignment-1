import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Dropdown from "./Components/Dropdown/Dropdown";

const Container = styled.div`
  position: absolute;
  margin: 0px 20px;
  max-width: 90vw;
`;

const option1 = [
  "option1",
  "option2",
  "option3",
  "option4",
  "option5",
  "option6",
  "option7",
  "option8",
  "option9",
  "option10",
  "option11",
  "option12",
  "option13fdsafdsafdsafdsafdsafdsfdsafdsafdsaafgdagfdsafdsafdsa",
];

const option2 = [
  "option1",
  "option2",
  "option3",
  "option4",
  "option5",
  "option6",
];

const TextContainer = styled.div`
  margin: 30px 0px;
  overflow: hidden;
  max-width: 90%;
`;

function App() {
  const [dropdown1Value, setDropdown1Value] = useState([]);
  const [dropdown2Value, setDropdown2Value] = useState([]);
  const [selectedAllPressed, setSelectedAllPressed] = useState(false);

  const getDrop1Value = (data) => {
    setDropdown1Value(data);
  };
  const getDrop2Value = (data) => {
    setDropdown2Value(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <button onClick={() => setSelectedAllPressed(!selectedAllPressed)}>
            {selectedAllPressed
              ? "Deselect ALL Dropdown1"
              : "Select ALL Dropdown1"}
          </button>
          <TextContainer>
            Dropdown1 Values: {dropdown1Value.toString()}
          </TextContainer>
          <div>Dropdown 1</div>
          <Dropdown
            style={{
              minWidth: "300px",
              maxWidth: "500px",
            }}
            options={option1}
            helperText="Choose an option"
            onHandleChange={getDrop1Value}
            selectedAllPressed={selectedAllPressed}
          />
          <TextContainer>
            Dropdown2 Values: {dropdown2Value.toString()}
          </TextContainer>
          <div>Dropdown 2</div>
          <Dropdown
            options={option2}
            helperText="Choose an option"
            onHandleChange={getDrop2Value}
          />
          <div
            style={{
              marginTop: "30px",
            }}
          >
            Dropdown 3 (empty)
          </div>
          <Dropdown
            style={{
              maxWidth: "500px",
            }}
          />
        </Container>
      </header>
    </div>
  );
}

export default App;
