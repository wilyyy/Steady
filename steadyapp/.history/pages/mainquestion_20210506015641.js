import Head from 'next/head';
import styled from 'styled-components';
import Combo from '../comps/HeadingAndParagraph';
import BoxyButton from '../comps/BoxyButton';
import MainQuestionMenu from '../comps/MainQuestionMenu';
import TopBar from '../comps/TopBar';
import NavBar from '../comps/NavBar';
import Button from '../comps/Button';
// import {IoIosArrowDropleft, IoIosArrowDropright} from 'react-icons/io';
// import { IconContext } from "react-icons";
import React, {useState} from 'react';

const TitleContainer = styled.div`
    background-color: #616BD1;
    font-family: 'Lexend Deca', sans-serif;
    color: #FFF6E0;
    .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #212872;
        height: 100vh;
        max-width: 600px;
        position: relative;
        margin: 0 auto;
        overflow: hidden;
        padding: 0px 20px;
    }
`

export default function Title(){
    const [srcOne, setSrcOne] = useState("../../meal_icon_bw.png");

    const HandleMeals = () =>{
        setSrcOne("meal_icon.png")
    }

    return <TitleContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <TopBar />
                <h1>Tell Us About...</h1>
                <MainQuestionMenu onMealsClick={HandleMeals} src={srcOne}/>
                <Button bheight="6rem" bwidth="20rem" routeTo="/"/>
            <NavBar />
        </div>
    </TitleContainer>
}