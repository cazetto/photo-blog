import React, { FC } from 'react';
import { Box, Text } from 'force-components';
import { Link } from 'react-router-dom';
import { Customer } from '../customerSlice';

interface ICustomerSubHeader {
  customer?: Customer;
}

const CustomerSubHeader: FC<ICustomerSubHeader> = ({ customer }) => {
  return (
    <Box
      borderColor="colorGreen100"
      borderWidth="1"
      borderStyle="solid"
      display="flex"
    >
      <Box pl="3" pr="3">
        <Link to={`/${customer?.id}/photos`}>
          <Text>Fotos</Text>
        </Link>
      </Box>
      <Box pl="3" pr="3">
        <Link to={`/${customer?.id}/posts`}>
          <Text>Posts</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default CustomerSubHeader;
