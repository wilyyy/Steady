import Head from 'next/head';
import styled from 'styled-components';
import NavBar from '../comps/NavBar';
import TopBar from '../comps/TopBar';
import FullResource from '../comps/ResourceLink';

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

export default function Title (){
    return <TitleContainer>
    <Head>
        <title>Steady Homepage</title>
    </Head>
    <div className="column">
        <TopBar />
        <FullResource />
        <NavBar />
    </div>
</TitleContainer>
}
