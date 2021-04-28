import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {FaHome} from 'react-icons/fa';
import {HiInformationCircle} from 'react-icons/hi';
import {MdForum} from 'react-icons/md';


const style = {color: "white", width: "4em", height: "5em" }

const NavCont = styled.div`
    width: 600px;
    height: 90px;
    background-color: #131521;
    justify-content: space-around;
    display: flex;
`;

const NavButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
`;

const NavBar = ({
    homeRoute = "/"
}) => {
    const router = useRouter();
    return <NavCont>
        <NavButton onClick={()=>router.push(routeTo)}>
            <div><FaHome style={style} /></div>
        </NavButton>
        <NavButton>
            <div><MdForum style={style} /></div>
        </NavButton>
        <NavButton>
            <div><HiInformationCircle style={style} /></div>
        </NavButton>
    </NavCont>
}

export default NavBar;