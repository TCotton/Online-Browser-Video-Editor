import React from "react";
import {render} from "@testing-library/react";
import {D3LineTick} from "../D3LineTick";

describe('D3LineTick', () => {
    const props = {
        height: 999,
        width: 999,
        time: 12,
        data: {
            min_array: [1],
            max_array: [2],
            length: 123
        }
    }

    it('should render successfully', () => {
        const {container} = render(<D3LineTick {...props}/>);
        expect(container.querySelector("[data-testid=\"svg\"]")).not.toBeNull();
        expect(container.querySelector("[data-testid=\"axis\"]")).not.toBeNull();
        expect(container.querySelector("[data-testid=\"waveform\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        const {baseElement} = render(<D3LineTick {...props}/>);
        expect(baseElement).toMatchSnapshot();
    });

});

