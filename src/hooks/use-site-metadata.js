import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            email
            title
            firstName
            lastName
            siteUrl
            description
            social {
              twitter
              linkedin
              github
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
