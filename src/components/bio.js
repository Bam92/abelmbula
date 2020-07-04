/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import { rhythm } from "../utils/typography"

const Bio = () => {

  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/abel-profile.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = useSiteMetadata()
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >      
      {author}
      {social.twitter}
    </div>
  )
}

export default Bio
