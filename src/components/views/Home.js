import React from 'react'
import styled from 'styled-components'
import Button from '../jsx/Button'

const Div = styled.div`
    display:grid;
    grid-template-columns:50% 50%;
    grid-auto-rows:100%;
    width:100%;
    animation:fade-basic 0.6s backwards;
    animation-delay:0.15s;
    height:auto;
    margin-bottom:2rem;
    

    .image-wrapper{
            width:35vw;
            height:35vw;
            max-height:450px;
            max-width:450px;
            border-radius:50%;
            overflow:hidden;
            display:flex;
            align-items:center;
            margin:1rem auto;
            justify-content:center;
        }

        img{
            width:170%;
            height:170%;
            margin-top:25%;
            object-fit:cover;
            filter:grayscale(100%) contrast(1.2);

            
        }

    @media only screen and (max-width:600px){
        grid-template-columns:100%;
    }

    
    .left{
        background:white;
        border-radius:10px;
        padding:1rem;
        animation:slide-left 0.6s backwards;
        animation-delay:0.25s;
        height:auto;
        
        

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
        button{
            background:var(--darkskyblue);
            padding:1rem 2rem;
            margin:1rem auto;
            font-size:1rem;
            border:none;
            color:white;
            font-weight:500;
            border-radius:5px;
            transition:0.3s;
            cursor:pointer;

            &:hover{
                background:rgb(22, 120, 159);
            }
            &:active{
                background:rgb(22, 120, 159,.5);
            }
        }
        
    }
    .right{
        overflow:hidden;
        /* background:linear-gradient(rgba(60,60,60,1),rgba(0,0,0,1)); */
        display:flex;
        align-items:center;
        justify-content:center;
        animation:slide-right 0.6s backwards;
        animation-delay:0.25s;
            @media only screen and (max-width:600px){
            display:none;
        }

       
    }
`


const Home = props=>{

    const goToPage = ()=>{
        window.location.hash="#testimonials"
    }

    return(
        <Div>
            <div className="left">
                 <h1>Josiah Sprankle</h1>
                 <h3>Web Developer</h3>
                 <div className="image-wrapper mobile-only-flex">
                      <img src="/assets/images/profile-takenbyannie.jpg" alt=""/>
                </div>
                 <p>
                 My name is Josiah, and I am a freelance web developer with a passion for bringing new projects to life! I enjoy coding because it combines creativity and problem-solving. I have completed a diverse set of websites &amp; projects, ranging from small portfolio pages and band/musician websites to fully-fledged full stack applications with a user login and email system, and real-time chat.
                 </p>
                 <p>
                 I specialize in MEVN or MERN fullstack Javascript development (MongoDB, Express, Vue/React, and Node.js), but I have worked with other tools such as SQL, Python, Flask, C++, and PHP. In addition to coding, I am also a classically-trained pianist and composer with a Bachelor of Music from the University of Missouri, Kansas City. If you're interested, you can check out my <a href="https://josiahspranklemusic.com/app/">music site</a> or my <a href="https://www.youtube.com/user/Kopaka0111/videos">YouTube</a> page. I'm also a husband to a beautiful wife and father to a happy son.
                 </p>
                 <br/>
                 <Button onClick={goToPage}>What Others Say About Me</Button>
            </div>
            <div className="right">
                    <div className="image-wrapper">
                      <img src="/assets/images/profile-takenbyannie.jpg" alt=""/>
                    </div>
                  
            </div>
            
           
        </Div>
        
    )
}

export default Home