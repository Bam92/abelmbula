import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <Link
    to={`/blog` + post.fields.slug}
    className="row"
    style={{
      width: "24vw",
      display: "flex",
      flexDirection: "column",
      borderLeft: "2px solid #e5e7eb",
      borderRight: "2px solid #e5e7eb",
      borderBottom: "2px solid #e5e7eb",
      padding: "1.2em",
      textDecoration: "none",
      borderRadius: "5px",
    }}
  >
    <h3 className="cell" 
    style={{margin: "0",}} >
      {post.frontmatter.title}
    </h3>
    <div
      className="cell"
      style={{
        color: "rgb(75 85 99)"
      }}
    >
      <p style={{ margin: ".6em 0 "}}>
      <time >{post.frontmatter.date}</time>
        </p>
      <p>{post.excerpt}</p>
    </div>
  </Link>
)

export default PostLink
