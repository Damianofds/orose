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
    AspectRatio
} from '@chakra-ui/react'

export default function Gallery() {
    return (
        <>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/bracelet-lisa-pink-rescaled.jpg"
                    details={["BRACELET", "22 karat - 900/1000", "23 grams", "Signature design", "", "King 👑"]} />
            </div>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/bracelet-lisa-black-rescaled.jpg"
                    details={["BRACELET", "22 karat - 900/1000", "23 grams", "Signature design", "", "King 👑"]} />
            </div>
            <div className="slide">
            <GalleryElement
                    imgSrc="/November2022-Photoshooting/brecelet-fds-rescaled.jpg"
                    details={["BRACELET", "18 karat - 750/1000", "20 grams", "Signature design", "", "King 👑"]} />
            </div>
            <div className="slide">
            <GalleryElement
                    imgSrc="/November2022-Photoshooting/composition-on-mirror-rescaled.jpg"
                    details={["COMPOSITION", "22 karat - 900/1000", "70 grams", "Signature design", "", "King 👑"]} />
            </div>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/earrings-first-lisa-pink-rescaled.jpg"
                    details={["EARRINGS", "22 karat - 900/1000", "", "Signature design", "", ""]} />
            </div>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/earrings-lisa-basic-bubbles-rescaled.jpg"
                    details={["EARRINGS", "22 karat - 900/1000", "", "Signature design", "", ""]} />
            </div>
            <div className="slide">
                <GalleryElement     
                    imgSrc="/November2022-Photoshooting/earrings-lisa-basic-shell-rescaled.jpg"
                    details={["EARRINGS", "22 karat - 900/1000", "", "Signature design", "", ""]} />
            </div>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/earrings-lisa-basic-rescaled.jpg"
                    details={["EARRINGS", "22 karat - 900/1000", "", "Signature design", "", ""]} />
            </div>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/earrings-second-lisa-pink-rescaled.jpg"
                    details={["EARRINGS", "22 karat - 900/1000", "", "Signature design", "", ""]} />
            </div>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/pendant-maternity-rescaled.jpg"
                    details={["PENDANT", "22 karat - 900/1000", "", "Signature design", "", ""]} />
            </div>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/piercing-fds-rescaled.jpg"
                    details={["PIERCING", "22 karat - 900/1000", "", "Signature design", "", ""]} />
            </div>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/ring-lisa-queen-black-hardcore-2-rescaled.jpg"
                    details={["RING", "22 karat - 900/1000", "", "Signature design", "", ""]} />
                <Image src="" />
            </div>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/ring-lisa-queen-black-hardcore-rescaled.jpg"
                    details={["RING", "22 karat - 900/1000", "", "Signature design", "", ""]} />
                <Image src="" />
            </div>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/ring-lisa-queen-green-hardcore-rescaled.jpg"
                    details={["RING", "22 karat - 900/1000", "", "Signature design", "", ""]} />
            </div>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/ring-lisa-queen-of-stones-rescaled.jpg"
                    details={["RING", "22 karat - 900/1000", "", "Signature design", "", ""]} />
            </div>
            <div className="slide">
                <GalleryElement
                    imgSrc="/November2022-Photoshooting/ring-max-king-rescaled.jpg"
                    details={["RING", "22 karat - 900/1000", "", "Signature design", "", ""]} />
            </div>
            {/* <Text fontSize='2xl'>👨🏽‍🤝‍👨🏻&nbsp;As a fine jewellery collection oros&#232;, each physical element is forged together with its own digital twin.</Text>
            <Text fontSize='2xl'>🌍&nbsp;Each oros&#232; jewel can be wore, shown, bought or sold throughout the physical world as well as in the metaverse.</Text>
            <Text fontSize='2xl'>👩‍💻🧜&nbsp;With the purchase of the digital one you get the exclusive option to claim the physical one.</Text> */}
        </>
    );
}

function GalleryElement({ imgSrc, details }) {
    return (
        <Box style={{position: "relative"}}>
            <AspectRatio minH='100vh' ratio={16 / 9}>
                <Image src={imgSrc} />
            </AspectRatio>

            <Box style={{
                position: "absolute",
                top: "10%",
                left: "85vw"
            }}>
                <Popover>
                    <PopoverTrigger>
                        <Button style={{ color: "#d5ae1f", fontSize: "20px" }}>?</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                            <Heading fontSize='xl' className='jewel-type'>{details[0]}</Heading>
                        </PopoverHeader>
                        <PopoverBody>
                            <Heading fontSize='xl' className='jewel-type'>{details[1]}</Heading>
                            <Heading fontSize='xl' className='jewel-type'>{details[2]}</Heading>
                            <Heading fontSize='xl' className='jewel-type'>{details[3]}</Heading>
                            <Heading fontSize='xl' className='jewel-type'>🪙🔨Mint it!</Heading>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>
        </Box>
    );
} 