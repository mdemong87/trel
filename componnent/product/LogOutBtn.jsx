import { BiLogOutCircle } from "react-icons/bi";
import styles from "../../styles/product/LogoutBtn.module.css";

export default function LogOutBtn({ show }) {
    return (
        <button className={styles.logoutWrp}>
            <BiLogOutCircle className={styles.logouticon} />
            <span className={`${show ? styles.showSpan : styles.span}`}>Log Out</span>
        </button>
    )
}
