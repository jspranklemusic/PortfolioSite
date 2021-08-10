import React from 'react'
import styled from 'styled-components'
import Button from '../jsx/Button'
import StoryItem from '../custom/StoryItem'
import stories from '../../data/stories.json'


const Div = styled.div`
    width:100%;
    height:auto;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-auto-rows:100%;
    column-gap:2rem;
    row-gap:1rem;
    justify-content:center;

    @media only screen and (max-width:600px){
        grid-template-columns:100%;
        grid-template-rows:auto;
    }
    
    .left{
        
        border-radius:10px;
        padding:1rem;
        // animation:slide-left 0.6s backwards;
        // animation-delay:0.25s;
        

        h1{
            font-size:3rem;
        }
        h3{
            font-weight:100;
            font-size:1.75rem;
            opacity:0.5;
        }
        p{
            padding:1rem;
            line-height:1.5rem;
            text-align:left;
            text-indent:2rem;
        }
        
    }
    .right{
        overflow:hidden;
        background:white;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start;
        // animation:slide-right 0.6s backwards;
        // animation-delay:0.25s;
        border-radius:10px;
        overflow-y:scroll;
        overflow-x:hidden;
        width:100%;
        
        @media only screen and (max-width:600px){
            order:2;
        }
    
        img{
           width:100px;
           border-radius:50%;
           height:100px;
           object-fit:cover;
        }
    }
`


const Testimonials = props=>{

    const imageFade = ()=>{
        document.querySelectorAll('image').forEach(image=>{
            image.style = "animation:fade-basic 1s backwards;"
        })
    }

    return(
        <Div className="fade-basic">
           
            <div className="right">
                {stories.map(story=>(
                    <StoryItem>
                        <h3>{story.name}</h3>
                        <h4>{story.project}</h4>
                        <img loading="lazy" onLoad={imageFade} src={"/assets/images/"+story.image} alt=""/>
                        <p>{story.story}</p>
                        <a rel="noreferrer" target="_blank" href={story.link}>View Project</a>
                        
                    </StoryItem>
                ))}
            </div>

            <div className="left">
                 <h1>Testimonials</h1>
                 <h3>See what others are saying</h3>
                 
               
                 <br/>
                 <Button onClick={()=>window.location.hash="#portfolio"}>View My Portfolio</Button>
            </div>
            
           
        </Div>
        
    )
}

export default Testimonials