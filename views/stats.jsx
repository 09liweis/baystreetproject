var React = require('react');
var DefaultLayout = require('./layouts/default');

class Stats extends React.Component {
  render() {
    const {title} = this.props;
    return (
      <DefaultLayout title={title} page={'stats'}>
        <div className="statsPage">
          <h1 className="statsTitle">Stats Page</h1>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Stats;