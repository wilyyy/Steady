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
            <Combo title1="Results..." headsize="5rem" textsize="1.5rem" subtitle1="You are doing..." />
            <Combo title1="Results..." headsize="5rem" textsize="1.5rem" subtitle1="You are doing..." />
            <Button buttontext="More Info" bgcolor= "#F86D34" textcolor="#FFF4DD" textsize="1.5rem" bheight="4rem" bwidth="25rem" routeTo="details"/>
            <Button buttontext="Continue" bgcolor= "#F86D34" textcolor="#FFF4DD" textsize="1.5rem" bheight="4rem" bwidth="25rem" routeTo="conclusion"/>
        </div>
    </ResultsContainer>
}