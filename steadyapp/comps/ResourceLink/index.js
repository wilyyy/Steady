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
        <img src={MiniPic}/>
        <Link href={ResourceLink}>Click Here to read more!</Link>
        <br />
        <ResourceContainer>{ResourceText}</ResourceContainer>
        <img src={MiniPic}/>
        <Link href={ResourceLink}>Click Here to read more!</Link>
        <br />
        <ResourceContainer>{ResourceText}</ResourceContainer>
        <img src={MiniPic}/>
        <Link href={ResourceLink}>Click Here to read more!</Link>
        <br />
        <ResourceContainer>{ResourceText}</ResourceContainer>
    </Container>
}

export default FullResource;