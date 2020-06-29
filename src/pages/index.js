import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Container from "../components/container"
import Profession from "../components/work"
import Projects from "../components/projects"
import Footer from "../components/Footer"

import "./index.css"

export default ({ data }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Abel L Mbula</title>
    </Helmet>
    <Container>
      <header
        id="intro"
        style={{
          width: "50%",
        }}
      >
        <h1>Hello, I'm {data.site.siteMetadata.firstName} 👋</h1>
        <p
          className="subTitle"
          style={{
            color: "#868e96",
            fontSize: "1.2em",
            marginTop: "1.8em"
          }}
        >
          I'm a software engineer, technical writter and educator, and mentor.
          This is my Internet home.
        </p>
        <p>
          I'm here to help. I learn in public and I can't wait to share my
          knowledge with the community. I consume from the web, but I also contribute
          to make it.
        </p>

        <p>
          You can read my <Link to="/blog">blog</Link>, view my{" "}
          <Link to="/lab">lab</Link>, or contact me at{" "}
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
            <a href="https://twitter.com/abelmbula">Twitter</a>
            <span className="separator">/</span>
          </li>
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/abel-lifaefi-mbula-8371087b/?locale=en_US">
              {" "}
              LinkedIn
            </a>
            <span className="separator">/</span>
          </li>
          <li>
            <a href="https://github.com/Bam92">GitHub</a>
          </li>
        </ul>
      </header>
      <section>
        {/* <h1>- Blog</h1>

             <ul>
                 <li><Link to="#">Hello World</Link></li>
             </ul> */}
      </section>
      {/* <section id="work">
        <h1>- Work</h1>
        <ul>
          <li>
            <Profession />
          </li>
        </ul>
      </section> */}
      <section id="latest">
        <h1>- Latest</h1>
        You can read my Blog posts <Link to="/blog">here</Link>
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

      <footer>
        <Footer />
      </footer>
    </Container>
  </div>
)

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        firstName
        title
        description
        twitter
      }
    }
  }
`
