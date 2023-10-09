'use client'

import { FaBars } from "react-icons/fa";
import styles from "../styles/Bar.module.css";

export default function Bar({ show, setshow }) {
    return (
        <div className={styles.berWrP}>
            <FaBars className={styles.icons} onClick={() => setshow(!show)} />
        </div>
    )
}
