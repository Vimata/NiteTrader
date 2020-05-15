import React from 'react';
// import StockDetails from './stock_details'
import StockDetailsContainer from './stock_details_container'
import { getQuoteEndPointAlpha } from '../../../actions/alphaApi_actions';
import { formatAPICall } from '../../../actions/_alphaAPI';
import key from '../../../config/keys';


export default class StockSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          ticker: "",
        };

        this.getStockDetails = this.getStockDetails.bind(this);
        // this.getQuoteEndPointAlpha = this.getQuoteEndPointAlpha.bind(this)
        // this.bindingTheFunction = this.bindingTheFunction.bind(this)
    }

// bindingTheFunction(e){
//     e.preventDefault();
//     this.props.getQuoteEndPointAlpha
//     debugger
// }


getStockDetails(e){
    e.preventDefault();
    let stockURL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.ticker}&apikey=${key}`;
    const stockInfo = this.props.getQuoteEndPointAlpha(stockURL).then(
        (res) => {
            formatAPICall(res)
            // debugge
        }
    )
    // const stockInforFormatted = this.bindingTheFunction(stockURL);
}

update() {
    // debugger
    return e => this.setState({
        ticker: e.currentTarget.value
    });
}

render(){
    
    // let theDetails = (!!this.state.stockDetails ? <StockDetails stockDetails={this.state.stockDetails} /> : "")
        // debugger
        return(
            <div>
                < form onSubmit={this.getStockDetails}>
                    <div>
                        <label>Stock Ticker</label>
                        <input 
                        type="text"
                        value = {this.state.ticker}
                        onChange={this.update()}
                        placeholder = "Enter a Ticker" 
                        />
                        <input type="submit" value="Submit" />
                    </div>
                    
                </form>
                <StockDetailsContainer />
                {/* {theDetails} */}
            </div>
        )
    }
}  