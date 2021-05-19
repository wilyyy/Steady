import Head from 'next/head';
import styled from 'styled-components';
import Combo from '../comps/HeadingAndParagraph';
import Button from '../comps/Button';
import TopBar from '../comps/TopBar';
import NavBar from '../comps/NavBar';
import {IoIosArrowDropleft, IoIosArrowDropright} from 'react-icons/io';
import { IconContext } from "react-icons";
import React, {useState} from 'react';

const TitleContainer = styled.div`
    background-color: #616BD1;
    margin: 0;
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
    }

    .row {
        display: flex;
        justify-content: left;
        width: 300vw;
        overflow-x: hidden;
        position: relative;
        left: 100%;
        transition: left 1s ease-out;
    }

    .row2 {
        display: flex;
        min-width: 33%;
        justify-content: center;
        position: relative;
    }

    .arrowleft {
        position: fixed;
        top: 50%;
        cursor: pointer;
    }

    .arrowright {
        position: fixed;
        top: 50%;
        cursor: pointer;
    }

    .zupleft {
        z-index: 10;
        min-width: 70px;
        max-width: 70px;
        display: flex;
        justify-content: center;
        position: fixed;
        left: 2%;
        visibility: hidden;
    }

    .zupright {
        z-index: 10;
        min-width: 70px;
        max-width: 70px;
        display: flex;
        justify-content: center;
        position: fixed;
        right: 2%;
    }

    .column2{
        display: flex;
        flex-direction: column;
        width: 60%;
    }
`

export default function Title(){

    var counter = 1;
    function HandleClickRight(){
        var rowtomove = document.querySelector(".row");
        if(counter == 1)
        {
            rowtomove.style.left = "0%";
            counter++
            console.log(counter);
            document.querySelector(".zupleft").style.visibility = "visible";
        }

        else if(counter == 2)
        {
            rowtomove.style.left = "-100%";
            counter++;
            console.log(counter);
            document.querySelector(".zupright").style.visibility = "hidden";
        }
    }

    function HandleClickLeft(){
        var rowtomove = document.querySelector(".row");
        if(counter == 2)
        {
            rowtomove.style.left = "100%";
            counter--;
            console.log(counter);
            document.querySelector(".zupleft").style.visibility = "hidden";
        }

        else if(counter == 3)
        {
            rowtomove.style.left = "0%";
            counter--;
            console.log(counter);
            document.querySelector(".zupright").style.visibility = "visible";
        }
    }

    return <TitleContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <TopBar />
            <div className="row">
                <div className="row2">       
                    <IconContext.Provider value={{ color: "#FFF4DD", className: "arrowleft", size: "70px"}}>
                        <div className="zupleft">
                            <IoIosArrowDropleft onClick={HandleClickLeft} />
                        </div>
                    </IconContext.Provider>    
                    <div className="column2">
                        <Combo headsize="4rem" title1="About" subtitle1="Steady is an application designed for self-reflection and cognitive behavioural therapy." />
                    </div>
                    <IconContext.Provider value={{ color: "#FFF4DD", className: "arrowright", size: "70px"}}>
                        <div className="zupright">
                            <IoIosArrowDropright onClick={HandleClickRight} />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="row2">
                    <div className="column2">
                        <Combo headsize="4rem" title1="Instructions" subtitle1="Simply follow the different prompts and answer the questions as accurately as you can." />
                    </div>
                </div>
                <div className="row2">
                    <div className="column2">
                        <Combo headsize="4rem" title1="Disclaimer" subtitle1="We are not professionals, only trying to help individuals become more aware of their emotions and well being." />
                        <Button buttontext="I Understand" bgcolor= "#F86D34" textcolor="#FFF4DD" bheight="6rem" bwidth="20rem" routeTo="mainquestion" textsize="2rem" margin="30px"/>
                    </div>
                </div>
            </div>
            <NavBar />
        </div>
    </TitleContainer>
}