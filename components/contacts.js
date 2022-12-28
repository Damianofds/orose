import { Text, Image } from "@chakra-ui/react"

export function Contacts(){
    return(
        <>
            <br/><br/>
            <Image maxHeight='200px' src="lisa-bracelet.png" style={{
                textAlign: 'right'
            }}/>
            <Text fontSize='xl'>
                The project will be in stealth mode untill its public launch in Q1 2023                      <br />
            </Text>
            <br />
            <Text fontSize='xl'>12 Members - our early crypto-jewell-gated community</Text>
            <Text fontSize='xl'>Founder1 - physical Goldsmithing</Text>
            <Text fontSize='xl'>Founder2 - digital Engineering</Text>
            <br />
            <Text fontSize='xl'>
                🌍 Frankfurt am Main - Germany
            </Text>
            <br />
            <Text fontSize='xl'>
                Would you know more about oros&#232;?<br/>drop an email at<br /><italic>EMAIL COMING SOON :)</italic> 
            </Text>
        </>
    );
}