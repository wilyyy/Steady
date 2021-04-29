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
        <BoxyButton src="../../meal_icon_bw.png"/>
        <BoxyButton src="../../meal_icon_bw.png"/>
        <BoxyButton src="../../meal_icon_bw.png"/>

    </MainQuestionMenuCont>
}

export default MainQuestionMenu;