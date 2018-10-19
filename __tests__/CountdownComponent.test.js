import React from 'react';
import CountdownComponent from '../components/CountdownComponent';
import renderer from 'react-test-renderer';


it('renders correctly', ()=>{
    const tree = renderer
        .create(<CountdownComponent/>)
        .toJSON();
    expect(tree).toMatchSnapshot()
});

