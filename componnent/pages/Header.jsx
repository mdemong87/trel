'use client'

import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/pages/Header.module.css";
import Bar from "../Bar";
import Container from "../Container";
import Logo from "../Logo";
import LeftCollaps from "./LeftCollaps";
import Navber from "./Navber";


export default function Header() {


    const [show, setshow] = useState(false);

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headercontentWrp}>
                    <div className={styles.logoAndNavberWrp}>
                        <Logo />
                        {/* <Navber /> */}
                    </div>
                    <div className={styles.nabverWrp}>
                        <Navber />
                    </div>
                    <div>
                        <Link className={styles.signInBtn} href={'/auth/signin'}>
                            Login
                        </Link>
                        <div>
                            <Bar show={show} setshow={setshow} />
                        </div>
                    </div>
                </div>
                {show && <LeftCollaps show={show} setshow={setshow} />}
            </Container>
        </header>
    )
}
