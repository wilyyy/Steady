import React from 'react';
import styled from'styled-components';

const BackgroundPicture = styled.img`
    width: ${props=>props.w};
    height: auto;
    object-fit: contain;
    z-index: 1;
    position: absolute;
    opacity: 30%;
`

const Background = ({
    wide="600px"
}) => {
    return <BackgroundPicture w={wide} src= "/Rocks.svg" />
}

export default Background;