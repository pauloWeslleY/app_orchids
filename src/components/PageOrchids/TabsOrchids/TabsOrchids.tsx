import { memo } from "react";
import {
   Box,
   Container,
   Flex,
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
} from "@chakra-ui/react";
import {
   CardsOrchids,
   CardsOrchidsVarieties,
   CardsOrchidSimple,
   ORCHIDS_DETACH,
   ORCHIDS_NEWS,
   ORCHIDS_DETAILS,
   ORCHIDS_DETACHS,
   ORCHIDS_DETACH_SIMPLE,
} from "./index";

export function TabsOrchids() {
   const MENU_TABS = ["Orquídeas", "Novidades", "Destaques", "Variedades"];

   return (
      <Box>
         <Container maxW={"7xl"}>
            <Tabs
               pt={"1rem"}
               size={"lg"}
               variant={"soft-rounded"}
               color={"gray.800"}
               colorScheme={"pink"}
               defaultIndex={1}
            >
               <TabList overflow={"auto"}>
                  {MENU_TABS.map((tab) => (
                     <Tab key={tab}>{tab}</Tab>
                  ))}
               </TabList>

               <TabPanels>
                  {/*TODO: <| === === === === === |> Orquídeas */}
                  <TabPanel>
                     <Flex wrap={"wrap"}>
                        {ORCHIDS_DETACH.map((card) => (
                           <CardsOrchids
                              key={card.id}
                              name={card.name}
                              price={card.price}
                              image={card.image}
                              cover={card.cover}
                              description={card.description}
                           />
                        ))}
                     </Flex>
                  </TabPanel>
                  {/*TODO: <| === === === === === |> Novidades */}
                  <TabPanel>
                     <Flex wrap={"wrap"}>
                        {ORCHIDS_NEWS.map((card) => (
                           <CardsOrchids
                              key={card.id}
                              name={card.name}
                              price={card.price}
                              image={card.image}
                              cover={card.cover}
                              description={card.description}
                           />
                        ))}
                     </Flex>
                  </TabPanel>
                  {/*TODO: <| === === === === === |> Destaques */}
                  <TabPanel>
                     <Box>
                        <Flex wrap={"wrap"}>
                           {ORCHIDS_DETACHS.map((card) => (
                              <CardsOrchids
                                 key={card.id}
                                 name={card.name}
                                 price={card.price}
                                 image={card.image}
                                 cover={card.cover}
                                 description={card.description}
                              />
                           ))}
                        </Flex>
                        <Flex wrap={"wrap"}>
                           {ORCHIDS_DETACH_SIMPLE.map((card) => (
                              <CardsOrchidSimple
                                 key={card.id}
                                 name={card.name}
                                 price={card.price}
                                 image={card.image}
                              />
                           ))}
                        </Flex>
                     </Box>
                  </TabPanel>
                  {/* TODO: <| === === === === === |> Variedades */}
                  <TabPanel>
                     <Flex wrap={"wrap"}>
                        {ORCHIDS_DETAILS.map((card) => (
                           <CardsOrchidsVarieties
                              key={card.id}
                              image={card.image}
                              image2={card.image2}
                              cover={card.cover}
                              description={card.description}
                           />
                        ))}
                     </Flex>
                  </TabPanel>
               </TabPanels>
            </Tabs>
         </Container>
      </Box>
   );
}

export default memo(TabsOrchids);
