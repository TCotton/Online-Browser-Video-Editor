import React from 'react';
import { render } from '@testing-library/react';
import { Sound } from '../Sound.jsx';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn()
}));
 
describe('Sound', () => {

    it('should render successfully', () => {
        const {container} = render(<Sound />);
        expect(container.querySelector("[data-testid=\"sound\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        const {baseElement} = render(<Sound />);
        expect(baseElement).toMatchSnapshot();
    });

});