import { memo } from "react";
import { Badge, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { AccessoriesProps } from "./index";

export function CardsDecore({ name, price, imageUrl }: AccessoriesProps) {
   return (
      <Flex
         direction={"column"}
         align={"center"}
         basis={"270px"}
         grow={2}
         shrink={1}
         m={"1rem"}
         bg={"whiteAlpha.100"}
         color={"gray.600"}
      >
         <Image
            boxSize={"sm"}
            src={imageUrl}
            objectFit={"cover"}
            rounded={"xl"}
         />

         <Flex p={1} gap={"1rem"} direction={"column"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} textAlign={"center"}>
               {name}
            </Heading>
            <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
               <Badge
                  p={1}
                  shadow={"sm"}
                  w={"4rem"}
                  color={"gray.600"}
                  bg={"whiteAlpha.100"}
                  fontWeight={"500"}
                  fontSize={"1.03rem"}
                  textAlign={"center"}
               >
                  {price}
               </Badge>
            </Stack>
         </Flex>
      </Flex>
   );
}

export default memo(CardsDecore);
