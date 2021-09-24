import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import { ReactComponent as Logo } from '../../imgs/portfolio-logo.svg';
import { HiMenu, HiX } from "react-icons/hi";

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="navbarItems">
                <Logo className="navbarLogo" />
                <p className="navbarName">Michaela Green</p>
                <div className="menuIcon" onClick={this.handleClick}>
                    {this.state.clicked ? <HiX /> : <HiMenu />}
                </div>
                <ul className={this.state.clicked ? 'navMenu active' : 'navMenu' }>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;