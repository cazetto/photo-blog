import React, { FC } from 'react';
import { Box, Text } from 'force-components';

const Header: FC<{}> = () => {
  return (
    <Box
      bg="colorGray900"
      height="80px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p="2"
    >
      <Text fontSize="22px" color="colorBlue200">
        P H O T O B L O G
        <Box bg="colorBlue200" height="4px" opacity={0.5} />
      </Text>
    </Box>
  );
};

export default Header;
