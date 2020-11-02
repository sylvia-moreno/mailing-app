import React, { useEffect, useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { AppContext } from '../../context/app-context';

import api from "../../api/api";
import Header from '../header/header';
import MessagesList from '../message/messages-list/messages-list';
import MessageDetails from '../message/message-details/message-details';

import styles from './mailing-box.module.scss';

const MailingBox = () => {
    let { realtorId }  = useParams();
    let { messageId }  = useParams();
    const history = useHistory();
    const [state, dispatch] = useContext(AppContext);
    const [messageDetails, setMessageDetail] = useState(null)
    const [currentMessage, setCurrentMessage] = useState(null)
    const [isMessageDetailsVisible, setIsMessageDetailsVisible] = useState(false)

    const getAllRealtors = () => {
        api.getAllRealtors()
            .then(response => {
                dispatch({
                    type: 'GET_REALTORS',
                    payload: response,
                });
            })
            .catch(error => {
                console.log('error: ', error)
            })
    }
    const getARealtor = () => {
        api.getARealtor(realtorId)
            .then(response => {
                dispatch({
                    type: 'GET_REALTOR',
                    payload: response,
                });
            })
            .catch(error => {
                console.log('error: ', error)
            })
    }
    const getAllMessages = () => {
        api.getAllMessages(realtorId)
            .then(response => {
                dispatch({
                    type: 'GET_MESSAGES',
                    payload: response,
                });
            })
            .catch(error => {
                console.log('error: ', error)
            })
    }
    const updateMessageStatus = (messageId) => {
        api.updateRealtorMessage(realtorId, messageId)
            .then(response => {
                dispatch({
                    type: 'UPDATE_MESSAGE',
                    payload: response
                })

                setMessageDetail(response)
                const updatedMessages = state.messages.map(m =>  m.id === response.id ? {...m, read: true} : m)
                dispatch({
                    type: 'GET_MESSAGES',
                    payload: updatedMessages
                })
            })
    }

    useEffect(() => {
        getAllRealtors()
    }, [dispatch])

    useEffect(() => {
        getARealtor()
    }, [dispatch])

    useEffect(() => {
        getAllMessages()
    }, [dispatch])

    useEffect(() => {
        return history.listen(()  => {
            dispatch({
                type: 'LOCATION_CHANGE',
                location: {realtorId, messageId}
            })
        })
    },[history, realtorId])

    const getMessage = (messageId) => {
        updateMessageStatus(messageId)
        const messageDetails = state.messages.find(msg => msg.id === Number(messageId));
        setMessageDetail(messageDetails)
        setIsMessageDetailsVisible(true)
    }

    const onMessageClick = (e) => {
        history.push('/')
        history.push(`${realtorId}/messages/${e.currentTarget.id}`)
        const messageDetails = state.messages.find(msg => msg.id === Number(e.currentTarget.id));
        const updateRealtor = !messageDetails.read ? {...state.realtor, unread_messages: state.realtor.unread_messages - 1} : {...state.realtor};

        const unReadMsg = !messageDetails.read ? {...state.realtor, unread_messages: state.realtor.unread_messages - 1} : {...state.realtor}
        dispatch({
            type: 'UPDATE_COUNTER',
            payload: unReadMsg.unread_messages
        })

        dispatch({
            type: 'GET_REALTOR',
            payload: updateRealtor,
        });
        getMessage(e.currentTarget.id);
        setCurrentMessage(e.currentTarget.id);
    };

    const onMessageClose = () => {
        setIsMessageDetailsVisible(false)
    };

    const handleFilterHeader = (id) => {
        realtorId = id
        getARealtor()
        getAllMessages()
        onMessageClose()
    }

    return (
        <div>
            <Header
                realtors={state.realtors}
                realtor={state.realtor}
                unReadMessage={state.realtor.unread_messages}
                onChange={handleFilterHeader}
                history={history}
            />

            <div className={styles.messagesContainer}>
                <MessagesList
                    messages={state.messages}
                    onClick={onMessageClick}
                    currentMessageId={currentMessage}
                />
                
                {isMessageDetailsVisible  && <MessageDetails message={messageDetails} realtorId={realtorId} onClose={onMessageClose} isCollapse={!!currentMessage} />}
            </div>

        </div>
    )
}

export default MailingBox;