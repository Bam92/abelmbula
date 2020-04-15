import { graphql, useStaticQuery  } from "gatsby"

export const useWorkData = () => {
 const { allWorkJson } = useStaticQuery(graphql`
 query WorkQuery {
    allWorkJson {
        edges {
            node {
                position
                company
                description
            }
        }
        }
    }
 `)  
 return allWorkJson.edges
}