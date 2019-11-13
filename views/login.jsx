var React = require('react');
var DefaultLayout = require('./layouts/default');

class Stats extends React.Component {
  render() {
    const {title} = this.props;
    return (
      <DefaultLayout title={title}>
        <div className="loginPage">
          <h1>This is a login page</h1>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Stats;