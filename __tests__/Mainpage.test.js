import React from 'react';
import Mainpage from '../components/Mainpage';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Mainpage/>);
    expect(tree).toMatchSnapshot();
});

it('get MaxKey', ()=> {
    let MainPage = renderer.create(<Mainpage/>).getInstance();
    expect(MainPage.getMaxKey(
        {1:{name: "Nils"},
            2:{name: "Marte"},
            3:{name: "Kristian"}
    })).toEqual("3");
});

it('get initialState', ()=> {
    let MainPage = renderer.create(<Mainpage/>).getInstance();
    var x = MainPage.state;
    expect(Object.is(x, { subjectText: '', subjects: {}, keyCount: 0 }));
});
it('Delete subject', ()=> {
    const tree = renderer.create(<Mainpage/>).getInstance();
    tree.state.subjects = {
        1: {'name': "Julaften",},
        2: {'name': "Hello",}
    };
    tree.deleteSubject(2);
    let x = tree.state.subjects;
    expect(Object.is(x, {1: {'name': "Julaften"}}));
});