import CrossBtn from "@/componnent/CrossBtn";
import Logo from "@/componnent/Logo";
import styles from "../../styles/pages/LeftCollaps.module.css";
import Navber from "./Navber";



export default function LeftCollaps({ show, setshow }) {
    return (
        <div className={styles.leftCollaspeWrp}>
            <div className={styles.leftModel}>
                <div className={styles.crorssWrp}>
                    <Logo />
                    <CrossBtn show={show} setshow={setshow} />
                </div>
                <Navber />
            </div>
            <div />
        </div>
    )
}
