import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
    return (
        <div className="navbar bg-dark text-light justify-content-center">
            <h1>
                <i className={icon} /> {title}
            </h1>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'NameBook',
    icon: 'fas fa-address-book'
}

export default Navbar
