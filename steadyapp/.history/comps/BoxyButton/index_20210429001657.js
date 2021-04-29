import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const BoxyButtonCont = styled.div`
    display: flex;
    ustify-content: space-evenly;
    position: relative;
`;

const BoxyButtonBackground = styled.button`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgcolor};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 1rem;
`;

const BoxyButtonImage = styled.div`
    display: ${props=>props.imageappear};
    background-image: url(${props=>props.src});
    width: 7rem;
    height: 7rem;
    background-repeat: no-repeat;
    position: absolute;
    right: 16rem;
`;

const BoxyButtonText = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 3rem;
    color: ${props=>props.textcolor};
`;

const BoxyButton = ({
    width = "20rem",
    height = "6rem",
    bgcolor = "#F86D34",
    imageappear="none",
    src="../../vercel.svg",
    text = "Meals",
    textcolor = "#FFF6E0"
}) => {
    return <BoxyButtonCont >
        <BoxyButtonBackground width={width} height={height} bgcolor={bgcolor}>
            <BoxyButtonImage src={src}></BoxyButtonImage>
            <BoxyButtonText textcolor={textcolor}>{text}</BoxyButtonText>
        </BoxyButtonBackground>
    </BoxyButtonCont>
}

export default BoxyButton;
