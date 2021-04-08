import React from 'react';
import styled from 'styled-components';

const ButtonCont = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: relative;
`;

const ButtonBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17rem;
    height: 5rem;
    background-color: ${props=>props.bgcolor};
`;

const ButtonImage = styled.div`
    background-image: url(${props=>props.src});
    width: 7rem;
    height: 7rem;
    background-repeat: no-repeat;
    object-fit: cover;
    position: absolute;
    right: 14rem;
`;

const ButtonText = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 3rem;
    color: #FFF4DD;
    border-radius: 4rem;
`;


const Button = ({
    buttontext="Sleep",
    src="../../vercel.svg"
}) => {
    return <ButtonCont>
        <ButtonImage src={src}></ButtonImage>
        <ButtonBackground bgcolor={bgcolor}>
            <ButtonText>{buttontext}</ButtonText>
        </ButtonBackground>
    </ButtonCont>
    
}

export default Button;