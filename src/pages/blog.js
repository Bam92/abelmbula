import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Container from "../components/container" 

export default () => (
    <>
        <Container>
            <Link to="/">Abel L. Mbula</Link>

            <div>Articles will be here</div>
            <Header  headerTxt="blog"/>
        </Container>
    </>
)
