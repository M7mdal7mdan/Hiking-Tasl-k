import React, { useState } from 'react'
import Searchbar from './Searchbar';
import trips from '../trips'
import DestinationCards from './DestinationCards';
import DestinationDetail from './DestinationDetail';


const DestinationList = ()  => {
    const [query,setQuery]= useState("");
    const destinationList = trips
    .filter(trip => trip.name.toLowerCase().includes(query.toLowerCase()))
    .map((trip) => <DestinationCards trip={trip} key={trip.id} />)

    return (
        <div>
            <Searchbar setQuery = {setQuery} />
           {destinationList}
        
        </div>
    )
    }


export default DestinationList

//<DestinationDetail trip = {} />