import { Center, Container, Divider } from "@chakra-ui/react";
import {
   Title,
   ParallaxBanner,
   CardsHome,
   Detach,
   ParallaxHomeOne,
   ParallaxHomeTwo,
   Description,
   Describe,
   Contact,
} from "./index";

import styles from "./styles.module.scss";

export function Home() {
   return (
      <main>
         <header>
            <ParallaxBanner
               title={"Orquidário Iara"}
               image={styles.parallax_banner}
            />
         </header>

         <Divider w={"100%"} bg={"pink.10"} />

         <main>
            <header>
               <Title title="Orquídeas" />
               <CardsHome />
            </header>

            <section>
               <Container maxW={"5xl"}>
                  <Center>
                     <Divider
                        w={"50rem"}
                        bg={"red.400"}
                        p={"0.05rem"}
                        my={"3rem"}
                     />
                  </Center>
               </Container>
            </section>

            <section>
               <Detach />
               <Divider w={"100%"} bg={"pink.10"} />
               <ParallaxHomeOne title="Nossas cattleyas em plena floração colorindo nosso Orquidário." />
               <Divider w={"100%"} bg={"pink.10"} />
            </section>

            <section>
               <Title title="Sobre" />
               <Description />
               <Describe />

               <Divider w={"100%"} bg={"pink.10"} />
               <ParallaxHomeTwo />
               <Divider w={"100%"} bg={"pink.10"} />

               <Contact />
            </section>
         </main>
      </main>
   );
}
