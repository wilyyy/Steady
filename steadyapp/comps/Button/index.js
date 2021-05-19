import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: relative;
    z-index: 3;
    cursor: pointer;
    margin: ${props=>props.margin};
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
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
`;

const ButtonImage = styled.div`
    display: ${props=>props.imageappear};
    background-image: url(${props=>props.src});
    width: 7rem;
    height: 7rem;
    background-repeat: no-repeat;
    object-fit: cover;
    position: absolute;
    right: 16rem;
    bottom: 0.5rem;
`;

const ButtonText = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-size: ${props=>props.textsize};
    color: ${props=>props.textcolor};
`;

const Button = ({
    buttontext="Sleep",
    src="../../vercel.svg",
    bgcolor="#E8E0CD",
    textcolor="#000",
    textsize = "3rem",
    imageappear="none",
    bwidth="20rem",
    bheight="7rem",
    routeTo="/title",
    margin="50px"
}) => {
    const router = useRouter();
    return <ButtonCont onClick={()=>router.push(routeTo)} margin={margin}>
        <ButtonImage src={src} imageappear={imageappear}></ButtonImage>
        <ButtonBackground bgcolor={bgcolor} buttonwidth={bwidth} buttonheight={bheight}>
            <ButtonText textcolor={textcolor} textsize={textsize}>{buttontext}</ButtonText>
        </ButtonBackground>
    </ButtonCont>
    
}

export default Button;