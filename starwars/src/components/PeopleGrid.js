import React, { useState, useEffect } from "react";
// import { people } from "../data";
import PeopleCard from "./PeopleCard";
import styled from "styled-components";
import axios from "axios";

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const PeopleGrid = () => {
    const [peopleState, setPeopleState] = useState([]);
    console.log(peopleState)

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            const PeopleArr = response.data.results;
            // console.log("Testing", peeps);
            setPeopleState(PeopleArr)
        })
    }, []);

    return (
        <CardContainer className="card-container">
            {peopleState.map((item,key) =>(
                <PeopleCard 
                key={key}
                name={item.name}
                mass={item.mass}
                height={item.height}
                birth_year={item.birth_year}
                />
            ))}    

        </CardContainer>
    )
};

export default PeopleGrid;