import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {HiInformationCircle} from 'react-icons/hi';
import {IoArrowBackCircleSharp} from 'react-icons/io5';
import {AiFillQuestionCircle} from 'react-icons/ai';


const style = {color: "#FFF6E0", width: "4em", height: "5em", cursor: "pointer"  };
const style2 = {color: "#3945C6", width: "4em", height: "5em" };

const TopBarCont = styled.div`
    width: 100vw;
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
    background-image: url("../../logo_topbar.png");
    width: 80px;
    height: 80px;
    background-repeat: no-repeat;
`;

const TopBar = ({
    homeRoute = "/"
}) => {
    const router = useRouter();
    return <TopBarCont>
        <TopBarButton>
            <div><IoArrowBackCircleSharp onClick={() => router.back()} style={style} /></div>
        </TopBarButton>
        <TopBarButton>
            <TopBarLogo onClick={()=>router.push(homeRoute)}/>
        </TopBarButton>
        <TopBarButton>
            <div><AiFillQuestionCircle style={style2} /></div>
        </TopBarButton>
    </TopBarCont>
}

export default TopBar;