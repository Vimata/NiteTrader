import React from 'react';
import './profile.css';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

class ProfileChart extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    let { getProfileValues, userId } = this.props;
    await getProfileValues(userId);
  }

  render() {
    let { profileValues } = this.props;
    console.log(profileValues);
    if (!profileValues || (profileValues.length === 0)) {
      return (
        <div className='profile-graph-container-empty'>
          <h1>Profile Chart</h1>
          <h2>
            This chart will show your Value over Time by the end of day!
          </h2>
          <h2>
            We need some data first!
          </h2>
        </div>
      )
    } else {
      return (
        <div className='profile-rightside-container'>
          <div className='profile-graph-container'>
            <div>
              <h1 className='profile-graph-header'>
                Profile Value Over Time
              </h1>
            </div>
            <AreaChart className='area-chart-container'
              width={550}
              height={400}
              data={profileValues}
            >
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="date" dy={10} />
              <YAxis className='profile-graph-yaxis' dataKey="value" 
                type="number" domain={['auto', 'auto']} />
              <Tooltip />
              <Area type="monotone" fill="black" dataKey="value" stroke="rgb(255, 158, 44)" dot={false} />
            </AreaChart>
          </div>
        </div>
      )  
    }
  }
}

export default ProfileChart;