import { memo } from "react";
import {
   Flex,
   Container,
   Heading,
   Stack,
   Text,
   Button,
   Image,
} from "@chakra-ui/react";

export function Describe() {
   return (
      <Container maxW={"5xl"}>
         <Stack
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
         >
            <Heading
               fontWeight={600}
               fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
               lineHeight={"110%"}
               color={"gray.800"}
            >
               Nosso ORQUIDARIO IARA com suas{" "}
               <Text as={"span"} color={"pink.10"}>
                  orquideas cheirosas e coloridas
               </Text>
            </Heading>
            <Text color={"gray.500"} maxW={"3xl"}>
               Restrepia Elegans, cultivo em sombra e muita umidade, substrato
               sfagnum e casca de arroz carbonizada, vaso plástico, adubo
               Bokashi.
            </Text>
            <Flex w={"full"} justify={"center"}>
               <Image
                  alt={"feature image"}
                  src={"/image/bg_orchids2.jpg"}
                  objectFit={"cover"}
                  boxSize={"md"}
                  borderRadius={"3rem"}
               />
            </Flex>
         </Stack>
      </Container>
   );
}

export default memo(Describe);
