import React from 'react'
import MeilleursAgentsIcon from '../../../assets/meilleurs-agents-icon'

import styles from './logo.module.scss'

const Logo = () => (
    <div className={styles.container}>
        <h1>
            <span className={styles.a11yVisibility}>Meilleurs Agents Pro</span>
            <MeilleursAgentsIcon />
        </h1>
    </div>
)

export default Logo