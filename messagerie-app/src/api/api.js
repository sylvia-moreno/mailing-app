import axios from "axios";

const baseUrl = 'http://0.0.0.0:8080/realtors';

const getAllRealtors = async () => {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
};


const getARealtor = async (realtorId) => {
    const response = await axios.get(`${baseUrl}/${realtorId}`);
    return response.data;
};


const getAllMessages = async (realtorId) => {
    const response = await axios.get(`${baseUrl}/${realtorId}/messages`);
    return response.data;
};


const getRealtorMessage = async (realtorId, messageId) => {
    const response = await axios.get(`${baseUrl}/${realtorId}/messages/${messageId}`);
    return response.data;
};

const updateRealtorMessage = async (realtorId, messageId) => {
    const response = await axios.patch(`${baseUrl}/${realtorId}/messages/${messageId}`);
    return response.data;
};

export default {
    getAllRealtors,
    getARealtor,
    getAllMessages,
    getRealtorMessage,
    updateRealtorMessage,
};