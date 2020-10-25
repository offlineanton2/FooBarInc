import React from 'react';
import styled from 'styled-components';

import { Record } from '../data';
import Button from './button';
import Card from './card';

const Item = styled(Card)`
  margin-bottom: 1em;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Address = styled.div`
  width: 300px;
`;

export const Controls = styled.div`
  margin-left: 1em;
  width: 115px;
`;

export const AddressFormat = styled.span`
  text-transform: capitalize;
  padding-right: 0.5em;
`;

export const Price = styled.div`
  margin-left: 1em;
  width: 100px;
`;

export const Date = styled.div`
  margin-left: 1em;
  width: 155px;
`;

const RecordItem = (
  {
    primaryAddressableObjectName,
    street,
    postcode,
    price,
    dateOfTransfer,
    transactionUniqueIdentifier
  }: Record) => {
  return <Item>
    <Address>
      <AddressFormat>
        {primaryAddressableObjectName.toString().toLowerCase()} {street.toLowerCase()}
      </AddressFormat>
      <br />
      {postcode}
    </Address>
    <Date>{dateOfTransfer.split(' ')[0]}</Date>
    <Price>£{Number(price).toLocaleString('en')}</Price>
    <Controls>
      <Button
        as='a'
        href={`/${transactionUniqueIdentifier
          .replace('{', '')
          .replace('}', '')}`}
      >
        View details
      </Button>
    </Controls>
  </Item>;
};

export default RecordItem;
