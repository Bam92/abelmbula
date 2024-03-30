import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import LatestPosts from "../components/blog/Latest"
import Layout from "../components/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import art1 from "../images/arts/shape-light-coral-edge.svg"
import art2 from "../images/arts/shape-mint-edge.svg"

import "./index.css"

export default (props) => {
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

      <Layout location={props.location}>
        <header id="intro">
          <h1>Hi, I'm {firstName} 👋</h1>
          <p
            className="subTitle"
            style={{
              color: "#868e96",
              fontSize: "1.2em",
              marginTop: "1.8em",
            }}
          >
            I'm a developer, an educator, a writer, a free/libre open source
            enthusiast and a Jesus Christ follower.
            I've co-founded <a href="http://wikimediardc.org/">Wikimedia DRCongo </a>
            and founded <a href="https://kaliacademy.org/">Kali Academy</a>
            <br />
            Welcome to my digital garden!
          </p>

          <p>
            When I'm not behind the screen, you'll find me spending time with my
            family and/or spreading the world about the gospel of Christ.
          </p>
        </header>

        {/* Latest 6 blog posts */}
        <section id="latest" style={{ marginTop: `2.5em`,}}>
          <h2>Latest</h2>
          <LatestPosts />

          <p style={{ textAlign: `center`, marginTop: `.8em` }}>
            <Link to="/blog">See all articles</Link>
          </p>
        </section>
      </Layout>
    </div>
  )
}
