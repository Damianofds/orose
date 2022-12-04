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
  Center,
  Box,
  useDisclosure
} from '@chakra-ui/react';
import HomePage from "../components/home-page";
import Gallery from "../components/gallery";
import { UserJourney1, UserJourney2 } from "../components/user-journey";
import { Faq } from "../components/faq";
import { Contacts } from "../components/contacts";

const originalColors = ['#c27a74','#2f2a22','#2f2a22','#2f2a22','#c27a74','#c27a74'];
const anchors =   ["home","collection","userJourney1","userJourney2","faq","contacts"];

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
                    fixedElements="#menu"
                    // scrollHorizontally = {true}
                    onLeave={onLeave}
                    sectionsColor={sectionsColor}
                    anchors={sectionsAnchor}
                    render={comp =>
                      (
                      
                    <>
                  <ReactFullpage.Wrapper>
                      
                  <div key="section1" id="section1" className="section">
                    <div
                        id="menu"
                        className="menu"
                        style={{
                          position: "absolute",
                          left: "0px",
                          right: "0px",
                          top: 0,
                          height: "40px",
                          zIndex: 100,
                          backgroundColor: "#c27a74",
                        }}>
                        <SimpleGrid minChildWidth='50px' spacing={10}>
                          {/* <Box></Box> */}
                          <Box height='80px'>
                            <a onClick={() => comp.fullpageApi.moveTo("home",1)} href="#home" data-menuanchor='home'>
                              <Image src="/orose-logo.png" h='5' w='12.5'/>
                            </a>
                          </Box>
                          <Box height='80px'>
                            <a onClick={() => comp.fullpageApi.moveTo("collection",1)} href="#collection" data-menuanchor='collection'>
                              PREVIEW
                            </a>
                          </Box>
                          <Box height='80px'>
                            <a onClick={() => comp.fullpageApi.moveTo("userJourney1",1)} href="#userJourney1" data-menuanchor='userJourney1'>
                              USER JOURNEY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>
                          </Box>
                          <Box height='80px'>
                            <a onClick={() => comp.fullpageApi.moveTo("faq",1)} href="#faq" data-menuanchor='faq'>
                              FAQ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>
                          </Box>
                          <Box height='80px'>
                            <a onClick={() => comp.fullpageApi.moveTo("contacts",1)} href="#contacts" data-menuanchor='contacts'>
                              CONTACTS
                            </a>
                          </Box>
                          {/* <Box></Box> */}
                        </SimpleGrid>
                    </div>
                    <HomePage />
                  </div>
                  <div key="section2" id="section2" className="section">
                    <Gallery />
                  </div>
                  <div id="section3" key="section3" className="section">
                    <UserJourney1 />
                  </div>
                  <div id="section31" key="section31" className="section">
                    <UserJourney2 />
                  </div>
                  <div key="section4" id="section4" className="section">
                    <Faq />
                  </div>
                  <div key="section5" id="section5" className="section" style={{textAlign: "center"}}>
                    <Contacts />
                  </div>
                  
              </ReactFullpage.Wrapper></>
            )
          }
        />
      </div>
    );
}

export default App;














