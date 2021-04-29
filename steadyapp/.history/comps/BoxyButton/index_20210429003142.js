import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const BoxyButtonCont = styled.div`
    display: flex;
    position: relative;
`;

const BoxyButtonBackground = styled.button`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgcolor};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: none;
    border-radius: 1rem;
`;

const BoxyButtonImage = styled.div`
    display: ${props=>props.imageappear};
    background-image: url(${props=>props.src});
    width: 8rem;
    height: 8rem;
    background-repeat: no-repeat;
    position: absolute;
    right: 13rem;
    overflow: hidden;
`;

const BoxyButtonText = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 3rem;
    position: absolute;
    left: 8.5rem;
    color: ${props=>props.textcolor};
`;

const BoxyButton = ({
    width = "20rem",
    height = "8.5rem",
    bgcolor = "#F86D34",
    imageappear="flex",
    src="../../vercel.svg",
    text = "Meals",
    textcolor = "#FFF6E0"
}) => {
    return <BoxyButtonCont >
        <BoxyButtonBackground width={width} height={height} bgcolor={bgcolor}>
            <BoxyButtonImage src={src} imageappear={imageappear}></BoxyButtonImage>
            <BoxyButtonText textcolor={textcolor}>{text}</BoxyButtonText>
        </BoxyButtonBackground>
    </BoxyButtonCont>
}

export default BoxyButton;
