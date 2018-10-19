import React from 'react';
import Todo from '../components/Todo.js';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Todo navigation={{'state':{'params':{'url': '/1/test/'}}}}/>);
    expect(tree).toMatchSnapshot();
});

it('check start state', ()=>{
    const tree = renderer.create(<Todo navigation={{'state':{'params':{'url': '/1/test/'}}}}/>).getInstance();
    let x = tree.state;
    console.log(x);
    expect(Object.is({taskDict: {}, keyCount: 0, taskText: '', urlKey: '/1/test/'}, x))
})
it('Delete task', ()=> {
    const tree = renderer.create(<Todo navigation={{'state':{'params':{'url': '/1/test/'}}}}/>).getInstance();
    tree.state.taskDict = {
        1:{'name': "Julaften",},
        2:{'name': "Hello",}};
    console.log(tree.state.taskDict);
    tree.deleteTask(2);
    let x = tree.state.taskDict;
    console.log(x);
    expect(Object.is(x, {1:{'name': "Julaften"}}));

});
it('Delete task', ()=> {
    const tree = renderer.create(<Todo navigation={{'state': {'params': {'url': '/1/test/'}}}}/>).getInstance();
    tree.state.taskDict = {
        1:{'name': "Julaften", 'checked': false}
    };
    console.log(tree.state.taskDict);
    let x = tree.state.taskDict;
    tree.checkedBox(1);
    console.log(tree.state.taskDict);

    expect(Object.is(tree.state.taskDict[1]['checked'], true));

});