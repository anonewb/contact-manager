import React, { Component } from "react";
import PropTypes from "prop-types";

// in rcc, props are stored inside {this.props}
class Contact extends Component {
  state = {
    showContactInfo: false
  };

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

  // onShowClick = e => {
  // states are immutable. therefore any changes need to be done in state object, use this.setState() and not this.state()
  // this.setState({
  //   showContactInfo: !this.state.showContactInfo
  // })
  // }

  onDeleteClick = () => {
    // console.log('hi')
    this.props.deleteClickHandler();
  }

  render() {
    // pull out "name, email, phone" from "this.props"
    // destructuring
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            className="fas fa-sort-down"
            style={{cursor: 'pointer'}}
          />
          <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.onDeleteClick}>
          
          </i>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
