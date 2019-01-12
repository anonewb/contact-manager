import React, { Component } from 'react'
import PropTypes from 'prop-types'

// in rcc, props are stored inside {this.props}
class Contact extends Component {
  render() {
    // pull out "name, email, phone" from "this.props"
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

export default Contact;