import styles from './page.module.css'
import React from 'react';
import Dashboard from '@/components/Dashboard';
import WelcomeInfo from '@/components/welcome/Welcome';



export default function Home() {

  return (
    <main className={styles.main}>
      <WelcomeInfo />
    </main>
  )
}
