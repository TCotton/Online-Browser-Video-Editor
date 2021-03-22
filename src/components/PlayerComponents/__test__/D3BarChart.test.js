import React from 'react';
import {render} from '@testing-library/react';
import D3BarChart from "../D3BarChart";

describe('D3BarChart', () => {

    const props = {
        setClass: jest.fn(),
        colour: '#000',
        padding: 10,
        height: 10,
        width: 10,
        data: 123
    }

    it('should render successfully', () => {
        const {container} = render(<D3BarChart {...props}/>);
        expect(container.querySelector("[data-testid=\"svg\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        const {baseElement} = render(<D3BarChart {...props}/>);
        expect(baseElement).toMatchSnapshot();
    });

    it('should call function setClass if data prop is more than 0',  () => {
        const mockFnc = jest.fn();
        props.setClass = mockFnc;
        render(<D3BarChart {...props}/>);
        expect(mockFnc.mock.calls.length).toBe(1);
    });

    it('should not call function is data prop is 0', () => {
        const mockFnc = jest.fn();
        props.setClass = mockFnc;
        props.data = 0
        render(<D3BarChart {...props}/>);
        expect(mockFnc.mock.calls.length).toBe(0);
    });

});