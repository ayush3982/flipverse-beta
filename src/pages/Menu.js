import React from 'react'
import styles from '../styles/menu.module.css'

const Menu = () => {
    return (
        <div>
            <div className = {styles.menuContainer}>
                <div className = {styles.menuBox}>
                    <div className = {styles.menuItem}>
                        My Room
                    </div>
                    <div className = {styles.menuItem}>
                        Visit Flipverse
                    </div>
                    <div className = {styles.menuItem}>
                        Friends
                    </div>
                    <div className = {styles.menuItem_l}>
                        <div className = {styles.nestedItem}>
                            My Cart
                        </div>
                        <div className = {styles.nestedItem}>
                            Settings
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;