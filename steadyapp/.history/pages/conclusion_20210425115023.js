import Head from 'next/head';
import styled from 'styled-components';
import Logo from '../comps/Logo';
import Background from '../comps/BackgroundImage';
import Combo from '../comps/HeadingAndParagraph';
import Button from '../comps/Button';
import Subheader from '../comps/Subheader'

const TitleContainer = styled.div`
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: #F86D34;
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
            <Combo title1="Take your time..." subtitle1="Making improvements doesn’t happen overnight. Start your habits now and make them last!" headsize="7rem" textsize="1rem" />
            <Subheader fsize="2 rem" />
            <Button buttontext="Return" bgcolor= "#212872" textcolor="#FFF4DD" routeTo="/title" />
        </div>
    </TitleContainer>
}