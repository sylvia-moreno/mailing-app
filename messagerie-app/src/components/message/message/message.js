import React from 'react'
import cx from 'classnames'

import IconMessage from '../icon-message/icon-message'
import styles from './message.module.scss'

const Message = ({
  id,
  body,
  firstname,
  lastname,
  phone,
  date,
  read,
  subject,
  type,
  onClick,
}) => {
    const isPhone = type === "phone" || type === "sms";
    const contactPhone = isPhone &&  !!firstname ? `${firstname ? `(${phone})` : `${phone}`}` : "";
    const title = `${firstname} ${lastname} ${contactPhone}`;
    return (
        <button
            type="button"
            key={id}
            id={id}
            className={styles.item}
            onClick={onClick}
        >
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <IconMessage type={type} isRead={read} />
                    <p className={cx(styles.name, {[styles.unreadMessage]: !read})}>{title}</p>
                </div>
                <span className={styles.headerDate}>{date}</span>
            </div>
            <div className={styles.bottomRow}>
                <p>{subject}</p>
                <p>{body}</p>
            </div>
        </button>
    )
}

export default Message