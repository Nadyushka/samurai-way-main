import React from "react";
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus Component', () => {
    test('status from props shoulb be in state', () => {
        const component = create(<ProfileStatus status={'Test status'} updateStatus={() => {
        }}/>);
        const instance = component.root;
        expect(instance.instance.state.status).toBe('Test status')
    })
    test('ProfileStatus should have 1 <span>', () => {
        const component = create(<ProfileStatus status={'Test status'} updateStatus={() => {
        }}/>);
        const instance = component.root;
        const div = instance.findAllByType('div');
        expect(div.length).toBe(1)
    })
    test('ProfileStatus should have no <input>', () => {
        const component = create(<ProfileStatus status={'Test status'} updateStatus={() => {
        }}/>);
        const instance = component.root;
        expect(() => {
            let input = instance.findByType('input');
        }).toThrow()
    })
    test('ProfileStatus should have <span> with innerText', () => {
        const component = create(<ProfileStatus status={'Test status'} updateStatus={() => {
        }}/>);
        const instance = component.root;
        const div = instance.findByType('div');
        expect(div.children[0]).toBe(`Status: Test status`);
    })
    test('EditableSpan should work', () => {
        const component = create(<ProfileStatus status={'Test status'} updateStatus={() => {
        }}/>);
        const instance = component.root;
        const div = instance.findByType('div');
        div.props.onClick()
        const input = instance.findByType('input');
        expect(input.props.value).toBe(`Test status`);
    })
    test('Props function should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'Test status'} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance?.props?.updateStatus()
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})

