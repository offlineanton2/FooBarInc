import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import data from '../data';
import Button from "../components/button";
import Card from "../components/card";

const BackButton = styled(Button)`
  margin: 2em 0;
`;

const StyledRecord = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const Record = () => {
  const recordId = useLocation().pathname.replace('/', '');
  const record = data.filter(record => record.transactionUniqueIdentifier === `{${recordId}}`)[0];

  const propertyTypeMap: { [key: string]: string; } = {
    'D': 'Detached',
    'S': 'Semi-detached',
    'T': 'Terraced',
    'F': 'Flats/Maisonettes',
    'O': 'Other',
  };

  const oldNewMap: { [key: string]: string; } = {
    'Y': 'Newly built property',
    'N': 'Established residential building',
  };

  const durationMap: { [key: string]: string; } = {
    'F': 'Freehold',
    'L': 'Leasehold',
  };

  const PPDCategoryTypeMap: { [key: string]: string; } = {
    'A': 'Standard Price Paid entry',
    'B': 'Additional Price Paid entry',
  };

  return (
    <StyledRecord>
      <BackButton as='a' href='/'>Back to records</BackButton>
      <Card>
        <h2>Record Details:</h2>
        <p><b>Price:</b> £{Number(record.price).toLocaleString('en')}</p>
        <p><b>Date of Transfer:</b> {record.dateOfTransfer.split(' ')[0]}</p>
        <p><b>Postcode:</b> {record.postcode}</p>
        <p><b>Property Type:</b> {propertyTypeMap[record.propertyType]}</p>
        <p><b>Old/New:</b> {oldNewMap[record.oldNew]}</p>
        <p><b>Duration:</b> {durationMap[record.duration]}</p>
        <p>
          <b>Address:</b>
          &nbsp;{record.primaryAddressableObjectName} {record.secondaryAddressableObjectName} {record.street}
        </p>
        {record.locality && <p>
          <b>Locality: </b> {record.locality}
        </p>}
        <p><b>Town/City: </b> {record.townCity}</p>
        <p><b>District: </b> {record.district}</p>
        <p><b>County: </b> {record.county}</p>
        <p><b>PPD Category Type: </b> {PPDCategoryTypeMap[record.ppdCategoryType]}</p>
      </Card>
    </StyledRecord>
  );
};

export default Record;
