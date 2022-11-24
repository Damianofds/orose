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
import { useMetaMask } from "metamask-react";

const originalColors = ['#c27a74', '#2f2a22', '#2f2a22', '#c27a74', '#c27a74', '#c27a74', '#c27a74', '#c27a74'];
const originalPages = [{ text: "Section 1" }, { text: "Section 2" }, { text: "Section 3" }];
const anchors =   ["home","collection","userJourney","faq","contacts"];

const App = () => {
    const [sectionsColor, setsectionsColor] = useState([...originalColors]),
     [fullpages, setfullpages] = useState([...originalPages]);
    const { isOpen, onToggle } = useDisclosure();
    const { status, connect, account, chainId, ethereum } = useMetaMask();
debugger;

    if (status === "initializing"){
      console.log("Synchronisation with MetaMask ongoing...");
    }
    if (status === "unavailable"){
      console.log("MetaMask not available :(");
    }

    if (status === "notConnected"){
      console.log("Connect to MetaMask");
    } 

    if (status === "connecting"){
      console.log("Connecting...");
    }

    if (status === "connected"){
      console.log("Connected account: '" + account + "' on chain ID: '" + chainId + "'");
    }

    const onLeave = (origin, destination, direction) => {
        console.log("onLeave", { origin, destination, direction });
        if(destination.index == 2){
          setTimeout(onToggle,500);
        }else{
          if(isOpen){
            onToggle();
          }
        }
    }

  function moveTo(q) {
    fullpage_api.moveTo(2); return null;
  }

  const Menu = () => (
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
      <a onClick={moveTo} href="#" data-menuanchor='home'>
        HOME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </a>
      <a onClick={moveTo} href="#collection" data-menuanchor='collection'>
        COLLECTION PREVIEW &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </a>
      <a onClick={moveTo} href="#userJourney" data-menuanchor='userJourney'>
        USER JOURNEY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </a>
      <a onClick={moveTo} href="#faq" data-menuanchor='faq'>
        FAQ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </a>
      <a onClick={moveTo} href="#contacts" data-menuanchor='contacts'>
        CONTACTS
      </a>
      <br />
      <Center h='40px' color='white'>
        <Image src="/orose-logo.png" h='8' w='15'/>
      </Center>
    </div>
  );

    return (
              <div className="App">
        <Head>
          <title>✨ Oros&#232; collection💍💎📿</title>
          <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300&family=Dosis:wght@200&display=swap" rel="stylesheet" />
        </Head>
        <Menu />
        <ReactFullpage
          navigation
          // scrollHorizontally = {true}
          onLeave={onLeave}
          sectionsColor={sectionsColor}
          render={comp =>
            (<ReactFullpage.Wrapper>
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
                      <Center><Image src="/bracelet-lisa-line.png" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>BRACELET</Heading>
                      <Center><Image src="/bracelet-lisa-circle2.png" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>BRACELET</Heading>
                      <Center><Image src="/bracelet-lisa-circle.png" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                      <Center><Image src="/earrings.png/" boxSize={450} /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image  src="/ring-lisa-vertical.png" boxSize={550} /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image  src="/ring-lisa-top.png" boxSize={550} /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image src="/ring-lisa-horizontal.png" boxSize={550} /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image src="/lisa-gemstone-ring-under.png" boxSize={550} /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image src="/lisa-gemstone-ring-horizontal-under.png" boxSize={550} /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image src="/lisa-gemstone-ring-horizontal.png" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image src="/lisa-gemstone-ring-front.png" boxSize={550} /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>RING</Heading>
                      <Center><Image src="/gemstone-ring-lisa-horizontal.png" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                      <Center><Image src="/earrings-lisa-spheres4.png" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                      <Center><Image src="/earrings-lisa-spheres3.png" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                      <Center><Image src="/earrings-lisa-spheres2.png" /></Center>
                    </div>
                    <div className="slide">
                      <Heading fontSize='4xl' className='jewel-type'>EARRINGS</Heading>
                      <Center><Image src="/earrings-lisa-spheres.png" /></Center>
                    </div>
                    
                    {/* <Text fontSize='2xl'>👨🏽‍🤝‍👨🏻&nbsp;As a fine jewellery collection oros&#232;, each physical element is forged together with its own digital twin.</Text>
                    <Text fontSize='2xl'>🌍&nbsp;Each oros&#232; jewel can be wore, shown, bought or sold throughout the physical world as well as in the metaverse.</Text>
                    <Text fontSize='2xl'>👩‍💻🧜&nbsp;With the purchase of the digital one you get the exclusive option to claim the physical one.</Text> */}

                  </div>
                  <div id="section3" key="section3" className="section">
                    <SimpleGrid columns={2} spacing={10}>
                      <ScaleFade initialScale={0.9} in={isOpen}>
                        <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                          <Heading as='h2' fontSize={'2xl'}>Learn the basics of Web3 and Digital Assets</Heading>
                          <Text fontSize={'xl'}>Open a crypto wallet and put some coins in</Text> 
                        </Box>
                      </ScaleFade>
                      <ScaleFade initialScale={0.9} in={isOpen}>
                        <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                          <Heading as='h2' fontSize={'2xl'}>Mint the NFT for 0.1 ETH</Heading>
                          <Text fontSize={'xl'}>Get the ownership of the digital collectible</Text> 
                        </Box>
                      </ScaleFade>
                      <ScaleFade initialScale={0.9} in={isOpen}>
                        <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                          <Heading as='h2' fontSize={'2xl'}>Access to the NFT lounge</Heading>
                          <Text fontSize={'xl'}>You have now claiming rights for physical jewel ✌️</Text> 
                        </Box>
                      </ScaleFade>
                      <ScaleFade initialScale={0.9} in={isOpen}>
                        <Box height='150px' backgroundColor={'#c27a74'} padding={'10px'}>
                          <Heading as='h2' fontSize={'2xl'}>Hodl or trader?</Heading>
                          <Text fontSize={'xl'}>Do you want to hold it and sell the claiming rights later? 😏</Text> 
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
                                WHY SHALL I TRUST THIS? I DON'T KNOW WHO YOU ARE
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
                                Can't you take straight my normal money?
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
                                Why shall I trust this? I don't know who you are.
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
                                Q: Why shall I trust this? I don't know crypto neither nftS.
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
                    <Text fontSize='xl'>Founder1 - Goldsmith and manufacturing </Text>
                    <Text fontSize='xl'>Founder2 - Digital engineering</Text>
                    <br />
                    <Text fontSize='xl'>
                      🌍 Frankfurt am Main - Germany
                    </Text>
                    <br />
                    <Text fontSize='xl'>
                      Would you like hear more about becoming an early adopter?<br/>write us at <strong>info@orose.gold</strong> 
                    </Text>
                  </div>
                  
              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    );
}

export default App;














