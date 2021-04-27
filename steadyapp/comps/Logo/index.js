import React from 'react';
import styled from'styled-components';

const LogoPicture = styled.img`
    width: ${props=>props.width};
    height: auto;
    object-fit: contain;
    z-index: 1;
    cursor: pointer;
`

const Logo = ({
    width="500px",
    src="/logo.png"
}) => {
    return <LogoPicture width={width} src={src} />
}

export default Logo;