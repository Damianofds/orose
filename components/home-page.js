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
                Oros&#232; is a jewelry collection, it has gold and NFTs as founding materials.
            </Center>
        </>
    );
}

export function HomePageB() {
    return (
        <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
            Each unique piece can be wore at dinner in a reustarant or in a 1 on 1 work call in the metaverse.
        </Center>
    );
}

export function HomePageC() {
    return (
        <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
            We are launching on OpenSea our first collection in April 2023, as a first crowfounding round among enthusiast who believe in the project.
        </Center>
    );
}

export function HomePageD() {
    return (
        <>
            <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
                Let's keep in touch! follow us on Instagram, leave us a like comment and write us in DM.   
            </Center>
            <Center>
                <SocialIcon url="https://www.instagram.com/orose.gold" bgColor="#000000" />  
            </Center>
            <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
                Not into Web2 Social Media? 👉 <a href="mailto:hi@orose.com">hi@orose.com</a> 
            </Center>
        </>
    );
}