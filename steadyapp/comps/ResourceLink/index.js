import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ResourceContainer = styled.div`
display: flex;
flex-direction: column;
font-family: 'Lexend Deca', sans-serif;
text-align: center;
color: #FFF4DD;
`

const ResourceHeader = styled.h1`
font-family: 'Lexend Deca', sans-serif;
color: #FFF4DD;
`


const FullResource = ({
    ResourceLink="https://www.google.ca",
    ResourceText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui purus, vulputate a est at, pellentesque venenatis sapien. Donec."
}) => {
    return <Container>
        <ResourceHeader>Resources</ResourceHeader>
        <img src="logo_topbar.png"/>
        <ResourceContainer>{ResourceLink}</ResourceContainer>
        <ResourceContainer>{ResourceText}</ResourceContainer>
        <img src="logo_topbar.png"/>
        <ResourceContainer>{ResourceLink}</ResourceContainer>
        <ResourceContainer>{ResourceText}</ResourceContainer>
        <img src="logo_topbar.png"/>
        <ResourceContainer>{ResourceLink}</ResourceContainer>
        <ResourceContainer>{ResourceText}</ResourceContainer>
        <img src="logo_topbar.png"/>
        <ResourceContainer>{ResourceLink}</ResourceContainer>
        <ResourceContainer>{ResourceText}</ResourceContainer>
    </Container>
    
}

export default FullResource;