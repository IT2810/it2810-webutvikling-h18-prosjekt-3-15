import React from 'react';
import Subject from '../components/Subject';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';


it('renders correctly', ()=>{

    const tree = renderer
        .create(<Subject></Subject>)
        .toJSON();
    expect(tree).toMatchSnapshot()
});

configure({adapter : new Adapter()});

test('test Onpress functunality', () =>{
    const onPressEvent = jest.fn();
    onPressEvent.mockReturnValue('link on press invoked');

    const wrapper = shallow(<Subject onPress={ onPressEvent } title={'Test123'}/>)
    wrapper.find(Text).first().props().onPress();

    expect(onPressEvent.mock.calls.length).toBe(1);
})