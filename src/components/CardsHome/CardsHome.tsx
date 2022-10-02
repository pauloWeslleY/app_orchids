import { Button, Center, Container, Flex } from "@chakra-ui/react";
import { memo } from "react";
import { CardsHomeItem, CARDS_HOME } from "./index";

export function CardsHome() {
   return (
      <section>
         <Container maxW={"1345px"}>
            <Flex flexWrap={"wrap"} align={"center"} justify={"center"}>
               {CARDS_HOME.map((cards) => (
                  <CardsHomeItem
                     key={cards.id}
                     name={cards.name}
                     image={cards.image}
                     price={cards.price}
                  />
               ))}
            </Flex>
            <Center py={"1rem"}>
               <Button bg={"red.900"}>See All</Button>
            </Center>
         </Container>
      </section>
   );
}

export default memo(CardsHome);
