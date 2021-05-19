import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const MainDiv = styled.div`
    display:flex;
    justify-content: space-around;
    flex-direction:column;
    background: ${props=>props.bg};
    box-shadow: 3px 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 100px;
    opacity: ${props=>props.opacityDiv};
    transition: opacity 1s;
    height: 125px;
    width: 315px;
    border: ${props=>props.Mainborder};
    cursor: pointer;
`;

const Text = styled.h3`
    font-family: Lexend Deca;
    color: ${props=>props.textColor};
    font-size: ${props=>props.FontSize};
    text-align: center;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
`

const Continue = ({
    FSize = "45px",
    TColor = "#FFF",
    MainText = "Continue ...",
    bgColor = "rgba(232, 224, 205, 0.5)",
    borderMain = "0px solid #000000",
    DivOpacity = "50%",
    routeTo = "/title"
}) => {
    const router = useRouter();
    return <MainDiv onClick={()=>router.push(routeTo)} bg={bgColor} Mainborder={borderMain} opacityDiv={DivOpacity}>
        <Text textColor={TColor} FontSize={FSize}> 
            {MainText}
        </Text>
    </MainDiv>  
}

export default Continue;