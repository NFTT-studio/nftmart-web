import React from 'react';
import { Flex, FlexProps, Box } from '@chakra-ui/react';

import Main from './Main';

// eslint-disable-next-line arrow-body-style
const Container = ({ children, ...flexProps }: FlexProps) => {
  return (
    <Box>
      <Flex direction="column" alignItems="center" justifyContent="flex-start" {...flexProps}>
        <Main>{children}</Main>
      </Flex>
    </Box>
  );
};

export default Container;
