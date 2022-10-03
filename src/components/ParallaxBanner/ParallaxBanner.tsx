import { memo } from "react";

import styles from "./styles.module.scss";

interface ParallaxTitle {
   title: string;
   image?: string;
}

export function ParallaxBanner({ title, image }: ParallaxTitle) {
   return (
      <section className={`${styles.parallax__container} ${image}`}>
         <h1>{title}</h1>
      </section>
   );
}

export default memo(ParallaxBanner);
