import React from 'react'
import cx from "classnames";

import IconMessage from '../icon-message/icon-message';

import styles from './message-details.module.scss'

const MessageDetails = ({message, onClose, isCollapse}) => {
    const {
        contact,
        read,
        type,
        body
    } = message;

    return (
        <div className={cx(styles.container, {[styles.collapse]: isCollapse })}>

            <button
                type="button"
                onClick={onClose}
            >
                <i className="mypro-icon mypro-icon-cross"></i>
            </button>
            <div className={cx(styles.subContainer, styles.header)}>
                <IconMessage type={type} unread={!read}/>
                <div>
                    <h2 className="fullname">
                        {contact.firstname} {contact.lastname}
                    </h2>
                    <div>
                        <p>Email</p>
                        <p>{contact.email}</p>
                    </div>
                    <div>
                        <p>Téléphone</p>
                        <p>{contact.phone}</p>
                    </div>
                </div>
            </div>
            <div className={cx(styles.subContainer, styles.body)}>
                <div>
                    <p>{contact.firstname} {contact.lastname}</p>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default MessageDetails;