import React from 'react'
import styles from "../styles/Section.module.scss"
import Image from "next/image"
import downarrow from "../public/images/downarrow.svg"
import { FC } from "react"


type Iprops = {
    title: any,
    bg: "model3" | "modelx" | "modely" | "roof" | "acc" | "panels"
    description: string,
    id: "model3" | "modelx" | "modely" | "roof" | "acc" | "panels"
}
const Section: FC<Iprops> = ({ title, bg, description, id }) => {
    const bgVar: any = {
        "model3": {
            styles: styles.container3,
            id: "model3"
        },
        "modelx": {
            styles: styles.containerX,
            id: "modelx"
        },
        "modely": {
            styles: styles.containerY,
            id: "modely"
        },
        "roof": {
            styles: styles.containerRoof,
            id: "roof"
        },
        "panels": {
            styles: styles.containerPanels,
            id: "panels"
        },
        "acc": {
            styles: styles.containerAcc,
            id: "acc"
        }
    }
    return (
        <div>
            <div id={id} className={bgVar[bg]?.styles}>
                <div className={styles.itemText}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className={styles.buttonGroup}>
                    <button className={styles.leftButton}>CUSTOM ORDER</button>
                    <button className={styles.rightButton}>EXISTING INVENTORY</button>
                </div>
                <a className={styles.downArrow}>
                    <Image alt='' src={downarrow} />
                </a>
            </div>
        </div>

    )
}

export default Section
