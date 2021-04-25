import Head from 'next/head';
import styled from 'styled-components';
import Logo from '../comps/Logo';
import FullGauge from '../comps/Gauge';
import Continue from '../comps/Continue';

const ResultsContainer = styled.div`
    .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #F86D34;
        height: 100vh;
    }
`

export default function Title(){
    return <ResultsContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <Logo wide="100px" />
            <FullGauge />
            <Continue MainText="Back" bgColor="#F86D34" DivOpacity="100%" routeTo="results" />
        </div>
    </ResultsContainer>
}   