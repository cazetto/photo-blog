import React, { FC } from 'react';
import { Box, Text } from 'force-components';

const Message: FC<{ text: string }> = ({ text }) => {
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text>{text}</Text>
    </Box>
  );
};

export default Message;
