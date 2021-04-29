import Head from 'next/head';
import styled from 'styled-components';
import Logo from '../comps/Logo';
import Combo from '../comps/HeadingAndParagraph';
import Button from '../comps/Button';
import TopBar from '../comps/TopBar';
import NavBar from '../comps/NavBar';

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
        width: 60%;
        overflow-x: hidden;
    }
`

export default function Title(){
    return <TitleContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <TopBar />
            <div class="row">
                <Combo headsize="4rem" title1="Disclaimer" subtitle1="We are not professionals, only trying to help individuals become more aware of their emotions and well being!" />
                <Combo headsize="4rem" title1="Disclaimer" subtitle1="We are not professionals, only trying to help individuals become more aware of their emotions and well being!" />
                <Combo headsize="4rem" title1="Disclaimer" subtitle1="We are not professionals, only trying to help individuals become more aware of their emotions and well being!" />
            </div>
            <Button buttontext="I Understand" bgcolor= "#F86D34" textcolor="#FFF4DD" bheight="6rem" bwidth="20rem" routeTo="mainquestion" textsize="2rem" />
            <NavBar />
        </div>
    </TitleContainer>
}