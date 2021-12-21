import React, { useState } from 'react'
import styles from "../styles/Header.module.scss"
import logo from "../public/images/logo.svg"
import Image from "next/image"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import Link from "next/link"
const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(true)

    return (
        <nav className={styles.navbar}>
            <Link href="/" passHref>
                <a>
                    <Image alt="" src={logo} />
                </a>
            </Link>
            <div className={styles.menu}>
                <h3>
                    <a href='#model3'>
                        MODEL 3
                    </a>
                </h3>
                <h3>
                    <a href='#modelx'>
                        MODEL X
                    </a>
                </h3>
                <h3>
                    <a href='#modely'>
                        MODEL Y
                    </a>
                </h3>
                <h3>
                    <a href='#roof'>
                        SOLAR ROOF
                    </a>
                </h3>
                <h3>
                    <a href='#panels'>
                        SOLAR PANELS
                    </a>
                </h3>
            </div>
            <div className={styles.rightMenu} onClick={() => setBurgerStatus(true)}>
                <h3>SHOP</h3>
                <h3>TESLA ACCOUNT</h3>
                <GiHamburgerMenu />
            </div>
            {
                burgerStatus &&

                <div className={styles.burgerContainer}>
                    <div className={styles.burgerNav}>
                        <div className={styles.closeContainer}>
                            <IoClose onClick={() => setBurgerStatus(false)} />
                        </div>
                        <li><a href="#">Existing Inventory</a></li>
                        <li><a href="#">Used Inventory</a></li>
                        <li><a href="#">Trade In</a></li>
                        <li><a href="#">Cyber Truck</a></li>
                        <li><a href="#">Roadster</a></li>
                        <li><a href="#">Semi</a></li>
                        <li><a href="#">Charging</a></li>
                    </div>
                </div>
            }
        </nav>
    )
}

export default Header
