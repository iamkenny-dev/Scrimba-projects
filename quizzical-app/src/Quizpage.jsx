import React from 'react'

export default function Quizpage(props) {
    // const questPrint = props.quest ? 'container-questions' : ''
    return (
        <div className='container'>
            <div className='container-questions'>
                <h1 >{props.head}</h1>
                <button >{props.valueA}</button>
                <button >{props.valueB}</button>
                <button >{props.valueC}</button>
                <button >{props.valueD}</button>
            </div>
                <h1 score='You scored 3/5 correct answers'>You scored 3/5 correct answers</h1>
                <button play='Play again'>Play again</button>
        </div>
    )
}