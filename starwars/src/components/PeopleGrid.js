import React, { useState } from "react";
import { people } from "../data";
import PeopleCard from "./PeopleCard";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const PeopleGrid = () => {
    const [peopleState] = useState(people);
    console.log(peopleState)

    return (
        <CardContainer className="card-container">
            {peopleState.map((key) =>(
                <PeopleCard 
                key={key}
                name={key.name}
                mass={key.mass}
                height={key.height}
                birth_year={key.birth_year}
                />
            ))}    

        </CardContainer>
    )
};

export default PeopleGrid;