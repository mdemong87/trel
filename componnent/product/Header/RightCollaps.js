
import CrossBtn from "@/componnent/CrossBtn";
import { AiOutlineUser } from "react-icons/ai";
import styles from "../../../styles/product/Header/RightCollaps.module.css";

export default function RightCollaps({ show, setshow }) {



    return (
        <div className={styles.rightCollaspeWrp}>
            <div />
            <div className={styles.rightModel}>
                <div className={styles.topUserWrp}>
                    <div className={styles.photoAndname}>
                        <div className={styles.headerUserIcons}>
                            <AiOutlineUser className={styles.userIcons} />
                        </div>
                        <div>
                            <h2>Md Emon Hossen</h2>
                            <p>mdemong87</p>
                        </div>
                    </div>
                    <div>
                        <CrossBtn show={show} setshow={setshow} />
                    </div>
                </div>
                <hr />
            </div>
        </div >
    )
}
