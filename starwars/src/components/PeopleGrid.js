import React, { useState } from "react";
import { people } from "../data";
import PeopleCard from "./PeopleCard";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
`;

const PeopleGrid = () => {
    const [peopleState] = useState(people);
    console.log(peopleState)

    return (
        <div className="card-container">
            {peopleState.map((key) =>(
                <PeopleCard 
                key={key}
                name={key.name}
                mass={key.mass}
                height={key.height}
                birth_year={key.birth_year}
                />
            ))}    

        </div>
    )
};

export default PeopleGrid;