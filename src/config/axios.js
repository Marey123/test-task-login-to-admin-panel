import axios from 'axios'
import { TOKEN_KEY } from '../constants'
import { config } from './config'

const getInstanceWithToken = async () => {
  try {
    const tokenId = await localStorage.getItem(TOKEN_KEY);
    const instance = axios.create({
      baseURL: config.API_URL,
      headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json',
       'x-auth-token': tokenId,
        Authorization: `Bearer ${tokenId}`,
      },
    });
    return instance;
  } catch (error) {
    console.error('Error getting ID Token:', error);
    throw error;
  }
};

export const clientDataService = async (config) => {
  const instance = await getInstanceWithToken();
  return instance.request(config);
};
