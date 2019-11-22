var React = require('react');
var DefaultLayout = require('./layouts/default');

class Login extends React.Component {
  render() {
    let {title,user,props} = this.props;
    if (!user) {
      user = {};
    } else {
      user.props = props;
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

module.exports = Login;