import { memo } from "react";
import {
   Box,
   Divider,
   Drawer,
   DrawerBody,
   DrawerContent,
   DrawerOverlay,
   Flex,
   Heading,
   Image,
   Text,
   IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface CardsHomeDetailsProps {
   title: string;
   price: string;
   image: any;
   content: any;
   onClose: any;
   isOpen: any;
}

export function CardsHomeDetails({
   title,
   price,
   content,
   image,
   isOpen,
   onClose,
}: CardsHomeDetailsProps) {
   return (
      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
         <DrawerOverlay />
         <DrawerContent bg={"whiteAlpha.700"} color={"gray.800"}>
            <DrawerBody>
               <Flex wrap={"wrap"} gap={6}>
                  <Flex
                     grow={1}
                     shrink={1}
                     basis={"25%"}
                     align={"center"}
                     justify={"center"}
                  >
                     <Image
                        alt={"feature image"}
                        src={image}
                        objectFit={"cover"}
                        boxSize={"xs"}
                        borderRadius={"1rem"}
                     />
                  </Flex>
                  <Flex
                     grow={1}
                     shrink={1}
                     basis={"70%"}
                     direction={"column"}
                     gap={3}
                     align={"center"}
                  >
                     <Box display={"flex"} alignItems={"center"} gap={3}>
                        <IconButton
                           variant={"ghost"}
                           color={"gray.800"}
                           onClick={onClose}
                           aria-label={"Close Button"}
                           icon={<CloseIcon />}
                        />
                        <Heading>{title}</Heading>
                     </Box>
                     <Text>{price}</Text>
                     <Divider bg={"red.900"} />
                     <Box>{content}</Box>
                  </Flex>
               </Flex>
            </DrawerBody>
         </DrawerContent>
      </Drawer>
   );
}

export default memo(CardsHomeDetails);
