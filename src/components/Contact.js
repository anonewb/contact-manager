import React, { Component } from 'react'
import PropTypes from 'prop-types'

// in rcc, props are stored inside {this.props}
class Contact extends Component {
  state = {};

  // for custom methods inside compo i.e not a lifecycle method like render()
  // 2 ways to use this custom method,
  // 1. bind it with this keyword / or inside constructor fn
  // 2. use arrow functions
  // onShowClick = (e) => {
    // console.log(this.state);
    // console.log(e);
    // console.log(e.target);
  // }

  // onShowClick = (name, e) => {
  //   console.log(name);
  // }

  onShowClick = e => {}

  render() {
    // pull out "name, email, phone" from "this.props"
    // destructuring
    const { name, email, phone } = this.props.contact;

    
    return (
      <div className="card card-body mb-3">
        <h4>{name} <i onClick={this.onShowClick} className="fas fa-sort-down"></i></h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;