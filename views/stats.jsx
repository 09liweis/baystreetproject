var React = require('react');
var DefaultLayout = require('./layouts/default');

class Stats extends React.Component {
  render() {
    const {title,stats} = this.props;
    const statsView = stats.map((s)=>
    <div className="statsPage">
      <h2>{s.city}</h2>
      <p>The trade volume at Toronto last year is 566, and the average price is
          $941,816, the average trade time is 19 days, and the amount of houses
          currently trading is 5053
      </p>
      <div class="detailAveragePrice">Average Price: {s.Avg_Price}</div>
      <div class="detailComparetolastyeay">Compare to last year: 222</div>
      <div class="detailComparetolastmonth">Compare to last year: 333</div>
      <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
      <div class="detailHighestPrice">Highest Price: 555</div>
      <div class="detailLowestPrice">Lowest Price: 666</div>
      <div class="detailProvence">Provence: XXXXX</div>
      <div class="detailPropertyType">Property Type: XXXXX</div>
      <div class="detailHistoricalprice">Historical price: 777</div>
      <div class="detailTradeVolume">Trade Volume: XXXXX</div>
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