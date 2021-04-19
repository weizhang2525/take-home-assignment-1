import styled from "styled-components";

const CustomFlex = styled.div`
  display: flex;
`;
const Flex = ({ children, style, onClick, ...props }) => {
  return (
    <CustomFlex style={{ ...style }} onClick={onClick}>
      {children}
    </CustomFlex>
  );
};

export default Flex;
