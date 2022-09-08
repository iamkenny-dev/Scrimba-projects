import React from 'react'


function App() {
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
  
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  
function addItem() {
  setThingsArray(prevThingsArray => [...prevThingsArray, `Things ${thingsArray.length + 1}`])
}

  
  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          {thingsElements}
      </div>
  )
}

export default App
