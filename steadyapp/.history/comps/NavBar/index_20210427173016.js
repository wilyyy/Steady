import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {FaHome} from 'react-icons/fa';

const style = {color: "white", width: "4em", height: "8em" }

const NavCont = styled.div`
    width: 600px;
    height: 90px;
    background-color: #131521;
    display: flex;
    padding: 10px;
`;

const NavButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
`;

const NavBar = ({}) => {
    return <NavCont>
        <NavButton>
            <div><FaHome style={style} /></div>
            <div>Home</div>
        </NavButton>
    </NavCont>
}

export default NavBar;