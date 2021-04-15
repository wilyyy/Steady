import Head from 'next/head';
import styled from 'styled-components';
import Logo from '../comps/Logo';
import Combo from '../comps/HeadingAndParagraph';
import Button from '../comps/Button';

const MainQuestionContainer = styled.div`
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: linear-gradient(#222D94, #944B22);
        height: 100vh;
    }
`

export default function Title(){
    return <MainQuestionContainer>
        <Head>
            <title>Steady Homepage</title>
        </Head>
        <div className="column">
            <Logo wide="100px" />
            <h1>Tell Us About...</h1>
            <Button imageappear="flex" src="../../depression.png" buttontext="Sleep" bgcolor= "#F86D34" textcolor="#E8E0CD" bheight="5rem" bwidth="20rem"/>
            <Button imageappear="flex" src="../../depression.png" buttontext="Meals" bgcolor= "#E8E0CD" textcolor="#000" bheight="5rem" bwidth="20rem"/>
            <Button imageappear="flex" src="../../depression.png" buttontext="Emotions" bgcolor= "#E8E0CD" textcolor="#000" bheight="5rem" bwidth="20rem"/>
        </div>
    </MainQuestionContainer>
}