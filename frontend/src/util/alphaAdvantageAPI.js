import axios from 'axios';

export const quoteEndPointDB = (endPointStock) => {
    return axios.patch('/api/stock_api/quoteendpointstock/update', endPointStock);
};

export const quoteEndPoint = (apiURL) => {
    return axios.get(apiURL);
};

export const intraDayAPI = (apiURL) => {
    return axios.get(apiURL)
};

export const intraDayDB = (stockInfo) => {
    const dbRecord = axios.post('/api/stock_api/intradayapi/new', stockInfo);
    debugger
    return dbRecord;
}