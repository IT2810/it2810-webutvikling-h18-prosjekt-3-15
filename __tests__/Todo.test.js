import React from 'react';
import Todo from '../components/Todo.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
    // Quick workaround for navigation. Without this it has trouble finding the state and therefore its params and so on
        .create(<Todo navigation={{'state':{'params':{'url': '/1/test/'}}}}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});