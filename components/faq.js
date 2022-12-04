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
        </>
    );
}