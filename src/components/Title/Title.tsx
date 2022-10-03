import { memo } from "react";
import { Divider, Flex, Heading } from "@chakra-ui/react";

interface TitleProps {
   title: string;
}

export function Title({ title }: TitleProps) {
   return (
      <Flex flexDir={"column"} align={"center"} justify={"center"} my={"4rem"}>
         <Heading fontSize={"3.5rem"} fontWeight={"light"} color={"gray.900"}>
            {title}
         </Heading>
         <Divider w={"15rem"} bg={"pink.10"} p={"0.1rem"} mt={"0.5rem"} />
      </Flex>
   );
}

export default memo(Title);
