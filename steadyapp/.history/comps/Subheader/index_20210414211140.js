import React from 'react'
import styled from 'styled-components'

const SubheaderCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${props=>props.textcolor};
`;

const SubheaderText = styled.h3`
    font-family: 'Lexend Deca', sans-serif;
`;

const Subheader = ({
    textcolor = "#FFF4DD",
    quotetext = " “The best time to plant a tree was 20 years ago. The second best time is now.” ",
    undertext = "Chinese Proverb"
}) => {
    return <SubheaderCont textcolor={textcolor}>
        <SubheaderText>{quotetext}</SubheaderText>
        <SubheaderText>Chinese Proverb</SubheaderText>
    </SubheaderCont>
}

export default Subheader;