import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import React from "react"

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", name: "", result: null }
  }
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email, {
      FNAME: this.state.name,
    })
    if (result.result === "error") {
      alert(`Whoops, ${this.state.name} you're already subscribed!`)
    } else {
      alert(`Thank you for subscribing ${this.state.name}!`)
    }
    this.setState({ result: result })
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
        <form onSubmit={this._handleSubmit} >
          <TextField
            id="outlined-email-input"
            required={true}
            label="Your email"
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
            fullWidth
            onChange={this.handleEmailChange}
          />
          <br />
          <br />
          <TextField
            id="outlined-name-input"
            required={true}
            label="Your name"
            type="text"
            name="name"
            autoComplete="name"
            variant="outlined"
            fullWidth
            onChange={this.handleNameChange}
          />

          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            label="Submit"
            type="submit"
          >
            <Typography variant="button">Join the familly</Typography>
          </Button>
        </form>
    )
  }
}
