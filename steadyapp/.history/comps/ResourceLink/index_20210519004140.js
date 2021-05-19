import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
text-align: flex-start;
`

const ResourceContainer = styled.div`
display: flex;
flex-direction: column;
font-family: 'Lexend Deca', sans-serif;
text-align: flex-start;
color: #FFF4DD;
`

const Link = styled.a`
font-family: 'Lexend Deca', sans-serif;
color: #FFF4DD;
text-decoration: underline;
`

const ResourceHeader = styled.h1`
font-family: 'Lexend Deca', sans-serif;
color: #FFF4DD;
font-size: 3rem;
text-shadow: 2px 2px 4px #000000;
`


const FullResource = ({
    ResourceLink="https://www.medicalnewstoday.com/articles/154543",
    ResourceText="Here you can find out about Mental Health in general. What it consists of, the differents disorders, and also some solutions to them.",
    MiniPic="logo_topbar.png"
}) => {
    return <Container>
        <ResourceHeader>Resources</ResourceHeader>
        <img src="sleep"/>
        <Link href="https://www.sutterhealth.org/health/nutrition/eating-well-for-mental-health#:~:text=To%20boost%20your%20mental%20health,are%20also%20excellent%20brain%20foods.">Eating Well for Mental Health</Link>
        <br />
        <ResourceContainer>Here you can find out about good eating habits in general. What it consists of, the differents disorders, and also some solutions to them.</ResourceContainer>
        <img src={MiniPic}/>
        <Link href="https://www.healthline.com/nutrition/17-tips-to-sleep-better">17 Tips To Sleep Better</Link>
        <br />
        <ResourceContainer>something</ResourceContainer>
        <img src={MiniPic}/>
        <Link href={ResourceLink}>Click Here to read more!</Link>
        <br />
        <ResourceContainer>{ResourceText}</ResourceContainer>
    </Container>
}

export default FullResource;