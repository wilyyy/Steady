import Head from 'next/head';
import styled from 'styled-components';
import Logo from '../comps/Logo';
import Subheader from '../comps/Subheader';
import Button from '../comps/Button';
import Background from '../comps/BackgroundImage';
import {useRouter, useState, useEffect} from 'react';

const TitleContainer = styled.div`
    background-color: #FA956B;
    overflow: hidden;
    @keyframes fadein {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }
    }

    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: radial-gradient(50% 35% at 50% 17%, #EBFF00 0%, rgba(255, 255, 255, 0) 100%), #F86D34;
        height: 100vh;
        position: relative;
        margin: 0 auto;
        overflow: hidden;
        padding: 20px;
    }

    .fade {
        animation-name: fadein;
        animation-duration: 1s;
        z-index: 5;
    }

    .fade2 {
        animation-name: fadein;
        animation-duration: 2s;
        animation-delay: 1s;
        z-index: 5;
        opacity: 0%;
        animation-fill-mode: forwards;
        position: relative;
        bottom: 40px;
    }

    .fade3 {
        animation-name: fadein;
        animation-duration: 1s;
        animation-delay: 4s;
        z-index: 5;
        opacity: 0%;
        animation-fill-mode: forwards;
    }

    @keyframes backnforth {
        0% {
            transform: translate(-300px, 0px);
        }
        100% {
            transform: translate(-260px, 0px);
        }
    }

    .waves {
        animation-name: backnforth;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
        position: absolute;
        bottom: 0px;
    }
`

export default function Title(){
    
    return <TitleContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <div className="fade">
                <Logo width="300px" src="/ver_variant3.png" />
            </div>
            <div className="fade2">
                <Subheader quotetext="Let Steady help you find out some causes and remedies to help you get back on track to a happy life" undertext="" fsize="2rem" />
            </div>
            <div className="fade3">
                <Continue />
                <Button 
                    buttontext="Let's Begin" 
                    bgcolor= "#3A6FF9" 
                    textcolor="#FFF4DD" 
                    routeTo="/about" />
            </div>
            <div className="waves">
                <Background source="/waves.svg" width="1000px" bottom= "-850px" filter= "invert(10%) sepia(51%) saturate(6943%) hue-rotate(246deg) brightness(82%) contrast(106%)" />
                <Background source="/waves.svg" width="1000px" bottom= "-950px" filter="invert(15%) sepia(19%) saturate(7472%) hue-rotate(234deg) brightness(76%) contrast(110%)" />
                <Background source="/waves.svg" width="1000px" bottom= "-1050px" filter="invert(6%) sepia(64%) saturate(2564%) hue-rotate(241deg) brightness(92%) contrast(94%)" />
            </div>
        </div>
    </TitleContainer>
}