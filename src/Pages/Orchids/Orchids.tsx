import { Container, Divider, Flex } from "@chakra-ui/react";
import {
   ParallaxBanner,
   TabsOrchids,
   OrchidsDetach,
   OrchidsDetachTwo,
   CardHorizontal,
   ORCHIDS_TYPE,
} from "./index";

import styles from "./styles.module.scss";

export function Orchids() {
   return (
      <main>
         <header>
            <ParallaxBanner
               title={"Orquídeas"}
               image={styles.parallax_banner}
            />
         </header>

         <section>
            <TabsOrchids />
         </section>

         <section>
            <Divider w={"100%"} bg={"purple.200"} p={"0.01rem"} mt={"0.5rem"} />

            <section>
               <OrchidsDetach />
               <OrchidsDetachTwo />
            </section>

            <Divider w={"100%"} bg={"purple.200"} p={"0.01rem"} mb={"0.5rem"} />

            <section>
               <Container maxW={"7xl"}>
                  <Flex alignItems={"center"} justify={"center"} wrap={"wrap"}>
                     {ORCHIDS_TYPE.map((card) => (
                        <CardHorizontal key={card.id} {...card} />
                     ))}
                  </Flex>
               </Container>
            </section>
         </section>
      </main>
   );
}
