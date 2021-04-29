import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '../comps/Button';
import Subheader from '../comps/Subheader';
import NavBar from '../comps/NavBar';
import TopBar from '../comps/TopBar';
import BoxyButton from '../comps/BoxyButton';
import styled from 'styled-components';


const TitleContainer = styled.div`
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        height: 100vh;
        max-width: 600px;
        position: relative;
        margin: 0 auto;
        overflow: hidden;
    }
    background-color: #FA956B;
    overflow: hidden;
    
`

export default function Test() {
  return (
    <TitleContainer>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="column">
        <TopBar />
        <BoxyButton src="../../meal_icon.png"/>
        <NavBar />
      </div>
    </TitleContainer>
  )
}
