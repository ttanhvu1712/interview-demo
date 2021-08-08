import React from 'react'
import Head from 'next/head'
import TableDomain from '../domains/table'

const Counting: React.FC = () => {
  return (
    <>
      <Head>
        <title>Demo 2 - Table</title>
        <meta name="description" content="Demo 2 - Table" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TableDomain />
    </>
  )
}
export default Counting
