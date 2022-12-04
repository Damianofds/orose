import { Heading, SimpleGrid, Box, Text} from "@chakra-ui/react"

export function UserJourney1(){
    return(
        <>
            <Heading fontSize={'lg'} className='jewel-type'>Start the Web3 experience</Heading>
            <br />
            <SimpleGrid minChildWidth='150px' spacing={10}>
                <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                <Heading as='h2' fontSize={'xl'}>Learn the basics of Web3 and Digital Assets</Heading>
                <Text fontSize={['sm']}>👛 Open a crypto wallet and put some coins in 🪙</Text> 
                </Box>
                <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                <Heading as='h2' fontSize={'xl'}>Mint the NFT for 0.1 ETH</Heading>
                <Text fontSize={'sm'}>Get the ownership of the digital collectible 📿</Text> 
                </Box>
            </SimpleGrid>
            <Heading fontSize={'xl'} className='jewel-type'>Already a Web3 user? Scroll down NOW! 👇</Heading>
        </>
    );
}

export function UserJourney2(){
    return(
        <>
            <SimpleGrid minChildWidth='150px' spacing={10}>
                <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                    <Heading as='h2' fontSize={'xl'}>Access to the NFT lounge</Heading>
                    <Text fontSize={'sm'}>You have now claiming rights for physical jewel ✌️</Text> 
                </Box>
                <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                    <Heading as='h2' fontSize={'xl'}>Hodl or trader?</Heading>
                    <Text fontSize={'sm'}>Do you want to hold it and sell the claiming rights later? 😏</Text> 
                </Box>
            </SimpleGrid>
        </>
    );
}