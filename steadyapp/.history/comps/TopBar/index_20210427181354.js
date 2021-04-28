import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {FaStepBackward} from 'react-icons/fa';
import {HiInformationCircle} from 'react-icons/hi';

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

const TopBar = ({}) => {
    return <TopBarCont>
        <TopBarButton>
            <div><FaStepBackward style={style} /></div>
        </TopBarButton>
        <TopBarButton>
            <div></div>
        </TopBarButton>
    </TopBarCont>
}

export default TopBar;