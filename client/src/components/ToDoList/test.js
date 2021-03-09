import { render } from '@testing-library/react';
import React from 'react';
import ToDoList from './ToDoList';

describe('ToDoList', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ToDoList {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ToDoList')).toBeTruthy();
    });
});
