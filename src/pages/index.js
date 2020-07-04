import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Container from "../components/container"
import Latest from "../components/blog/Latest"
import Projects from "../components/projects"
import Footer from "../components/Footer"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import art1 from "../images/arts/shape-light-coral-edge.svg"
import art2 from "../images/arts/shape-mint-edge.svg"
import art3 from "../images/arts/shape-light-coral-edge-bottom.svg"

import "./index.css"

export default () => {
  const { social } = useSiteMetadata()
  const artHeaderStyle = {
    zIndex: "-1",
    position: "absolute",
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Abel L Mbula</title>
      </Helmet>

      <img
        src={art1}
        style={{ ...artHeaderStyle, top: "3em", width: "45vw" }}
        all=""
      />
      <img
        src={art2}
        style={{
          ...artHeaderStyle,
          right: "0px",
          top: "-10em",
          width: "20vw",
        }}
        all=""
      />

      <Container>
        <header
          id="intro"
          style={{
            width: "50%",
          }}
        >
          <h1>Hello, I'm {social.firstName} 👋</h1>
          <p
            className="subTitle"
            style={{
              color: "#868e96",
              fontSize: "1.2em",
              marginTop: "1.8em",
            }}
          >
            I'm a software engineer, technical writter, educator, and mentor.
            This is my Internet home.
          </p>
          <p>
            I'm here to help. I learn in public and I can't wait to share my
            knowledge with the community. I consume from the web, but I also
            contribute to make it.
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
          }}
        >
          <h1>- Latest</h1>
          <Latest />
        </section>

        <section id="projects">
          <h1>- Selected Projects</h1>
          <ul
            style={{
              marginTop: `2.5em`,
            }}
          >
            <li>
              <Projects />
            </li>
          </ul>

          {/* A call to action for more projects or lab */}
          <div>
            <p>
              Need more real world projects? Drop me a line
              <a href="/contact"> here</a> or visit my <a href="/lab">lab</a>{" "}
              where I built software for or with my students
            </p>
          </div>
        </section>
        <Footer />
      </Container>
      <img
        src={art3}
        style={{ ...artHeaderStyle, right: "0px", bottom: "-75em" }}
        alt=""
      />
    </div>
  )
}
