import {
   Accordion,
   AccordionButton,
   AccordionIcon,
   AccordionItem,
   AccordionPanel,
   Box,
   Container,
   Flex,
   Grid,
   GridItem,
   Heading,
   Image,
} from "@chakra-ui/react";
import { memo } from "react";

export function Description() {
   return (
      <Box>
         <Container maxW={"1345px"}>
            <Grid
               h={"auto"}
               templateRows="repeat(1, 1fr)"
               templateColumns="repeat(3, 1fr)"
               gap={1}
            >
               <GridItem rowSpan={1} colSpan={1}>
                  <Flex justify={"center"}>
                     <Image
                        rounded={"md"}
                        alt={"feature image"}
                        src={"/image/bg_orchids3.jpg"}
                        objectFit={"cover"}
                        w={"20rem"}
                        h={"20rem"}
                     />
                  </Flex>
               </GridItem>
               <GridItem colSpan={2}>
                  <Box p={"2rem"}>
                     <Accordion allowToggle defaultIndex={0} color={"red.600"}>
                        <AccordionItem>
                           <h2>
                              <AccordionButton>
                                 <Box flex="1" textAlign="left">
                                    Section 1 title
                                 </Box>
                                 <AccordionIcon />
                              </AccordionButton>
                           </h2>
                           <AccordionPanel pb={4}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                           </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                           <h2>
                              <AccordionButton>
                                 <Box flex="1" textAlign="left">
                                    Section 2 title
                                 </Box>
                                 <AccordionIcon />
                              </AccordionButton>
                           </h2>
                           <AccordionPanel pb={4}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                           </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                           <h2>
                              <AccordionButton>
                                 <Box flex="1" textAlign="left">
                                    Section 2 title
                                 </Box>
                                 <AccordionIcon />
                              </AccordionButton>
                           </h2>
                           <AccordionPanel pb={4}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                           </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                           <h2>
                              <AccordionButton>
                                 <Box flex="1" textAlign="left">
                                    Section 2 title
                                 </Box>
                                 <AccordionIcon />
                              </AccordionButton>
                           </h2>
                           <AccordionPanel pb={4}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                           </AccordionPanel>
                        </AccordionItem>
                     </Accordion>
                  </Box>
               </GridItem>
            </Grid>
         </Container>
      </Box>
   );
}

export default memo(Description);
