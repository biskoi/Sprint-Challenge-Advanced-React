import React from 'react';
import Player from './Player';
import {useDarkMode} from '../hooks/useDarkMode';
import styled from 'styled-components';
import './PlayerList.css';

const Flex = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export default function PlayerList(props) {

    const [dark, setDark] = useDarkMode('isDark', true);

    const toggle = (e) => {
        setDark(!dark)
        console.log('dark is', dark);
    }

    return (
        <>
        <p id = 'darkOnP'>Dark mode is {dark ? 'on!' : 'off.'}</p>
        <Flex data-testid = 'boxTestId'
        onClick = {toggle}
        className = {dark ? 'dark' : ''}>
        {props.players.map((item) => (
            <Player player = {item} key = {item.id}/>
        ))}
        </Flex>
        </>
    )

}