import React from 'react';
import styled from 'styled-components';
import Button from "./button";

const StyledPagination = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const PaginationInfo = styled.div`
  margin: 0 1em;
`;

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
  // The amount of pages
  pageSize: number;
  currentPage: number;
  totalItems: number;
  onChangePage: (newPage: number) => void;
}

export default Pagination;
