import React from "react";
import styled from "styled-components";

const Cards = styled.div`
    background: pink;

`;

const PeopleCard = props => {
    return (
        <Cards>
            <h1>{props.name}</h1>
            <p>Weight: {props.mass}</p>
            <p>Height:{props.height}</p>
            <p>Was born in: {props.birth_year}</p>

        </Cards>
    );
};

export default PeopleCard;