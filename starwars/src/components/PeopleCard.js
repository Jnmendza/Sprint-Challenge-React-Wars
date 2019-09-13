import React from "react";
import styled from "styled-components";

const Cards = styled.div`
    background: rgba(128, 128, 128, 0.5);
    border-radius: 10px;
    width: 30%;
    margin: 20px auto;
    color: white;
`;

const Name = styled.h1`
    background: black;
    color: white;
`;

const PeopleCard = props => {
    return (
        <Cards className="cards">
            <Name>{props.name}</Name>
            <p>Mass: {props.mass}kg</p>
            <p>Height: {props.height}cm</p>
            <p>Was born in {props.birth_year}</p>

        </Cards>
    );
};

export default PeopleCard;