import React from "react";
import styled from "styled-components";

const Cards = styled.div`
    background: rgba(128, 128, 128, 0.5);
    border-radius: 10px;
    width: 30%;
    margin: 20px auto;
    color: white;
    box-shadow: 10px 10px 20px black;
`;

const Name = styled.h1`
    background: rgba(0, 0, 0, 0.7);
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