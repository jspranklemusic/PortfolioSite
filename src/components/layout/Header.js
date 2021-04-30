import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background:white;
    box-shadow:0px 0px 10px rgba(0,0,0,.1);
    height:3rem;
    display:flex;
    width:100%;
    justify-content:flex-start;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    z-index:100;
    
    a{
        text-decoration:none;
        transition:0.2s;
        font-weight:bold;
        margin:0 1rem;

        &:hover{
            color:var(--mediumblue) !important;
        }

        &:active{
            color:var(--mediumblue) !important;
            opacity:0.5;
        }
    }

`

const Header = ()=>{

const [hash, setHash] = useState("#home")

function hashState(){
    setHash(window.location.hash)
}

useEffect(()=>{
    window.addEventListener('popstate',hashState)
    setHash(window.location.hash);
},[])


useEffect(() => {
    return () => {
        window.removeEventListener('popstate',hashState)
    }
}, [])



    const activeStyle = {
        color:'var(--darkskyblue)',

    }
    const inactiveStyle = {
        color:'rgb(150,150,150)',
    }

    return(
        <HeaderContainer>
            <a style={hash == "#home" ? activeStyle : inactiveStyle} href="#home">Home</a>
            <a style={hash == "#testimonials" ? activeStyle : inactiveStyle} href="#testimonials">Testimonials</a>
            <a style={hash == "#portfolio" ? activeStyle : inactiveStyle} href="#portfolio">Portfolio</a>
            <a style={hash == "#contact" ? activeStyle : inactiveStyle} href="#contact">Contact</a>
        </HeaderContainer>
    )
}

export default Header