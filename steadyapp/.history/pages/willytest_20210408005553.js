import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../comps/Button'

export default function Test() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button imageappear="flex"/>

      
    </div>
  )
}
