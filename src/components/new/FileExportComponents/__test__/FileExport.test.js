import React from 'react';
import { render } from '@testing-library/react';
import { FileExport } from '../FileExport';

describe('FileExport', () => {

    it('should render successfully', () => {
        const {container} = render(<FileExport />);
        expect(container.querySelector("[data-testid=\"file-export\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        const {baseElement} = render(<FileExport />);
        expect(baseElement).toMatchSnapshot();
    });

});