"use client"

import Link from "next/link"
import styles from "./Footer.module.css";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname()

    return (
        pathname !== "/about" ? <nav className={styles.navContainer}>
            <div className="container">

            Footer
            {/* <ul className={styles.navbar + " container"}>
                <li><Link className={`${styles.navLink} ${pathname === "/" && styles.active}`} href={"/"}>Home</Link></li>
                <li><Link className={`${styles.navLink} ${pathname === "/portfolio" && styles.active}`} href={"/portfolio"}>Portfolio</Link></li>
                <li><Link className={`${styles.navLink} ${pathname === "/portfolio/nhaps" && styles.active }`} href={"/portfolio/nhaps"}>Nhaps</Link></li>
                <li><Link className={`${styles.navLink} ${pathname === "/portfolio/hkk" && styles.active }`} href={"/portfolio/hkk"}>Hkk</Link></li>
            </ul> */}
            </div>
        </nav> : <></>
    )
}

export default Footer