import React from 'react'
import cx from "classnames";

import IconMessage from '../icon-message/icon-message';
import styles from './messages-list.module.scss'

const MessagesList = ({messages, onClick, currentMessageId}) => {
    return (
        <ul className={styles.container}>
            {messages.map(message => {
                const {
                    id,
                    body,
                    contact,
                    read,
                    subject,
                    type,
                    date,
                } = message;

                const isPhone = type === "sms" || type === "phone";
                const contactPhone = isPhone ? `${contact.firstname ? `(${contact.phone})` : `${contact.phone}`}` : "";
                const title = `${contact.firstname} ${contact.lastname} ${contactPhone}`;
                const nDate = new Date(date).getHours() + ':' + new Date(date).getMinutes();

                return (
                    <li key={id}>
                        <button
                            type="button"
                            key={id}
                            id={id}
                            className={cx(styles.item, {[styles.unRead]: !read})}
                            onClick={onClick}
                            aria-expanded={Number(currentMessageId) === id}
                        >
                            <div className={styles.titleContainer}>
                                <div className={styles.left}>
                                    <IconMessage type={type} unread={!read} />
                                    <h3 className={styles.title}>{title}</h3>
                                </div>
                                <div>
                                    <span>{nDate}</span>
                                </div>
                            </div>
                            <div className={styles.textContainer}>
                              <p className={styles.textSubject}>{subject}</p>
                              <p className={styles.textBody}>{body}</p>
                            </div>
                        </button>
                    </li>
                );
            })}
        </ul>
    )
}

export default MessagesList