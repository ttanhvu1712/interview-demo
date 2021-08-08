import React from 'react'
import Head from 'next/head'
import CountingDomain from '../domains/counting'

const Counting: React.FC = () => {
  return (
    <>
      <Head>
        <title>Demo 1 - Counting</title>
        <meta name="description" content="Demo 1 - Counting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CountingDomain />
    </>
  )
}
export default Counting
