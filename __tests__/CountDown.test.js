import * as jest from "jest";
import React from 'react';
import CountDown from '../components/CountDown';
import renderer from 'react-test-renderer';


it('CountDown renders correctly', () =>{
    const basicMinAndSec = renderer
        .create(<CountDown timeToShow={['M','S']} until={120}/>)
        .toJSON();
    const basicFullTimer = renderer
        .create(<CountDown  until={180} onFinish={(() =>  2+2)}/>)
        .toJSON();
    const callbackTimer = renderer
        .create(<CountDown until={60} onFinish={() => mockupCallback()}/>)
        .toJSON();
    expect(basicMinAndSec).toMatchSnapshot();
    expect(basicFullTimer).toMatchSnapshot();
});