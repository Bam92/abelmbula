import React from "react"
import { Link } from "gatsby"

import { postCard } from "./postLink.module.css"

const PostLink = ({ post }) => (
  <Link
    to={`/blog` + post.fields.slug}
    className={postCard}
    style={{
      
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
