import React from 'react';
import HomeScreen from '../Screen/HomeScreen';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<HomeScreen/>);
    expect(tree).toMatchSnapshot();
});