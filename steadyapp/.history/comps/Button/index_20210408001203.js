import React from 'react';
import styled from 'styled-components';

const ButtonCont = styled.div`
    display: flex;
`;

const ButtonBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17rem;
    height: 5rem;
    background-color: #F86D34;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 3rem;
    color: #FFF4DD;
    border-radius: 4rem;
`;

const ButtonImage = styled.div`
    width: 20rem;
    height: 20rem;
    background-image: url("paper.gif");
`;

const Button = ({}) => {
    return <ButtonCont>
        <ButtonBackground>
            <img src="../../favicon.ico"></img>
            Text
        </ButtonBackground>
    </ButtonCont>
    
}

export default Button;