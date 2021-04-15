//dis da good stuff
import React from 'react'
import styled from 'styled-components'

const GaugeContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify content: center;
margin: 5px;
`;

const Bar1 = styled.div`
width: 140px;
height: 30px;
background: ${props=>props.BarColor1};
-webkit-clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
`;

const Bar2 = styled.div`
width: 140px;
height: 30px;
background: ${props=>props.BarColor2};
-webkit-clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
`;

const Bar3 = styled.div`
width: 140px;
height: 30px;
background: ${props=>props.BarColor3};
-webkit-clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
`;

const FullGauge = ({
    BarFull="#F86D34",
    BarEmpty="#E8E0CD",
}) => {
    return <GaugeContainer>
        <Bar1 BarColor1={BarFull}></Bar1>
        <Bar2 BarColor2={BarEmpty}></Bar2>
        <Bar3 BarColor3={BarEmpty}></Bar3>
    </GaugeContainer>
}

export default FullGauge;