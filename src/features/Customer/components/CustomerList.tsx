import React, { FC } from 'react';
import { List, ListItem, Box, Text } from 'force-components';
import { Link } from 'react-router-dom';
import { Customer } from '../customerSlice';

// import { StyledListItem as LI } from './CustomerList.styled';

interface ICustomersList {
  customers?: Customer[];
}

const CustomerList: FC<ICustomersList> = ({ customers }) => {
  return (
    <List>
      {customers?.map((item: Customer) => {
        return (
          <ListItem key={item.id}>
            <Link to={`/${item.id}/photos`}>
              <Box
                p="3"
                borderColor="colorBlue200"
                borderStyle="solid"
                borderWidth="1"
              >
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
                <Text>{item.company.name} </Text>
              </Box>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CustomerList;
