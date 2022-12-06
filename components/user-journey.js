import { Heading, SimpleGrid, Box, Text} from "@chakra-ui/react"

export function UserJourney1(){
    return(
        <>
            <Heading fontSize={'3xl'} className='jewel-type'>JOIN THE WEB3 EXPERIENCE NOW!</Heading>
            <br />
            <SimpleGrid minChildWidth='150px' spacing={10}>
                <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                    <Heading as='h2' fontSize={'xl'}>Discover Web3 and Crypto!</Heading>
                    <Text fontSize={['sm']}>Cryptos like Ethereum and Bitcoin are making the web a better place for everybody, join the community!</Text> 
                </Box>
                <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                    <Heading as='h2' fontSize={'xl'}>👛Open a wallet and get some coins🪙</Heading>
                    <Text fontSize={'sm'}>Have you ever thought that one day the wallet in your pocket would get it digital twin in the browser?</Text> 
                </Box>
                <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                    <Heading as='h2' fontSize={'xl'}>Need help with your first step in Web3?</Heading>
                    <Text fontSize={'sm'}>Mint one Orose Jewel, you will get Damiano on a private call for helping you making your first crypto transaction!</Text> 
                </Box>
            </SimpleGrid>
            <Heading fontSize={'3xl'} className='jewel-type'>ALREADY KNOW WEB3?</Heading>
            <Heading fontSize={'3xl'} className='jewel-type'>Scroll down! 👇</Heading>
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
                    <Heading as='h2' fontSize={'xl'}>Mint the NFT for 0.1 ETH</Heading>
                    <Text fontSize={'sm'}>Get the ownership of the digital collectible 📿</Text> 
                </Box>
                <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                    <Heading as='h2' fontSize={'xl'}>Hodl or trader?</Heading>
                    <Text fontSize={'sm'}>Do you want to hold it and sell the claiming rights later? 😏</Text> 
                </Box>
            </SimpleGrid>
        </>
    );
}