import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {FaHome} from 'react-icons/fa';
import {HiInformationCircle} from 'react-icons/hi';
import {MdForum} from 'react-icons/md';



const style = {color: "#FFF6E0", width: "4em", height: "5em" };

const NavCont = styled.div`
    width: 600px;
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
    infoRoute = "/"
}) => {
    const [hover, setHover] = useState(false);

    var y = 0, height = 0;
    if(open){
        width = 120;
        height = 100;
    }

    const router = useRouter();
    return <NavCont>
        <NavButton onClick={()=>router.push(homeRoute)}>
            <div><FaHome style={style} /></div>
        </NavButton>
        <NavButton onClick={()=>router.push(discussRoute)}>
            <div><MdForum style={style} /></div>
        </NavButton>
        <NavButton onClick={()=>router.push(infoRoute)}>
            <div><HiInformationCircle style={style} /></div>
        </NavButton>
    </NavCont>
}

export default NavBar;