import React from 'react';
import styles from './icon-message.module.scss';
import cx from "classnames";

const IconMessage = ({ type, isRead }) => {
    const iconType = type === "email" ? "mail" : type;
    return (
        <span
            aria-hidden="true"
            className={cx(styles.messageIcon, {[styles.unreadIco]: !isRead})}
        >
            <i className={`mypro-icon mypro-icon-${iconType}`}></i>
        </span>
    );
};

export default IconMessage;
