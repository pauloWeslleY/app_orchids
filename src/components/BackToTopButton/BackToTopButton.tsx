import { memo, useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

import styles from "./style.module.scss";

export function BackToTopButton() {
   const [backToTopButton, setbackToTopButton] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 100) {
            setbackToTopButton(true);
         } else {
            setbackToTopButton(false);
         }
      });
   }, []);

   const scrollUp = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <section>
         {backToTopButton && (
            <button className={styles.backToTopButton} onClick={scrollUp}>
               <FaArrowUp />
            </button>
         )}
      </section>
   );
}

export default memo(BackToTopButton);
