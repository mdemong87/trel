'use client'

import { useState } from "react";
import { AiOutlineMessage, AiOutlineNotification } from "react-icons/ai";
import styles from "../../../styles/product/Header/MessageAndNotification.module.css";

export default function MessageAndNotification() {

    const [showMessage, setshowMessage] = useState(false);
    const [showNotification, setshowNotification] = useState(false);

    return (
        <div className={styles.messageAndNotificationWrp}>
            <AiOutlineMessage className={styles.icons} />
            <AiOutlineNotification className={styles.icons} />
        </div>
    )
}
