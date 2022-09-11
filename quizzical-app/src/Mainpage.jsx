import React from 'react'

export default function Mainpage(prop) {
    return (
        <div className="container">
            <div className='mainPage'>
                <h1>Quizzical</h1>
                <p>Some description if needed</p>
                <button onClick={prop.startQuiz}>Start quiz</button>
                <div className="right-corner">
                    <img src='../images/yellow-blob' />
                </div>
                <div className="left-corner"></div>
            </div>
        </div>
        
    )
}