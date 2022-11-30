import Head from 'next/head';
import { Button, Divider, Heading, List, ListIcon, ListItem, Radio, RadioGroup, ScaleFade, Skeleton, Spacer, Stack, Text } from '@chakra-ui/react';
import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  OrderedList,
  UnorderedList,
  Icon,
  HStack,
  VStack,
  SimpleGrid,
  Image,
  Center
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'

const originalColors = ['#c27a74', '#2f2a22', '#2f2a22', '#c27a74', '#c27a74'];
const anchors =   ["home","collection","userJourney","faq","contacts"];

const App = () => {
    const [sectionsColor, setsectionsColor] = useState([...originalColors]),
     [sectionsAnchor, setsectionsAnchor] = useState([...anchors]),
     [fullpages, setfullpages] = useState([...anchors]);
    const { isOpen, onToggle } = useDisclosure();

    const onLeave = (origin: any, destination: any, direction: any) => {
        console.log("onLeave", { origin, destination, direction });
        if(destination.index == 2){
          setTimeout(onToggle,500);
        }else{
          if(isOpen){
            onToggle();
          }
        }
    }

    return (
              <div className="App">
                  <Head>
                    <title>✨ Oros&#232; collection💍💎📿</title>
                    <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300&family=Dosis:wght@200&display=swap" rel="stylesheet" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
                  </Head>
                  <ReactFullpage
                    navigation
                    // scrollHorizontally = {true}
                    onLeave={onLeave}
                    sectionsColor={sectionsColor}
                    anchors={sectionsAnchor}
                    render={comp =>
                      (
                      
                    <>
                      <div
                          id="menu"
                          className="menu"
                          style={{
                            position: "absolute",
                            left: "0px",
                            right: "0px",
                            top: 0,
                            height: "70px",
                            zIndex: 100,
                            backgroundColor: "#c27a74",
                          }}>
                          <a onClick={() => comp.fullpageApi.moveTo("home",1)} href="#" data-menuanchor='home'>
                            HOME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </a>
                          <a onClick={() => comp.fullpageApi.moveTo("collection",1)} href="#collection" data-menuanchor='collection'>
                            COLLECTION PREVIEW &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </a>
                          <a onClick={() => comp.fullpageApi.moveTo("userJourney",1)} href="#userJourney" data-menuanchor='userJourney'>
                            USER JOURNEY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </a>
                          <a onClick={() => comp.fullpageApi.moveTo("faq",1)} href="#faq" data-menuanchor='faq'>
                            FAQ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </a>
                          <a onClick={() => comp.fullpageApi.moveTo("contacts",1)} href="#contacts" data-menuanchor='contacts'>
                            CONTACTS
                          </a>
                          <br />
                          <Center h='40px' color='white'>
                            <Image src="/orose-logo.png" h='8' w='15'/>
                          </Center>
                      </div>
                  <ReactFullpage.Wrapper>
                            
                            
                        


                  <div key="section1" className="section">
                    <Center>
                      <Image src="/orose-animation.gif"/>
                    </Center>
                    <br />
                    {/* <Heading as='h1' size='lg' noOfLines={2}>
                    ✨ CLAIM YOUR JEWELLS, WEAR YOU NFTs! 💍💎📿
                    </Heading> */}
                  </div>
                  <div key="section2" className="section">
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>BRACELET</Heading>
                      <Center><Image src="/November2022-Photoshooting/bracelet-lisa-pink-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>BRACELET</Heading>
                      <Center><Image src="/November2022-Photoshooting/bracelet-lisa-black-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>BRACELET</Heading>
                      <Center><Image src="/November2022-Photoshooting/brecelet-fds-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>COMPOSITION</Heading>
                      <Center><Image  src="/November2022-Photoshooting/composition-on-mirror-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                      <Center><Image  src="/November2022-Photoshooting/earrings-first-lisa-pink-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                      <Center><Image src="/November2022-Photoshooting/earrings-lisa-basic-bubbles-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                      <Center><Image src="/November2022-Photoshooting/earrings-lisa-basic-shell-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                      <Center><Image src="/November2022-Photoshooting/earrings-lisa-basic-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                      <Center><Image src="/November2022-Photoshooting/earrings-second-lisa-pink-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>PENDANT</Heading>
                      <Center><Image src="/November2022-Photoshooting/pendant-maternity-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>PIERCING</Heading>
                      <Center><Image src="/November2022-Photoshooting/piercing-fds-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image src="/November2022-Photoshooting/ring-lisa-queen-black-hardcore-2-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image src="/November2022-Photoshooting/ring-lisa-queen-black-hardcore-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image src="/November2022-Photoshooting/ring-lisa-queen-green-hardcore-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image src="/November2022-Photoshooting/ring-lisa-queen-of-stones-rescaled.jpg" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image src="/November2022-Photoshooting/ring-max-king-rescaled.jpg" /></Center>
                    </div>
                    
                    {/* <Text fontSize='2xl'>👨🏽‍🤝‍👨🏻&nbsp;As a fine jewellery collection oros&#232;, each physical element is forged together with its own digital twin.</Text>
                    <Text fontSize='2xl'>🌍&nbsp;Each oros&#232; jewel can be wore, shown, bought or sold throughout the physical world as well as in the metaverse.</Text>
                    <Text fontSize='2xl'>👩‍💻🧜&nbsp;With the purchase of the digital one you get the exclusive option to claim the physical one.</Text> */}

                  </div>
                  <div id="section3" key="section3" className="section">
                    <SimpleGrid minChildWidth='150px' spacing={10}>
                      <ScaleFade initialScale={0.9} in={isOpen}>
                        <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                          <Heading as='h2' fontSize={'xl'}>Learn the basics of Web3 and Digital Assets</Heading>
                          <Text fontSize={['sm']}>👛 Open a crypto wallet and put some coins in 🪙</Text> 
                        </Box>
                      </ScaleFade>
                      <ScaleFade initialScale={0.9} in={isOpen}>
                        <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                          <Heading as='h2' fontSize={'xl'}>Mint the NFT for 0.1 ETH</Heading>
                          <Text fontSize={'sm'}>Get the ownership of the digital collectible 📿</Text> 
                        </Box>
                      </ScaleFade>
                      <ScaleFade initialScale={0.9} in={isOpen}>
                        <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                          <Heading as='h2' fontSize={'xl'}>Access to the NFT lounge</Heading>
                          <Text fontSize={'sm'}>You have now claiming rights for physical jewel ✌️</Text> 
                        </Box>
                      </ScaleFade>
                      <ScaleFade initialScale={0.9} in={isOpen}>
                        <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                          <Heading as='h2' fontSize={'xl'}>Hodl or trader?</Heading>
                          <Text fontSize={'sm'}>Do you want to hold it and sell the claiming rights later? 😏</Text> 
                        </Box>
                      </ScaleFade>
                    </SimpleGrid>
                  </div>
                  <div key="section4" className="section">
                    <Heading as="h2">ABOUT PAYMENTS</Heading>
                    <Accordion allowToggle>
                        <AccordionItem>
                          <h2>
                            <AccordionButton _expanded={{ bg: '#C0000011' }}>
                              <Box flex='1' textAlign='left'>
                                WHY SHALL I TRUST THIS? I DON&apos;T KNOW WHO YOU ARE
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                          </AccordionPanel>
                        </AccordionItem>
                      <AccordionItem>
                          <h2>
                            <AccordionButton _expanded={{ bg: '#C0000011' }}>
                              <Box flex='1' textAlign='left'>
                                Can&apos;t you take straight my normal money?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Not for this project. We may accept normal currencies like &euro; or $ for upcoming collections, but oros&#232; is ETH only.
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                      <br /><br />
                      <Heading as="h2">ABOUT TRUST</Heading>
                      <Accordion allowToggle>
                        <AccordionItem>
                          <h2>
                            <AccordionButton _expanded={{ bg: '#C0000011' }}>
                              <Box flex='1' textAlign='left'>
                                WHERE ALL THE PRICE GOES 
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            50% Material; 20% Goldshmit production, 10% Digital production, 10% Shipping costs
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton _expanded={{ bg: '#C0000011' }}>
                              <Box flex='1' textAlign='left'>
                                Why shall I trust this? I don&apos;t know who you are.
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            You can check professional tracks of Damiano and Lisa on Linkedin and reach out to us any time. Very happy to meet you!
                          </AccordionPanel>
                        </AccordionItem>

                      <AccordionItem>
                          <h2>
                            <AccordionButton _expanded={{ bg: '#C0000011' }}>
                              <Box flex='1' textAlign='left'>
                                Q: Why shall I trust this? I don&apos;t know crypto neither nftS.
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            A: If you own one of our NFTs you get 12/24h live chat support with us about any purchase and you can schedule unlimited 1:1 crypto onboarding sessions with one of us.
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                  </div>
                  <div key="section5" id="section5" className="section" style={{textAlign: "center"}}>
                    <Text fontSize='xl'>
                      The project will be in stealth mode untill its public launch in Q1 2023                      <br />
                    </Text>
                    <br />
                    <Text fontSize='xl'>We are 2 founders and some early adopters</Text>
                    <Text fontSize='xl'>Founder1 - physical Goldsmithing</Text>
                    <Text fontSize='xl'>Founder2 - digital Engineering</Text>
                    <br />
                    <Text fontSize='xl'>
                      🌍 Frankfurt am Main - Germany
                    </Text>
                    <br />
                    <Text fontSize='xl'>
                      Would you like hear more about becoming an early adopter?<br/>write us at <strong>info@orose.gold</strong> 
                    </Text>
                  </div>
                  
              </ReactFullpage.Wrapper></>
            )
          }
        />
      </div>
    );
}

export default App;














