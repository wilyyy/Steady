import Head from 'next/head';
import styled from 'styled-components';
import Logo from '../comps/Logo';
import Subheader from '../comps/Subheader';
import Button from '../comps/Button';
import Background from '../comps/BackgroundImage';

const TitleContainer = styled.div`
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: radial-gradient(50% 35% at 50% 17%, #EBFF00 0%, rgba(255, 255, 255, 0) 100%), #F86D34;
        height: 100vh;
        max-width: 600px;
        position: relative;
        margin: 0 auto;
        overflow: hidden;
        padding: 20px;
    }

    background-color: #FA956B;
    overflow: hidden;

    
`

export default function Title(){
    return <TitleContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <Logo width="300px" src="/ver_variant3.png" />
            <Subheader quotetext="Let Steady help you find out some causes and remedies to help you get back on track to a happy life" undertext="" fsize="2rem" />
            <Button buttontext="Let's Begin" bgcolor= "#3A6FF9" textcolor="#FFF4DD" routeTo="/about" />
            <Background source="/waves.svg" width="1000px" bottom= "-850px" filter= "invert(10%) sepia(51%) saturate(6943%) hue-rotate(246deg) brightness(82%) contrast(106%)" />
            <Background source="/waves.svg" width="1000px" bottom= "-950px" filter="invert(15%) sepia(19%) saturate(7472%) hue-rotate(234deg) brightness(76%) contrast(110%)" />
            <Background source="/waves.svg" width="1000px" bottom= "-1050px" filter="invert(6%) sepia(64%) saturate(2564%) hue-rotate(241deg) brightness(92%) contrast(94%)" />
        </div>
    </TitleContainer>
}