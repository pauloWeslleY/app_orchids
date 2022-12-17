import { Center, Container, Divider, Flex } from "@chakra-ui/react";
import {
   Carousel,
   Title,
   CardsMicroOrchids,
   MICRO_ORCHIDS,
   OrchidsDescription,
   WateringOrchids,
   TemperatureOrchids,
} from "./index";

export function MicroOrchids() {
   return (
      <main>
         <header>
            <Carousel />
         </header>

         <section>
            <Divider w={"100%"} bg={"purple.800"} p={"0.05rem"} mb={"0.5rem"} />

            <Title title={"Micro Orquídeas"} />

            <Container maxW={"7xl"}>
               <Flex wrap={"wrap"}>
                  {MICRO_ORCHIDS.map((card) => (
                     <CardsMicroOrchids key={card.id} {...card} />
                  ))}
               </Flex>
            </Container>
         </section>

         <section>
            <Container maxW={"5xl"}>
               <Center>
                  <Divider
                     w={"25rem"}
                     bg={"red.400"}
                     p={"0.05rem"}
                     my={"3rem"}
                  />
               </Center>
            </Container>

            <OrchidsDescription />
            <WateringOrchids />
            <TemperatureOrchids />
         </section>
      </main>
   );
}
