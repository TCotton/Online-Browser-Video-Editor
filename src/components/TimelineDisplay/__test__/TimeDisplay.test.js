import React from 'react';
//import {render} from "@testing-library/react";
import {TimeDisplay} from "../TimeDisplay";
import {render} from '../../../test-utils'

describe('TimeDisplay', () => {

    it('should render successfully', () => {
        const {container} = render(<TimeDisplay/>, {
            initialState: {
                video: {
                    duration: 999,
                    time: 999,
                }
            }
        });
        expect(container.querySelector("[data-testid=\"TimeDisplay\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        const {baseElement} = render(<TimeDisplay/>, {
            initialState: {
                video: {
                    duration: 999,
                    time: 999,
                }
            }
        });
        expect(baseElement).toMatchSnapshot();
    });

});