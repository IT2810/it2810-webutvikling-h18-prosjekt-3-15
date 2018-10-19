import React from 'react';
import Todo from '../components/Todo.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
    // Quick workaround for navigation. Without this it has trouble finding the state and therefore its params and so on
        .create(<Todo navigation={{'state':{'params':{'url': '/1/test/'}}}}/>)
        .toJSON();
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