import { memo } from "react";
import { Parallax } from "react-parallax";

import styles from "./styles.module.scss";

const image4 = "/image/orquidea_bg.jpg";

export function BannerParallax() {
   return (
      <section style={{ textAlign: "center" }}>
         <Parallax
            bgImage={image4}
            strength={200}
            renderLayer={(precentage) => (
               <div
                  style={{
                     position: "absolute",
                     width: "100px",
                     height: "100px",
                     borderRadius: "50%",
                     background: `rgba(155, 79, 79, ${precentage + 1})`,
                     left: "50%",
                     top: "50%",
                     transform: `translate(-50%, -50%) scale(${
                        precentage * 5
                     })`,
                  }}
               ></div>
            )}
         >
            <div style={{ height: 500 }}>
               <div className={styles.hero__parallax}>
                  <h4>
                     Nossas cattleyas em plena floração colorindo nosso
                     Orquidário.
                  </h4>
               </div>
            </div>
         </Parallax>
      </section>
   );
}

export default memo(BannerParallax);
