import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
border: solid black 1px;
width: 30%;
// height: 25vh;
margin: 2% 2% 2% 2%;
`;

export default function Player(props) {


    return(
        <Box>
            <p>ID: {props.player.id}</p>
            <p>Name: {props.player.name}</p>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </Box>
    )

}