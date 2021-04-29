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
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #212872;
        height: 100vh;
        max-width: 600px;
        position: relative;
        margin: 0 auto;
        overflow: hidden;
        padding: 0px 20px;
    }

    .row {
        display: flex;
        width: 100%;
        overflow-x: hidden;
    }

    .row2 {
        display: flex;
        width: 80%;
        position: relative;
        transition: left 1s linear;
        left: 0px;
    }

    .arrowleft {
        position: relative;
        top: 200px;
    }

    .arrowright {
        position: fixed;
        bottom: 500px;
        left: 440px;
    }

    .zup {
        z-index: 10;
    }
`

export default function Title(){
    var counter = 0;
    function HandleClickRight(){
            var rowtomove = document.querySelector(".row2");
            if(rowtomove.style.left == "")
            {
                rowtomove.style.left = "0px";
                rowtomove.style.left = parseInt(rowtomove.style.left) - 495 + "px";
                counter++
                console.log(counter);
            }
            else if(counter >= 0 && counter < 2)
            {
                rowtomove.style.left = parseInt(rowtomove.style.left) - 495 + "px";
                counter++
                console.log(counter);
            }
    }

    function HandleClickLeft(){
        var rowtomove = document.querySelector(".row2");
        if(counter > 0 && counter < 3)
        {
            rowtomove.style.left = parseInt(rowtomove.style.left) + 495 + "px";
            counter--;
            console.log(counter);
        }
}

    return <TitleContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <TopBar />
            <div className="row">
                <IconContext.Provider value={{ color: "#FFF4DD", className: "arrowleft", size: "3em"}}>
                    <div className="zup">
                        <IoIosArrowDropleft onClick={HandleClickLeft} />
                    </div>
                </IconContext.Provider>           
                <div className="row2">
                    <Combo headsize="4rem" title1="Disclaimer" subtitle1="We are not professionals, only trying to help individuals become more aware of their emotions and well being!" />
                    <Combo headsize="4rem" title1="Disclaimer" subtitle1="We are not professionals, only trying to help individuals become more aware of their emotions and well being!" />
                    <Combo headsize="4rem" title1="Disclaimer" subtitle1="We are not professionals, only trying to help individuals become more aware of their emotions and well being!" />
                </div>
                <IconContext.Provider value={{ color: "#FFF4DD", className: "arrowleft", size: "3em"}}>
                    <div className="zup">
                        <IoIosArrowDropright onClick={HandleClickRight} />
                    </div>
                </IconContext.Provider>
            </div>
            <Button buttontext="I Understand" bgcolor= "#F86D34" textcolor="#FFF4DD" bheight="6rem" bwidth="20rem" routeTo="mainquestion" textsize="2rem" />
            <NavBar />
        </div>
    </TitleContainer>
}