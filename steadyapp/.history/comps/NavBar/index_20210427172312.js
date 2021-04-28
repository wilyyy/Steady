import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {FaHome} from 'react-icons/Fa';

const NavCont = styled.div`
    width: 600px;
    height: 90px;
    background-color: #131521;
    display: flex;
`;

const NavButton = styled.div`
    display: flex;
    flex-direction: column;
    height: 90px;
`;

const NavBar = ({}) => {
    return <NavCont>
        <NavButton>
            <div><FaHome /></div>
        </NavButton>
    </NavCont>
}

export default NavBar;