var React = require('react');
var DefaultLayout = require('./layouts/default');

class Stats extends React.Component {
  render() {
    const {title,stats} = this.props;
    console.log(stats);
    const statsView = stats.map((s)=>
    <div className="statsPage" key={s._id}>
      <h2>{s.city}</h2>
      {/* <p>The trade volume at Toronto last year is 566, and the average price is
          $941,816, the average trade time is 19 days, and the amount of houses
          currently trading is 5053
      </p> */}
      <div class="detailAveragePrice">Average Price: {s.Avg_Price}</div>
      <div class="detailComparetolastyeay">Compare to last year: {s.Comp_Last_year}</div>
      <div class="detailComparetolastmonth">Compare to last month: {s.Comp_Last_month}</div>
      <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: {s.deal_price_div_ask_price}</div>
      <div class="detailHighestPrice">Highest Price: {s.High_Price}</div>
      <div class="detailLowestPrice">Lowest Price: {s.Low_Price}</div>
      <div class="detailProvence">Provence: {s.Prov}</div>
      <div class="detailPropertyType">Property Type: {s.P_type}</div>
      <div class="detailHistoricalprice">Historical price: 777</div>
      <div class="detailTradeVolume">Trade Volume: XXXXX</div>
      <div class="detailCommon">Common: {s.common}</div>
    </div>
    )
    return (
      <DefaultLayout title={title} page={'stats'}>
        {statsView}
      </DefaultLayout>
    )
  }
}

module.exports = Stats;