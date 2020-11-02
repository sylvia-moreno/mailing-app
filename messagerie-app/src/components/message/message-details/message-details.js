import React from 'react'
import cx from "classnames";
import moment from 'moment';
import IconMessage from '../icon-message/icon-message';

import styles from './message-details.module.scss'

const MessageDetails = ({message, onClose, isCollapse}) => {
    const {
        contact,
        read,
        type,
        body,
        date,
    } = message;
    const textDateDay = moment(date).format('DD MMMM');
    const textDateHours = moment(date).format('HH:mm');
    
    return (
        <main role="main" className={cx(styles.container, {[styles.collapse]: isCollapse })}>
            <article>
                <div className={styles.flexRight}>
                    <button
                        type="button"
                        onClick={onClose}
                    >
                        <i className="mypro-icon mypro-icon-cross"></i>
                    </button>
                </div>
                <header className={cx(styles.subContainer, styles.header)}>
                    <div className={styles.flexRow}>
                        <span className={styles.icon}>
                            <IconMessage type={type} unread={!read}/>
                        </span>
                        <h2 className={styles.nameHeader}>{contact.firstname} {contact.lastname}</h2>
                    </div>
                    <div>
                        <dl>
                            <dt>Email</dt>
                            <dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd>
                        </dl>
                    </div>
                    <div>
                        <dl>
                            <dt>Téléphone</dt>
                            <dd><a href={`tel:${contact.phone}`}>{contact.phone}</a></dd>

                        </dl>
                    </div>
                </header>
                <section className={cx(styles.subContainer, styles.body)}>
                    <div>
                        <h3 className={styles.nameContainer}>{contact.firstname} {contact.lastname}</h3>
                        <span className={styles.date}>{textDateDay} à {textDateHours}</span>
                        <p>{body}</p>
                    </div>
                </section>
            </article>
        </main>
    )
}

export default MessageDetails;