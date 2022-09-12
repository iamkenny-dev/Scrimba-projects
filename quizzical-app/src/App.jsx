import React from 'react'
import Mainpage from './Mainpage'
import Quizpage from './Quizpage'

export default function App(props) {
  const [quest, setQuest] = React.useState({})
  const [allQuest, setAllQuest] = React.useState()

  fetch("https://opentdb.com/api.php?amount=10")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results[0].question);
  }, []);

  function getQuestion() {
    const randomNumber = Math.floor(Math.random() * quest.length)
    console.log(randomNumber)
  }

    return (
        <div>
          <Quizpage
            head='How would one say goodbye in english'
            valueA='A'
            valueB='B'
            valueC='C'
            valueD='D'
            data={quest}
          />                
        </div>
    )
}