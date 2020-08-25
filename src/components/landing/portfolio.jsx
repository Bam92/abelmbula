import React from "react"
import styled from "styled-components"

import tutoImage from "../../../public/tuto.jpg"
import courseImage from "../../../public/course.jpg"
import ossImage from "../../../public/oss.jpg"

export default () => {
  const Title = styled.h1`
    font-size: 1.2em;
    text-align: center;
    text-transform: uppercase;
  `
  const SubTitle = styled.h3`
    font-size: 0.75em;
    text-align: center;
    text-transform: uppercase;
  `

  const SubWrapper = styled.div`
    display: flex;
    margin: 4em 12em;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      margin: 3em 2em;
    }
  `
  const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 14em;
    height: 14em;
    // border: 2px solid;
  `

  const Paragraph = styled.p``

  const Img = styled.img`
    width: 100%;
    height: 60%;
  `

  const Wrapper = styled.section``
  return (
    <Wrapper>
      <Title>Portfolio</Title>
      <SubTitle>What you can learn from me</SubTitle>
      <SubWrapper>
        <Item>
        <Img src={tutoImage} alt="" />
          <Paragraph>Tutorials</Paragraph>
          <Paragraph>I write free content to help developers </Paragraph>
        </Item>
        <Item>
          <Img src={ossImage} alt=""  />
          <Paragraph>Open source</Paragraph>
          <Paragraph>I almost open source my code</Paragraph>
        </Item>
        <Item>
          <Img src={courseImage} alt="" />
          <Paragraph>Courses</Paragraph>
          <Paragraph>I write online courses...</Paragraph>
        </Item>
      </SubWrapper>
    </Wrapper>
  )
}
