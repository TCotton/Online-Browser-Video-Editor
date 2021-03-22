import React from 'react';
import { render } from '@testing-library/react';
import { Forward } from '../Forward';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn()
}));
 
describe('Forward', () => {

    it('should render successfully', () => {
        const {container} = render(<Forward />);
        expect(container.querySelector("[data-testid=\"forward\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        const {baseElement} = render(<Forward />);
        expect(baseElement).toMatchSnapshot();
    });

});