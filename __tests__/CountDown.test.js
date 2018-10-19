import * as jest from "jest";
import React from 'react';
import CountDown from '../components/CountDown';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const basicMinAndSec = renderer.render(<CountDown timeToShow={['M','S']} until={120}/>);
    const basicFullTimer = renderer.render(<CountDown  until={180} onFinish={(() =>  2+2)}/>);
    const callBackTimer = renderer.render(<CountDown until={60} onFinish={()=> mockupCallback()}/>)
    expect(basicMinAndSec).toMatchSnapshot() && expect(basicFullTimer).toMatchSnapshot() && expect(callBackTimer).toMatchSnapshot();
});
