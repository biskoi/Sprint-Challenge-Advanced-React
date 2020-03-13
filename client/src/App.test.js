import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, getByText} from '@testing-library/react';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('Does it display data?', async () => {

  const {findByText} = render(<App/>)

  await findByText(/alex morgan/i)

});

test('Does darkMode default to on?', async () => {

  const {findByText} = render(<App/>);

  await findByText('Dark mode is on!') 

});

test('Can darkMode be toggled?', async () => {

  const {getByTestId, findByText} = render(<App/>);
  const box = getByTestId('boxTestId')
  // const p = document.querySelector('#darkOnP')

  fireEvent.click(box);

  await findByText('Dark mode is off.');

  fireEvent.click(box);

  await findByText('Dark mode is on!');
})
