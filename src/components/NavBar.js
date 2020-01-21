import React, {Component} from 'react';
import logo from "../logo.svg"
import {Link} from "react-router-dom"
import {ButtonContainer} from "./Button"
import styled from "styled-components";

class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  px-sm-3">
                {/*
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/defaults" className="nav-link">
                            <h1> products</h1>
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus"/>
                        cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }



}


const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
color:var(--mainWhite)!important;
font-size:1.3rem;
text-transform: capitalize; 
}
`
export default NavBar;