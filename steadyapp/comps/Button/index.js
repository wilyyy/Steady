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
    width: ${props=>props.buttonwidth};
    height: ${props=>props.buttonheight};
    background-color: ${props=>props.bgcolor};
    border-radius: 4rem;
    outline: none;
    border: none;
    box-shadow: 3px 4px 4px 4px rgba(0, 0, 0, 0.25);
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
    imageappear="none",
    bwidth="20rem",
    bheight="7rem"
}) => {
    return <ButtonCont>
        <ButtonImage src={src} imageappear={imageappear}></ButtonImage>
        <ButtonBackground bgcolor={bgcolor} buttonwidth={bwidth} buttonheight={bheight}>
            <ButtonText textcolor={textcolor}>{buttontext}</ButtonText>
        </ButtonBackground>
    </ButtonCont>
    
}

export default Button;