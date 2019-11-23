var React = require('react');
var DefaultLayout = require('./layouts/default');

class Stats extends React.Component {
  render() {
    const {title,stats,user} = this.props;
    let initScript = 'var stats = ' + JSON.stringify(stats).replace(/script/g, 'scr"+"ipt');
    return (
      <DefaultLayout title={title} page={'stats'} user={user}>
        <div id="root"></div>
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: initScript}} />
        <script src="./dist/stats.js"></script>
      </DefaultLayout>
    )
  }
}

module.exports = Stats;