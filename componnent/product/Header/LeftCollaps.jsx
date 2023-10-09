import CrossBtn from "@/componnent/CrossBtn";
import Logo from "@/componnent/Logo";
import styles from "../../../styles/product/Header/LeftCollasp.module.css";
import Aside from "../Aside";


export default function LeftCollaps({ show, setshow }) {
    return (
        <div className={styles.leftCollaspeWrp}>
            <div className={styles.leftModel}>
                <div className={styles.crorssWrp}>
                    <Logo />
                    <CrossBtn show={show} setshow={setshow} />
                </div>
                <Aside show={show} setshow={setshow} />
            </div>
            <div />
        </div>
    )
}
