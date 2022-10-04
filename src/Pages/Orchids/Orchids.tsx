import { Box, Container, Divider, Flex } from "@chakra-ui/react";
import {
   NavBar,
   ParallaxBanner,
   TabsOrchids,
   OrchidsDetach,
   OrchidsDetachTwo,
   CardHorizontal,
   ORCHIDS_TYPE,
   Footer,
} from "./index";

import styles from "./styles.module.scss";

export default function Orchids() {
   return (
      <section>
         <NavBar />

         <ParallaxBanner title={"Orquídeas"} image={styles.parallax_banner} />
         <TabsOrchids />

         <Divider w={"100%"} bg={"purple.200"} p={"0.01rem"} mt={"0.5rem"} />
         <OrchidsDetach />
         <OrchidsDetachTwo />
         <Divider w={"100%"} bg={"purple.200"} p={"0.01rem"} mb={"0.5rem"} />

         <Container maxW={"7xl"}>
            <Flex alignItems={"center"} justify={"center"} wrap={"wrap"}>
               {ORCHIDS_TYPE.map((card) => (
                  <CardHorizontal
                     key={card.id}
                     name={card.name}
                     price={card.price}
                     image={card.image}
                     cover={card.cover}
                     description={card.description}
                  />
               ))}
            </Flex>
         </Container>

         <Footer />
      </section>
   );
}
