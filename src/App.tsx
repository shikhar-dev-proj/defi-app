import {
  Box, ChakraProvider, Flex, Grid,
  Spacer,
  Spinner,
  Text,
  theme,
  useClipboard
} from "@chakra-ui/react"
import axios from "axios";
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { FaClipboardCheck, FaRegCopy } from "react-icons/fa";
import { formatAddress } from "./utils";

export const App = () => {

  const [address, setAddress] = useState('');
  const [trimmedAddress, setTrimmedAddress] = useState('');
  const { hasCopied, onCopy } = useClipboard(address);

  async function connect() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log(provider)
      let accounts = await provider.send("eth_requestAccounts", [])
      let account = accounts[0]
      setAddress(account)
      setTrimmedAddress(formatAddress(account))
    }
  }

  // async function getPools() {
  //   const pools = await axios.post(
  //     'https://gateway.thegraph.com/api/1464c9756cf848bb444930c8f1ccdf87/subgraphs/id/3nXfK3RbFrj6mhkGdoKRowEEti2WvmUdxmz73tben6Mb',
  //     {
  //       query: `
  //       {
  //         pools {
  //           name
  //           optionType
  //           startTimestamp
  //           totalWithdrawn
  //           totalDeposited
  //           averageReturn
  //           totalVolumeInUsd
  //         }
  //       }`
  //     }
  //   )
  //   console.log(pools)
  //   return pools;
  // }

  useEffect(() => {
    connect()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" background='#000000' templateColumns='1fr 10fr'>
          <Grid borderRight='1px solid #212121'>
            
          </Grid>
          <Grid p={3} templateRows='3rem 1fr'>
            <Grid templateColumns='1fr 9rem'>
              <Spacer/>
              {
                address ?
                  <Flex alignItems='center' padding='0.5rem' border='1px solid' borderRadius='4px'>
                    <Text fontSize='1rem' fontWeight={600} mr='1rem'>{trimmedAddress}</Text>
                    {hasCopied ? <FaClipboardCheck color="green" fontSize='0.8rem'/> : <FaRegCopy cursor='pointer' color="white" fontSize='0.8rem' onClick={onCopy}/>}
                  </Flex>
                  : <Spinner/>
              }
            </Grid>
            <Spacer/>
          </Grid>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
