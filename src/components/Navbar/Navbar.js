"use client"

import Link from "next/link"
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()

    return (
        <nav className={styles.navContainer}>
            <ul className={styles.navbar + " container"}>
                <li><Link className={`${styles.navLink} ${pathname === "/" && styles.active}`} href={"/"}>Home</Link></li>
                <li><Link className={`${styles.navLink} ${pathname === "/about" && styles.active}`} href={"/about"}>About</Link></li>
                <li><Link className={`${styles.navLink} ${pathname === "/portfolio" && styles.active}`} href={"/portfolio"}>Portfolio</Link></li>
                <li><Link className={`${styles.navLink} ${pathname === "/portfolio/nhaps" && styles.active }`} href={"/portfolio/nhaps"}>Nhaps</Link></li>
                <li><Link className={`${styles.navLink} ${pathname === "/portfolio/hkk" && styles.active }`} href={"/portfolio/hkk"}>Hkk</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar