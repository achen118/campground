import React, { Component } from 'react';
import Features from './camp_features';
import Feature from './Feature';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-and-features">
        <header className="App-header">
          <img 
            className="logo"
            src="https://djqvcbmmgpti5.cloudfront.net/assets/sharing/logo-color-f3e96d920f1e4063fdd079aea40eb47a.svg"
            alt="Hipcamp Logo" />
        </header>
        <section className="features">
          <h1 className="App-title">Camp Features</h1>
          <ul className="top-features-list">
            {
              Features.map((feature, idx) => (
                <Feature feature={ feature } key={ idx } />
              ))
            }
          </ul>
        </section>
        </div>
        <footer>
          <section className="footer-top">
            <img
              className="tent-image-footer" 
              src="https://djqvcbmmgpti5.cloudfront.net/assets/sharing/logo-tent-9191c74ffcf517ca0ac12c1f9036dbb0.png"
              alt="Hipcamp Tent" />
          </section>
          <section className="footer-bottom">
            <p>Created by Alice Chen</p>
          </section>
        </footer>
      </div>
    );
  }
}

export default App;
