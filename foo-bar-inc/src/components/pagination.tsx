import React from 'react';
import styled from 'styled-components';

import Button from "./button";

const StyledPagination = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 2em;
  text-align: center;
`;

const PaginationInfo = styled.div`
  margin: 0 1em;
`;

/**
 * Pagination component that shows previous and next page button as well as current page and amount of pages
 */
const Pagination = ({
    pageSize,
    currentPage,
    totalItems,
    onChangePage
  }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <StyledPagination>
      <Button
        disabled={currentPage === 1}
        onClick={() => onChangePage(--currentPage)}
      >
        Previous Page
      </Button>
      <PaginationInfo>Page {currentPage} of {totalPages}</PaginationInfo>
      <Button
        disabled={currentPage === totalPages}
        onClick={() => onChangePage(++currentPage)}
      >
        Next Page
      </Button>
    </StyledPagination>
  );
};

export interface PaginationProps {
  // The amount of items to a page
  pageSize: number;
  // The current pagr
  currentPage: number;
  // The total amount of items
  totalItems: number;
  // Callback event when previous or next button is clicked (use this to set the page)
  onChangePage: (newPage: number) => void;
}

export default Pagination;
