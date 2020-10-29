import React, {Fragment, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';

import Header from '../header/header';
import MessagesList from '../message/messages-list/messages-list';
import MessageDetails from '../message/message-details/message-details';
import api from "../../api/api";

import styles from './mailing-box.module.scss';
import Services from "../../api/api";

const MailingBox = () => {
    let { realtorId }  = useParams();

    const [realtors, setRealtors] = useState([])
    const [realtor, setRealtor] = useState({});
    const [messages, setMessages] = useState([]);
    const [messageDetail, setMessageDetail] = useState(null)
    const [currentMessage, setCurrentMessage] = useState(null)

    const getAllRealtors = () => {
        Services.getAllRealtors()
            .then(response => {
                setRealtors(response)
            })
            .catch(error => {
                console.log('error: ', error)
            })
    }
    const getARealtor = () => {
        api.getARealtor(realtorId)
            .then(response => {
                setRealtor(response)
            })
            .catch(error => {
                console.log('error: ', error)
            })
    }
    const getAllMessages = () => {
        api.getAllMessages(realtorId)
            .then(response => {
                setMessages(response)
            })
            .catch(error => {
                console.log('error: ', error)
            })
    }

    useEffect(() => {
        getAllRealtors()
    }, [realtorId])

    useEffect(() => {
        getARealtor()
    }, [realtorId])

    useEffect(() => {
        getAllMessages()
    }, [realtorId])

    const getMessage = (realtorId) => {
        const messageDetails = messages.find(msg => msg.id === Number(realtorId));
        setMessageDetail(messageDetails)
    }

    const onMessageClick = (e) => {
        getMessage(e.currentTarget.id);
        setCurrentMessage(e.currentTarget.id);
    };

    const onMessageClose = () => {
        setMessageDetail(null)
    };

    const handleFilterHeader = (id) => {
        realtorId = id
        getARealtor()
        getAllMessages()
    }

    return (
        <Fragment>
            <Header
                realtors={realtors}
                realtor={realtor}
                unReadMessage={realtor.unread_messages}
                onChange={handleFilterHeader}
            />

            <div className={styles.messagesContainer}>
                <MessagesList
                    messages={messages}
                    onClick={onMessageClick}
                    currentMessageId={currentMessage}
                />
                
                {messageDetail && <MessageDetails message={messageDetail} onClose={onMessageClose} isCollapse={!!currentMessage} />}
            </div>

        </Fragment>
    )
}

export default MailingBox