import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import styles from "../../styles/pages/Navbar.module.css";
import Feature from "./showNvaber/feature";




export default function Navber() {
    return (
        <div className={styles.navber}>
            <ul>
                <li>
                    <div className={styles.linkItem} href={'/'}>
                        <span>Features</span>
                        <HiChevronDown className={styles.arrawIcons} />
                        <OpenNav>
                            <Feature />
                        </OpenNav>
                    </div>
                    <div className={styles.linkItem} href={'/'}>
                        <span>Soluations</span>
                        <HiChevronDown className={styles.arrawIcons} />
                        <OpenNav>
                            <Feature />
                        </OpenNav>
                    </div>
                    <div className={styles.linkItem} href={'/'}>
                        <span>Plans</span>
                        <HiChevronDown className={styles.arrawIcons} />
                        <OpenNav>
                            <Feature />
                        </OpenNav>
                    </div>
                    <Link className={styles.linkItem} href={'/'}>Pricing</Link>
                    <div className={styles.linkItem} href={'/'}>
                        <span>Resources</span>
                        <HiChevronDown className={styles.arrawIcons} />
                        <OpenNav>
                            <Feature />
                        </OpenNav>
                    </div>
                    <Link className={`${styles.linkItem} ${styles.login}`} href={'/auth/signin'}>Login</Link>
                </li>
            </ul>
        </div >
    )
}











function OpenNav({ children }) {
    return (
        <div className={styles.opennav}>
            <div className={styles.box}>
                <div className={styles.container}>
                    {children}
                </div>
            </div>
        </div>
    )
}
