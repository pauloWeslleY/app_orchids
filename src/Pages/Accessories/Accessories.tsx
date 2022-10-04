import { Container, Divider, Flex } from "@chakra-ui/react";
import { NavBar, Footer, ParallaxBanner, MenuAccessories } from "./index";

import styles from "./styles.module.scss";

export default function Accessories() {
   return (
      <section>
         <NavBar />
         <ParallaxBanner
            title={"Acessórios & Decorações"}
            image={styles.parallax_banner}
         />
         <Divider w={"100%"} bg={"purple.200"} p={"0.01rem"} />
         <MenuAccessories />

         <Footer />
      </section>
   );
}
