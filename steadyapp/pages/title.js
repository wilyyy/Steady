import Head from 'next/head';
import styled from 'styled-components';
import Logo from '../comps/Logo';
import Background from '../comps/BackgroundImage';

const TitleContainer = styled.div`
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: linear-gradient(#222D94, #944B22);
        height: 100vh;
    }
`

export default function Title(){
    return <TitleContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <Logo />
            <Background />
        </div>
    </TitleContainer>
}