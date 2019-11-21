var React = require('react');
var DefaultLayout = require('./layouts/default');

class Stats extends React.Component {
  render() {
    let {title,user} = this.props;
    if (!user) {
      user = {};
    }
    let initScript = 'var currentUser = ' + JSON.stringify(user).replace(/script/g, 'scr"+"ipt');
    return (
      <DefaultLayout title={title} user={user} page={'login'}>
        <div id="root" style={{'margin':'10px'}}>
        </div>
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: initScript}} />
        <script src="/dist/login.js"/>
      </DefaultLayout>
    )
  }
}

module.exports = Stats;