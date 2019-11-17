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
          </div>

          <div className="detailPriceContainer">
             <div className="detailprice">${prop.lp}</div>
             <div className="detailforsale">{prop.lpunt}</div>
          </div>

          
          <div className="detailIconContainer">
          <span className="detailtotalbedrooms">
            <i class="fas fa-bed"></i>
            <b>{prop.tbdrms}</b>
          </span>
          <span className="detailbathroom">
            <i class="fas fa-shower"></i>
            <b>{prop.bthrms}</b>
          </span>
          {(prop.kch)?
          <span className="detailkitchen">
            <i class="fas fa-blender"></i>
            <b>{prop.kch}</b>
          </span>
          :null}
          {(prop.tot_park_spcs)?
          <span className="detailtotalparkingspace">
            <i class="fas fa-parking"></i>
            <b>{prop.tot_park_spcs}</b>
          </span> 
          :null}
          </div>


          <div className="detailtaxContainer">
          {(prop.sqft1)?
          <dl className="detailstorey">
            <dt>Square Feet:</dt>
            <dd>{prop.sqft1}</dd>
          </dl>
          :null}
          <dl className="detailstorey">
            <dt>Tax Year:</dt>
            <dd>{prop.taxyr}</dd>
          </dl>
          <dl className="detailstorey">
            <dt>Tax: $</dt>
            <dd>{prop.tax}</dd>
          </dl>
          </div> 
          
        
          
          <div className="detaildetailContainer">
          {(prop.lstd)?
          <dl className="detailstorey">
            <dt>List Date:</dt>
            <dd>{prop.lstd}</dd>
          </dl>
          :null}
          {(prop.pstyl)?
          <dl className="detailstorey">
            <dt>Storey:</dt>
            <dd>{prop.pstyl}</dd>
          </dl>
          :null}
          <dl className="detailstorey">
            <dt>Geoq:</dt>
            <dd>{prop.geoq}</dd>
          </dl>
          {(prop.water)?
          <dl className="detailstorey">
            <dt>Water:</dt>
            <dd>{prop.water}</dd>
          </dl>
          :null}
          <dl className="detailstorey">
            <dt>Center:</dt>
            <dd>{prop.rltr}</dd>
          </dl>
          {(prop.feat)?
          <dl className="detailstorey">
            <dt>Feat:</dt>
            <dd>{prop.feat}</dd>
          </dl>
          :null}
          {(prop.age)?
          <dl className="detailstorey">
            <dt>Age:</dt>
            <dd>{prop.age}</dd>
          </dl>
          :null}
          <dl className="detailstorey">
            <dt>Realtor:</dt>
            <dd>{prop.rltr}</dd>
          </dl>
          {(prop.sewer)?
          <dl className="detailstorey">
            <dt>Sewer:</dt>
            <dd>{prop.sewer}</dd>
          </dl>
          :null}
          {(prop.sid)?
          <dl className="detailstorey">
            <dt>MLS#:</dt>
            <dd>{prop.sid}</dd>
          </dl>
          :null}
          {(prop.pool)?
          <dl className="detailstorey">
            <dt>Pool:</dt>
            <dd>{prop.pool}</dd>
          </dl>
          :null}
          {(prop.laundry_lev)?
          <dl className="detailstorey">
            <dt>Laundry level:</dt>
            <dd>{prop.laundry_lev}</dd>
          </dl>
           :null}
            {(prop.internet)?
          <dl className="detailstorey">
            <dt>Internet:</dt>
            <dd>{prop.internet}</dd>
          </dl>
           :null}
           {(prop.heat)?
          <dl className="detailstorey">
            <dt>Heat:</dt>
            <dd>{prop.heat}</dd>
          </dl>
          :null}
          {(prop.ac)?
          <dl className="detailstorey">
            <dt>Air Condition:</dt>
            <dd>{prop.ac}</dd>
          </dl>
          :null}
          </div>

          <div className="detailIntroContaioner">
          <div className="detaildetail">Detail Introduction：{prop.m}</div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Detail;