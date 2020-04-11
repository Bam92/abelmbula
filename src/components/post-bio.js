/**
 * Bio component for every single post
 */

import React from "react"
import { 
  useStaticQuery,
  graphql 
} from "gatsby"

import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

const PostBio = () => {
  const data = useStaticQuery(graphql`
    query PostBioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          bio
        }
      }
    }
  `)

  const { author, bio } = data.site.siteMetadata
  return (
    <div
      style={{
        marginTop: rhythm(2.5),
        marginBottom: rhythm(2.5),
        borderRadius: '1em',
        padding: '2rem',
        color: 'hsla(0,0%,100%,.9)',
        background: 'radial-gradient(circle at 20% 20%,#5183f5 25%,#4640ff 100%)',
        boxShadow: '0.5rem 1.25rem 1.75rem 0 rgba(100,110,140,.4)'
      }}
    >      
      <div
        style={{
          // display: `flex`,   
        }}>
        <Img 
        style={{
          width: '4.5em',
          height: '4.5em',
          borderRadius: '50%',
          marginRight: '1em'
        }}
        fixed={data.avatar.childImageSharp.fixed} alt="me in picture" />
        <div
        style={{
          // border: '2px solid red'
        }}
        >
          <strong>{author} </strong>  is a {bio}
          {/* add buy me a coffe and patron buttons here */}
          <div 
          style={{
            // border: '2px solid red'
            marginTop: '1em'
          }}
          >
            <button>Bye him a coffee</button>
            <button>Become a Patron</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PostBio
