import React from 'react';
import styled from 'styled-components';

const ButtonCont = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: relative;
`;

const ButtonBackground = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17rem;
    height: 5rem;
    background-color: ${props=>props.bgcolor};
    border-radius: 4rem;
    outline: none;
    border: none;
`;

const ButtonImage = styled.div`
    display: ${props=>props.imageappear};
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
    color: ${props=>props.textcolor};
`;

const Button = ({
    buttontext="Sleep",
    src="../../vercel.svg",
    bgcolor="#E8E0CD",
    textcolor="#000",
    imageappear="none"
}) => {
    return <ButtonCont>
        <ButtonImage src={src} imageappear={imageappear}></ButtonImage>
        <ButtonBackground bgcolor={bgcolor}>
            <ButtonText textcolor={textcolor}>{buttontext}</ButtonText>
        </ButtonBackground>
    </ButtonCont>
    
}

export default Button;