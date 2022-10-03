import { memo } from "react";
import { Parallax } from "react-parallax";
import { IMAGE_HOME_ONE } from "./index";

import styles from "./styles.module.scss";

interface ParallaxHome {
   title: string;
}

export function ParallaxHomeOne({ title }: ParallaxHome) {
   return (
      <section style={{ textAlign: "center" }}>
         <Parallax
            bgImage={IMAGE_HOME_ONE}
            strength={200}
            renderLayer={(percentage) => (
               <div
                  style={{
                     position: "absolute",
                     width: "100px",
                     height: "100px",
                     borderRadius: "50%",
                     background: "rgba(155, 79, 79, .4)",
                     left: "50%",
                     top: "50%",
                     transform: `translate(-50%, -50%) scale(${
                        percentage * 5
                     })`,
                  }}
               ></div>
            )}
         >
            <div style={{ height: 500 }}>
               <div className={styles.hero__parallax}>
                  <h3>{title}</h3>
               </div>
            </div>
         </Parallax>
      </section>
   );
}

export default memo(ParallaxHomeOne);
