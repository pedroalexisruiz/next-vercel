import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import { Navbar } from '../Navbar'
import { Inter } from 'next/font/google'
import styles from './MainLayout.module.css'

const inter = Inter({ subsets: ['latin'] })
export const MainLayout = ({children}:PropsWithChildren) => {
    return (
        <div className={ inter.className}>
          
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
          <main className={`${styles.main}`}>
          <div className={styles.grid}>

          {children}

          </div>
          </main>

        </div>
      )
}

