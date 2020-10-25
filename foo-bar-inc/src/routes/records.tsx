import React, { useState} from 'react';
import styled from 'styled-components';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment, { Moment } from "moment";

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

const DateRangePickerContainer = styled.div`
  margin-bottom: 2em;
`;

/**
 * The records route that shows all of the records
 * Contains a date picker to limit the records shown
 */
const Records = () => {
  moment.locale('en-GB');

  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<"startDate" | "endDate" | null>(null);

  // Filter the data using the start and end date selected
  const filteredData = data.filter(data => {
    if (!startDate && !endDate) return data;
    if (!endDate) return moment(data.dateOfTransfer) > moment(startDate);
    if (!startDate) return moment(data.dateOfTransfer) < moment(endDate);
    return moment(data.dateOfTransfer) > moment(startDate) && moment(data.dateOfTransfer) < moment(endDate);
  });

  // Show only the date on the current page
  const dataDisplayed = filteredData.slice(currentPage * 30 - 30, currentPage * 30);

  return (
    <RecordItems>
      <h2>House Price Paid Data</h2>
      <DateRangePickerContainer>
        {/* Airbnb's date picker component */}
        <DateRangePicker
          startDate={startDate}
          startDateId="recordStartDateRangePicker"
          endDate={endDate}
          endDateId="recordEndDateRangePicker"
          onDatesChange={({ startDate, endDate }) => {
            setCurrentPage(1);
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={focusedInput => setFocusedInput(focusedInput)}
          isOutsideRange={() => false}
          displayFormat='DD/MM/YYYY'
        />
      </DateRangePickerContainer>

      {!dataDisplayed.length ? (
        <p>There is no data to display.</p>
      ) : (
        <>
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
            totalItems={filteredData.length}
            onChangePage={(newPage) => { setCurrentPage(newPage); }}
          />
        </>
      )}
    </RecordItems>
  );
};

export default Records;
