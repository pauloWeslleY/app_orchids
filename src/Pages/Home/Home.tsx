import { Center, Divider, Flex, Heading } from "@chakra-ui/react";

import {
   NavBar,
   CardsHome,
   Detach,
   ParallaxPage,
   ParallaxTwo,
   Description,
   Describe,
   Footer,
} from "./index";

import styles from "./styles.module.scss";

export default function Home() {
   return (
      <section>
         <NavBar />

         <section
            className={`${styles.parallax__container} ${styles.parallax_one}`}
         >
            <h1>Orquidário Iara</h1>
         </section>

         <Divider w={"100%"} bg={"pink.10"} />

         <Flex
            flexDir={"column"}
            align={"center"}
            justify={"center"}
            my={"4rem"}
         >
            <Heading
               fontSize={"3.5rem"}
               fontWeight={"light"}
               color={"gray.900"}
            >
               Orchids
            </Heading>
            <Divider w={"15rem"} bg={"pink.10"} p={"0.1rem"} mt={"0.5rem"} />
         </Flex>

         <CardsHome />

         <Center>
            <Divider w={"50rem"} bg={"red.400"} p={"0.1rem"} mt={"0.5rem"} />
         </Center>

         <Detach />

         <Divider w={"100%"} bg={"pink.10"} />
         <ParallaxPage />
         <Divider w={"100%"} bg={"pink.10"} />

         <Flex
            flexDir={"column"}
            align={"center"}
            justify={"center"}
            my={"3rem"}
         >
            <Heading
               fontSize={"3.5rem"}
               fontWeight={"light"}
               color={"gray.900"}
            >
               Description
            </Heading>
            <Divider w={"15rem"} bg={"pink.10"} p={"0.1rem"} mt={"0.5rem"} />
         </Flex>

         <Description />
         <Describe />

         <Divider w={"100%"} bg={"pink.10"} />
         <ParallaxTwo />
         <Divider w={"100%"} bg={"pink.10"} />

         <Footer />
      </section>
   );
}
