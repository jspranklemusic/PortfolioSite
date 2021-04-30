import React, {useState} from 'react'
import styled from 'styled-components'
// import IconSelector from '../custom/IconSelector'
import projects from '../../data/projects.json'
import Button from '../jsx/Button'

const default_png = "defaultcode.png"

const PortfolioBar = styled.section`
    background:white;
    width:100%;
    height:60%;
    min-height:400px;
    display:grid;
    grid-template-columns:50% 50%;
    grid-template-rows:100%;
    border-radius:10px;
    box-shadow:3px 3px 10px rgba(0,0,0,.3);
    background:linear-gradient(white 50%, rgba(225,225,225) 100%);
    animation:fade-basic 0.6s backwards;
    animation-delay:0.15s;

    @media only screen and (max-width:600px){
        grid-template-rows:50% 50%;
        grid-template-columns:100%;
        height:calc(100% - 4rem);
        
    }

    .left{
        height:100%;
        width:100%;
        border-right:5px solid var(--lightblue);
        box-sizing:border-box;
    
        @media only screen and (max-width:600px){
            border-right:none;
                
        }
    
        .left-inner-1{
            width:100%;
            height:100%;
            position:absolute;
            display:flex;
            top:0;
            left:0;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
            padding:1rem;
            overflow:hidden;
            transition:0.5s;
            animation:slide-up 0.6s backwards;
            animation-delay:0.15s;

            @media only screen and (max-width:600px){
                padding-top:2rem;
                flex-direction:row;
                
            }

            .text-container{
                align-self:flex-start;
                height:100%;
                display:flex;
                flex-direction:column;
        

                p{
                    overflow:hidden;
                    height:100%;
                    flex:11;

                    &::after{
                        height:100%;
                        width:100%;
                        content:"";
                        position:absolute;

                    }
                    @media only screen and (max-width:600px){
                        overflow-x:hidden;
                        overflow-y:scroll;
                    }
                }


            }
        }

        a{
            text-decoration:none;
            flex:1;

            &:hover{
                opacity:0.7;
            }
            &:active{
                opacity:0.4;
            }
        }
        

        h2{
            font-weight:900;
            color:var(--darkskyblue);
            @media only screen and (max-width:600px){
                font-size:1.25rem;
            }
        }

        img{
            width:200px;
            height:200px;
            object-fit:cover;
            border-radius:5%;
            box-shadow:15px 15px 0px rgba(200,200,200);
            border:4px solid white;
            margin:1rem;
            
            @media only screen and (max-width:700px){
                width:20vw;
                height:20vw;
                margin-right:1.5rem;
                
            }
            

        }
        p{
            color:rgba(50,50,50,1);
            border-radius:15px;
            padding:0.5rem;
            font-weight:500;
            line-height:1.5rem;
            text-align:left;
            font-size:0.9rem;
            
        }
    
        
    }

    .right{
        padding-bottom:3.25rem;
        border-left:5px solid var(--lightblue);
        height:100%;
        display:grid;
        grid-template-rows:1fr 6fr;
        

        @media only screen and (max-width:600px){
            grid-template-rows:1fr 15fr;
            border-left:none;
        }

       

        h2{
            text-align:center;
            font-size:2rem;
            padding:0.25rem 0;
            animation:slide-up 0.6s backwards;
            animation-delay:0.15s;
            @media only screen and (max-width:600px){
                font-size:0.1px;
                padding:0;
                margin:0;
                visibiliy:hidden;
            }
        }
        ul{
            overflow-y:scroll;
            animation:slide-up 0.6s backwards;
            animation-delay:0.15s;
        }
        li{
            text-align:left;
            padding:0.75rem;
            border-bottom:1px solid rgb(200,200,200,.75);
            list-style:none;
            font-weight:500;
            color:rgba(100,100,100); 
            cursor:pointer;

            &:hover,&:focus{
                background:rgba(169, 217, 236,0.2)
            }
        }

       
        
    }

    .button-wrapper{
    transform:translateY(-100%);
    border-left:5px solid transparent;
        @media only screen and (max-width:600px){
            border-left:none;
            transform:translateY(-100%);
        }
    }

`
export default props=>{
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [transitionProject, setTransitionProject] = useState(projects[1])
    const [transition1, setTransition1] = useState(null);

    const activeListStyle = {
        transition:"0.4s",
        background:"rgba(169, 217, 236,0.5)"
    }
    const inactiveListStyle = {
        transition:"0s",
    }

    const transitioningStyle = {
        opacity:0,
        zIndex:1
    }

    const arrivedStyle = {
        opacity:1,
        zIndex:2
    }
    

    function selectProjectHandler(ind){
        if(transition1){
            if(projects[ind].name == transitionProject.name) return;
            setSelectedProject(projects[ind]);
            setTransition1(false);
        }else{
            if(projects[ind].name == selectedProject.name) return;
            setTransitionProject(projects[ind]);
            setTransition1(true);
        }
    }

    return(
        <PortfolioBar>
            <div className="left">

                <div style={ !transition1 ? arrivedStyle : transitioningStyle } className="left-inner-1">
                    <div>
                     <img loading="lazy" src={selectedProject.image ? "/assets/images/" + selectedProject.image : "/assets/images/" + default_png} alt=""/>
                    </div>
                    
                    <div className="text-container">
                        <a target="_blank" href={selectedProject.link || "#"}>
                        <h2>{selectedProject.name}</h2>
                        </a>
                        <p>
                            {selectedProject.description}
                        </p>
                    </div>
                   
                </div>

                <div style={ transition1 ? arrivedStyle : transitioningStyle } className="left-inner-1">
                    <div>
                     <img loading="lazy" src={transitionProject.image ? "/assets/images/" + transitionProject.image :  "/assets/images/" + default_png} alt=""/>
                    </div>
                    
                    <div className="text-container">
                        <a target="_blank" href={transitionProject.link || "#"}>
                        <h2>{transitionProject.name}</h2>
                        </a>
                        <p>
                            {transitionProject.description}
                        </p>
                    </div>
                  
                </div>

            </div>
            <div className="right">
                
                <h2><i class="fas fa-code"></i> Projects</h2>
                <ul>
                    {projects.map((project,ind)=>(<li 
                    onClick={()=>selectProjectHandler(ind)}

                    style={(project.name == selectedProject.name && !transition1) | 
                    (project.name == transitionProject.name && transition1) ? 
                    activeListStyle : inactiveListStyle}

                    tabIndex={ind}
                    >
                        {project.name}
                    </li>))}

                </ul>
            </div>
            {/* <IconSelector></IconSelector> */}
            <div className="empty-grid-filler"></div>
            
            <div className="button-wrapper">
                <Button onClick={()=>window.location.hash="#contact"} style={{width:"100%"}}>Like my work? Contact me.</Button>
            </div>
            
        </PortfolioBar>
    )
}
