import React from 'react';
import Task from '../components/Task.js';
import renderer from 'react-test-renderer';

import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Task/>);
    expect(tree).toMatchSnapshot();
});
