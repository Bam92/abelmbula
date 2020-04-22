import React from "react"
import { graphql } from "gatsby"

import Container from "../components/container" 
import Profession from "../components/work"
import Projects from "../components/projects"
import Footer from "../components/Footer"
import "./index.css"

export default ({data}) => (
    <>
      <Container>
         <header>
             <h1>Hello, I'm {data.site.siteMetadata.firstName} 👋</h1>
             <h2>a {data.site.siteMetadata.title}</h2>
             <p style={{
                 marginBottom: `1.5em`
             }}>
                {data.site.siteMetadata.description}
             </p>
             <ul style={{
                 listStyle: `none`,
                 display: `flex`,
                 margin: `0`

             }}>
                 <li><a href="https://twitter.com/abelmbula">Twitter</a> 
                    <span className="separator">/</span> 
                 </li>
                 <li> <a href="https://www.linkedin.com/in/abel-lifaefi-mbula-8371087b/"> LinkedIn</a> 
                    <span className="separator">/</span> 
                 </li>
                 <li><a href="https://github.com/Bam92">GitHub</a></li>

             </ul>
         </header>
         {/* <section>
             <h1>- Blog</h1>

             <ul>
                 <li><Link to="#">Hello World</Link></li>
             </ul>

         </section> */}
         <section>
             <h1>- Work</h1>
             <ul><li><Profession /></li></ul>
            
         </section>
         <section>
             <h1>- Selected Projects</h1>

             <ul 
                style={{
                    marginTop:`2.5em`
                }}
             >
                <li><Projects /></li>
             </ul>

         </section>

         <footer>
             <Footer />
         </footer>
         
    </Container>
 
    </>
)

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                firstName
                title
                description
                twitter
            }
        }
    }             
`