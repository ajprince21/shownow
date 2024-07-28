import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  height: 30px;
  color: white;
  text-align: center;
  align-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return (
    <Container>Super Deal ! Free Shipping on Order above Rs 199/-</Container>
  );
};

export default Announcement;
