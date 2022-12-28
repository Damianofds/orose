import React from "react"
import { Heading, Center, Box, position, Image } from "@chakra-ui/react"

export function HomePage() {
    return (
        <>
            <Center>
                <Heading as='h1' size='2xl' noOfLines={2} style={{
                    position: "absolute",
                    bottom: "25%"
                }}>
                    ✨ CLAIM YOUR JEWELLS, WEAR YOUR NFTs! 💍📿
                </Heading>
                <Heading fontSize={'xl'} className='jewel-type' style={{
                    position: "absolute",
                    bottom: "20%"
                }}>
                    Take a tour 🛵 Scroll down 👇  
                </Heading>
            </Center>
            <Center>
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
            </Center>
        </>
    );
}