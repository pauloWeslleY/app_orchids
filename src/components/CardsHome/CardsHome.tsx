import { memo } from "react";
import { Center, Container, Flex } from "@chakra-ui/react";
import { CardsHomeItem, CARDS_HOME, IsButton } from "./index";
import { Link } from "react-router-dom";

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
               <Link to={"/orchids"}>
                  <IsButton title={"Ver Mais"} />
               </Link>
            </Center>
         </Container>
      </section>
   );
}

export default memo(CardsHome);
