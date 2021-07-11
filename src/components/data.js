import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  background: white;
  display: flex;
  justify-content: space-around;
  text-align: start;
  margin: 6vh 15%;
  padding: 20px;
  height: 20vh;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin: 4vh 10%;
    height: auto;
    padding: 0.7vh 0;
  }
`;

const H2 = styled.h2`
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: 500;
  color: hsl(0, 0%, 50%);
  padding: 5px 0;
`;

const H1 = styled.h1`
  font-size: 15px;
  color: hsl(0, 0%, 17%);
  width: 100%;
`;

const Rod = styled.div`
  width: 1px;
  height: 50px;
  background-color: hsl(0, 0%, 70%);
  @media (max-width: 768px) {
    display: none;
  }
`;

const InnerDiv = styled.div`
  width: 20%;
  @media (max-width: 768px) {
    padding: 0.7vh 1%;
    width: 100%;
  }
`;
const Handle = ({ ipAddress, location, timezone, isp }) => {
  return (
    <MainDiv>
      <InnerDiv>
        <H2>IP ADDRESS</H2>
        <H1>{ipAddress}</H1>
      </InnerDiv>
      <Rod></Rod>
      <InnerDiv>
        <H2>LOCATION</H2>
        <H1>{location}</H1>
      </InnerDiv>
      <Rod></Rod>
      <InnerDiv>
        <H2>TIMEZONE</H2>
        <H1>{timezone}</H1>
      </InnerDiv>
      <Rod></Rod>
      <InnerDiv>
        <H2>ISP</H2>
        <H1>{isp}</H1>
      </InnerDiv>
    </MainDiv>
  );
};

export default Handle;
