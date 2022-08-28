import React from 'react'
import styles from '../styles/Home.module.css'
import { useColorMode } from '@chakra-ui/color-mode';

function Footer() {
    const { colorMode, toggleColorMode } = useColorMode()
    let color = colorMode === 'Light' ? "#000000" : "#eaeaea"


  return (
    <div style={{  borderTop: `1px solid ${color}`}}>
        <footer className={styles.footer}>
            Built with ♥️ & 〈〉by 
            <a href='https://twitter.com/shubhxms' style={{padding:'0 0.3vw', textDecoration: 'underline'}}>shubham</a>
            and sneh
        </footer>
    </div>
  )
}

export default Footer