import React, { Component } from "react";
import ReactDOM from "react-dom";
import Loading from './components/Loading.jsx';
import {Line} from 'react-chartjs-2';

class Stats extends Component {
  constructor() {
    super();
    this.state = {
      stats:stats,
    };
  }
  componentWillMount() {
  }
  componentDidMount() {
    
  }
  render() {
    const {stats} = this.state;
    console.log(stats);
    const statsView = stats.map((s)=> {
      const priceLabel = s.hists.map((h)=>h.date);
      const priceVale = s.hists.map((h)=>h.lp);
      const priceHistData = {
        labels:priceLabel,
        datasets: [
          {
            label: s.city + ' Average Price',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: priceVale
          }
        ]
      };
      const volLabel = s.trd_vol.map((h)=>h.date);
      const volVale = s.trd_vol.map((h)=>h.vol);
      const volHistData = {
        labels:volLabel,
        datasets: [
          {
            label: s.city + ' trade Volume Hist',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: volVale
          }
        ]
      }
      return (
        <div className="stat" key={s._id}>
          <h3>{s.city} {s.P_type}</h3>
          <div className="statDatas">
            <div className="statData">
              <div className="statDataLabel">Avg Price</div>
              <div className="statDataValue">{s.Avg_Price}</div>
            </div>
            <div className="statData">
              <div className="statDataLabel">VS last year</div>
              <div className="statDataValue">{s.Comp_Last_year}</div>
            </div>
            <div className="statData">
              <div className="statDataLabel">VS last month</div>
              <div className="statDataValue">{s.Comp_Last_month}</div>
            </div>
            <div className="statData">
              <div className="statDataLabel">Deal price VS ask price</div>
              <div className="statDataValue">{s.deal_price_div_ask_price}</div>
            </div>
            <div className="statData">
              <div className="statDataLabel">Highest Price</div>
              <div className="statDataValue">{s.High_Price}</div>
            </div>
            <div className="statData">
              <div className="statDataLabel">Lowest Price</div>
              <div className="statDataValue">{s.Low_Price}</div>
            </div>
          </div>
          <div className="statCharts">
            <div className="statChart">
              <Line data={priceHistData} />
            </div>
            <div className="statChart">
              <Line data={volHistData} />
            </div>
          </div>
          <div className="detailCommon">{s.common}</div>
        </div>)
      })
    return (
      <div className="statsPage">
        {statsView}
      </div>
    );
  }
}
export default Stats;