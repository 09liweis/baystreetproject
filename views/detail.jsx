var React = require('react');
var DefaultLayout = require('./layouts/default');

class Detail extends React.Component {
  render() {
    let {prop,user} = this.props;
    if (!user) {
      user = {};
    } else {
      user.currentPropId = prop.id;
    }
    let initScript = 'var currentUser = ' + JSON.stringify(user).replace(/script/g, 'scr"+"ipt');
    var imgs = prop.photos.map((img)=>
      <img className="swiper-slide" key={img} src={img}/>
    );
    return (
      <DefaultLayout title={prop.addr} user={user} page={'detail'}>
        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css"/>
        <div className="detailPage">
          <div className="swiper-container detailImgs">
            <div className="swiper-wrapper">
              {imgs}
            </div>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

          </div>
          <div className="detailAddrContainer">
             <div className="detailAddress">{prop.addr}</div>
             <span className="detailCity">{prop.city}, </span>
             <span className="detailprov">{prop.prov}, </span>
             <span className="detailzip">{prop.zip} </span>
             <div className="detailcrossstreet">{prop.crsst}</div>
          </div>

          <div className="detailPriceContainer detailBlock">
             <div className="detailprice">${prop.lp}</div>
             <div className="detailforsale">{prop.lpunt}</div>
          </div>

          <div id="favs"></div>
          <div className="detailIconContainer">
            <span className="detailtotalbedrooms detailRoom">
              <i className="fas fa-bed"></i>
              <b>{prop.tbdrms}</b>
            </span>
            <span className="detailbathroom detailRoom">
              <i className="fas fa-shower"></i>
              <b>{prop.bthrms}</b>
            </span>

            <span className="detailtotalparkingspace detailRoom">
              <i className="fas fa-parking"></i>
              <b>{prop.gr||0}</b>
            </span> 

            <span className="detailkitchen detailRoom">
              <i className="fas fa-blender"></i>
              <b>{prop.kch || 0}</b>
            </span>
          </div>


          <div className="detailtaxContainer detailBlock">
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
            <dt>Tax: </dt>
            <dd>${prop.tax}</dd>
          </dl>
          </div> 

          <div className="detaildetailContainer detailBlock">
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
          {(prop.geoq)?
          <dl className="detailstorey">
            <dt>Geoq:</dt>
            <dd>{prop.geoq}</dd>
          </dl>
          :null}
          {(prop.water)?
          <dl className="detailstorey">
            <dt>Water:</dt>
            <dd>{prop.water}</dd>
          </dl>
          :null}
          
          {(prop.feat.length > 0)?
          <dl className="detailstorey">
            <dt>Feature:</dt>
          <dd>{prop.feat.map((f)=>
        <span key={f} className="feat">{f}</span>
      )}</dd>
          </dl>
          :null}
          {(prop.age)?
          <dl className="detailstorey">
            <dt>Age:</dt>
            <dd>{prop.age}</dd>
          </dl>
          :null}
          {(prop.rltr)?
          <dl className="detailstorey">
            <dt>Realtor:</dt>
            <dd>{prop.rltr}</dd>
          </dl>
          :null}
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

          
          <div className="detaildetailContainer detailBlock">
          <div className="detailRms">
            <dl><dt>Room</dt><dd>Width x Height</dd></dl>
            {prop.rms.map((rm,idx)=>
              <dl key={idx}>
                <dt>{rm.t} <small>{rm.l}</small></dt>
                <dd>{rm.w}m x {rm.h}m</dd>
              </dl>
            )}
          </div>
          </div>

         
          <div className="detaildetailContainer detailBlock">
            <div className="text">{prop.m}</div>
          </div>
         
          
        </div>
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: initScript}} />
        <script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
        <script src="/dist/detail.js"/>
      </DefaultLayout>
    )
  }
}

module.exports = Detail;