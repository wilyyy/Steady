import Head from 'next/head';
import styled from 'styled-components';
import Logo from '../comps/Logo';
import Background from '../comps/BackgroundImage';
import Combo from '../comps/HeadingAndParagraph';
import Button from '../comps/Button';

const TitleContainer = styled.div`
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: #F86D34;
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
            <Combo title1="Welcome to Steady" subtitle1="Ready" subtitle2="Steady" subtitle3="Go" headsize="7rem" textsize="3rem" />
            <Button buttontext="Let's Begin" bgcolor= "#212872" textcolor="#FFF4DD" routeTo="/about" />
        </div>
    </TitleContainer>
}