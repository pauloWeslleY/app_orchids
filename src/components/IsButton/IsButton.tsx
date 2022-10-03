import { memo } from "react";

import styles from "./styles.module.scss";

interface IsButtonProps {
   title: string;
}

export function IsButton({ title }: IsButtonProps) {
   return <button className={styles.is__button}>{title}</button>;
}

export default memo(IsButton);
