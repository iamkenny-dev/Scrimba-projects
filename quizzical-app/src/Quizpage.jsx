import React from 'react'
import {nanoid} from 'nanoid' 

export default function Quizpage() {
    
    const [quest, setQuest] = React.useState({
        id: nanoid()
        question: '',
        correct_answer: '',
        incorrect_answers: []
    })
    const [allIncorrectAns, setAllIncorrectAns] = React.useState({
        question: '',
        correct_answer: '',
        incorrect_answers: []
    })
    const [allAnswer, setAllAnswer] = React.useState({
        question: '',
        correct_answer: '',
        incorrect_answers: []
    })

    const [allQuest, setAllQuest] = React.useState()
    
    
        React.useEffect(function() {
            fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
            .then((res) => res.json())
            .then((data) => {
                setAllQuest(data.results);
        });
        }, [])
        

        // const [currentQuestionId, setCurrentQuestionId] = React.useState(
        //     (quest.id && quest.question && quest.correct_answer && quest.incorrect_answers) || ""
        // )
    
      // fetch("https://opentdb.com/api.php?amount=10")
      // .then((res) => res.json())
      // .then((data) => {
      //   setAllQuest(data.results[0].correct_answer);
      // }, []);
    
    function getQuestion() {
        const randomNumber = Math.floor(Math.random() * allQuest.length)
        const questionz = allQuest[randomNumber].question
        setQuest(prevQuest =>  ({
            ...prevQuest,
            question: questionz
        }))
        getAnswer()
        getIncorrectAns()
    }
    function getIncorrectAns() {
        const randomNumber = Math.floor(Math.random() * allQuest.length)
        const incorrect_answerz = allQuest[randomNumber].incorrect_answers
        setAllIncorrectAns(prevQuest =>  ({
            ...prevQuest,
            incorrect_answers: incorrect_answerz
        }))
        
    }
    function getAnswer() {
        const randomNumber = Math.floor(Math.random() * allQuest.length)
        const answerz = allQuest[randomNumber].correct_answer
        setAllAnswer(prevQuest =>  ({
            ...prevQuest,
            correct_answer: answerz
        }))
    }



    // function createNewNote() {
    //     const newNote = {
    //         id: nanoid(),
    //         body: "# Type your markdown note's title here"
    //     }
    //     setNotes(prevNotes => [newNote, ...prevNotes])
    //     setCurrentNoteId(newNote.id)
    // }

    // function getQuestionAndAnswers() {
    //     const newQuestion = {
    //         id: nanoid(),
    //         question: '',
    //         correct_answer: '',
    //         incorrect_answers: []
    //     }

    // }

    return (
        <div className='container'>
            <div className='container-questions'>
                <h1 >{quest.question}</h1>
                <button >{allIncorrectAns.incorrect_answers[0]}</button>
                <button >{allIncorrectAns.incorrect_answers[1]}</button>
                <button >{allIncorrectAns.incorrect_answers[2]}</button>
                <button onClick={getAnswer}>{allAnswer.correct_answer}</button>
            </div>
                <h1 score='You scored 3/5 correct answers'>You scored 3/5 correct answers</h1>
                <button onClick={getQuestion}>Play again</button>
        </div>
    )
}