import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Header from '../components/Header'
import NavTabs from '../components/NavTabs'
import Footer from '../components/Footer'

export default function Home() {


  return (
    <div >
      <Head>
        <title>cube timer</title>
        <meta name="description" content="cube timer and stat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div> 
          {/* className={styles.container} */}
          <Header/>
          
          <div className={styles.container}>
            <NavTabs/>
          </div>
          <Footer/>
        </div>
      </main>
    </div>
  )
}
