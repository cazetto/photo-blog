import React, { FC } from 'react';
import { Box, Text } from 'force-components';
import { Customer } from '../customerSlice';

interface ICustomersInfo {
  customer?: Customer;
}

const CustomerInfo: FC<ICustomersInfo> = ({ customer }) => {
  return (
    <Box borderColor="colorBlue100" borderWidth="1" borderStyle="solid" p="3">
      <Text fontWeight="600">Name: {customer?.name}</Text>
      <Text fontSize="12px">
        <Text as="span" fontWeight="600">
          Email:
        </Text>
        {` ${customer?.email}`}
      </Text>
      <Text fontSize="12px">
        <Text as="span" fontWeight="600">
          User name:
        </Text>
        {` ${customer?.username}`}
      </Text>
      <Text fontSize="12px">
        <Text as="span" fontWeight="600">
          Company:
        </Text>
        {` ${customer?.company.name}`}
      </Text>
      <Text fontSize="12px">
        <Text as="span" fontWeight="600">
          Phone number:
        </Text>
        {` ${customer?.phone}`}
      </Text>
    </Box>
  );
};

export default CustomerInfo;
