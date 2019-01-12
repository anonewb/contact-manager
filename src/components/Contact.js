import React, { Component } from 'react'
import PropTypes from 'prop-types'

// in rcc, props are stored inside {this.props}
class Contact extends Component {
  render() {
    // pull out "name, email, phone" from "this.props"
    const { name, email, phone } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
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