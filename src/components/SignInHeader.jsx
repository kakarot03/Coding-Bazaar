import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

const Announcement = () => {
  return <Container>Hello!</Container>;
};

export default Announcement;
