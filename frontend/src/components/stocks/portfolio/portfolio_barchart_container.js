import React from 'react';
import { connect } from 'react-redux';
import PortfolioBarChart from './portfolio_barchart';

const mapStateToProps = (state) => ({
    portfolio: state.portfolio,
})

export default connect(mapStateToProps, null)(PortfolioBarChart);