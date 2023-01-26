import React from "react"
import { Heading, Center, Box, position, Image } from "@chakra-ui/react"
import { SocialIcon } from 'react-social-icons';


export function HomePage() {
    return (
        <>
            <Center>
                <Image src="/orose-logo.png" w='80vw' maxW='500px'/>
            </Center>
            <br />
            <Center style={{fontSize:"clamp(32px, 4vw, 78px)"}}>
                CREATE YOUR JEWELS,<br/>WEAR YOUR NFTs! ✨
            </Center>
            <Center style={{fontSize:"clamp(16px, 4vw, 24px)"}}>
                <br/>
                Learn more 👇
            </Center>
            {/* <Center style={{fontSize:"50px"}}>
                <Image src="/orose-logo.png" w='50'/>
                <Heading>CLAIM YOUR JEWELLS,<br/>WEAR YOUR NFTs! ✨</Heading> */}
                {/* <Heading as='h1' size='4xl' noOfLines={2} >
                    CLAIM YOUR JEWELLS,<br/>WEAR YOUR NFTs! ✨
                </Heading> */}
                {/* <Heading fontSize={'xl'} className='jewel-type' style={{
                    position: "absolute",
                    bottom: "20%"
                }}>
                    Take a tour 🛵 Scroll down 👇  
                </Heading> */}
            {/* </Center> */}
            {/* <Center>
                <Image src="/orose-animation-optimized-single-loop.gif" />
                {/* <Box
                    as='video'
                    controls
                    autoplay
                    muted
                    loop
                    src='orose-animation.mp4'
                    // poster=''
                    title='orose welcome animation'
                    objectFit='contain'
                    sx={{
                        aspectRatio: '16/9'
                    }}
                /> */}
                {/* <video autoPlay muted width="80%" style={{marginTop:"-10%"}}>
                    <source src="orose-animation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
        </>
    );
}

export function HomePageA() {
    return (
        <>
            <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
                Oros&#232; is a jewel collection,
            </Center>
            <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
                each unique piece is made of physical and digital goldsmith art.
            </Center>
        </>
    );
}

export function HomePageB() {
    return (
        <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
            The journey starts minting the digital jewel, then it can be customized, wore and traded in the metaverse.
        </Center>
    );
}

export function HomePageC() {
    return (
        <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
            Whenever you are ready, forge it and wear it in the real world!
        </Center>
    );
}

export function HomePageD() {
    return (
        <>
            <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
                We are launching our first collection in April, in the meanwhile follow us on Instagram!  
            </Center>
            <Center>
                <SocialIcon url="https://www.instagram.com/orose.gold" bgColor="#000000" />  
            </Center>
        </>
    );
}