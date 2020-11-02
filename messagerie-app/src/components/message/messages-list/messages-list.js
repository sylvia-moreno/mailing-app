import React from 'react'
import cx from "classnames";
import moment from 'moment';

import IconMessage from '../icon-message/icon-message';
import styles from './messages-list.module.scss'

const MessagesList = ({messages, onClick, currentMessageId}) => {
    return (
        <aside className={styles.container}>
            <ul className={styles.list}>
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
                    const textDateHours = moment(date).format('HH:mm');

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
                                <article className={styles.titleContainer}>
                                    <div className={styles.left}>
                                        <IconMessage type={type} unread={!read} />
                                        <p className={styles.title}>{title}</p>
                                    </div>
                                    <div>
                                        <span className={styles.time}>{textDateHours}</span>
                                    </div>
                                </article>
                                <div className={styles.textContainer}>
                                    <p className={styles.textSubject}>{subject}</p>
                                    <p className={styles.textBody}>{body}</p>
                                </div>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>

    )
}

export default MessagesList