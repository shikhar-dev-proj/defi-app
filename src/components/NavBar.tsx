import { Grid, Heading, HStack, Spacer, VStack } from "@chakra-ui/react"
import {AiFillDollarCircle} from 'react-icons/ai';
import { FaGem, FaKey, FaPiggyBank } from 'react-icons/fa'
import { AiOutlineSwap } from 'react-icons/ai'

export const NavBar = () => {
  return (
    <Grid borderRight='1px solid #212121' templateRows='1fr 4fr 5fr 4fr'>
      <HStack p='2rem'>
        <AiFillDollarCircle color="#5394ff" fontSize='2rem'/>
        <Heading fontSize='2rem' color='white'>DefiX</Heading>
      </HStack>
      <VStack>
        <HStack cursor='pointer' width='100%' p='1rem' pl='2rem' justifyContent='flex-start' gap={1} >
          <FaGem color="white" fontSize='1rem'/>
          <Heading fontSize='1rem' color='white'>Options</Heading>
        </HStack>
        <HStack cursor='pointer' width='100%' p='1rem' pl='2rem' justifyContent='flex-start' gap={1} bg='rgba(82, 148, 255, 0.2)'>
          <FaPiggyBank color="#5394ff" fontSize='1rem'/>
          <Heading fontSize='1rem' color='#5394ff'>Pools</Heading>
        </HStack>
        <HStack cursor='pointer' width='100%' p='1rem' pl='2rem' justifyContent='flex-start' gap={1} >
          <FaKey color="white" fontSize='1rem'/>
          <Heading fontSize='1rem' color='white'>Stake</Heading>
        </HStack>
        <HStack cursor='pointer' width='100%' p='1rem' pl='2rem' justifyContent='flex-start' gap={1} >
          <AiOutlineSwap color="white" fontSize='1rem'/>
          <Heading fontSize='1rem' color='white'>Swap</Heading>
        </HStack>
      </VStack>
      <Spacer/>
      <VStack></VStack>
    </Grid>
  )
}