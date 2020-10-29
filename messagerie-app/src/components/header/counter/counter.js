import React from 'react'
import cx from "classnames";

import styles from './counter.module.scss'
import IconMessage from "../../message/icon-message/icon-message";

interface CounterPropsType {
    nbOfMessages: number
}
const Counter = ({nbOfMessages}: CounterPropsType) => (
    <button className={cx(styles.container, {[styles.unRead]: nbOfMessages <= 0})}>
        <IconMessage type="inbox" isRead={false} />
        <span className={styles.a11yVisibility}>Messages reçus</span>
        {nbOfMessages}
    </button>
)

export default Counter