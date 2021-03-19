import React from 'react';
import {render} from '@testing-library/react';
import * as reactRedux from 'react-redux'
import DurationDisplay from '../DurationDisplay';

describe('DurationDisplay', () => {
    let useSelectorMock;

    beforeEach(() => {
        useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    });

    afterEach(() => {
        useSelectorMock.mockClear();
    });

    it('should render successfully', () => {
        useSelectorMock.mockReturnValue(0);
        const {container} = render(<DurationDisplay/>);
        expect(container.querySelector("[data-testid=\"duration\"]")).not.toBeNull();
    });

    it('should match snapshot', () => {
        useSelectorMock.mockReturnValue(0);
        const {baseElement} = render(<DurationDisplay/>);
        expect(baseElement).toMatchSnapshot();
    });

    it('should call useSelector', () => {
        render(<DurationDisplay/>);
        expect(useSelectorMock).toHaveBeenCalled();
    });

});