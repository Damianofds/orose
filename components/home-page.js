import React from "react"
import { Heading, Center, Box } from "@chakra-ui/react"

export default function HomePage(){
    return(
        <>
            <Center>
                {/* <Image src="/orose-animation.gif"/> */}
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
                <video controls autoplay muted loop>
                    <source src="orose-animation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Heading as='h1' size='lg' noOfLines={2}>
                ✨ CLAIM YOUR JEWELLS, WEAR YOUR NFTs! 💍💎📿
                </Heading>
            </Center>
            <br />
            <Heading fontSize={'xl'} className='jewel-type'>Scroll down for knowing more! 👇</Heading>
        </>
    );
}