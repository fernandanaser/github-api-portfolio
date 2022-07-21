import styled from 'styled-components';
import background from './background.jpg'

export const AboutContainer = styled.div`
    height: 70vh;
    diplay: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    text-align: center;

    h2{
        text-transform: uppercase;
        font-size: 1.2rem;
        color: #fff;
        margin: 0;
        margin-top: 1rem;
    }

    h1{
        text-transform: uppercase;
        font-size: 2rem;
        color: #c73897;
        margin-bottom: 1rem;
    }

    p{
        font-size: 1rem;
        color: #fff;
        margin-bottom: 1rem;
    }

    button{
        width: 100%;
        display: flex;
        justify-content: end;
        background-color: transparent;
        border: none;
    
        a, button{
            max-width: 150px;
            width: 100%;
            border: solid 1px #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            background-color: #c73897;
            border-radius: 42px;
            font-size: 1em;
            padding: 12px 15px;
            margin-bottom: 1em;
            margin-top: 2rem;
            transition-duration: 1s;
            cursor: pointer;
            text-decoration: none;
    
            &:hover{
                border:solid 1px #fff;
                background-color: transparent;
                color: #c73897;
        }
    }
`;