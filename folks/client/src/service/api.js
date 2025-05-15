import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.error("Error adding user:", error.message);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/users`);
    // console.log("Users fetched successfully", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
};

export const setConnversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/add`, data);
    // return response.data;
  } catch (error) {
    console.error("Error setting conversation api:", error.message);
  }
};

export const getConversation = async (users) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, users);
    return response.data;
  } catch (error) {
    console.error("Error getting conversation api:", error.message);
    return null; // ADDED THIS LINE
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.error("Error sending message in newMessage api:", error.message);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting messages in getMessages api:", error.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.error("Error uploading file in uploadFile api:", error.message);
  }
};
