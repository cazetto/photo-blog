import React, { FC } from 'react';
import { Box, Text } from 'force-components';
import { useRouteMatch } from 'react-router-dom';
import { Customer } from '../customerSlice';
import Link from '../../../components/Link';

interface ICustomerSubHeader {
  customer?: Customer;
}

const CustomerSubHeader: FC<ICustomerSubHeader> = ({ customer }) => {
  const matchPhotos: boolean = Boolean(useRouteMatch('/:userId/photos'));
  const matchPosts: boolean = Boolean(useRouteMatch('/:userId/posts'));

  return (
    <Box m="1" display="flex" justifyContent="center">
      <Box pl="3" pr="3" bg={matchPhotos ? 'colorBlue100' : undefined}>
        <Link to={`/${customer?.id}/photos`}>
          <Text>Fotos</Text>
        </Link>
      </Box>
      <Box pl="3" pr="3" bg={matchPosts ? 'colorBlue100' : undefined}>
        <Link to={`/${customer?.id}/posts`}>
          <Text>Posts</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default CustomerSubHeader;
