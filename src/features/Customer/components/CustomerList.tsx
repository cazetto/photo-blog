import React, { FC } from 'react';
import { Box, Text } from 'force-components';
import { Customer } from '../customerSlice';
import Link from '../../../components/Link';

interface ICustomersList {
  customers?: Customer[];
}

const CustomerList: FC<ICustomersList> = ({ customers }) => {
  return (
    <Box display="block" overflowX="auto">
      <Box display="flex" flexDirection="row" p="0">
        {customers?.map((item: Customer) => {
          return (
            <Box key={item.id} m="1">
              <Link to={`/${item.id}/photos`}>
                <Box
                  p="3"
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
        })}
      </Box>
    </Box>
  );
};

export default CustomerList;
