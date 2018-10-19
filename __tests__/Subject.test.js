import React from 'react';
import Subject from '../components/Subject';
import renderer from 'react-test-renderer';


it('renders correctly', ()=>{

    const tree = renderer
        .create(<Subject></Subject>)
        .toJSON();
    expect(tree).toMatchSnapshot()
});

