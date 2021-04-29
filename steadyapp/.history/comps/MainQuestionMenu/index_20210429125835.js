import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BoxyButton from '../BoxyButton'

const MainQuestionMenuCont = styled.div`
    display: flex;
    flex-direction: column;
    height: 20rem;
    justify-content: space-around;
`;
const MainQuestionMenu = ({
    onMealsClick=()=>{}
}) => {
    return <MainQuestionMenuCont>
        <BoxyButton />
    </MainQuestionMenuCont>
}

export default MainQuestionMenu;