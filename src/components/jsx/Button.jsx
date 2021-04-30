import styled from 'styled-components'

const Button = styled.button`
    background:var(--darkskyblue);
    padding:1rem 2rem;
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
`

export default Button