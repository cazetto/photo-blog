import React, { FC } from 'react';
import { Box, Text } from 'force-components';

const loadingMessage = 'Carregando...';

const Loading: FC<{}> = () => {
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text>{loadingMessage}</Text>
    </Box>
  );
};

export default Loading;
