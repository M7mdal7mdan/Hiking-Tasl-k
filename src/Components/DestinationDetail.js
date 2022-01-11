import React from 'react'


const DestinationDetail = ({trip}) => {

    return (
        <div>
             <h1> Welcome to: {trip.name}</h1>
            <img src={trip.image}></img>
            <ul>
            <li> It takes place in the city of: {trip.city} </li>
            <li> The difficulty rating is: {trip.difficulty} </li>
            <li> It will take you {trip.length} to  complete this trip. </li>
            <li> People rated this {trip.rating}! </li>
            </ul>
        </div>
    )
}

export default DestinationDetail
