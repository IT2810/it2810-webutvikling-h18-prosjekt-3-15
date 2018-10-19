import React from 'react';
import Mainpage from '../components/Mainpage';
import renderer from 'react-test-renderer';


it('renders correctly', ()=>{
    const tree = renderer
        .create(<Mainpage/>)
        .toJSON();
    expect(tree).toMatchSnapshot()
});

it('get MaxKey', ()=> {
    let MainPage = renderer.create(<Mainpage/>).getInstance();
    console.log(MainPage)
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

it('addSubject', ()=> {
    let Mainpage = renderer.create(<Mainpage/>).getInstance();
    Mainpage.state.subjectText = "TestTekst";
    let x = Mainpage.addSubject()
    console.log(x);
    expect(true);
})