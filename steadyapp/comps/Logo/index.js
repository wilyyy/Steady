import React from 'react';
import styled from'styled-components';

const LogoPicture = styled.img`
    width: ${props=>props.w};
    height: auto;
    object-fit: contain;
    z-index: 2;
`

const Logo = ({
    wide="200px"
}) => {
    return <LogoPicture w={wide} src= "/logo.png" />
}

export default Logo;