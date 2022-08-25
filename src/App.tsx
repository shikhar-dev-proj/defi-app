import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" background='#000000' templateColumns='1fr 10fr'>
        <Grid borderRight='1px solid #212121'>
          
        </Grid>
        <Grid></Grid>
      </Grid>
    </Box>
  </ChakraProvider>
)
