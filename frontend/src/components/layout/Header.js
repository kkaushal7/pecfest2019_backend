import React, {Component} from 'react';
import { stack as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";

class Header extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu disableAutoFocus right>
                <li><Link className={"menu-item"} to={"/"}>Home</Link></li>
                <li><Link className={"menu-item"} to={"/events"}>Events</Link></li>
                <li><Link className={"menu-item"} to={"/megashows"}>Megashows</Link></li>
                <li><Link className={"menu-item"} to={"/about"}>About</Link></li>
                <li><Link className={"menu-item"} to={"/sponsors"}>Sponsors</Link></li>
                <li><Link className={"menu-item"} to={"/login"}>Login</Link></li>
            </Menu>
        );
    }
}

export default Header;