import Head from 'next/head';
import styled from 'styled-components';
import Logo from '../comps/Logo';
import Combo from '../comps/HeadingAndParagraph';
import Button from '../comps/Button';

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
            <Logo wide="100px" />
            <Combo headsize="5rem" textsize="1.5rem" />
            <Combo headsize="5rem" textsize="1.5rem" title1="Disclaimer" subtitle1="We are not professionals, only trying to help individuals become more aware of their emotions and well being!" />
            <Button buttontext="I Understand" bgcolor= "#F86D34" textcolor="#FFF4DD" bheight="7rem" bwidth="25rem" />
        </div>
    </TitleContainer>
}