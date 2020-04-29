import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, Box, Text } from 'force-components';

import {
  fetchCustomerPosts,
  CustomerPostsState,
  CustomerPost,
} from './customerPostsSlice';
import { RootState } from '../../../../app/store';
import Loading from '../../../../components/Loading';
import Message from '../../../../components/Message';

const noPostsMessage = 'Não há posts!';

const CustomerPosts: FC<{}> = () => {
  const dispatch = useDispatch();
  const customerPosts: CustomerPostsState = useSelector((props: RootState) => {
    return props.customerPosts;
  });

  const customerId: number | undefined = useSelector((props: RootState) => {
    return props.customers.current?.id;
  });

  useEffect(() => {
    customerId && dispatch(fetchCustomerPosts(customerId));
  }, [dispatch, customerId]);

  if (customerPosts.isLoading) {
    return <Loading />;
  }

  if (!customerPosts.items.length) {
    return <Message text={noPostsMessage} />;
  }

  return (
    <List>
      {customerPosts.items.map((current: CustomerPost) => {
        return (
          <ListItem key={current.id}>
            <Box
              bg={current.id % 2 === 0 ? 'colorBlue100' : 'colorBlue200'}
              p="3"
            >
              <Text fontWeight="600">{current.title}</Text>
              <Text>{current.body}</Text>
            </Box>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CustomerPosts;
