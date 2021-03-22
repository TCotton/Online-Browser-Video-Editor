import React from 'react';
import {render} from '@testing-library/react';
import {FileListComponents} from "../FileListComponents";

describe('FileListComponent', () => {

    const props = {
        data: [{
            id: 1,
            name: 'string',
            size: 999,
            type: 'string',
            lastModified: 999
        }]
    }

    it('should render successfully', () => {
        const {container} = render(<FileListComponents {...props} />);
        expect(container.querySelector("[data-testid=\"FileListComponents\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        const {baseElement} = render(<FileListComponents  {...props} />);
        expect(baseElement).toMatchSnapshot();
    });

    it('should match values',  () => {
        const {container} = render(<FileListComponents {...props} />);
        expect(container.querySelector("[data-testid=\"name\"]").textContent).toBe(props.data[0].name);
        expect(container.querySelector("[data-testid=\"size\"]").textContent).toBe('0MB');
    });
});