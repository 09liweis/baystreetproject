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
          <div className="detailImgs">
            {imgs}
          </div>
          {prop.addr}
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Detail;