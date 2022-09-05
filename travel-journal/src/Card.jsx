import React from 'react'

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={props.imageUrl} className="card-image" />
            <div className="card-paragraph">
                <p className="card-location">{props.location}</p>
                <h1 className="card-title">{props.title}</h1>
                <p className="date">{props.startDate}-{props.endDate}</p>
                <p>{props.description}</p>
            </div>
            
        </div>
    )
}