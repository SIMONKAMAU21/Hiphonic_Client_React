// useMessages.js

import { useQuery } from 'react-query';

const fetchMessages = async (sender_id) => {
  try {
    const response = await fetch(`http://localhost:3000/message${sender_id}`); 
    if (!response.ok) {
      throw new Error('Failed to fetch messages');
    }
    return response.json();
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

const useMessages = (sender_Id) => {
  return useQuery(['messages', sender_Id], () => fetchMessages(sender_Id));
};

export default useMessages;
