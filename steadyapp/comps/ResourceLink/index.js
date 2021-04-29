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
`

const FullResource = ({
    ResourceLink="https://www.google.ca",
    ResourceText="Filler Filler Filler Filler Filler"
}) => {
    return <Container>
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
        <img src="logo_topbar.png"/>
        <ResourceContainer>{ResourceLink}</ResourceContainer>
        <ResourceContainer>{ResourceText}</ResourceContainer>
    </Container>
    
}

export default FullResource;