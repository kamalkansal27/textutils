import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
            <label style={{ color: "darkgrey" }} className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Enable Dark Mode' : 'Enable Dark Mode'}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Title',
  about: 'About here'
}

