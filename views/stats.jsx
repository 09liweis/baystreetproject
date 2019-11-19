var React = require('react');
var DefaultLayout = require('./layouts/default');

class Stats extends React.Component {
  render() {
    const {title} = this.props;
    return (
      <DefaultLayout title={title} page={'stats'}>
        <div className="statsPage">
          <h2>Toronto</h2>
          <div class="statstitlle">The trade volume at Toronto last year is 566, and the average price is
              $941,816, the average trade time is 19 days, and the amount of houses
              currently trading is 5053
          </div>
          
        </div>
        
        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Markham</h2>
        <p>The trade volume at Markham last year is 70, and the average price is
                  $984,402, the average trade time is 27 days, and the amount of houses
                  currently trading is 739
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Ricchmond Hill</h2>
        <p>The trade volume at Ricchmond Hill last year is 56, and the average price is
                  $1,033,542, the average trade time is 33 days, and the amount of houses
                  currently trading is 762
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Vaughan</h2>
        <p>The trade volume at Vaughan last year is 65, and the average price is
                  $991,735, the average trade time is 24 days, and the amount of houses
                  currently trading is 807
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Oakville</h2>
        <p>The trade volume at Oakville last year is 64, and the average price is
                  $905,934, the average trade time is 23 days, and the amount of houses
                  currently trading is 1464
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Mississauga</h2>
        <p>The trade volume at Mississauga last year is 155, and the average price is
                  $815732, the average trade time is 20 days, and the amount of houses
                  currently trading is 1127
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Brampton</h2>
        <p>The trade volume at Brampton last year is 121, and the average price is
                  $690,602, the average trade time is 19 days, and the amount of houses
                  currently trading is 1034
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Aurora</h2>
        <p>The trade volume at Aurora last year is 15, and the average price is
                  $947,500, the average trade time is 42 days, and the amount of houses
                  currently trading is 236
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Newmarket</h2>
        <p>The trade volume at Newmarket last year is 27, and the average price is
                  $836,129, the average trade time is 27 days, and the amount of houses
                  currently trading is 253
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Whitchurch-Stouffville</h2>
        <p>The trade volume at Whitchurch-Stouffville last year is 17, and the average price is
                  $819,038, the average trade time is 38 days, and the amount of houses
                  currently trading is 234
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>King</h2>
        <p>The trade volume at King last year is 5, and the average price is
                  $961,000, the average trade time is 27 days, and the amount of houses
                  currently trading is 303
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Oshawa</h2>
        <p>The trade volume at Oshawa last year is 70, and the average price is
                  $503,649, the average trade time is 22 days, and the amount of houses
                  currently trading is 445
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Whitby</h2>
        <p>The trade volume at Whitby last year is 34, and the average price is
                  $677,107, the average trade time is 14 days, and the amount of houses
                  currently trading is 273
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Ajax</h2>
        <p>The trade volume at Ajax last year is 35, and the average price is
                  $670,797, the average trade time is 19 days, and the amount of houses
                  currently trading is 230
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Milton</h2>
        <p>The trade volume at Milton last year is 40 , and the average price is
                  $789,122, the average trade time is 26 days, and the amount of houses
                  currently trading is 357
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Burlington</h2>
        <p>The trade volume at Burlington last year is 50, and the average price is
                  $804,448, the average trade time is 26 days, and the amount of houses
                  currently trading is 404
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Halton Hills</h2>
        <p>The trade volume at Halton Hills last year is 18, and the average price is
                  $710,296, the average trade time is 11 days, and the amount of houses
                  currently trading is 186
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Carleton</h2>
        <p>The trade volume at Carleton last year is 30, and the average price is
                  $893354, the average trade time is 33 days, and the amount of houses
                  currently trading is 291
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Clarington</h2>
        <p>The trade volume at Clarington last year is 42, and the average price is
                  $567,864, the average trade time is 24 days, and the amount of houses
                  currently trading is 337
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Uxbridge</h2>
        <p>The trade volume at Uxbridge last year is 4, and the average price is
                  $912,750, the average trade time is 46 days, and the amount of houses
                  currently trading is 141
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Scugog</h2>
        <p>The trade volume at Scugog last year is 6, and the average price is
                  $791650, the average trade time is 69 days, and the amount of houses
                  currently trading is 166
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Georgina</h2>
        <p>The trade volume at Georgina last year is 19, and the average price is
                  $630,831 the average trade time is 44 days, and the amount of houses
                  currently trading is 303
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Waterloo</h2>
        <p>The trade volume at Waterloo last year is 533, and the average price is
                  $533,288, the average trade time is 22 days, and the amount of houses
                  currently trading is 412
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>

        <h2>Ottwa</h2>
        <p>The trade volume at Ottwa last year is 566, and the average price is
                  $941,816, the average trade time is 19 days, and the amount of houses
                  currently trading is 5053
        </p>

        <div class="detailAveragePrice">Average Price: 1111</div>
        <div class="detailComparetolastyeay">Compare to last year: 222</div>
        <div class="detailComparetolastmonth">Compare to last year: 333</div>
        <div class="detailDealpricecomparetoaskprice">Deal price compare to ask price: 444</div>
        <div class="detailHighestPrice">Highest Price: 555</div>
        <div class="detailLowestPrice">Lowest Price: 666</div>
        <div class="detailProvence">Provence: XXXXX</div>
        <div class="detailPropertyType">Property Type: XXXXX</div>
        <div class="detailHistoricalprice">Historical price: 777</div>
        <div class="detailTradeVolume">Trade Volume: XXXXX</div>
      </DefaultLayout>
    )
  }
}

module.exports = Stats;