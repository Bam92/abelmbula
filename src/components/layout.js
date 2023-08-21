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
      <>
      <div
        style={{
          // marginLeft: `auto`,
          // marginRight: `auto`,
          // maxWidth: rhythm(25),
          minHeight: `100vh`,
          display: `flex`,
          justifyContent: `center`,
          flexDirection: `column`,
          // alignItems: `center`
        }}
      >
        <header style={{ alignSelf: `center`}}>{header}</header>
        <main style={{ alignSelf: `center` }}>
          {children}
          </main>
      {/* <footer style={{ backgroundColor: `white`, }}> */}
      <Footer />
      {/* </footer> */}
      </div>
      </>
    )
  }
}

export default Layout
