import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Services from "../../api/api";

const Home = () => {
    const [realtors, setRealtors] = useState([])


    Services.getAllRealtors()
        .then(response => {
            setRealtors(response)
        })
        .catch(error => {
            console.log('error: ', error)
        })

    return (
        <ul>
            {realtors.map((realtor, i) =>
                <li key={i}>
                    <Link to={`/${realtor.id}`}>Accéder à la messagerie de {realtor.name}</Link>
                </li>
            )}
        </ul>
    )
}

export  default Home;