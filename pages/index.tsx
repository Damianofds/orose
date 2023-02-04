import Head from 'next/head';
import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import {
  Image,
  Box,
  useDisclosure,
  Flex
} from '@chakra-ui/react';
import { HomePage, HomePageA, HomePageB, HomePageC, HomePageD } from "../components/home-page";
import Gallery from "../components/gallery";
import { Faq } from "../components/faq";
import { Contacts } from "../components/contacts";

const originalColors = ['#c27a74','#c27a74','#c27a74','#c27a74','#c27a74','#2f2a22','#2f2a22'];
const anchors =   ["home","homea","homeb","homec","homed","collection","contacts"];

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
                  </Head>
                  <ReactFullpage
                    navigation
                    menu="#menu"
                    // scrollHorizontally = {true}
                    licenseKey="KYOL9-JJ7GI-5XKE8-JNM36-CROVK"
                    scrollOverflow={false}
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
                        {/* <SimpleGrid minChildWidth='50px' spacing={10}> */}
                        <Flex as="nav"
                              // align="center"
                              justify="space-between"
                              // wrap="wrap"
                              w="60%"
                              marginLeft="20%" 
                              marginTop='5px'>
                          {/* <Box></Box> */}
                          <Box height='80px'>
                            <a onClick={() => comp.fullpageApi.moveTo("home",1)} href="#home" data-menuanchor='home'>
                              <Image src="/orose-logo.png" h='5' w='12.5' />
                            </a>
                          </Box>
                          <Box height='80px'>
                            <a onClick={() => comp.fullpageApi.moveTo("collection",1)} href="#collection" data-menuanchor='collection'>
                              GALLERY
                            </a>
                          </Box>
                          {/* <Box height='80px'>
                            <a onClick={() => comp.fullpageApi.moveTo("userJourney1",1)} href="#userJourney1" data-menuanchor='userJourney1'>
                              MEMBERSHIP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>
                          </Box> */}
                          {/* <Box height='80px'>
                            <a onClick={() => comp.fullpageApi.moveTo("faq",1)} href="#faq" data-menuanchor='faq'>
                              FAQ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>
                          </Box> */}
                          <Box height='80px'>
                            <a onClick={() => comp.fullpageApi.moveTo("contacts",1)} href="#contacts" data-menuanchor='contacts'>
                              ABOUT US
                            </a>
                          </Box>
                          {/* <Box></Box> */}
                        {/* </SimpleGrid> */}
                        </Flex>
                    </div>
                    <HomePage />
                  </div>
                  <div key="section11" id="section11" className="section">
                    <HomePageA />
                  </div>
                  <div key="section12" id="section12" className="section">
                    <HomePageB />
                  </div>
                  <div key="section13" id="section13" className="section">
                    <HomePageC />
                  </div>
                  <div key="section14" id="section14" className="section">
                    <HomePageD />
                  </div>
                  <div key="section2" id="section2" className="section">
                    <Gallery />
                  </div>
                  {/* <div id="section3" key="section3" className="section">
                    <UserJourney1 />
                  </div>
                  <div id="section31" key="section31" className="section">
                    <UserJourney2 />
                  </div> */}
                  {/* <div key="section4" id="section4" className="section">
                    <Faq />
                  </div> */}
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














