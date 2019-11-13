var React = require('react');
var DefaultLayout = require('./layouts/default');

class Detail extends React.Component {
  render() {
    const {prop} = this.props;
    var imgs = prop.photos.map((img)=>
      <img className="img" src={img}/>
    );
    return (
      <DefaultLayout title={prop.addr}>
        <div className="detailPage">
          <div className="detailAddress">{prop.addr}</div>
          <div className="">
            <span className="detailCity">{prop.city}, </span>
            <span className="detailprov">{prop.prov}, </span>
            <span className="detailzip">{prop.zip} </span>
          </div>
          <div className="detailImgs">
            {imgs}
          </div>
          <div className="">
          <span className="detaillp">${prop.lp}</span>
          <span className="detailpunt">{prop.lpunt}</span>
          </div>
          <div className="detailunt">{prop.unt}</div>
          
          <div className="detailpstyl">{prop.pstyl}</div>
          <div className="detailtp">{prop.ltp}</div>
          <div className="detaillstd">List Date:{prop.lstd}</div>
          
          <div className="detailCmty">{prop.cmty}</div>
          <div className="detailbedroom">Bedroom: {prop.bdrms}</div>
          <div className="detailbathroom">Bathroom: {prop.bthrms}</div>
          <div className="detailtotalbedrooms">Total Bedrooms: {prop.tbdrms}</div>
          <div className="detailgarage">Garage: {prop.gr}</div>
          <div className="detailgeoq">Geoq: {prop.geoq}</div>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Detail;