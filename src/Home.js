import React from 'react'
import Navbar from './Navbar'
import Graph from './Graph'
import Table from './Table'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <div><Table/> 
        <Graph/></div>

    </div>
  )
}
