var React = require('react');
var DefaultLayout = require('./layouts/default');

class Stats extends React.Component {
  render() {
    const {title} = this.props;
    return (
      <DefaultLayout title={title}>
        <div className="statsPage">
          
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Stats;