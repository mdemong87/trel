import Bar from "@/componnent/Bar";
import Logo from "@/componnent/Logo";
import styles from "../../../styles/product/Header/Header.module.css";
import Container from "../../Container";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderUser from "./HeaderUser";
import LeftCollaps from "./LeftCollaps";
import MessageAndNotification from "./MessageAndNotification";


export default function Header({ show, setshow }) {
    return (
        <header className={`${styles.header}`} >
            <Container>
                <div className={styles.headerWrp}>
                    <div className={styles.logoandconttorllerwrp}>
                        <Bar show={show} setshow={setshow} />
                        <Logo />
                    </div>
                    <div className={styles.searchAndUserWrp}>
                        <HeaderSearchBar />
                        <MessageAndNotification />
                        <HeaderUser />
                    </div>
                </div>
                {show && <LeftCollaps show={show} setshow={setshow} />}
            </Container>
        </ header>
    )
}
