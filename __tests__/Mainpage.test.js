import React from 'react';
import Mainpage from '../components/Mainpage';
import renderer from 'react-test-renderer';


it('renders correctly', ()=>{
    const tree = renderer
        .create(<Mainpage/>)
        .toJSON();
    expect(tree).toMatchSnapshot()
});

