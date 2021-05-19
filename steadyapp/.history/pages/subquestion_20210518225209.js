import Head from 'next/head';
import styled from 'styled-components';
import Combo from '../comps/HeadingAndParagraph';
import BoxyButton from '../comps/BoxyButton';
import MainQuestionMenu from '../comps/MainQuestionMenu';
import TopBar from '../comps/TopBar';
import NavBar from '../comps/NavBar';
import Button from '../comps/Button';
import Continue from '../comps/Continue';
// import {IoIosArrowDropleft, IoIosArrowDropright} from 'react-icons/io';
// import { IconContext } from "react-icons";
import React, {useState, useEffect} from 'react';

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

const SubquestionQuestion = {
    mealsQ: "How much do you eat?",
    sleepQ: "How many hours of sleep do you get?",
    exerciseQ: "How much do you exercise?"
}

export default function Title(){

    const [text, setText] = useState(null);
    //const [srcOne, setSrcOne] = useState("../../meal_icon_bw.png");
    const [picstate1, setPicState1] = useState(false);
    const [picstate2, setPicState2] = useState(false);
    const [picstate3, setPicstate3] = useState(false);
    const [continuestate, setContinueState] = useState(false);
    
    const router = useRouter();

    useEffect(()=>{
        if(process.browser){
            var buttontext = sessionStorage.getItem("buttontext");
            var buttontextJSON = JSON.parse(buttontext);
            if(buttontextJSON.text1 === )
        }
    }, []);

    const HandleClick1 = () =>{
        setPicState1(true);
        setPicState2(false);
        setPicstate3(false);
        setContinueState(true);

    }

    const HandleClick2 = () =>{
        setPicState1(false);
        setPicState2(true);
        setPicstate3(false);
        setContinueState(true);
    }

    const HandleClick3 = () =>{
        setPicState1(false);
        setPicState2(false);
        setPicstate3(true);
        setContinueState(true);
    }

    return <TitleContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        
        <div className="column">
            <TopBar />
            <Combo src="/sleep.png" subtitle1="" title1="How much did you sleep last night?" width="150px"/>
            <BoxyButton display="none" layout="center" position="static" text="<7 Hours" onClick={HandleClick1}
            bgcolor={picstate1 ? "#F57C33" : "#E8E0CD"}
            textcolor = {picstate1 ? "white" : "#131521"} />
            <BoxyButton display="none" layout="center" position="static" text="7-9 Hours" onClick={HandleClick2}
            bgcolor={picstate2 ? "#F57C33" : "#E8E0CD"}
            textcolor = {picstate2 ? "white" : "#131521"} />
            <BoxyButton display="none" layout="center" position="static" text="9+ Hours" onClick={HandleClick3}
            bgcolor={picstate3 ? "#F57C33" : "#E8E0CD"}
            textcolor = {picstate3 ? "white" : "#131521"} />
            <Continue 
            bgColor={continuestate ? "#00BF08" : "rgba(232, 224, 205, 0.5)"}
            DivOpacity={continuestate ? "100%" : "50%"} />
            <NavBar />
        </div>
    </TitleContainer>
}