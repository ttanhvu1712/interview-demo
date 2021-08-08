import React from 'react'
import Head from 'next/head'
import IndexDomain from '../domains/index'

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexDomain />
    </>
  )
}
export default Index
