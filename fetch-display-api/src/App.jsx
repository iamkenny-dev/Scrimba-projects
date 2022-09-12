import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    // 1. GET the data (fetch)
    // 2. Save the data to state
    
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => setStarWarsData(data.results[0]))
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
// https://swapi.dev/api/people/1