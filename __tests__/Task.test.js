import React from 'react';
import Task from '../components/Task.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<Task/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});