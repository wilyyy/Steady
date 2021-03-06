import React from 'react';
import { HiScale } from 'react-icons/hi';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
text-align: flex-start;
.image{
    width: 60px;
    height: 60px;
}
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
        <img src="meal_icon.png" className="image" />
        <Link href="https://www.sutterhealth.org/health/nutrition/eating-well-for-mental-health#:~:text=To%20boost%20your%20mental%20health,are%20also%20excellent%20brain%20foods.">Eating Well for Mental Health</Link>
        <br />
        <img src="sleep.png" className="image"/>
        <Link href="https://www.healthline.com/nutrition/17-tips-to-sleep-better">17 Tips To Sleep Better</Link>
        <Link href="https://chear.ucsd.edu/blog/scheduled-eating-why-its-beneficial-and-how-to-start">Scheduled Eating- Why It’s Beneficial and How to Start</Link>
        <br />
        <img src="scale.png" className="image"/>
        <Link href="https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm">The Mental Health Benefits of Exercise</Link>
        <Link href="https://www.healthlinkbc.ca/health-topics/aa131383">Healthlink BC - Get Regular Exercise for Mental Health</Link>
        <br />
    </Container>
}

export default FullResource;