import React, {Component, Fragment} from 'react';
import {NavLink} from "react-router-dom";
import {HamburgerSpin} from 'react-animated-burgers'

const Links = ['Events', 'Megashows', 'About', 'Sponsors', 'Login'];

class Header extends Component {
    state = {
        isActive: false,
    };
    toggleButton = () => {
        this.setState(({isActive}) => ({isActive: !isActive}))
    };


    render() {
        return (
            <Fragment>
                <div className={"open-wrapper"}>
                    <div><HamburgerSpin isActive={this.state.isActive} toggleButton={this.toggleButton}
                                        barColor="white"/></div>
                </div>
                <div id="myNav" className="overlay" style={{width: this.state.isActive ? "100%" : "0%"}}>
                    {/*<a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>*/}
                    {/*<HamburgerSpin isActive={this.state.isActive} toggleButton={this.toggleButton} barColor="white"/>*/}
                    <div className="overlay-content">
                        <ul className={"header-list"}>
                        <li className={"slide-fade"}><NavLink exact={true} to={"/"} onClick={this.toggleButton}>Home</NavLink></li>
                        {
                            Links.map((link, index) => (
                                <li key={index} className={"slide-fade"}><NavLink  exact={true} onClick={this.toggleButton}
                                         to={`/${link.toLowerCase()}`}>{link}</NavLink></li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Header;