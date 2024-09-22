import axios from "axios";

const ENDPOINT = "https://qtify-backend-labs.crio.do";

export const getNewAlbums = async () => {
  try {
    const res = await axios.get(`${ENDPOINT}/albums/new`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSongs = async () => {
  try {
    const res = await axios.get(`${ENDPOINT}/songs`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};