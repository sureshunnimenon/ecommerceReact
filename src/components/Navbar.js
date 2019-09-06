import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

import styled from 'styled-components';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/*
            https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk 
                */}
                <Link to="/">
                    <img src={logo} alt="logo" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link"> Products </Link>
                        </li>   
                </ul>

                <Link to="/cart" className="ml-auto">
                    <ButtonContainer> <span><i className="fas fa-cart-plus"></i> </span> my cart</ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
 
const ButtonContainer = styled.button`
text-transform: capitalize;
font-size:1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color:${props=>props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${props => props.cart ?"var(--mainYellow)":"var(--lightBlue)"};
border-radius:0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem;
transition: all 0.2s ease-in-out;
&:hover{
    background: ${props => props.cart ?"var(--mainYellow)":"var(--lightBlue)"};
    color: var(--mainBlue)    
}

&:focus{
    outline: none;
}
`

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`

export {NavWrapper, ButtonContainer, Navbar }
