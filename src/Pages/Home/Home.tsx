import { Center, Divider } from "@chakra-ui/react";
import {
   NavBar,
   Title,
   ParallaxBanner,
   CardsHome,
   Detach,
   ParallaxHomeOne,
   ParallaxHomeTwo,
   Description,
   Describe,
   Contact,
   Footer,
} from "./index";

import styles from "./styles.module.scss";

export default function Home() {
   return (
      <section>
         <NavBar />

         <ParallaxBanner
            title={"Orquidário Iara"}
            image={styles.parallax_banner}
         />
         <Divider w={"100%"} bg={"pink.10"} />

         <Title title="Orquídeas" />
         <CardsHome />

         <Center>
            <Divider w={"50rem"} bg={"red.400"} p={"0.1rem"} mt={"0.5rem"} />
         </Center>
         <Detach />

         <Divider w={"100%"} bg={"pink.10"} />
         <ParallaxHomeOne title="Nossas cattleyas em plena floração colorindo nosso Orquidário." />
         <Divider w={"100%"} bg={"pink.10"} />

         <Title title="Sobre" />
         <Description />
         <Describe />

         <Divider w={"100%"} bg={"pink.10"} />
         <ParallaxHomeTwo />
         <Divider w={"100%"} bg={"pink.10"} />

         <Contact />

         <Footer />
      </section>
   );
}
