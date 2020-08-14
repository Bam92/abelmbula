import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

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
              textDecoration: `none`,
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
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          
          <Link
            style={{
              boxShadow: `none`,
            }}
            to={`/blog`}
          >
            Back to Blog
          </Link>
        </p>
        <div>
          {!!cover ? <Img sizes={cover.childImageSharp.sizes} /> : null}
        </div>
        </>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
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
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
