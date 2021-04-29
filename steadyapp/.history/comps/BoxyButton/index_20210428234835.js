import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const BoxyButtonCont = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgcolor};
`;

const BoxyButtonText = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 3rem;
    color: ${props=>props.textcolor};
`;

const BoxyButton = ({
    width = "20rem",
    height = "6rem",
    text = "Meals",
    textcolor: "#FFF6E0"
}) => {
    return <BoxyButtonCont width={width} height={height}>
        <BoxyButtonText>{text}</BoxyButtonText>
    </BoxyButtonCont>
}