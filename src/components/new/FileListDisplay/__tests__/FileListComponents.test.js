import React from 'react';
import {render} from '@testing-library/react';
import {FileListComponents} from "../FileListComponents";

xdescribe('FileListComponent', () => {

    it('should render successfully', () => {
        const {container} = render(<FileListComponents/>);
        expect(container.querySelector("[data-testid=\"FileListComponents\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        const {baseElement} = render(<FileListComponents/>);
        expect(baseElement).toMatchSnapshot();
    });

});