import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    // 1. GET the data (fetch)
    // 2. Save the data to state
    React.useEffect(function() {
        fetch("https://opentdb.com/api.php?amount=4&category=19&type=multiple")
        .then(res => res.json())
        .then(data => setStarWarsData(data.results))
    }, [])
    
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
// https://swapi.dev/api/people/1
/*question: '',
correct_answer: '',
      incorrect_answers: [] */