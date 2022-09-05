import React from 'react'
import Navbar from './Navbar'
import data from './data'
import Card from './Card'


export default function App() {
  const journals = data.map(item => {
    return (
        <Card 
            {...item}
        />
    )
  })
  return (
    <div>
        <Navbar />
        <section>
            {journals}
        </section>
        
    </div>
  )
}