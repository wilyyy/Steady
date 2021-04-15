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
    textcolor = "#FFF4DD"
}) => {
    return <SubheaderCont>
        <SubheaderText>“The best time to plant a tree was 20 years ago. The second best time is now.”</SubheaderText>
        <SubheaderText>Chinese Proverb</SubheaderText>
    </SubheaderCont>
}

export default Subheader;