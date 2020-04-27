import React, { FC } from 'react';
import { Box, Text } from 'force-components';
import { Customer } from '../customerSlice';

interface ICustomersInfo {
  customer?: Customer;
}

const CustomerInfo: FC<ICustomersInfo> = ({ customer }) => {
  return (
    <Box borderColor="colorBlue100" borderWidth="1" borderStyle="solid" p="3">
      <Text>User info</Text>
      <Text>{customer?.name}</Text>
      <Text>{customer?.email}</Text>
      <Text>{customer?.username}</Text>
      <Text>{customer?.company.name}</Text>
      <Text>{customer?.phone}</Text>
    </Box>
  );
};

export default CustomerInfo;
