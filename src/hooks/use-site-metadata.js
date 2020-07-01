import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            firstName
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
