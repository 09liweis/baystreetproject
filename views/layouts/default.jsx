var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <link rel="stylesheet" href="/dist/style.css" type="text/css" />
          <link rel="stylesheet" href="/dist/detail.css" type="text/css" />
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
            </div>
          </header>
          <main>{this.props.children}</main>
          <footer>Footer</footer>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;