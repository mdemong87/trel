import Link from "next/link";
import { AiFillDashboard, AiFillDatabase, AiFillGithub, AiFillSetting } from "react-icons/ai";
import { BsFileEarmarkBarGraphFill, BsFillBagDashFill } from "react-icons/bs";
import { MdSensorWindow } from "react-icons/md";
import { RiTaskFill } from "react-icons/ri";
import { SiGoogledocs } from "react-icons/si";
import styles from "../../styles/product/Aside.module.css";
import LogOutBtn from "./LogOutBtn";


export default function Aside({ show, setshow }) {
    return (
        <aside className={styles.aside}>
            <ul className={styles.ulWrp}>


                <li className={styles.asideList}>
                    <Link className={`${styles.LinkItem} ${styles.activeLink}`} href="/">
                        <AiFillDashboard className={styles.icons} />
                        <span className={`${!show && styles.span}`}>Dashboard</span>
                    </Link>
                </li>
                <li className={styles.asideList}>
                    <Link className={styles.LinkItem} href="/">
                        <AiFillDatabase className={styles.icons} />
                        <span className={`${!show && styles.span}`}>Datasets</span>
                    </Link>
                </li>
                <li className={styles.asideList}>
                    <Link className={styles.LinkItem} href="/">
                        <AiFillGithub className={styles.icons} />
                        <span className={`${!show && styles.span}`}>Repositories</span>
                    </Link>
                </li>
                <li className={styles.asideList}>
                    <Link className={styles.LinkItem} href="/">
                        <BsFillBagDashFill className={styles.icons} />
                        <span className={`${!show && styles.span}`}>Jobs</span>
                    </Link>
                </li>
                <li className={styles.asideList}>
                    <Link className={styles.LinkItem} href="/">
                        <RiTaskFill className={styles.icons} />
                        <span className={`${!show && styles.span}`}>Tasks</span>
                    </Link>
                </li>
                <li className={styles.asideList}>
                    <Link className={styles.LinkItem} href="/">
                        <MdSensorWindow className={styles.icons} />
                        <span className={`${!show && styles.span}`}>Sensors</span>
                    </Link>
                </li>
                <li className={styles.asideList}>
                    <Link className={styles.LinkItem} href="/">
                        <BsFileEarmarkBarGraphFill className={styles.icons} />
                        <span className={`${!show && styles.span}`}>Graph</span>
                    </Link>
                </li>
                <li className={styles.asideList}>
                    <Link className={styles.LinkItem} href="/">
                        <SiGoogledocs className={styles.icons} />
                        <span className={`${!show && styles.span}`}>Docs</span>
                    </Link>
                </li>

                <li className={styles.asideList}>
                    <Link className={styles.LinkItem} href="/">
                        <AiFillSetting className={styles.icons} />
                        <span className={`${!show && styles.span}`}>Setting</span>
                    </Link>
                </li>
            </ul>
            <LogOutBtn show={show} />
        </aside >
    )
}
