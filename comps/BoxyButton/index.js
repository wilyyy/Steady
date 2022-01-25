import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const BoxyButtonCont = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
`;

const BoxyButtonBackground = styled.button`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgcolor};
    display: flex;
    align-items: center;
    justify-content: ${props=>props.layout};
    border: none;
    transition: background-color 1s;
    cursor: pointer;
    overflow: hidden;
`;

const BoxyButtonImage = styled.img`
    display: flex;
    background-image: url(${props=>props.src});
    width: 8rem;
    height: 8rem;
    background-repeat: no-repeat;
    position: absolute;
    right: 13rem;
    transition: background-image 1s;
    display: ${props=>props.display};
    overflow: hidden;
    
`;

const BoxyButtonText = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-size: ${props=>props.textsize};
    position: ${props=>props.position};
    left: ${props=>props.left};
    color: ${props=>props.textcolor};
    transition: color 1s;
`;

const BoxyButton = ({
    width = "20rem",
    height = "5rem",
    // bgcolor = "#F86D34",
    display="inline",
    onClick=()=>{},
    src="meal_icon.png",
    text = "Meals",
    textcolor = "#FFF6E0",
    textsize = "3rem",
    bgcolor = "gray",
    left = "8.5rem",
    layout = "space-evenly",
    position = "absolute"
}) => {
    return <BoxyButtonCont onClick={onClick}>
        <BoxyButtonBackground 
        width={width} 
        height={height} 
        bgcolor={bgcolor}
        onClick = {onClick}
        layout = {layout}>
            <BoxyButtonImage src={src} display={display}></BoxyButtonImage>
            <BoxyButtonText 
            textcolor={textcolor}
            textsize = {textsize}
            left = {left}
            position = {position}>
                {text}
            </BoxyButtonText>
        </BoxyButtonBackground>
    </BoxyButtonCont>
}

export default BoxyButton;
