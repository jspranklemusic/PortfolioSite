import styled from 'styled-components';

const StoryItem = styled.div`
    width:100%;
    margin-bottom:1rem;
    padding:1rem;
    
    &:not(:first-child){
        border-top:2px solid rgba(0,0,0,.1);
    }

    & > *{
        margin:0.25rem 0;
    }
    h3{
        font-size:1.25rem;
    }

    h4{
        color:rgba(100,100,100,.7);
        font-weight:400;
        font-size:1.1rem;
    }
    p{
        padding:1rem;
        font-size:1.1rem;
    }
    a{
        color:var(--darkskyblue);
        font-weight:bold;
        text-decoration:none;
        &:hover{
                opacity:0.7;
            }
            &:active{
                opacity:0.4;
            }
    }
`

export default StoryItem;