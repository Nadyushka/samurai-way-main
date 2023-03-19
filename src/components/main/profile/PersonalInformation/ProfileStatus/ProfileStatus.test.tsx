import React from "react";
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus Component', ()=> {
    test('status from props shoulb be in state', ()=>{
        const component = create(<ProfileStatus status={'Test status'} updateStatus={()=>{}}/>);
        const instance = component.root;
        expect(instance.instance.state.status).toBe('Test status')
    })
    test('ProfileStatus should have 1 <span>', ()=>{
        const component = create(<ProfileStatus status={'Test status'} updateStatus={()=>{}}/>);
        const instance = component.root;
        const div = instance.findAllByType('div');
        expect(div.length).toBe(1)
    })
    test('ProfileStatus should have <span> with innerText', ()=>{
        const component = create(<ProfileStatus status={'Test status'} updateStatus={()=>{}}/>);
        const instance = component.root;
        const div = instance.findByType('div');
        expect(div.children).toStrictEqual([`Status: Test status`])
    })
})

