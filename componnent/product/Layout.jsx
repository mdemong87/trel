'use client'

import { useState } from "react";
import styles from "../../styles/product/Layout.module.css";
import Aside from "./Aside";
import Header from "./Header/Header";

export default function Layout({ children }) {

  const [show, setshow] = useState(false);

  return (
    <div>
      <Header show={show} setshow={setshow} />
      <div className={`${styles.asideAndContentWrp}`}>
        <div className={`${styles.asdieWrp}`}>
          <Aside />
        </div>
        <div className={styles.pageContantWrp}>
          {children}
        </div>
      </div>
    </div>
  )
}
