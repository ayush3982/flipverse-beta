import React from 'react'
import styles from './../styles/header.module.css';
import {MagnifyingGlass, UserCircle} from "phosphor-react"


const Header = () => {
    return (
        <div className = {styles.headerContainer}>
            <div className = {styles.logoContainer}>
                <img className = {styles.logo}src = "/logo.png" height = "200" width = "300"/>
            </div>
            <div className = {styles.menuContainer}>
                    <a className = {styles.menuItem} href = "/">Explore</a>
                    <a className = {styles.menuItem} href = "/">What's New</a>
                    <a className = {styles.menuItem} href = "/">Featured</a>
                    <a className = {styles.menuItem} href = "/">Sell on Flipverse</a>
                    <a className = {styles.menuItem} href = "/">About</a>
            </div>
            <div className = {styles.buttonContainer}>
                <MagnifyingGlass className = {styles.buttons} size={32} />
                <UserCircle className = {styles.buttons} size={32} />
            </div>
        </div>
    )
}

export default Header