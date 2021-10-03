import React, { useState, useEffect } from 'react'
import Logo from "../../Images/Rocket.svg"
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import "../../css/Components/Navbar.css"

export default function NavBar()
{
    const[background, setBackground] = useState({
        backgroundColor : "transparent",
        color : "white",
        boxShadow : "none"
    });

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            console.log("scrollY",window.scrollY)
            handleScroll();
        })
    },[])
    const handleScroll = ()=>{
        let nav = document.getElementById("nav");
        let navHeight = nav.scrollHeight;
        if (window.scrollY >= navHeight) {
            setBackground({
                backgroundColor : "white",
                color : "black",
                boxShadow : "0px -8px 30px 10px #0000007d"
            });
        } else {
            setBackground(background);  
        }
    
    }

    return (
        <>
            <Navbar  expand="sm" id="nav" style={background} >
                <Container fluid="lg">
                    <Navbar.Brand  ><NavLink exact  to="/"><img src={Logo} alt="logo" style={{ width: "50px", marginRight : "1rem"}} /><span>ROVALIEN</span></NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto linkContainer">
                            <NavLink exact activeClassName="activeNavLinks" to="/">HOME</NavLink>
                            <NavLink exact activeClassName="activeNavLinks" to="/weather">WEATHER</NavLink>
                            <NavLink exact activeClassName="activeNavLinks" to="/media">MEDIA</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
