import { Container, Divider, Flex } from "@chakra-ui/react";
import { ParallaxBanner, MenuAccessories } from "./index";

import styles from "./styles.module.scss";

export function Accessories() {
   return (
      <main>
         <header>
            <ParallaxBanner
               title={"Acessórios & Decorações"}
               image={styles.parallax_banner}
            />
         </header>

         <Divider w={"100%"} bg={"purple.200"} p={"0.01rem"} />

         <section>
            <MenuAccessories />
         </section>
      </main>
   );
}
