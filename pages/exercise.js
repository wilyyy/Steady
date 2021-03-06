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
import { useRouter } from 'next/router';

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

var result = null;

export default function Title(){
    
    const router = useRouter();
    //const [srcOne, setSrcOne] = useState("../../meal_icon_bw.png");
    const [picstate1, setPicState1] = useState(false);
    const [picstate2, setPicState2] = useState(false);
    const [picstate3, setPicstate3] = useState(false);
    const [continuestate, setContinueState] = useState(false);
    
    const HandleClick1 = (text) =>{
        setPicState1(true);
        setPicState2(false);
        setPicstate3(false);
        setContinueState(true);
        result = text;
    }
    
    const HandleClick2 = (text) =>{
        setPicState1(false);
        setPicState2(true);
        setPicstate3(false);
        setContinueState(true);
        result = text;
    }
    
    const HandleClick3 = (text) =>{
        setPicState1(false);
        setPicState2(false);
        setPicstate3(true);
        setContinueState(true);
        result = text;
    }
    
    const HandleEnd = () => {
        sessionStorage.setItem("exerciseresult", result);
        router.push("/mainquestion");
    }
    
    return <TitleContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <TopBar />
            <Combo src="/scale.png" subtitle1="" title1="How often do you exercise per week?" width="150px"/>
            <BoxyButton display="none" layout="center" position="static" text="<5 Hours" onClick={()=>HandleClick1("TooLittle")}
            bgcolor={picstate1 ? "#F57C33" : "#E8E0CD"}
            textcolor = {picstate1 ? "white" : "#131521"} />
            <BoxyButton display="none" layout="center" position="static" text="5-12 Hours" onClick={()=>HandleClick2("Perfect")}
            bgcolor={picstate2 ? "#F57C33" : "#E8E0CD"}
            textcolor = {picstate2 ? "white" : "#131521"} />
            <BoxyButton display="none" layout="center" position="static" text="12+ Hours" onClick={()=>HandleClick3("TooMuch")}
            bgcolor={picstate3 ? "#F57C33" : "#E8E0CD"}
            textcolor = {picstate3 ? "white" : "#131521"} />
            <Continue 
            bgColor={continuestate ? "#00BF08" : "rgba(232, 224, 205, 0.5)"}
            DivOpacity={continuestate ? "100%" : "50%"}
            onClick={HandleEnd} />
            <NavBar />
        </div>
    </TitleContainer>
}