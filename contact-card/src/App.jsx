import React from 'react'
import Card from './Card'
import Contact from './Contact'

export default function App() {
  const contactCards = Contact.map(item => (
      <Card img={item.img} 
            name={item.name} 
            phone={item.phone} 
            email={item.email}
      />
    ) 
  ) 
  return (
    <div>
      {contactCards}
    </div>
  )
}

// img="./images/mr-whiskerson.png" 
// name="Mr. Whiskerson"
// phone="(212) 555-1234"
// email="mr.whiskaz@catnap.meow"
// />
// <Card 
// img="./images/fluffykins.png"
// name="Fluffykins"
// phone="(212) 555-2345"
// email="fluff@me.com"
// />
// <Card 
// img="./images/felix.png"
// name="Felix"
// phone="(212) 555-4567"
// email="thecat@hotmail.com"
// />
// <Card 
// img="./images/pumpkin.png"
// name="Pumpkin"
// phone="(0800) CAT KING"
// email="pumpkin@scrimba.com"
// />