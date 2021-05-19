import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const PlusCardCont = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    
`;

const PlusCardBackground = styled.button`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgcolor};
    display: flex;
    flex-direction: column;
`;

const PlusCardImage = styled.div`
    display: flex;
    background-image: url(${props=>props.src});
    width: 11rem;
    height: 8rem;
    object-fit: contain;
    background-repeat: no-repeat;
    position: absolute;
    right: 13rem;
`;
const PlusCardInfo = styled.div`
    display: flex;
    
`;
const PlusCardText = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-size: ${props=>props.textsize};
    position: absolute;
    left: 8.5rem;
    color: ${props=>props.textcolor};
`;
const PlusCardPlus = styled.h1`'
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    right: 3rem;
`

const PlusCard = ({
    width = "22.5rem",
    // height = "6rem",
    bgcolor = "#F86D34",
    // imageappear="flex",
    onClick=()=>{},
    src="../../vercel.svg",
    text = "Meals",
    textcolor = "#FFF6E0",
    textsize = "3rem"
}) => {
    const [open, setOpen] = useState(false);


    var height = "5rem";
    var top = "";
    if(open){
        height = "20rem";
    }

    return <PlusCardCont onClick={onClick}>
        <PlusCardBackground 
        width={width} 
        height={height} 
        bgcolor={bgcolor}
        onClick = {()=>setOpen(!open)}>
            <PlusCardImage src={src} ></PlusCardImage>
            <PlusCardText 
            textcolor={textcolor}
            textsize = {textsize}>
                {text} +
            </PlusCardText>
            <PlusCardInfo>
            You’re eating the right amount of meals. Keep it up!
Make sure to also keep your meals balanced with fruits, vegetables, wheat, dairy, and protein!
You could even start planning out your meals to make sure you’re getting the right amount.
            </PlusCardInfo>
        </PlusCardBackground>
    </PlusCardCont>
}

export default PlusCard;