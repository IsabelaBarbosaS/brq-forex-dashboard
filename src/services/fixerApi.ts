import axios from 'axios';

const API_KEY = 'SUA_CHAVE_FIXER_AQUI'; // substitua pela sua chave
const BASE_URL = 'https://data.fixer.io/api';

export const fetchRates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/latest`, {
      params: {
        access_key: API_KEY,
        base: 'EUR',
        symbols: 'USD,BRL',
      },
    });

    if (response.data && response.data.success) {
      return response.data.rates;
    } else {
      throw new Error('Erro ao buscar dados da API');
    }
  } catch (error) {
    console.error('Erro ao buscar taxas de câmbio:', error);
    return null;
  }
};
