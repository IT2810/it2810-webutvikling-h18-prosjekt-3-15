import React from 'react';
import Subject from '../components/Subject';
import renderer from 'react-test-renderer';
import Button from "../components/Button";



import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
    const mockTitle = "Smil";
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Subject subject={mockTitle}/>);
    expect(tree).toMatchSnapshot();
});

test('test Onpress functunality', () =>{
    const mockFunc = jest.fn();

})