import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import { ReactComponent as Logo } from '../../imgs/portfolio-logo.svg';
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="navbarContainer">
                <div className="navbarLogoContainer">
                    <Logo className="navbarLogo" />
                    <NavLink to="/" className="navbarName">Michaela Green</NavLink>
                </div>
                <div className="menuContainer">
                    <div className="menuIcon" onClick={this.handleClick}>
                        {this.state.clicked ? <HiX /> : <HiMenu />}
                    </div>
                    <ul className={this.state.clicked ? 'navMenu active' : 'navMenu' }>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.url} className={item.cName} activeClassName="menuCurrentlyAt">
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;