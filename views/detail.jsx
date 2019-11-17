var React = require('react');
var DefaultLayout = require('./layouts/default');

class Detail extends React.Component {
  render() {
    const {prop} = this.props;
    var imgs = prop.photos.map((img)=>
      <img className="img" src={img}/>
    );
    return (
      <DefaultLayout title={prop.addr} page={'detail'}>
        <div className="detailPage">
          <div className="detailImgs">
            {imgs}
          </div>
          <div className="detailAddrContainer">
            <div className="detailAddress">{prop.addr}</div>
            <span className="detailCity">{prop.city}, </span>
            <span className="detailprov">{prop.prov}, </span>
            <span className="detailzip">{prop.zip} </span>
            <div className="detailcrossstreet">{prop.crsst}</div>
            <div className="detaillisrdate">List Date:{prop.lstd}</div> 
            <div className="dtitle"></div> 
          </div>

          <div className="detailPriceContainer">
            <div className="detailprice">${prop.lp}</div>
            <div className="detailforsale">{prop.lpunt}</div>
          </div>

          <div className="detailunt">{prop.unt}</div>
          <div className="dtitle2"></div> 
          
          <div className="detailtotalbedrooms">
            <i class="fas fa-bed"></i>
            <span>{prop.tbdrms}</span>
          </div>
          <div className="detailbathroom">
           <i class="fas fa-shower"></i>
           <span>{prop.bthrms}</span>
          </div>
          <div className="detailkitchen">Kitchen: {prop.kch}</div>
          <div className="detailgarage">Total Garage: {prop.tgr}</div>
          <div className="detailtotalparkingspace">Total parking space:{prop.tot_park_spcs}</div>
          
          <div className="dtitle1"></div> 
          <div className="detailsqft">Square Feet:{prop.sqft1}</div>
          <div className="detailtaxyr">Tax Year:{prop.taxyr}</div>
          <div className="detailtax">Tax: {prop.tax}</div>
          <div className="dtitle2"></div> 

          
          
          
          
          
          <div className="detailstorey">Storey:{prop.pstyl}</div>
          <div className="detailgeoq">Geoq: {prop.geoq}</div>
          <div className="detailwater">Water: {prop.water}</div>
          <div className="detailrealestatecenter">{prop.rltr}</div>
          <div className="detailfeat">{prop.feat}</div>
          <div className="detailage">Age:{prop.age}</div>
          <div className="detailrealtor">Realtor:{prop.rltr}</div>
          <div className="detailrealtor">Sewer:{prop.sewer}</div>
          <div className="MLS">MLS#:{prop.sid}</div>
          <div className="pool">Pool:{prop.pool}</div>
          <div className="detaillaundrylevel">Laundry level:{prop.laundry_lev}</div>
          <div className="detailinternet">Internet:{prop.internet}</div>
          <div className="detailheat">Heat:{prop.heat}</div>
          <div className="detailac">Air Condition:{prop.ac}</div>


          <div className="dtitle2"></div> 
          <div className="detaildetail">Detail Introduction：{prop.m}</div>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Detail;