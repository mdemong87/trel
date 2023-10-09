import { RxCross1 } from "react-icons/rx";
import styles from "../styles/CrossBtn.module.css";

export default function CrossBtn({ show, setshow }) {
    return (
        <div className={styles.corssBtn} onClick={() => setshow(!show)}>
            <RxCross1 className={styles.icons} />
        </div>
    )
}
