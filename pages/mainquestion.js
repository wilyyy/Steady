import Head from 'next/head';
import styled from 'styled-components';
import Combo from '../comps/HeadingAndParagraph';
import BoxyButton from '../comps/BoxyButton';
import Continue from '../comps/Continue';
import MainQuestionMenu from '../comps/MainQuestionMenu';
import TopBar from '../comps/TopBar';
import NavBar from '../comps/NavBar';
import Button from '../comps/Button';
import {useRouter} from 'next/router';
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

var state = null;
var mealresult = null;
var sleepresult = null;
var exerciseresult = null;

export default function Title(){
    //const [srcOne, setSrcOne] = useState("../../meal_icon_bw.png");
    const [picstate1, setPicState1] = useState(false);
    const [picstate2, setPicState2] = useState(false);
    const [picstate3, setPicstate3] = useState(false);
    const [continuestate, setContinueState] = useState(false);
    const [resultstate, setResultstate] = useState(false);

    const router = useRouter();
    
    useEffect(()=>{
        if(process.browser)
        {
            mealresult = sessionStorage.getItem("mealresult");
            sleepresult = sessionStorage.getItem("sleepresult");
            exerciseresult = sessionStorage.getItem("exerciseresult");

            if(mealresult != null && sleepresult != null && exerciseresult != null)
            {
                setResultstate(true);
            }

        }
    }, []);


    const HandleClick1 = () =>{
        setPicState1(true);
        setPicState2(false);
        setPicstate3(false);
        setContinueState(true);
        state = "meals";
    }
    
    const HandleClick2 = () =>{
        setPicState1(false);
        setPicState2(true);
        setPicstate3(false);
        setContinueState(true);
        state = "sleep";
    }
    
    const HandleClick3 = () =>{
        setPicState1(false);
        setPicState2(false);
        setPicstate3(true);
        setContinueState(true);
        state = "exercise";
    }

    const RouteToPage = () =>{
        if (state === "sleep"){
            router.push("/sleep");
        }
        
        if (state === "meals"){
            router.push("/meals");
        }

        if (state === "exercise"){
            router.push("/exercise");
        }
    }

    const RouteToResults = () =>{
        router.push("/results");
    }

    return <TitleContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <TopBar />
                <h1>Tell Us About...</h1>
                <BoxyButton
                onClick = {HandleClick1}
                text = "Meals"
                bgcolor = {picstate1 ? "#F57C33" : "#E8E0CD"}
                src = {picstate1 ? "/meal_icon.png" : "/meal_icon_bw.png"}
                textcolor = {picstate1 ? "white" : "#131521"} />
                <BoxyButton 
                onClick = {HandleClick2}
                text = "Sleep"
                bgcolor = {picstate2 ? "#F57C33" : "#E8E0CD"}
                src = {picstate2 ? "/sleep.png" : "/sleep_bw.png"}
                textcolor = {picstate2 ? "white" : "#131521"} />
                <BoxyButton 
                text = "Exercise"
                textsize = "2.5rem"
                onClick = {HandleClick3}
                bgcolor = {picstate3 ? "#F57C33" : "#E8E0CD"}
                src = {picstate3 ? "/scale.png" : "/scale_bw.png"}
                textcolor = {picstate3 ? "white" : "#131521"} />
                <Continue onClick = {RouteToPage} 
                bgColor={continuestate ? "#00BF08" : "rgba(232, 224, 205, 0.5)"}
                DivOpacity={continuestate ? "100%" : "50%"}
                />
                <Continue 
                display={resultstate ? "flex" : "none"}
                MainText = "Results!" 
                bgColor = "#00BF08"
                DivOpacity = "100%"
                onClick = {RouteToResults} />
            <NavBar />
        </div>
    </TitleContainer>
}