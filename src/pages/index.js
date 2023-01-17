import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Container from "../components/container"
import Latest from "../components/blog/Latest"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import art1 from "../images/arts/shape-light-coral-edge.svg"
import art2 from "../images/arts/shape-mint-edge.svg"

import "./index.css"

export default () => {
  const { social, firstName } = useSiteMetadata()
  const artHeaderStyle = {
    zIndex: "-1",
    position: "absolute",
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="monetization" content="$ilp.uphold.com/rmLyURx6aPz6"></meta>
        <title>{firstName} L. Mbula</title>
      </Helmet>

      <img
        id="art1"
        src={art1}
        style={{ ...artHeaderStyle, top: "3em", width: "45vw" }}
        alt=""
      />
      <img
        id="art2"
        src={art2}
        style={{
          ...artHeaderStyle,
          right: "0px",
          top: "-10em",
          width: "20vw",
        }}
        alt=""
      />

      <Container>
        <header
          id="intro"
          style={{
            width: "50%",
          }}
        >
          <h1>Hi, I'm {firstName} 👋</h1>
          <p
            className="subTitle"
            style={{
              color: "#868e96",
              fontSize: "1.2em",
              marginTop: "1.8em",
            }}
          >
            I know how difficult it is to get started in the tech industry. So, my mission is to help move forward
            in the right direction.
          </p>

          <p>
            You can read my <Link to="/blog">blog</Link>, view my{" "}
            <Link to="/lab">lab</Link>, or drop me a ligne at{" "}
            <strong>news.abel </strong> at
            <strong> protonmail.com</strong>
          </p>
          <ul
            style={{
              listStyle: `none`,
              display: `flex`,
              margin: `0`,
            }}
          >
            <li>
              <a href={social.twitter}>Twitter</a>
              <span className="separator">/</span>
            </li>
            <li>
              <a href={social.linkedin}> LinkedIn</a>
              <span className="separator">/</span>
            </li>
            <li>
              <a href={social.github}>GitHub</a>
            </li>
          </ul>
        </header>

        {/* Latest 5 blog posts */}
        <section
          id="latest"
          style={{
            width: "80%",
            marginTop: `2.5em`,
          }}
        >
          <h1>- Latest</h1>
          <Latest />
        </section>
      </Container>
    </div>
  )
}
