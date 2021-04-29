import React from 'react';
import styled from'styled-components';

const BackgroundPicture = styled.img`
    width: ${props=>props.width};
    height: auto;
    object-fit: contain;
    z-index: 0;
    position: absolute;
    bottom: ${props=>props.bottom};
    left: ${props=>props.left};
    filter: ${props=>props.filter};
`

const Background = ({
    width="600px",
    source = "/rocks.svg",
    bottom = "-850px",
    left = "-40px",
    filter = "invert(19%) sepia(54%) saturate(7449%) hue-rotate(192deg) brightness(100%) contrast(103%)"
}) => {
    return <BackgroundPicture width={width} src={source} bottom={bottom} left={left} filter={filter} />
}

export default Background;