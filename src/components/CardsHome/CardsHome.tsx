import { Center, Container, Flex } from "@chakra-ui/react";
import { memo } from "react";
import { CardsHomeItem, CARDS_HOME, IsButton } from "./index";

export function CardsHome() {
   return (
      <section>
         <Container maxW={"7xl"}>
            <Flex flexWrap={"wrap"}>
               {CARDS_HOME.map((cards) => (
                  <CardsHomeItem
                     key={cards.id}
                     name={cards.name}
                     image={cards.image}
                     cover={cards.cover}
                     price={cards.price}
                     description={cards.description}
                  />
               ))}
            </Flex>

            <Center py={"1rem"}>
               <IsButton title={"Ver Mais"} />
            </Center>
         </Container>
      </section>
   );
}

export default memo(CardsHome);
