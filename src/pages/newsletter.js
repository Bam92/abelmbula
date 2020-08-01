import React from "react"
import { Link } from "gatsby"
import Mailchimp from "../components/MailchimpForm"

import Container from "../components/container"

export default () => (
  <>
    <Container>
      <Link to="/">Abel L. Mbula</Link>
<h1>Newsletter</h1>
      <Mailchimp />
    </Container>
  </>
)
