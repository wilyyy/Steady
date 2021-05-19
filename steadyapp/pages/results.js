import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '../comps/Button';
import Subheader from '../comps/Subheader';
import NavBar from '../comps/NavBar';
import TopBar from '../comps/TopBar';
import BoxyButton from '../comps/BoxyButton';
import styled from 'styled-components';
import PlusCard from '../comps/PlusCard';
import {useState} from 'react';


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

export default function Test() {

  const [picstate1, setPicState1] = useState(false);
  const [picstate2, setPicState2] = useState(false);
  const [picstate3, setPicstate3] = useState(false);

  const HandleClick1 = () =>{
      setPicState1(!picstate1);
      setPicState2(false);
      setPicstate3(false);

  }

  const HandleClick2 = () =>{
      setPicState1(false);
      setPicState2(!picstate2);
      setPicstate3(false);
  }

  const HandleClick3 = () =>{
      setPicState1(false);
      setPicState2(false);
      setPicstate3(!picstate3);
  }

  return (
    <TitleContainer>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="column">
        <TopBar />
        <PlusCard 
        src= {picstate1 ? "/meal_icon.png" : "/meal_icon_bw.png"}
        bgcolor= {picstate1 ? "#F86D34" : "#E8E0CD"}
        textcolor= {picstate1 ? "#FFF6E0" : "#131521"}
        textcolor2= {picstate1 ? "#FFF6E0" : "#131521"}
        sign= {picstate1 ? "-" : "+"}
        height= {picstate1 ? "20rem" : "5rem"}
        width="35rem"
        onClick={HandleClick1} />
        <PlusCard 
        src = {picstate2 ? "/sleep.png" : "/sleep_bw.png"} 
        bgcolor= {picstate2 ? "#F86D34" : "#E8E0CD"}
        textcolor= {picstate2 ? "#FFF6E0" : "#131521"}
        textcolor2= {picstate2 ? "#FFF6E0" : "#131521"}
        height= {picstate2 ? "20rem" : "5rem"}
        sign= {picstate2 ? "-" : "+"}
        width="35rem" text="Sleep" onClick={HandleClick2}/>
        <PlusCard src="/meal_icon.png" width="35rem" text="Exercise" onClick={HandleClick3}
        src = {picstate3 ? "/scale.png" : "/scale_bw.png"} 
        bgcolor= {picstate3 ? "#F86D34" : "#E8E0CD"}
        textcolor= {picstate3 ? "#FFF6E0" : "#131521"}
        height= {picstate3 ? "20rem" : "5rem"}
        sign= {picstate3 ? "-" : "+"}
        textcolor2= {picstate3 ? "#FFF6E0" : "#131521"}/>
        <NavBar />
      </div>
    </TitleContainer>
  )
}