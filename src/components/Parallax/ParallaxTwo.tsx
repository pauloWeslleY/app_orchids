import { memo } from "react";
import { Parallax } from "react-parallax";

import styles from "./styles.module.scss";

const image4 = "/image/orchids_03.jpg";

export function ParallaxTwo() {
   return (
      <section style={{ textAlign: "center" }}>
         <Parallax blur={4} bgImage={image4} strength={200}>
            <div style={{ height: 500 }}></div>
         </Parallax>
      </section>
   );
}

export default memo(ParallaxTwo);
