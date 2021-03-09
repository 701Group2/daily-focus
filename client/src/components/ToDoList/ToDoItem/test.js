import { render } from '@testing-library/react';
import React from 'react';
import ToDoItem from './ToDoItem';

describe('ToDoItem', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ToDoItem {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ToDoItem')).toBeTruthy();
    });
});
