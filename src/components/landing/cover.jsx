import React from "react"
import styled from "styled-components"

import bgImage from "../../../public/cover.jpg"

export default () => {
  const Title = styled.h1`
    // font-size: 1.5em;
    margin-top: 0;
    text-align: center;
    color: white;
    text-transform: uppercase;
  `
  const SubTitle = styled.h2`
    font-size: 1em;
    text-align: center;
    color: white;
    text-transform: uppercase;
  `
  const Wrapper = styled.header`
    height: 100vh;
    background: url(${bgImage}) no-repeat center fixed;
    background-color: green;
    background-size: cover;
    -webkit-background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  return (
    <Wrapper>
      <Title>Hi! I'm Abel L. Mbula 👋</Title>
      <SubTitle>Software Engineer & Educator</SubTitle>
    </Wrapper>
  )
}
