//dis da good stuff
import React from 'react'
import styled from 'styled-components'

const FullContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
max-width: 600px;
margin: 5px;
`

const GaugeHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-family: 'Ranchers', cursive;
color: #E8E0CD;
font-size: 3rem;
`

const ResultDescription = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #E8E0CD;
font-family: 'Lexend Deca', sans-serif;
font-size: 1rem;
` 

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
    Sleep="Sleep",
    SleepDescription="You're getting too much sleep! This could lead to... Aim to get between 7-8 hours of sleep every night. A good method to start achieving this would be setting an alarm when you want to go to sleep.",
    Meals="Meals",
    MealsDescription="You're eating the right amount of meals. Keep it up! Make sure to also keep your meals balanced with fruits, vegetables, wheat, dairy, and protein! You could even start planning out your meals to make sure you're getting the right amount.",
    Exercise="Exercise",
    ExerciseDescription="You're not exercising enough! This could cause... Try starting slow and getting 15-30 minutes of physical exercise. Before doing anything more, make sure to consult a physician. To get started, try doing simple stretches in the morning and evening."
}) => {
    return <FullContainer>
            <GaugeHeader>{Sleep}</GaugeHeader>
                <GaugeContainer>
                    <Bar1 BarColor1={BarFull}></Bar1>
                    <Bar2 BarColor2={BarFull}></Bar2>
                    <Bar3 BarColor3={BarEmpty}></Bar3>
                </GaugeContainer>
            <ResultDescription>{SleepDescription}</ResultDescription>
            <GaugeHeader>{Meals}</GaugeHeader>
                <GaugeContainer>
                    <Bar1 BarColor1={BarFull}></Bar1>
                    <Bar2 BarColor2={BarFull}></Bar2>
                    <Bar3 BarColor3={BarFull}></Bar3>
                </GaugeContainer>
            <ResultDescription>{MealsDescription}</ResultDescription>
            <GaugeHeader>{Exercise}</GaugeHeader>
                <GaugeContainer>
                    <Bar1 BarColor1={BarFull}></Bar1>
                    <Bar2 BarColor2={BarEmpty}></Bar2>
                    <Bar3 BarColor3={BarEmpty}></Bar3>
                </GaugeContainer>
            <ResultDescription>{ExerciseDescription}</ResultDescription>
    </FullContainer>
}

export default FullGauge;