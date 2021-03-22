import React from "react";
import {render} from "@testing-library/react";
import {ImageFramesComponent} from '../ImageFramesComponent';

describe('ImageFramesComponent', () => {

    it('should render successfully', () => {
        const props = {
            images: ['image.png']
        }
        const {container} = render(<ImageFramesComponent {...props} />);
        expect(container.querySelector("[data-testid=\"ImageFramesComponent\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        const props = {
            images: ['image.png']
        }
        const {baseElement} = render(<ImageFramesComponent {...props} />);
        expect(baseElement).toMatchSnapshot();
    });

    it('should contain image with src of `image.png`', () => {
        const props = {
            images: ['image.png']
        }
        const {container} = render(<ImageFramesComponent {...props} />);
        const image = container.querySelector("[data-testid=\"ImageFramesComponent\"] img");
        expect(image.src).toContain('image.png');
    });

});