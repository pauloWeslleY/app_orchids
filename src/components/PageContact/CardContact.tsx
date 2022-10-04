import { memo } from "react";
import { Heading, Icon, Flex } from "@chakra-ui/react";
import { PageContactProps } from "./index";

export function CardContact({ name, icon }: PageContactProps) {
   return (
      <Flex
         direction={"column"}
         align={"center"}
         basis={"250px"}
         grow={1}
         shrink={1}
         m={"1rem"}
         bg={"whiteAlpha.100"}
         color={"pink.10"}
         boxShadow={"xl"}
         rounded={"lg"}
         p={6}
         textAlign={"center"}
      >
         <Icon as={icon} w={10} h={10} mb={4} />
         <Heading
            fontSize={{ base: "smaller", sm: "1.4rem" }}
            fontFamily={"body"}
         >
            {name}
         </Heading>
      </Flex>
   );
}

export default memo(CardContact);
