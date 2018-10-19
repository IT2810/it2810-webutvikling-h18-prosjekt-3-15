import React from 'react';
import StepCounter from '../components/StepCounter';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import App from "../App";


it('renders correctly', ()=>{
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<StepCounter/>);
    expect(tree).toMatchSnapshot();
});
it('check startState', ()=>{
    const tree = renderer.create(<StepCounter/>).getInstance();
    console.log(tree);
    let x = tree.state.steps;
    expect(Object.is(x, 0));
});