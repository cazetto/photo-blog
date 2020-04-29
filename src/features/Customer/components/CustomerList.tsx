import React, { FC } from 'react';
import { Box, Text } from 'force-components';
import { Customer } from '../customerSlice';
import Link from '../../../components/Link';

interface ICustomersList {
  customers?: Customer[];
  selectedCustomerId?: number | undefined;
}

const CustomerList: FC<ICustomersList> = ({
  customers,
  selectedCustomerId,
}) => {
  return (
    <Box
      display="flex"
      flexDirection={{ sm: 'row', md: 'column' }}
      overflowX="auto"
      overflowY="hidden"
      ml="1"
      mt="1"
      mb="1"
    >
      {customers?.map((item: Customer) => {
        return (
          <CustomerListItem
            item={item}
            isSelected={selectedCustomerId === item.id}
          />
        );
      })}
    </Box>
  );
};

const CustomerListItem: FC<{ item: Customer; isSelected: boolean }> = ({
  item,
  isSelected,
}) => {
  return (
    <Box key={item.id}>
      <Link to={`/${item.id}/photos`}>
        <Box
          p="3"
          bg={isSelected ? 'colorBlue200' : 'colorBlue000'}
          borderColor="colorBlue200"
          borderStyle="solid"
          borderWidth="1"
          height={{ xs: '120px', sm: '120px', md: 'auto' }}
          maxHeight={{ xs: '120px', sm: '120px', md: '120px' }}
        >
          <Text fontWeight="600" m="0">
            {item.name}
          </Text>
          <Text fontSize="12px" m="0" mt="2">
            {item.email}
          </Text>
          <Text fontSize="12px" m="0" mt="2">
            {item.company.name}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default CustomerList;
