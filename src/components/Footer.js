import React from "react"
import { Link } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import art3 from "../images/arts/shape-light-coral-edge-bottom.svg"


export default () => {
  const { social } = useSiteMetadata()
  const artHeaderStyle = {
    zIndex: "-1",
    position: "absolute",
  }
  const liStyle = {
    borderRadius: "50%",
    width: "1.8em",
    texAlign: "center",
    background: "black",
  }

  return (
    <footer>
      <ul
        style={{
          display: `flex`,
        //   alignItems: "center",
        }}
      >
        <li>
          <Link to="/">Home</Link>
          <span className="separator">/</span>
        </li>
        <li>
          <Link to="/blog">Blog </Link>
          <span className="separator">/</span>
        </li>
        <li>
          <Link to="/algo">Algorithms</Link>
          <span className="separator">/</span>
        </li>
        <li>
          <Link to="/lab">Lab</Link>
          <span className="separator">/</span>
        </li>
        <li>
          <Link to="/lab">Newsletter</Link>
        </li>
      </ul>
      <ul
        style={{
          display: `flex`,
          alignItems: "center",
          color: "white",
          display: "none"
        }}
      >
        <li style={liStyle}>
          <a href={social.github} title="Retrouve-moi sur Github">
            G
          </a>
        </li>
        <li>
          <a href={social.linkedin}>L</a>
        </li>
        <li>
          <a href={social.twitter}>T</a>
        </li>
      </ul>
      <img
        src={art3}
        style={{ ...artHeaderStyle, right: "0px", bottom: "-95em" }}
        alt=""
      />
    </footer>
  )
}
