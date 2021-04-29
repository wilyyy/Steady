import React from 'react'
import styled from 'styled-components'

const SubheaderCont = styled.div`
    flex-direction: column;
    color: ${props=>props.textcolor};
    z-index: 1;
    cursor: context-menu;
`;

const SubheaderText = styled.h3`
    font-family: 'Lexend Deca', sans-serif;
    font-size: ${props=>props.fsize};
    text-align: center;
    margin: 0;
`;

const Subheader = ({
    textcolor = "#FFF4DD",
    quotetext = " “The best time to plant a tree was 20 years ago. The second best time is now.” ",
    undertext = "Chinese Proverb",
    fsize = "1rem"
}) => {
    return <SubheaderCont textcolor={textcolor}>
        <SubheaderText fsize={fsize}>{quotetext}</SubheaderText>
        <SubheaderText fsize={fsize}>{undertext}</SubheaderText>
    </SubheaderCont>
}

export default Subheader;