import { memo } from "react";
import {
   Box,
   Container,
   Divider,
   Flex,
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
} from "@chakra-ui/react";
import {
   ACCESSORIES,
   VASES,
   DECORE,
   CACHEPOT,
   FERTILIZER,
   Title,
   CardsVases,
   CardsDecore,
} from "./index";

export function MenuAccessories() {
   const MENU = ["Acessórios", "Decorações", "Cachepot", "Vasos", "Adubo"];
   return (
      <Box>
         <Container maxW={"5xl"}>
            <Tabs
               isFitted
               isLazy={true}
               variant={"solid-rounded"}
               colorScheme={"pink"}
               color={"gray.800"}
            >
               <TabList overflow={"auto"}>
                  {MENU.map((item, index) => (
                     <Tab key={index}>{item}</Tab>
                  ))}
               </TabList>
               <TabPanels>
                  <TabPanel>
                     <Title title={"Acessórios"} />
                     <Container maxW={"5xl"}>
                        <Flex flexWrap={"wrap"}>
                           {ACCESSORIES.map((vases) => (
                              <CardsDecore
                                 key={vases.id}
                                 name={vases.name}
                                 price={vases.price}
                                 imageUrl={vases.imageUrl}
                              />
                           ))}
                        </Flex>
                        <Divider
                           w={"100%"}
                           bg={"pink.400"}
                           p={"0.01rem"}
                           mb={"0.5rem"}
                        />
                     </Container>
                  </TabPanel>
                  <TabPanel>
                     <Title title={"Decorações"} />
                     <Container maxW={"5xl"}>
                        <Flex flexWrap={"wrap"}>
                           {DECORE.map((vases) => (
                              <CardsDecore
                                 key={vases.id}
                                 name={vases.name}
                                 price={vases.price}
                                 imageUrl={vases.imageUrl}
                              />
                           ))}
                        </Flex>
                        <Divider
                           w={"100%"}
                           bg={"pink.400"}
                           p={"0.01rem"}
                           mb={"0.5rem"}
                        />
                     </Container>
                  </TabPanel>
                  <TabPanel>
                     <Title title={"Cachepot"} />
                     <Container maxW={"5xl"}>
                        <Flex flexWrap={"wrap"}>
                           {CACHEPOT.map((vases) => (
                              <CardsDecore
                                 key={vases.id}
                                 name={vases.name}
                                 price={vases.price}
                                 imageUrl={vases.imageUrl}
                              />
                           ))}
                        </Flex>
                        <Divider
                           w={"100%"}
                           bg={"pink.400"}
                           p={"0.01rem"}
                           mb={"0.5rem"}
                        />
                     </Container>
                  </TabPanel>
                  <TabPanel>
                     <Title title={"Vasos"} />
                     <Container maxW={"5xl"}>
                        <Flex flexWrap={"wrap"}>
                           {VASES.map((vases) => (
                              <CardsVases
                                 key={vases.id}
                                 name={vases.name}
                                 price={vases.price}
                                 imageUrl={vases.imageUrl}
                              />
                           ))}
                        </Flex>
                        <Divider
                           w={"100%"}
                           bg={"pink.400"}
                           p={"0.01rem"}
                           mb={"0.5rem"}
                        />
                     </Container>
                  </TabPanel>
                  <TabPanel>
                     <Title title={"Adubo"} />
                     <Container maxW={"5xl"}>
                        <Flex flexWrap={"wrap"}>
                           {FERTILIZER.map((vases) => (
                              <CardsVases
                                 key={vases.id}
                                 name={vases.name}
                                 price={vases.price}
                                 imageUrl={vases.imageUrl}
                              />
                           ))}
                        </Flex>
                        <Divider
                           w={"100%"}
                           bg={"pink.400"}
                           p={"0.01rem"}
                           mb={"0.5rem"}
                        />
                     </Container>
                  </TabPanel>
               </TabPanels>
            </Tabs>
         </Container>
      </Box>
   );
}

export default memo(MenuAccessories);
