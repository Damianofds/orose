import {
    Heading, Button, Image, Flex, Center, Box,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'

export default function Gallery() {
    return (
        <>
            <div className="slide">
            <Image src="/November2022-Photoshooting/bracelet-lisa-pink-rescaled.jpg" />
                <Box style={{
                    position: "absolute",
                    top: "10%",
                    left: "20px"
                }}>
                    <Popover>
                        <PopoverTrigger>
                            <strong><Button style={{ color:"#fff", backgroundColor:"#d5ae1f", fontSize:"90px"}}>DETAILS 👀</Button></strong>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>
                                <Heading fontSize='xl' className='jewel-type'>BRACELET</Heading>
                            </PopoverHeader>
                            <PopoverBody>
                                <Heading fontSize='xl' className='jewel-type'>22 karat - 900/1000</Heading>
                                <Heading fontSize='xl' className='jewel-type'>23 grams</Heading>
                                <Heading fontSize='xl' className='jewel-type'>Signature design</Heading>
                                <Heading fontSize='xl' className='jewel-type'>King 👑</Heading>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Box>
                
            </div>
            <div className="slide">
                <Image src="/November2022-Photoshooting/bracelet-lisa-black-rescaled.jpg" />
                <Heading fontSize='xl' className='jewel-type'>BRACELET</Heading>
                <Heading fontSize='xl' className='jewel-type'>22 karat - 23 grams</Heading>
            </div>
            <div className="slide">
                <Image src="/November2022-Photoshooting/brecelet-fds-rescaled.jpg" />
                <Heading fontSize='xl' className='jewel-type'>BRACELET</Heading>
                <Heading fontSize='xl' className='jewel-type'>18 karat - 20 grams</Heading>
            </div>
            <div className="slide">
                <Image src="/November2022-Photoshooting/composition-on-mirror-rescaled.jpg" />
                <Heading fontSize='xl' className='jewel-type'>COMPOSITION</Heading>
            </div>
            <div className="slide">
                <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                <Image src="/November2022-Photoshooting/earrings-first-lisa-pink-rescaled.jpg" />
            </div>
            <div className="slide">
                <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                <Image src="/November2022-Photoshooting/earrings-lisa-basic-bubbles-rescaled.jpg" />
            </div>
            <div className="slide">
                <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                <Image src="/November2022-Photoshooting/earrings-lisa-basic-shell-rescaled.jpg" />
            </div>
            <div className="slide">
                <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                <Image src="/November2022-Photoshooting/earrings-lisa-basic-rescaled.jpg" />
            </div>
            <div className="slide">
                <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                <Image src="/November2022-Photoshooting/earrings-second-lisa-pink-rescaled.jpg" />
            </div>
            <div className="slide">
                <Heading fontSize='4xl' className='jewel-type'>PENDANT</Heading>
                <Image src="/November2022-Photoshooting/pendant-maternity-rescaled.jpg" />
            </div>
            <div className="slide">
                <Heading fontSize='4xl' className='jewel-type'>PIERCING</Heading>
                <Image src="/November2022-Photoshooting/piercing-fds-rescaled.jpg" />
            </div>
            <div className="slide">
                <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                <Image src="/November2022-Photoshooting/ring-lisa-queen-black-hardcore-2-rescaled.jpg" />
            </div>
            <div className="slide">
                <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                <Image src="/November2022-Photoshooting/ring-lisa-queen-black-hardcore-rescaled.jpg" />
            </div>
            <div className="slide">
                <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                <Image src="/November2022-Photoshooting/ring-lisa-queen-green-hardcore-rescaled.jpg" />
            </div>
            <div className="slide">
                <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                <Image src="/November2022-Photoshooting/ring-lisa-queen-of-stones-rescaled.jpg" />
            </div>
            <div className="slide">
                <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                <Image src="/November2022-Photoshooting/ring-max-king-rescaled.jpg" />
            </div>
            {/* <Text fontSize='2xl'>👨🏽‍🤝‍👨🏻&nbsp;As a fine jewellery collection oros&#232;, each physical element is forged together with its own digital twin.</Text>
            <Text fontSize='2xl'>🌍&nbsp;Each oros&#232; jewel can be wore, shown, bought or sold throughout the physical world as well as in the metaverse.</Text>
            <Text fontSize='2xl'>👩‍💻🧜&nbsp;With the purchase of the digital one you get the exclusive option to claim the physical one.</Text> */}
        </>
    );
}