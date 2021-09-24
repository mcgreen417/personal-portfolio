import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import { ReactComponent as Logo } from '../../imgs/portfolio-logo.svg';

class Navbar extends Component {
    state = { clicked: false }



    render() {
        return (
            <nav className="navbarItems">
                <Logo />
                <p className="navbarLogo">Michaela Green</p>
                <div className="menuIcon" onClick={this.handleClick}>
                </div>
                <ul>
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