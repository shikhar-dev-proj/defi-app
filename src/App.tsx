import {
  Box, ChakraProvider, Flex, Grid,
  Spacer,
  Spinner,
  Text,
  useClipboard
} from "@chakra-ui/react"
import axios from "axios";
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { FaClipboardCheck, FaRegCopy } from "react-icons/fa";
import { pools } from "./app.const";
import { NavBar } from "./components/NavBar";
import { Vault } from "./components/Vault";
import { theme } from "./theme";
import { formatAddress, token0, token1 } from "./utils";

export const App = () => {

  const [address, setAddress] = useState('');
  const [trimmedAddress, setTrimmedAddress] = useState('');
  const { hasCopied, onCopy } = useClipboard(address);

  const [personalisedPools, setPersonalisedPools] = useState([...pools])
  const [snackbar, setSnackbar] = useState(false)

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

  const poolHasEth = (p: any): boolean => token0(p.pairName).id === 'WETH' || token1(p.pairName).id === 'WETH'

  async function getProfileAttributes(address: string) {
    const res: any = await axios.get(`http://idu-onboarding-qa.zeotap.net/get/${address}`)

    if (res.data?.pool) {
      const interestedInEth = !!res.data.pool.find((p: any) => {
        const pairName = p.name.split(' ')[0]
        return token0(pairName).id === 'WETH' || token1(pairName).id === 'WETH'
      })
      if (interestedInEth) {
        setPersonalisedPools(pools.sort((p1, p2) => {
          if (poolHasEth(p1)) {
            return -1
          } else if (poolHasEth(p2)) {
            return 1
          } else return 0
        }))
      }
    }
  }

  useEffect(() => {
    connect()
  }, [])

  useEffect(() => {
    if (address) {
      getProfileAttributes('0x022e3ce4eda264b3e3fef62036c8182ceb88e6ce' || address)
    }
  }, [address])

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid height="100vh" overflow='hidden' background='#000000' templateColumns='1fr 8fr'>
          <NavBar />
          <Grid p={3} templateRows='3rem 1fr'>
            <Grid templateColumns='1fr 9rem'>
              <Spacer />
              {
                address ?
                  <Flex alignItems='center' padding='0.5rem' borderRadius='4px' bg='#5394ff'>
                    <Text fontSize='1rem' fontWeight={600} mr='1rem' color='black'>{trimmedAddress}</Text>
                    {hasCopied ? <FaClipboardCheck color="green" fontSize='0.8rem' /> : <FaRegCopy cursor='pointer' color="black" fontSize='0.8rem' onClick={onCopy} />}
                  </Flex>
                  : <Spinner />
              }
            </Grid>
            <Flex flexWrap='wrap' gap='4rem' m='2rem' p='2rem' maxHeight='50rem' overflow='auto'>
              {personalisedPools.map((p, i) => 
                <Box w='calc((100% - 10rem)/3)' >
                  <Vault key={i} pool={p}/>
                </Box>
              )}
            </Flex>
          </Grid>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
