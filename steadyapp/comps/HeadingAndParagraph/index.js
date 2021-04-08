//code go here
//got it coach

import React from 'react'
import styled from 'styled-components'

const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Header = styled.h1`
    font-family: 'Ranchers', cursive;
    color: #FFF4DD;
    font-size: 3rem;
`

const TextSub = styled.h4`
    font-family: 'Oxygen', sans-serif;
    color: #FFF4DD;
    font-size: 1rem;
    
`


const Combo = ({
    title1="About",
    subtitle1="Let Steady help you find out some causes and remedies to help you get back on track to a happy life ",   
}) => {

    return <HeaderText>
                <Header>{title1}</Header>
                <TextSub>{subtitle1}</TextSub>
            </HeaderText>
}

export default Combo;
