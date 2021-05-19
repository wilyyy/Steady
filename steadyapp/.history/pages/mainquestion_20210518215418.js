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
import {useRouter} from 'next/router';

var buttontext = {
    text1: "Meals",
    text2: "Sleep",
    text3: "Exercise"
}

const TitleContainer = styled.div`
    background-color: #616BD1;
    font-family: 'Lexend Deca', sans-serif;
    color: #FFF6E0;
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #212872;
        height: 100vh;
        
        position: relative;
        margin: 0 auto;
        overflow: hidden;
        padding: 0px 20px;
    }
`

export default function Title(){

    const router = useRouter();
    //const [srcOne, setSrcOne] = useState("../../meal_icon_bw.png");
    const [picstate1, setPicState1] = useState(false);
    const [picstate2, setPicState2] = useState(false);
    const [picstate3, setPicstate3] = useState(false);

    var state = "";

    const HandleClick1 = () =>{
        setPicState1(true);
        setPicState2(false);
        setPicstate3(false);
        state="meals";
    }

    const HandleClick2 = () =>{
        setPicState1(false);
        setPicState2(true);
        setPicstate3(false);
        state="sleep";
    }

    const HandleClick3 = () =>{
        setPicState1(false);
        setPicState2(false);
        setPicstate3(true);
    }

    // const RouteToPage = () =>{
    //     if
    //     router.push(page);
    // }

    return <TitleContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <TopBar />
                <h1>Tell Us About...</h1>
                <BoxyButton
                onClick = {HandleClick1}
                text = {buttontext.text1}
                bgcolor = {picstate1 ? "#F57C33" : "#E8E0CD"}
                src = {picstate1 ? "/meal_icon.png" : "/meal_icon_bw.png"}
                textcolor = {picstate1 ? "white" : "#131521"} />
                <BoxyButton 
                onClick = {HandleClick2}
                text = {buttontext.text2}
                bgcolor = {picstate2 ? "#F57C33" : "#E8E0CD"}
                src = {picstate2 ? "/sleep.png" : "/sleep_bw.png"}
                textcolor = {picstate2 ? "white" : "#131521"} />
                <BoxyButton 
                text = {buttontext.text3}
                textsize = "2.5rem"
                onClick = {HandleClick3}
                bgcolor = {picstate3 ? "#F57C33" : "#E8E0CD"}
                src = {picstate3 ? "/scale.png" : "/scale_bw.png"}
                textcolor = {picstate3 ? "white" : "#131521"} />
                <Button bheight="6rem" bwidth="20rem" routeTo="/"/>
            <NavBar />
        </div>
    </TitleContainer>
}