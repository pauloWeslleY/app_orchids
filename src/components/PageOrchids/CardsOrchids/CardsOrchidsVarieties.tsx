import { memo } from "react";
import {
   Box,
   Flex,
   Image,
   chakra,
   Tabs,
   TabPanels,
   TabPanel,
   TabList,
   Tab,
   Icon,
   Divider,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { CardsType } from "./index";

export function CardsOrchidsVarieties({
   description,
   image,
   image2,
   cover,
}: CardsType) {
   return (
      <Flex
         basis={"230px"}
         grow={1}
         shrink={1}
         direction={"column"}
         m={1}
         bg={"whiteAlpha.300"}
         shadow={"lg"}
         rounded={"lg"}
         overflow={"hidden"}
      >
         <Box py={4} px={6}>
            <chakra.p fontSize={"lg"} py={2} color="gray.500">
               {description}
            </chakra.p>
            <Divider bg={"pink.800"} />
         </Box>
         <Box bg={"blackAlpha.300"}>
            <Tabs
               defaultIndex={1}
               align={"center"}
               color={"gray.500"}
               colorScheme={"pink"}
            >
               <TabList>
                  <Tab>
                     <Icon as={ArrowLeftIcon} w={3} h={3} />
                  </Tab>
                  <Tab>Orquídeas</Tab>
                  <Tab>
                     <Icon as={ArrowRightIcon} w={3} h={3} />
                  </Tab>
               </TabList>
               <TabPanels>
                  <TabPanel>
                     <Image boxSize={"330px"} fit={"cover"} src={image2} />
                  </TabPanel>
                  <TabPanel>
                     <Image boxSize={"330px"} fit={"cover"} src={image} />
                  </TabPanel>
                  <TabPanel>
                     <Image boxSize={"330px"} fit={"cover"} src={cover} />
                  </TabPanel>
               </TabPanels>
            </Tabs>
         </Box>
      </Flex>
   );
}

export default memo(CardsOrchidsVarieties);
