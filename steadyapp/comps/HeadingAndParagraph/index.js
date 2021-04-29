//code go here
//got it coach

import React from 'react'
import styled from 'styled-components'

const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 2;
    text-align: center;
    align-items: center;
    min-width: 100%;
    margin: 0px 20px;
`;

const Header = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    color: #FFF4DD;
    font-size: ${props=>props.headsize};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0;
`;

const TextSub = styled.h4`
    font-family: 'Oxygen', sans-serif;
    color: #FFF4DD;
    font-size: ${props=>props.textsize};
    margin: 0px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    font-weight: 300;
`;

const Picture = styled.img`
    width: ${props=>props.width};
    height: auto;
    object-fit: contain;
`;

const Combo = ({
    title1="About",
    subtitle1="Let Steady help you find out some causes and remedies to help you get back on track to a happy life ",
    headsize="3rem",
    textsize="1rem",
    width="200px",
    src="/logo.png"
}) => {

    return <HeaderText>
                <Header headsize={headsize}>{title1}</Header>
                <Picture width={width} src={src} />
                <TextSub textsize={textsize}>{subtitle1}</TextSub>
            </HeaderText>
}

export default Combo;
