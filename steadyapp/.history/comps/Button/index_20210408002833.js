import React from 'react';
import styled from 'styled-components';

const ButtonCont = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const ButtonBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17rem;
    height: 5rem;
    background-color: #F86D34;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 3rem;
    color: #FFF4DD;
    border-radius: 4rem;
`;

const ButtonImage = style.div`
    background-image: url("../../vercel.svg");
`;


const Button = ({}) => {
    return <ButtonCont>
        <ButtonImage></ButtonImage>
        <ButtonBackground>
            Text
        </ButtonBackground>
    </ButtonCont>
    
}

export default Button;