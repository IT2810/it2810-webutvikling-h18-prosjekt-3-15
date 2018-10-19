import React from 'react';
import StepCounter from '../components/StepCounter';
import renderer from 'react-test-renderer';


it('renders correctly', ()=>{
    const tree = renderer
        .create(<StepCounter/>)
        .toJSON();
    expect(tree).toMatchSnapshot()
});
it('check startState', ()=>{
    const tree = renderer.create(<StepCounter/>).getInstance();
    let x = tree.state.steps;
    expect(Object.is(x, 0));
});