import React from 'react';
import { Play } from '../Play';

import { render } from '@testing-library/react';
 
describe('Play', () => {

    it('should render successfully', () => {
        const {container} = render(<Play />);
        expect(container.querySelector("[data-testid=\"play\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        const {baseElement} = render(<Play />);
        expect(baseElement).toMatchSnapshot();
    });

});