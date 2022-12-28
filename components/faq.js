import {
    Heading,
    Accordion,
    Box,
    AccordionItem,
    AccordionIcon,
    AccordionButton,
    AccordionPanel
} from "@chakra-ui/react"

export function Faq(){
    return(
        <>
            <br/><br/>
            <Heading fontSize='2xl'>What is Oros&#232;</Heading>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: '#C0000011' }}>
                        <Box flex='1' textAlign='left'>
                            Is Oros&#232; an NFT project?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Yes, 100%. Oros&#232; is a utility token, but unique in its kind.<br/>
                        You will soon find it on OpenSea in the <a href="https://opensea.io/category/utility">utility category</a>. 
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: '#C0000011' }}>
                        <Box flex='1' textAlign='left'>
                            What is the unique Oros&#232; utility?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        After having minted the NFT, you are entitled to reedem the physical gold jewel.<br/>
                        Otherwise, you are free to sell this entitelment on the market at the price you think is more appropriated.      
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: '#C0000011' }}>
                        <Box flex='1' textAlign='left'>
                            Can I purchase custom design? 
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        If you like our collection but you would like something that is not part of it, let&apos;s keep in touch!<br/>
                        We will share soon how to get custom design.  
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <br /><br />
            <Heading fontSize='2xl'>Costs</Heading>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: '#C0000011' }}>
                        <Box flex='1' textAlign='left'>
                            How much the mint will cost?  
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Between 0.03 and 0.08 ETH, depending on the market prices and other considerations.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: '#C0000011' }}>
                        <Box flex='1' textAlign='left'>
                            How much redeeming the NFT will cost?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        It will be the cost of material + work + shipping costs.<br/>
                        We make only fine jewellery, using high quality gold 18k or 22k.<br/>
                        Each piece will be handcrafted as a unique item.<br/>
                        When you don&apos;t do any compromises in quality and design, the end price can&apos;t be low.<br/>
                        But you pay it with crypto.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <br /><br />
            <Heading fontSize='2xl'>Crypto and Web3</Heading>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: '#C0000011' }}>
                        <Box flex='1' textAlign='left'>
                            What if I don&apos;t know Web3 nor crypto?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        If you want to mint or buy one Oros&#232; piece, we will be happy to jump on a call with you and onboard you on Web3 step by step. It&apos;s just take 15 minutes of fun :)     
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: '#C0000011' }}>
                        <Box flex='1' textAlign='left'>
                            What do I need for getting onboarded?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Your personal laptop, a credit card and an Internet connection.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
}