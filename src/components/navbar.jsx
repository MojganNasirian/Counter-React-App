import React, { Component } from 'react';

const Navbar = ({ totalcounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-pill badge-secondary">
                    {totalcounters}
                </span>
            </a>
        </nav>
    );
}

export default Navbar;