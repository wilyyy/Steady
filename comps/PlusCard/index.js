import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const PlusCardCont = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 1rem; 
`;

const PlusCardRow = styled.div`
    display: flex;
    justify-content: space-between;
`

const PlusCardBackground = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgcolor};
    transition: background-color 1s;
    display: flex;
    flex-direction: column;
    transition: height 1s ease-out, background-color 1s ease-out;
`;

const PlusCardImage = styled.div`
    background-image: url(${props=>props.src});
    width: 11rem;
    height: 8rem;
    background-repeat: no-repeat;
    position: relative;
    top: -1rem;
    left: -1rem;
`;
const PlusCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    position: relative;
    font-size: 0.9rem;
    
`;
const PlusCardText = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    position: relative; 
    top: 0.5rem;
    left: -5rem;
    font-size: ${props=>props.textsize};
    color: ${props=>props.textcolor};
    margin: 0;
    text-align: center;
    transition: color 1s ease-out;
    user-select: none;
`;

const PlusOrMinus = styled. p`
    font-family: 'Lexend Deca', sans-serif;
    position: relative; 
    top: 0.5rem;
    font-size: ${props=>props.textsize2};
    color: ${props=>props.textcolor2};
    margin: 0;
    text-align: center;
    left: -1rem;
    transition: color 1s ease-out;
    user-select: none;
`

const PlusCard = ({
    width = "22.5rem",
    height = "5rem",
    bgcolor = "#F86D34",
    // imageappear="flex",
    onClick=()=>{},
    src="../../vercel.svg",
    text = "Meals",
    sign = "+",
    textcolor = "#FFF6E0",
    textsize = "3rem",
    textcolor2 = "#FFF6E0",
    textsize2 = "3rem",
    bodytext = "",
    bodytext2 = "",
    bodytext3 = "",
    bodytext4 = ""
}) => {

    return <PlusCardCont onClick={onClick}>
        <PlusCardBackground 
        width={width} 
        height={height} 
        bgcolor={bgcolor}
        onClick = {onClick}>
            <PlusCardRow>
                <PlusCardImage src={src} />
                <PlusCardText 
                textcolor={textcolor}
                textsize = {textsize}>
                    {text}
                </PlusCardText>
                <PlusOrMinus
                textcolor2={textcolor2}
                textsize2={textsize2}>
                    {sign}
                </PlusOrMinus>
            </PlusCardRow>
            <PlusCardInfo>
                {bodytext}
                <p/>
                {bodytext2}
                <p/>
                {bodytext3}
                <p/>
                {bodytext4}
            </PlusCardInfo>
        </PlusCardBackground>
    </PlusCardCont>
}

export default PlusCard;