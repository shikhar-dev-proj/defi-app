import { Box, Heading, HStack, Image, Tag, Text, VStack } from "@chakra-ui/react"
import { AiOutlineSwap } from "react-icons/ai"
import { FaKey } from "react-icons/fa"
import { formatBigNumber, token0, token1 } from "../utils"

export type PoolProps = {
  key: number
  pool: {
    "name": string
    "optionType": string
    "pairName": string
    "totalDeposited": string
    "totalWithdrawn": string
    "totalLocked": string
    "startTimestamp": string
    "totalAvailable": string
    "netSizeInUsd": string
    "averageReturn": string
    "totalVolume": string
  }
}

export const Vault = ({pool, key}: PoolProps) => {


  return (
    <Box key={key} h='23.75rem' bg='linear-gradient(rgb(15, 29, 78) 0%, rgb(7, 15, 44) 100%)' borderRadius='1rem' p={3}>
      <VStack mt={3}>
        <Tag size='lg' variant='outline' colorScheme='cyan'>
          {pool.name}
        </Tag>
        <HStack alignItems='center'>
          <Image boxSize='3rem' src={`${token0(pool.pairName).name}.png`}/>
          <AiOutlineSwap color="white" fontSize='1rem'/>
          <Image boxSize='3rem' src={`${token1(pool.pairName).name}.png`}/>
        </HStack>
      </VStack>
      <Image src='divider.svg' mt={2} mb={2}/>
      <VStack mt={10}>
        <HStack justifyContent='space-between' width='100%' pl='2rem' pr='2rem'>
          <Text fontSize='0.8rem' color='#5394ff'>Total Value Locked ($)</Text>
          <Heading fontSize='0.8rem' color='#5394ff'>{formatBigNumber(pool.totalLocked)}</Heading>
        </HStack>
        <Image src='divider.svg' mt={2} mb={2}/>
        <HStack justifyContent='space-between' width='100%' pl='2rem' pr='2rem'>
          <Text fontSize='0.8rem' color='#5394ff'>Total Deposited ($)</Text>
          <Heading fontSize='0.8rem' color='#5394ff'>{formatBigNumber(pool.totalDeposited)}</Heading>
        </HStack>
        <Image src='divider.svg' mt={2} mb={2}/>
        <HStack justifyContent='space-between' width='100%' pl='2rem' pr='2rem'>
          <Text fontSize='0.8rem' color='#5394ff'>Total Withdrawn ($)</Text>
          <Heading fontSize='0.8rem' color='#5394ff'>{formatBigNumber(pool.totalWithdrawn)}</Heading>
        </HStack>
        <Image src='divider.svg' mt={2} mb={2}/>
        <HStack justifyContent='space-between' width='100%' pl='2rem' pr='2rem'>
          <Text fontSize='0.8rem' color='#5394ff'>Average Return (%)</Text>
          <Heading fontSize='0.8rem' color='#5394ff'>{formatBigNumber(pool.averageReturn)}</Heading>
        </HStack>
        <Image src='divider.svg' mt={2} mb={2}/>
        <HStack justifyContent='space-between' width='100%' pl='2rem' pr='2rem'>
          <Text fontSize='0.8rem' color='#5394ff'>Started at</Text>
          <Heading fontSize='0.8rem' color='#5394ff'>{new Date(+pool.startTimestamp).toString().slice(0, 16)}</Heading>
        </HStack>
      </VStack>
    </Box>
  )
}