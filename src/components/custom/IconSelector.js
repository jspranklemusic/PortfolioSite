import React, {useState} from 'react'
import styled from 'styled-components'

const javascript = '/assets/icons/javascript/javascript-original.svg'
const node = '/assets/icons/nodejs/nodejs-original.svg'
const html = '/assets/icons/html5/html5-original.svg'
const css = '/assets/icons/css3/css3-original.svg'
const vue = '/assets/icons/vuejs/vuejs-original.svg'
const react = '/assets/icons/react/react-original.svg'
const mongodb = '/assets/icons/mongodb/mongodb-original.svg'
const python = '/assets/icons/python/python-original.svg'
const mysql = '/assets/icons/mysql/mysql-plain.svg'

const IconSelector = styled.div`

    width:100%;
    max-width:max-content;
    height:3rem;
    background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.8));
    border-radius:100px;
    position:absolute;
    bottom:-5rem;
    left:50%;
    transform:translateX(-50%);
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    box-shadow:0 0 10px rgba(0,0,0,.5);

    img{
        height:2rem;
        width:2rem;
        transition:0.2s;
        margin:0rem 1rem;

    }
    div{
        display:flex;
        align-items:center;
        justify-content:center;
        flex:1;
        height:100%;
        transition:0.18s;
        backface-visibility:hidden;
        cursor:pointer;
        &:hover >*{
            transform:translateY(-8px) translateX(0px) scale(1.75) ;
            
        }
    }
`

export default props=>{

    const [selectedIMG, setSelectedIMG] = useState([])

    function selectImage(img=""){
        setSelectedIMG([...selectedIMG, img]);
    }

    function unselectImage(img=""){
        let arr = selectedIMG.filter(image=>image!=img);
        setSelectedIMG(arr);
    }

    const activeStyle = {
        background:'rgba(255,255,255,.3)'
    }

    const inactiveStyle = {
        background:'rgba(255,255,255,.0)'
    }   
    
    return(
        <IconSelector>
            <div 
                style={selectedIMG.includes("javascript") ? activeStyle : inactiveStyle }
                onClick={!selectedIMG.includes("javascript") ? 
                ()=>{selectImage("javascript")} : 
                ()=>{unselectImage("javascript")}}
            >
                 <img src={javascript} />
            </div>
            <div 
                style={selectedIMG.includes("node") ? activeStyle : inactiveStyle }
                onClick={!selectedIMG.includes("node") ? 
                ()=>{selectImage("node")} : 
                ()=>{unselectImage("node")}}
            >
                 <img src={node} />
            </div>
            <div 
                style={selectedIMG.includes("html") ? activeStyle : inactiveStyle }
                onClick={!selectedIMG.includes("html") ? 
                ()=>{selectImage("html")} : 
                ()=>{unselectImage("html")}}
            >
                 <img src={html} />
            </div>
            <div 
                style={selectedIMG.includes("css") ? activeStyle : inactiveStyle }
                onClick={!selectedIMG.includes("css") ? 
                ()=>{selectImage("css")} : 
                ()=>{unselectImage("css")}}
            >
                 <img src={css} />
            </div>
            <div 
                style={selectedIMG.includes("vue") ? activeStyle : inactiveStyle }
                onClick={!selectedIMG.includes("vue") ? 
                ()=>{selectImage("vue")} : 
                ()=>{unselectImage("vue")}}
            >
                 <img src={vue} />
            </div>
            <div 
                style={selectedIMG.includes("react") ? activeStyle : inactiveStyle }
                onClick={!selectedIMG.includes("react") ? 
                ()=>{selectImage("react")} : 
                ()=>{unselectImage("react")}}
            >
                 <img src={react} />
            </div>
            <div 
                style={selectedIMG.includes("mongodb") ? activeStyle : inactiveStyle }
                onClick={!selectedIMG.includes("mongodb") ? 
                ()=>{selectImage("mongodb")} : 
                ()=>{unselectImage("mongodb")}}
            >
                 <img src={mongodb} />
            </div>
            <div 
                style={selectedIMG.includes("mysql") ? activeStyle : inactiveStyle }
                onClick={!selectedIMG.includes("mysql") ? 
                ()=>{selectImage("mysql")} : 
                ()=>{unselectImage("mysql")}}
            >
                 <img src={mysql} />
            </div>
            <div 
                style={selectedIMG.includes("python") ? activeStyle : inactiveStyle }
                onClick={!selectedIMG.includes("python") ? 
                ()=>{selectImage("python")} : 
                ()=>{unselectImage("python")}}
            >
                 <img src={python} />
            </div>
            
        </IconSelector>
    )
}