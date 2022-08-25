import { extendTheme } from '@chakra-ui/react';

import '@fontsource/inter';

export const theme = extendTheme({
  useSystemColorMode: true,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
  },
});