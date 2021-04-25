//code go here
//got it coach

import React from 'react'
import styled from 'styled-components'

const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
`;

const Header = styled.h1`
    font-family: 'Ranchers', cursive;
    color: #FFF4DD;
    font-size: ${props=>props.headsize};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TextSub = styled.h4`
    font-family: 'Oxygen', sans-serif;
    color: #FFF4DD;
    font-size: ${props=>props.textsize};
    margin: 0px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const Combo = ({
    title1="About",
    subtitle1="Let Steady help you find out some causes and remedies to help you get back on track to a happy life ",
    subtitle2="",
    subtitle3="",
    headsize="3rem",
    textsize="1rem"   
}) => {

    return <HeaderText>
                <Header headsize={headsize}>{title1}</Header>
                <Group>
                    <TextSub textsize={textsize}>{subtitle1}</TextSub>
                    <TextSub textsize={textsize}>{subtitle2}</TextSub>
                    <TextSub textsize={textsize}>{subtitle3}</TextSub>
                </Group>
            </HeaderText>
}

export default Combo;
