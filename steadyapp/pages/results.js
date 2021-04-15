import Head from 'next/head';
import styled from 'styled-components';
import Logo from '../comps/Logo';
import Combo from '../comps/HeadingAndParagraph';
import Button from '../comps/Button';

const ResultsContainer = styled.div`
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
    return <ResultsContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <Logo wide="100px" />
            <Combo title1="Results..." headsize="5rem" textsize="2rem" subtitle1="You are doing..." />
            <Combo title1="Terribly Bad" headsize="4.5rem" subtitle1="" />
            <Button buttontext="I Understand" bgcolor= "#F86D34" textcolor="#FFF4DD" bheight="7rem" bwidth="25rem" />
        </div>
    </ResultsContainer>
}