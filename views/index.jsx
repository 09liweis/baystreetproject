var React = require('react');
var DefaultLayout = require('./layouts/default');

class HelloMessage extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <DefaultLayout title={this.props.title} user={user}>
        <div id="root"></div>
        <script src="/dist/index.js"/>
      </DefaultLayout>
    )
  }
}

module.exports = HelloMessage;