import React from 'react'
import PropTypes from 'prop-types'


// in rfc, props are stored inside {props}
const Header = (props) => {
  // pull out "branding" from "props"
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  )
}

Header.defaultProps = {
  branding: 'My App'
}
Header.propTypes = {
  branding: PropTypes.string.isRequired
}



export default Header;