import * as AlphaAdvantageUtil from '../util/alphaAdvantageAPI';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_INTRADAY = 'RECEIVE_INTRADAY';
export const RECEIVE_INTRADAY_SUCCESS = 'RECEIVE_INTRADAY_SUCCESS';
export const RECEIVE_INTRADAY_FAILURE = 'RECEIVE_INTRADAY_FAILURE';
export const RECEIVE_TIME_SERIES = 'RECEIVE_TIME_SERIES';
export const RECEIVE_TIME_SERIES_SUCCESS = 'RECEIVE_TIME_SERIES_SUCCESS';
export const RECEIVE_TIME_SERIES_FAILURE = 'RECEIVE_TIME_SERIES_FAILURE';
export const RECEIVE_STOCK_NAME = 'RECEIEVE_STOCK_NAME';
export const RECEIVE_STOCK_NAME_SUCCESS = 'RECEIEVE_STOCK_NAME_SUCCESS';
export const RECEIVE_STOCK_NAME_FAILURE = 'RECEIEVE_STOCK_NAME_FAILURE';
export const RECEIVE_CLEAR_STOCKS = 'RECEIVE_CLEAR_STOCKS';
export const CLEAR_API_ERRORS = 'CLEAR_API_ERRORS'

export const clearAPIErrors = () => ({
    type: CLEAR_API_ERRORS
})

export const receiveClearStocks = () => ({
    type: RECEIVE_CLEAR_STOCKS
})

export const receiveStock = (stock) => ({
    type: RECEIVE_STOCK,
    stock
})

export const receiveIntraDay = () => ({
    type: RECEIVE_INTRADAY,
})

export const receiveIntraDaySuccess = stock => ({
    type: RECEIVE_INTRADAY_SUCCESS,
    stock
})

export const receiveIntraDayFailure = error => ({
    type: RECEIVE_INTRADAY_FAILURE,
    error
})

export const receiveTimeSeries = () => ({
    type: RECEIVE_TIME_SERIES,
})

export const receiveTimeSeriesSuccess = stock => ({
    type: RECEIVE_TIME_SERIES_SUCCESS,
    stock
})

export const receiveTimeSeriesFailure = error => ({
    type: RECEIVE_TIME_SERIES_FAILURE,
    error
})

export const receiveStockName = () => ({
    type: RECEIVE_STOCK_NAME,
    loading: true
})

export const receiveStockNameSuccess = name => ({
    type: RECEIVE_STOCK_NAME_SUCCESS,
    name
})

export const receiveStockNameFailure = error => ({
    type: RECEIVE_STOCK_NAME_FAILURE,
    error
})

export const getQuoteEndPointAlpha = stockURL => dispatch => (
    AlphaAdvantageUtil.quoteEndPoint(stockURL).then((stockData) => (
        dispatch(receiveStock(stockData))
    ))
)

export const intraDayAPICall = apiURL => dispatch => {
    dispatch(receiveIntraDay())
    AlphaAdvantageUtil.intraDayAPI(apiURL)
        .then(stockData => {
            if (stockData.data.Note || stockData.data['Error Message']) {
                dispatch(receiveIntraDayFailure(stockData))
            } else {
                dispatch(receiveIntraDaySuccess(stockData))
            }
        })
        .catch(error => {
            dispatch(receiveIntraDayFailure(error))
        }
    )
}

export const timeSeriesInfoAPICall = apiURL => dispatch => {
    dispatch(receiveTimeSeries())
    AlphaAdvantageUtil.timeSeriesInfo(apiURL)
        .then((stockData) => {
            console.log(stockData);
            if (stockData.data.Note || stockData.data['Error Message']) {
                dispatch(receiveTimeSeriesFailure(stockData))
            } else {
                dispatch(receiveTimeSeriesSuccess(stockData))
            }
            
        })
        .catch(error => {
            dispatch(receiveTimeSeriesFailure(error))
        }
    )
}

export const stockNameAPICall = apiURL => dispatch => {
    dispatch(receiveStockName())
    return AlphaAdvantageUtil.stockName(apiURL)
        .then(stockData => {
            dispatch(receiveStockNameSuccess(stockData))
        })
        .catch( error => {
            dispatch(receiveStockNameFailure(error))
        }
    )
}