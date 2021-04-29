import React, {useState} from 'react';
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
    display: flex;
    background-image: url(${props=>props.src});
    width: 8rem;
    height: 8rem;
    background-repeat: no-repeat;
    position: absolute;
    right: 13rem;
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
    // bgcolor = "#F86D34",
    // imageappear="flex",
    src="../../vercel.svg",
    text = "Meals",
    textcolor = "#FFF6E0",
    routeTo="/"
}) => {
    const [open, setOpen] = useState(false);

    var bgcolor = "#E8E0CD", 
    if(open){
        bgcolor = "#F86D34";
        
    }

    return <BoxyButtonCont onClick = {()=>setOpen(!open)}>
        <BoxyButtonBackground width={width} height={height} bgcolor={bgcolor}>
            <BoxyButtonImage src={src} imageappear={imageappear}></BoxyButtonImage>
            <BoxyButtonText textcolor={textcolor}>{text}</BoxyButtonText>
        </BoxyButtonBackground>
    </BoxyButtonCont>
}

export default BoxyButton;
