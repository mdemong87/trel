import { TiTick } from "react-icons/ti";
import styles from "./layout.module.css";


export default function layout({ children }) {
    return (
        <div className={styles.authWrp}>
            <div className={styles.layoutTextWrp}>
                <div>
                    <h1>Join Millions <br />worldwide who<br /> automate thire work<br /> useing This product.</h1>
                    <ul>
                        <li>
                            <TiTick className={styles.tickIcons} />
                            <span>Easy SignUp! No Coding required.</span>
                        </li>
                        <li>
                            <TiTick className={styles.tickIcons} />
                            <span>Free Forever for core feature</span>
                        </li>
                        <li>
                            <TiTick className={styles.tickIcons} />
                            <span>15 days free trial Primunam app</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.suthSinglePage}>
                {children}
            </div>
        </div>
    )
}
