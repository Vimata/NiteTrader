import React from 'react';
import './profile.css';
import ProfileDataContainer from './profile_data_container';
import ProfileChartContainer from './profile_chart_container';

class Profile extends React.Component {

  componentDidMount(){
    let { fetchTrades, userId } = this.props;
    fetchTrades(userId);
  }

  componentDidUpdate(prevProps) {
    // if (this.props.myTransactions !== prevProps.myTransactions) {
    //   this.props.buildPortfolio(this.props.myTransactions);
    // } else if (Object.keys((this.props.myPortfolio).length) !== (Object.keys(prevProps.myPortfolio).length) &&
    //  (Object.keys(this.props.myPortfolio).length > 0)) {
    //   this.props.buildProfile(this.props.myPortfolio);
    // }
    if (this.props.myTransactions !== prevProps.myTransactions) {
      this.props.buildPortfolio(this.props.myTransactions);
    } 
  }

  render() {
     let theProfileDetailsAndGraph = (Object.keys(this.props.myPortfolio).length > 0) ? (
      <div className="profile-details-and-graph">
        <ProfileDataContainer/>
        <ProfileChartContainer/>
      </div>
    ) : null;


    return (
      <div className="profile-container">
        <div className="profile-header">
          <h1>Your Profile Page</h1>  
        </div>
          {theProfileDetailsAndGraph}
      </div>
    )  
  };
}

export default Profile;