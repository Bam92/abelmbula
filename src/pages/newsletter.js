import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Mailchimp from "../components/MailchimpForm"
import Container from "../components/container"
import Footer from "../components/Footer"

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Join the Familly | Abel L Mbula</title>
    </Helmet>
    <Container>
      <Link to="/">Home</Link>
      <h1>Newsletter</h1>
      <p>
        Do you like my content? Join the mailing list to receive free tutorials
        I made on my blog and news about training products
      </p>
      <h4>
        <strong>I hate SPAMs</strong>{" "}
      </h4>
      <Mailchimp />

      <Footer />
    </Container>
  </>
)
