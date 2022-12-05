import React from "react"
import { Heading, Center, Box } from "@chakra-ui/react"

export function HomePage(){
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
                {/* <div 
                        data-background-images="{}"
                        data-background-type="video"
                        data-video-src="https://www.youtube.com/embed/xDIEGG6aAkk"
                        data-video-loop="true"
                        data-video-play-only-visible="true"
                        data-video-lazy-load="true"data-video-fallback-src="https://www.buccellati.com/media/wysiwyg/1_Cover_221129.jpg"
                        data-element="wrapper"
                        data-pb-style="M4OC597"
                        data-jarallax=""></div> */}
            </Center>
        </>
    );
}

export function HomePage2(){
    return(
        <>
            <Center>
                <Heading as='h1' size='2xl' noOfLines={2}>
                ✨ CLAIM YOUR JEWELLS, WEAR YOUR NFTs! 💍💎📿
                </Heading>
            </Center>
            <br />
            <Heading fontSize={'xl'} className='jewel-type'>Scroll down for knowing more! 👇</Heading>
        </>
    );
}