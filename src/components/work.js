import React from "react"

import {useWorkData} from "../hooks/use-work"

export default () => {
    const data = useWorkData()
    
    return (
        <>
            {
            data.map(item => { return (
                <>
                    <h2>{item.node.company} </h2>
                    <h3>{item.node.position} </h3>
                    <p>{item.node.description} </p>
                </>
            ) })
        }
        </>
    )
}


// export default () => {
//     const { data } = useStaticQuery(graphql`
//         query WorkQuery {
//             allWorkJson {
//                 edges {
//                     node {
//                         position
//                         company
//                         description
//                     }
//                 }
//             }
//         }
//     `)

//      return (
//          <>
//          const {data} = data.allWorkJson.edges
//          {data.map(({ node }) => {
//              return (<h2> { node.position }</h2>) 
//              )}
//              </>
//              )
//          }        
      

   
