import { AiOutlineSearch } from "react-icons/ai";
import styles from "../../../styles/product/Header/HeaderSearchBar.module.css";

export default function HeaderSearchBar() {
    return (
        <div>
            <div className={styles.headersearchWrp}>
                <input className={styles.headersearch} type="search" placeholder="Search..." />
                <AiOutlineSearch className={styles.searchIcon} />
            </div>
        </div>
    )
}
