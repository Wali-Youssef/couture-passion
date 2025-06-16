import axios from 'axios';

export const getAccueil = async () => {
    const res = await axios.get('http://localhost:1337/api/accueil?populate=*');
    return res.data.data;
};

export const getGalerie = async () => {
  const res = await axios.get('http://localhost:1337/api/galeries?populate=images');
  return res.data.data;
};