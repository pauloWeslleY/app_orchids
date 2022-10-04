import { memo, ReactNode } from "react";
import { Box, Flex, Text, Stack, Container, Avatar } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";

const Testimonial = ({ children }: { children: ReactNode }) => {
   return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
   return (
      <Stack
         bg={"pink.10"}
         color={"blackAlpha.900"}
         boxShadow={"lg"}
         p={8}
         rounded={"xl"}
         align={"center"}
         pos={"relative"}
         _after={{
            content: `""`,
            w: 0,
            h: 0,
            borderLeft: "solid transparent",
            borderLeftWidth: 16,
            borderRight: "solid transparent",
            borderRightWidth: 16,
            borderTop: "solid",
            borderTopWidth: 16,
            borderTopColor: "pink.10",
            pos: "absolute",
            bottom: "-16px",
            left: "50%",
            transform: "translateX(-50%)",
         }}
      >
         {children}
      </Stack>
   );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
   return (
      <Text textAlign={"center"} color={"whiteAlpha.700"} fontSize={"md"}>
         {children}
      </Text>
   );
};

const TestimonialAvatar = ({
   icon,
   name,
   title,
}: {
   icon: any;
   name: string;
   title: string;
}) => {
   return (
      <Flex align={"center"} mt={8} direction={"column"}>
         <Avatar bg={"pink.10"} icon={icon} mb={2} />
         <Stack spacing={-1} align={"center"}>
            <Text fontWeight={600}>{name}</Text>
            <Text fontSize={"sm"} color={"gray.600"}>
               {title}
            </Text>
         </Stack>
      </Flex>
   );
};

export function PageAbout() {
   return (
      <Box color={"gray.600"}>
         <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
            <Stack
               direction={{ base: "column", md: "row" }}
               spacing={{ base: 10, md: 4, lg: 10 }}
            >
               <Testimonial>
                  <TestimonialContent>
                     <TestimonialText>
                        Vendemos Orquídeas e Acessórios (materiais para cultivo)
                        vasos, plaquinhas, substratos, ferramentas, etc.
                        Entregamos em Casa - Orquídeas Delivery - Construímos
                        seu Orquidário - Agende uma visita, contatos pelo
                        WhatsApp 12-991415642 - Lorena - SP - Brasil. Visitas
                        Agendadas para Conhecer nosso Orquidário Iara
                     </TestimonialText>
                  </TestimonialContent>
                  <TestimonialAvatar
                     icon={<AiOutlineUser fontSize="1.5rem" />}
                     name={"Lorena"}
                     title={"CEO e Fundadora do Orquidário Iara"}
                  />
               </Testimonial>
            </Stack>
         </Container>
      </Box>
   );
}

export default memo(PageAbout);
