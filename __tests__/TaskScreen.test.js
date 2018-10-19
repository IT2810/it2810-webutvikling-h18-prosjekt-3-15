import React from 'react';
import renderer from 'react-test-renderer';
import TaskScreen from "../Screen/TaskScreen";
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<TaskScreen navigation={{'state':{'params':{'url': '/1/test/'}}}}/>);
    expect(tree).toMatchSnapshot();
});

