import { memo } from "react";
import { Box, Flex, chakra, Badge, Image } from "@chakra-ui/react";
import { CardsType } from "./index";

export function CardHorizontal({ name, price, image, description }: CardsType) {
   return (
      <Flex
         bg={"blackAlpha.200"}
         basis={"450px"}
         grow={1}
         shrink={1}
         m={"1rem"}
         rounded={"lg"}
         wrap={"wrap"}
      >
         <Flex
            w={{
               lg: "50%",
            }}
         >
            <Image
               src={image}
               alt={name}
               fit={"cover"}
               boxSize={"md"}
               h={{
                  base: 64,
                  lg: "full",
               }}
               rounded={{
                  lg: "lg",
               }}
            />
         </Flex>
         <Flex
            direction={"column"}
            py={12}
            px={6}
            maxW={{
               base: "xl",
               lg: "5xl",
            }}
            w={{
               lg: "50%",
            }}
         >
            <chakra.h2
               fontSize={{
                  base: "2xl",
                  md: "3xl",
               }}
               color={"gray.800"}
               fontWeight={400}
               fontFamily={"body"}
            >
               {name}{" "}
            </chakra.h2>
            <Badge
               p={1}
               shadow={"sm"}
               w={"4rem"}
               color={"gray.600"}
               bg={"whiteAlpha.100"}
               fontWeight={"500"}
               fontSize={"1.03rem"}
            >
               {price}
            </Badge>
            <chakra.p mt={4} color={"gray.600"}>
               {description}
            </chakra.p>
         </Flex>
      </Flex>
   );
}

export default memo(CardHorizontal);
