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
