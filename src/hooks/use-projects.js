import { graphql, useStaticQuery  } from "gatsby"

export const useProjectsData = () => {
 const { allProjectsJson } = useStaticQuery(graphql`
 query ProjectsQuery {
    allProjectsJson {
        edges {
            node {
                image{                    
                    
                        childImageSharp{
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    
                }
                title
                description
                link
            }
        }
        }
    }
 `)  
 return allProjectsJson.edges
}