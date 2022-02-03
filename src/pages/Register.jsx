import { Facebook, GitHub, Instagram, Twitter } from "@material-ui/icons";
import { ReactComponent as Logo } from "../components/images/Login/login.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
  }
`;

const FormContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 22%;
  width: 23%;
  display: grid;
  grid-template-columns: 1fr;
  transform: translate(180%, -50%);
  transition: 1s 0.7s ease-in-out;
  z-index: 5;
`;

const Title = styled.h1`
  font-size: xx-large;
  font-weight: 1500px;
  text-align: center;
`;

const Input = styled.input`
  background-color: #dfdede;
  height: 45px;
  font-size: 18px;
  border: none;
  padding-left: 20px;
  border-radius: 100px;
  color: black;
  margin-top: 25px;
`;

const ButtonOne = styled.button`
  background-color: #4481eb;
  cursor: pointer;
  margin-top: 25px;
  width: 28%;
  margin-left: auto;
  margin-right: auto;
  height: 43px;
  font-size: 18px;
  border: none;
  border-radius: 50px;
  color: white;
  display: block;
`;

const ButtonTwo = styled.button`
  background-color: #f8f5f5;
  cursor: pointer;
  margin-top: 25px;
  width: 28%;
  margin-left: auto;
  margin-right: auto;
  height: 43px;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 1px;
  border: none;
  border-radius: 50px;
  color: #4481eb;
  display: block;

  &:hover{
    background-color: #4481eb;
    color: #f8f5f5;
  }
`;

const Description = styled.p`
  font-size: medium;
  margin-top: 25px;
  text-align: center;
  font-weight: 800px;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  margin-right: 20px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const PanelContainer = styled.div`
  position: absolute;
  width: 30%;
  top: 12%;
  left: 10%;
  z-index: 6;
`;

const StyledLogo = styled(Logo)`
  width: 30rem;
  height: 30rem;
  margin-top: 0;
  right: 0%;
  position: absolute;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
`;

const handleClick = (action) => {
  if (action === "login") {
  } else {
  }
};

export const Register = () => {
  return (
    <Container>
      <PanelContainer className="wrapper">
        <Title>One of Us?</Title>
        <Description>Lorem ipsum asde xvdjsm akqhe saden sajkqe ashab</Description>
        <ButtonTwo>Sign In</ButtonTwo>
        <StyledLogo />
      </PanelContainer>
      <FormContainer>
        <Title>Sign up</Title>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
        <Link to="/login" style={{textDecoration: "none"}}>
          <ButtonOne>Sign up</ButtonOne>
        </Link>
        <Description>Or sign up with</Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="000">
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </FormContainer>
    </Container>
  );
};
