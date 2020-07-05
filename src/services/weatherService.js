import api from './api';
const API_KEY = 'd6674be23fab4be5a43a3012193eff20';

const query = async (city) => {
  try {
    const res = await api.get(`daily?city=${city}&key=${API_KEY}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default {
  query
};
