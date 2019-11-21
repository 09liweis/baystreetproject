var React = require('react');
var DefaultLayout = require('./layouts/default');

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div id="root"></div>
        <script src="/dist/index.js"/>
      </DefaultLayout>
    )
  }
}

module.exports = HelloMessage;