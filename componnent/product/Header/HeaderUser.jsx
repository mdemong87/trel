"use client"

import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import styles from "../../../styles/product/Header/HeaderUser.module.css";
import RightCollaps from "./RightCollaps";

export default function HeaderUser() {

    const [isShow, setisShow] = useState(false);

    return (
        <div className={styles.headeruser}>
            <div onClick={() => setisShow(!isShow)} className={styles.headerUserIcons}>
                <AiOutlineUser className={styles.userIcons} />
            </div>
            {isShow && <RightCollaps show={isShow} setshow={setisShow} />}
        </div>
    )
}
