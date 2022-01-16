import React, { Component } from "react";
import styled from "styled-components";
import { Facebook, Pinterest, Mail } from "@material-ui/icons";
import f1 from "./images/Sign In/f1.jpg";

const Container = styled.div`
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-color: #eeeeee;
  display: flex;
`;
const RightContainer = styled.div`
  width: 50%;
  background-color: #222831;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  align-self: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  margin-top: 30px;
  padding: 10px;
  color: white;
  margin-bottom: 15px;
  background-color: black;
  border-radius: 50px;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #eeeeee;
  flex-direction: column;
  justify-content: center;
  display: flex;
`;
const InputContainer = styled.div`
  margin-top: 15px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 100px;
`;
const Input = styled.input`
  border: none;
  border-radius: 50px;
  padding-left: 15px;
`;
const Image = styled.img`
  height: 80%;
  margin: 40px;
  width: 50%;
`;

const LeftContainer = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #222831;
`;
const BottomContainer = styled.div`
  width: 25%;
  height: 40px;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;
const IconContainer = styled.div`
  margin: 10px;
`;

const SignInForm = () => {
  return (
    <div>
      <Container>
        <LeftContainer>
          <Image src={f1}></Image>
        </LeftContainer>
        <RightContainer>
          <FormContainer>
            <Title>Sign In</Title>
            <InputContainer>
              <Input placeholder="Username/Email"></Input>
            </InputContainer>
            <InputContainer>
              <Input placeholder="Your Password"></Input>
            </InputContainer>
            <Button>Sign In</Button>
            Other ways to Sign In:
            <BottomContainer>
              <IconContainer>
                <Facebook />
              </IconContainer>
              <IconContainer>
                <Pinterest />
              </IconContainer>
              <IconContainer>
                <Mail />
              </IconContainer>
            </BottomContainer>
          </FormContainer>
        </RightContainer>
      </Container>
    </div>
  );
};

export default SignInForm;
