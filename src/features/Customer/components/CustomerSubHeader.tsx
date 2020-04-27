import React, { FC } from 'react';
import { Box, Text } from 'force-components';
import { Link } from 'react-router-dom';

const CustomerSubHeader: FC<{}> = () => {
  return (
    <Box
      borderColor="colorGreen100"
      borderWidth="1"
      borderStyle="solid"
      display="flex"
    >
      <Box pl="2" pr="2">
        <Link to="/9/photos">
          <Text>Fotos</Text>
        </Link>
      </Box>
      <Box pl="2" pr="2">
        <Link to="/9/posts">
          <Text>Posts</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default CustomerSubHeader;
