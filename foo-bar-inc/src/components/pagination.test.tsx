import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Pagination from './pagination';

describe('Pagination', () => {
  let changePageCallback: (newPage: number) => void;

  beforeEach(() => {
    changePageCallback = jest.fn();
  });

  it('Renders a pagination element with the correct text and buttons', () => {
    render(<Pagination
      pageSize={10}
      currentPage={1}
      totalItems={170}
      onChangePage={() => {}}
    />);

    expect(screen.getByRole('button', { name: 'Previous Page' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next Page' })).toBeInTheDocument();

    expect(screen.getByText('Page 1 of 17')).toBeInTheDocument();
  });

  it('calls onChangePage with the current page minus one when Previous Page is clicked', () => {
    render(<Pagination
      pageSize={10}
      currentPage={5}
      totalItems={170}
      onChangePage={changePageCallback}
    />);

    fireEvent.click(screen.getByRole('button', { name: 'Previous Page' }));

    expect(changePageCallback).toHaveBeenCalledWith(4);
  });

  it('calls onChangePage with the current page plus one when Next Page is clicked', () => {
    render(<Pagination
      pageSize={10}
      currentPage={5}
      totalItems={170}
      onChangePage={changePageCallback}
    />);

    fireEvent.click(screen.getByRole('button', { name: 'Next Page' }));

    expect(changePageCallback).toHaveBeenCalledWith(6);
  });

  it('has the previous page button disabled when current page is 1', () => {
    render(<Pagination
      pageSize={10}
      currentPage={1}
      totalItems={170}
      onChangePage={changePageCallback}
    />);

    expect(screen.getByRole('button', { name: 'Previous Page' })).toBeDisabled();
  });

  it('has the next page button disabled when current page is the last page', () => {
    render(<Pagination
      pageSize={10}
      currentPage={17}
      totalItems={170}
      onChangePage={changePageCallback}
    />);

    expect(screen.getByRole('button', { name: 'Next Page' })).toBeDisabled();
  });
});
