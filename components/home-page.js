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
                TRADE YOUR JEWELS,<br/>WEAR YOUR NFTs! ✨
            </Center>
            <Center style={{fontSize:"clamp(16px, 4vw, 24px)"}}>
                <br/>
                Learn more 👇
            </Center>
        </>
    );
}

export function HomePageA() {
    return (
        <>
            <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
                Oros&#232; is a jewelry collection made of Gold and NFTs
            </Center>
        </>
    );
}

export function HomePageB() {
    return (
        <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
            Wear Oros&#232; to bring beauty into your physical and digital life
        </Center>
    );
}

export function HomePageC() {
    return (
        <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
            First collection out in April 2023, you have the chanche to join our community EARLY
        </Center>
    );
}

export function HomePageD() {
    return (
        <>
            <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
                Let&apos;s keep in touch! follow us
            </Center>
            <br />
            <Center>
                <SocialIcon url="https://www.instagram.com/orose.gold" bgColor="#000000" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SocialIcon url="https://twitter.com/orosenft" bgColor="#000000" />
            </Center>
            <br />
            <Center style={{fontSize:"clamp(32px, 8vw, 72px)"}} maxW="80vw" marginLeft="10vw">
                Soon on OpenSea!
            </Center>
        </>
    );
}