var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    let pageStyleSheet;
    const {user} = this.props;
    if (this.props.page) {
      pageStyleSheet = <link rel="stylesheet" href={"/dist/"+this.props.page+".css"} type="text/css" />
    }
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <link rel="stylesheet" href="/dist/style.css" type="text/css" />
          {pageStyleSheet}
          <script src="https://kit.fontawesome.com/76b75c48c1.js" crossOrigin="anonymous"></script>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />
          <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>
        </head>
        <body>
          <header id="header">
            <h2 id="logo">Bay Street</h2>
            <div id="nav">
              <a className="navItem" href="/">Buy</a>
              <a className="navItem" href="/stats">Stats</a>
              {typeof user != 'undefined' && user._id?
              <a className="navItem" href="/dashboard">Dashboard</a>
              :<a className="navItem" href="/login">Login</a>}
            </div>
          </header>
          <main id="main">{this.props.children}</main>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;