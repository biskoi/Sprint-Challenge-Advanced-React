import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from '@testing-library/react';
import PlayerList from './PlayerList';

test('Does darkMode work?', async () => {

    const {getByTestId, findByText} = render(<PlayerList/>);
  
    const box = getByTestId('boxTestId')
  
    fireEvent.click(box)
  
    await findByText('Dark mode is on!')
  
  });