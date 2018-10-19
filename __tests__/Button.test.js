import React from 'react';
import Button from '../components/Button';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Button/>);
    expect(tree).toMatchSnapshot();
});