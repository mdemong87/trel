import Image from "next/image";
import logo from "../public/logo.png";
import styles from "../styles/Logo.module.css";

export default function Logo() {
    return (
        <Image width={500} height={500} className={styles.logo} src={logo} alt="logo" />
    )
}
