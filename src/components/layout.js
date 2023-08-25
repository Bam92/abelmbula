import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Footer from "./Footer"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, children, cover } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isBlogPostPath = /blog\/\S+$/
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {/* {title} */}
          </Link>
        </h1>
      )
    } else if (isBlogPostPath.test(location.pathname)) {
      header = (
        <>
          <p
            style={{
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
              }}
              to={`/blog`}
            >
              Back to overview
            </Link>
          </p>
          <div>
            {cover ? <Img fluid={cover.childImageSharp.fluid} /> : null}
          </div>
        </>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
            }}
            to={`/`}
          >
            Home
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          minHeight: `100vh`,
          display: `flex`,
          justifyContent: `center`,
          flexDirection: `column`,
        }}
      >
        <header style={{ alignSelf: `center`}}>
          {header}
        </header>

        <main style={{ alignSelf: `center`, width:`80%` }}>
          {children}
        </main>
        
        <Footer />
      </div>
    )
  }
}

export default Layout
