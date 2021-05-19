import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {FaHome} from 'react-icons/fa';
import {HiInformationCircle} from 'react-icons/hi';
import {MdForum} from 'react-icons/md';
import {RiSurveyFill} from 'react-icons/ri';



const style = {color: "#FFF6E0", width: "4em", height: "5em", cursor: "pointer"};

const NavCont = styled.div`
    width: 100vw;
    height: 90px;
    background-color: #131521;
    justify-content: space-around;
    display: flex;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.5);
`;

const NavButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
`;



const NavBar = ({
    homeRoute = "/",
    discussRoute = "/mainquestion",
    infoRoute = "/resources"
}) => {
    const router = useRouter();
    const ClearSessionStorage = () =>{
        sessionStorage.clear();
        router.push("/mainquestion");
    }
    return <NavCont>
        <NavButton onClick={()=>router.push(homeRoute)}>
            <div><FaHome style={style} /></div>
        </NavButton>
        <NavButton onClick={ClearSessionStorage}>
            <div><RiSurveyFill style={style} /></div>
        </NavButton>
        <NavButton onClick={()=>router.push(infoRoute)}>
            <div><HiInformationCircle style={style} /></div>
        </NavButton>
    </NavCont>
}

export default NavBar;