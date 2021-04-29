import React from 'react';
import styled from'styled-components';
import {useRouter} from 'next/router';

const LogoPicture = styled.img`
    width: ${props=>props.width};
    height: auto;
    object-fit: contain;
    z-index: 1;
    cursor: pointer;  
`

const Logo = ({
    width="500px",
    src="/logo.png",
    routeTo = "/"
}) => {
    const router = useRouter();
    return <LogoPicture width={width} src={src} onClick={()=>router.push(routeTo)} />
}

export default Logo;