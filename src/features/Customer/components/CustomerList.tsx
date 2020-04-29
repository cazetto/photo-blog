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
    <Box height="130px" display="block" overflowX="auto" overflowY="hidden">
      <Box display="flex" flexDirection="row" p="0">
        {customers?.map((item: Customer) => {
          return (
            <CustomerListItem
              item={item}
              isSelected={selectedCustomerId === item.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};

const CustomerListItem: FC<{ item: Customer; isSelected: boolean }> = ({
  item,
  isSelected,
}) => {
  return (
    <Box key={item.id} m="1">
      <Link to={`/${item.id}/photos`}>
        <Box
          p="3"
          bg={isSelected ? 'colorBlue200' : 'colorBlue000'}
          borderColor="colorBlue200"
          borderStyle="solid"
          borderWidth="1"
          height="120px"
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
