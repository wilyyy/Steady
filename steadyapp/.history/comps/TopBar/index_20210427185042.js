import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {HiInformationCircle} from 'react-icons/hi';
import {IoArrowBackCircleSharp} from 'react-icons/io5';


const style = {color: "#FFF6E0", width: "4em", height: "5em" };

const TopBarCont = styled.div`
    width: 600px;
    height: 90px;
    background-color: #3945C6;
    justify-content: space-around;
    display: flex;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const TopBarButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
`;

const TopBarLogo = styled.div`
    background-image: url("../.public/logo_topbar.png");
    width: 80px;
    height: 80px;
    background-repeat: no-repeat;
    object-fit: cover;
`;

const TopBar = ({}) => {
    return <TopBarCont>
        <TopBarButton>
            <div><IoArrowBackCircleSharp style={style} /></div>
        </TopBarButton>
        <TopBarButton>
            <TopBarLogo />
        </TopBarButton>
        <TopBarButton>
            <div><HiInformationCircle style={style} /></div>
        </TopBarButton>
    </TopBarCont>
}

export default TopBar;