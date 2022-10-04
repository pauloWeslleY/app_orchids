import {
   Stack,
   Flex,
   Text,
   VStack,
   useBreakpointValue,
   Box,
} from "@chakra-ui/react";
import { CarouselType } from "./index";

import styles from "./styles.module.scss";

interface CarouselProps {
   carousel: CarouselType;
}

export function CarouselItem({ carousel }: CarouselProps) {
   const { title, imageUrl, description } = carousel;

   const font = useBreakpointValue({ base: "3xl", md: "4xl" });
   const padding = useBreakpointValue({ base: 4, md: 8 });

   return (
      <Flex
         w={"full"}
         h={"75vh"}
         backgroundImage={`url(${imageUrl})`}
         backgroundSize={"cover"}
         backgroundPosition={"center center"}
      >
         <VStack
            w={"full"}
            justify={"center"}
            px={padding}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
         >
            <Box
               maxW={"2xl"}
               alignItems={"flex-start"}
               gap={6}
               textAlign={"center"}
            >
               <Text
                  fontWeight={500}
                  lineHeight={1.2}
                  fontSize={font}
                  className={styles.carousel__item}
               >
                  {title}
               </Text>
               <Text
                  fontWeight={300}
                  fontSize={font}
                  className={styles.carousel__item}
               >
                  {description}
               </Text>
            </Box>
         </VStack>
      </Flex>
   );
}
