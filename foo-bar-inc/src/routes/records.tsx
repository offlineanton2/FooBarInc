import React, { useState} from 'react';
import styled from 'styled-components';

import data from '../data';
import RecordItem, {
  Address,
  Controls,
  Price,
  Date
} from '../components/record-item';
import Pagination from "../components/pagination";

const RecordItems = styled.div`
  margin: 2em auto;
  max-width: 800px;
  padding: 2em;
`;

const RecordItemsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;

const Records = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dataDisplayed = data.slice(currentPage * 30 - 30, currentPage * 30);

  return (
    <RecordItems>
      <RecordItemsHeader>
        <Address>Address</Address>
        <Date>Date of Transfer</Date>
        <Price>Price</Price>
        <Controls></Controls>
      </RecordItemsHeader>
      {dataDisplayed.map((record) => {
        return <RecordItem key={record.transactionUniqueIdentifier} {...record}/>
      })}
      <Pagination
        pageSize={30}
        currentPage={currentPage}
        totalItems={data.length}
        onChangePage={(newPage) => { setCurrentPage(newPage); }}
      />
    </RecordItems>
  );
};



export default Records;
