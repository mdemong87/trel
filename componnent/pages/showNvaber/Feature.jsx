import Link from "next/link";
import { TbPhotoSensor3 } from "react-icons/tb";
import styles from "../../../styles/pages/shownavber/feature.module.css";


export default function Feature() {
    return (
        <div className={styles.featureShownavber}>
            <div className={styles.navitemWrper}>
                <div>
                    <Link href={"/product"} className={styles.singleItemWrp}>
                        <div className={styles.iconsAndTitle}>
                            <TbPhotoSensor3 className={styles.icons} />
                            <h1>header</h1>
                        </div>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit!</p>
                        </div>
                    </Link>
                    <Link href={"/product"} className={styles.singleItemWrp}>
                        <div className={styles.iconsAndTitle}>
                            <TbPhotoSensor3 className={styles.icons} />
                            <h1>header</h1>
                        </div>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit!</p>
                        </div>
                    </Link>
                    <Link href={"/product"} className={styles.singleItemWrp}>
                        <div className={styles.iconsAndTitle}>
                            <TbPhotoSensor3 className={styles.icons} />
                            <h1>header</h1>
                        </div>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit!</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href={"/product"} className={styles.singleItemWrp}>
                        <div className={styles.iconsAndTitle}>
                            <TbPhotoSensor3 className={styles.icons} />
                            <h1>header</h1>
                        </div>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit!</p>
                        </div>
                    </Link>
                    <Link href={"/product"} className={styles.singleItemWrp}>
                        <div className={styles.iconsAndTitle}>
                            <TbPhotoSensor3 className={styles.icons} />
                            <h1>header</h1>
                        </div>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit!</p>
                        </div>
                    </Link>
                    <Link href={"/product"} className={styles.singleItemWrp}>
                        <div className={styles.iconsAndTitle}>
                            <TbPhotoSensor3 className={styles.icons} />
                            <h1>header</h1>
                        </div>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit!</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.shownabsideWrp}>
                gsdfgsdfgsdf
            </div>
        </div>
    )
}
