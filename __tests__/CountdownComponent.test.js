import React from 'react';
import CountdownComponent from '../components/CountdownComponent';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<CountdownComponent/>);
    expect(tree).toMatchSnapshot();
});


it('Pause timer ', ()=>{
    const tree = renderer.create(<CountdownComponent/>).getInstance();
    let x = tree.state.timerPaused;
    let y = tree.pauseTimer();
    expect(x).toBe(true) && expect(y).toBe(false);
});
it('Reset timer', ()=>{
    const tree = renderer.create(<CountdownComponent/>).getInstance();
    let x = tree.state.timerPaused;
    let y = tree.state.timerFinished;
    tree.state.timerFinished = true;
    tree.state.timerPaused = false;
    tree.resetTimer();
    expect(Object.is(tree.state.timerFinished, y)) && expect(Object.is(tree.state.timerPaused, x));
});
