import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../comps/Button'
import Subheader from '../comps/Subheader'

const TitleContainer = styled.div`
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: radial-gradient(50% 35% at 50% 17%, #EBFF00 0%, rgba(255, 255, 255, 0) 100%), #F86D34;
        height: 100vh;
        max-width: 600px;
        position: relative;
        margin: 0 auto;
        overflow: hidden;
    }
    background-color: #FA956B;
    overflow: hidden;
    
`

export default function Test() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button imageappear="flex"/>

      <br></br>
      
      <Button buttontext="Meals"
      bgcolor="#F86D34" 
      textcolor="#FFF4DD" 
      imageappear="none"
      />

      <Subheader />
    </div>
  )
}
